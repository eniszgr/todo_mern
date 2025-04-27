import React from "react";
import { useDispatch } from "react-redux";
import { openAddModal } from "../stores/modal";

function Topbar() {
  const dispatch = useDispatch(); //dispatch is necessary to use redux functions
  return (
    <div className="topbar">
      <h3 className="mark">ToDo App</h3>
      <div className="searchEngine">
        <input type="text" placeholder="Search in your list" required="required"/>
      </div>
      <div className="addButton">
        <button onClick={()=> dispatch(openAddModal())}>+</button>
      </div>
    </div>
  );
}

export default Topbar;
