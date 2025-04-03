import React from "react";
import List from "./List";
import Topbar from "./Topbar";
import AddModal from "./AddModal";


function Todo() {
  return (
    <>
      <div className="todo">
      <div className="wrapper">
        <Topbar/>
        <List/>
      </div>
    
    </div>
      <AddModal/>
    </>
  );
}

export default Todo;
