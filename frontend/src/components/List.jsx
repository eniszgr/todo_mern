import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

function List() {
 const { data } = useSelector((state) => state.allDataProcess);
 
  return ( 
    <div className="list">
      {data.map(item =>(
        <ListItem key={item._id} item={item}/>
      ))} 
    </div>
  );
}

export default List;
