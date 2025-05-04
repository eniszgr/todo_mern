import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";


function List() {
 const { data } = useSelector((state) => state.allDataProcess);
 
  return ( 
    <div className="list">
      {data.map(item =>(
        <ListItem key={`${item._id}-${item._id}`} item={item}/>
        //if we use just item._id, when it's updated, react will not re-render the component. So we add another key to make it unique.
        //virtual dom will check the key and if it's different, it will re-render the component.
      ))} 
    </div>
  );
}

export default List;
