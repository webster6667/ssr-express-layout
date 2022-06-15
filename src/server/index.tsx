import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import {routes} from "@routes";
import {App} from "@app";
import {createStore} from "@store";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  
  const store = createStore(),
        dispatch = store.dispatch,
        activeRoute = routes.find((route) => matchPath(req.url, route)) || {},
        promise = activeRoute?.component.getInitialProps ? dispatch(activeRoute?.component.getInitialProps()) : Promise.resolve()
  
    promise.then(() => {
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context} >
            <App />
          </StaticRouter>
        </Provider>
      );

      const initialData = store.getState();
      
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR</title>
            <link rel="shortcut icon" href="/favicon.ico">
            <link rel="stylesheet" href="/styles.css" >
            <script src="/client.js" defer></script>
            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>
          <body>
            <div id="root" >${markup}</div>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3005, () => {
  console.log("Server is listening");
});
