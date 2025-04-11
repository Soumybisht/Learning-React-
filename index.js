import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"grandchild"},"I am the grand child")));
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);