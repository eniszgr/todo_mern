import React from 'react'
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

function ListItem() {
  return (
    <div className="listItem">
        <input type="text" placeholder='Your list item...' />
        <div className="buttons">
        <button className="editButton"><FiEdit /></button>
        <button className="deleteButton"><FaRegTrashAlt /></button>
        </div>
      </div>
  )
}

export default ListItem