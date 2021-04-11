import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

/* eslint-disable no-console */
console.log("      TECH CLUB OF JyothyIT     ");
console.log("If you want to be a part of Website Team, Reach out to us at, IG: @techclubjit and Mention that you found this in console :)");
console.log("We would be really glad to have you as part of our team :)");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
