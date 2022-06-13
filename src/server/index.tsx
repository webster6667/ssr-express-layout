import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
// import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
// import routes from "../shared/routes";
// import configureStore from "../shared/configureStore";
import App from "@app";
// import "source-map-support/register";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {

  const markup = renderToString(<App />);

  // const store = configureStore();
  //
  // const promises = routes.reduce((acc, route) => {
  //   if (matchPath(req.url, route) && route.component && route.component.initialAction) {
  //     acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
  //   }
  //   return acc;
  // }, []);

  // Promise.all(promises)
  //   .then(() => {
  //     const context = {};
  //     const markup = renderToString(
  //       <Provider store={store}>
  //         <StaticRouter location={req.url} context={context}>
  //           <App />
  //         </StaticRouter>
  //       </Provider>
  //     );
  //
  //     const initialData = store.getState();
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>W Combinator</title>
          </head>

          <body>
            ${markup}
          </body>
        </html>
      `);
    // })
    // .catch(next);
});

app.listen(process.env.PORT || 3005, () => {
  console.log("Server is listening");
});
