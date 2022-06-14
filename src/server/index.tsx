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
import fs from "fs";
import path from "path";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {

  const store = createStore();

  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);

    const assets = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../../assets.json'), 'utf8')
    );

  Promise.all(promises)
    .then(() => {
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

  //     const initialData = store.getState();
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>W Combinator</title>
          </head>

          <body>
            <div id="root" >
                ${serialize(markup)}
            </div>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3005, () => {
  console.log("Server is listening");
});
