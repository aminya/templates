import "windi.css";
import { render } from "solid-js/web";

import App from "./App";

const root = document.getElementById("root")
if (root !== null) {
  // render App on the #root element
  render(() => <App />, root);
}
