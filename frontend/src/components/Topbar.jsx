import React from "react";
import { useDispatch } from "react-redux";
import { openAddModal } from "../stores/modal";
import { useState } from "react";
import {searchData} from "../stores/data.js"

function Topbar() {
  const dispatch = useDispatch(); //dispatch is necessary to use redux functions
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div className="topbar">
      <h3 className="mark">ToDo App</h3>
      <div className="searchEngine">
        <input type="text" placeholder="Search in your list" required="required" 
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value); //set input value to inputValue state
          dispatch(searchData(e.target.value)); //dispatch searchData function with input value
        }}

        />
      </div>
      <div className="addButton">
        <button onClick={()=> dispatch(openAddModal())}>+</button>
      </div>
    </div>
  );
}

export default Topbar;
