import React from 'react'
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

function ListItem({item}) {
  console.log(item)
  return (
    <div className="listItem">
        <section type="text" placeholder='Your list item...' >{item.text}</section>
        <div className="buttons">
        <button className="editButton"><FiEdit /></button>
        <button className="deleteButton"><FaRegTrashAlt /></button>
        </div>
      </div>
  )
}

export default ListItem