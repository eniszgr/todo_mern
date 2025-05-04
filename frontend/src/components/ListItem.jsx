import React from 'react'
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios';
import { deleteData } from '../stores/data';
import { useDispatch } from 'react-redux';
import { openEditModal } from '../stores/modal';

function ListItem({item}) {
  const  dispatch = useDispatch();


  return (
    <div className="listItem">
        <section type="text" placeholder='Your list item...' >
          {item.text.length > 112 ? item.text.slice(0, 112) + "..." : item.text}
        </section>
        <div className="buttons">
        <button className="editButton"
          onClick={()=>{dispatch(openEditModal(item))}}
        ><FiEdit /></button>
        <button className="deleteButton" onClick={async ()=>{
          let formData = {id:item._id};
          
          
          let response = await axios.post('/delete',formData);
          response = response.data;
          

          if(response.type){
           dispatch(deleteData(formData)); //delete data fromstore
           window.location.reload(); // refresh
          }
          


        }}><FaRegTrashAlt /></button>
        </div>
       
      </div>
  )

  
}

export default ListItem