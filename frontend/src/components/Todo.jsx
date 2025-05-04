import React from "react";
import List from "./List";
import Topbar from "./Topbar";
import AddModal from "./AddModal";
import EditModal from "./EditModal";


function Todo() {
 
  return (
    <>
      <div className="todo">
        <div className="wrapper">
          <Topbar />
          <List />
        </div>
      </div>

      <AddModal />
      <EditModal />
    </>
  );
}

export default Todo;
