import React from "react";
import List from "./List";
import Topbar from "./Topbar";

function Todo() {
  return (
    <div className="todo">
      <div className="wrapper">
        <Topbar/>
        <List/>
      </div>
    </div>
  );
}

export default Todo;
