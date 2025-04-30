import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {closeAddModal} from '../stores/modal.js'
import {addData} from '../stores/data.js'
import {useState} from 'react'
import axios from 'axios'



function AddModal() {
  const {addModal} = useSelector((state=>state.modal));
  //useSelector is a hook from redux. It access to global states in redux
  //we filter to our modal slice and get addModal value

  const dispatch = useDispatch();
  //useDispatch is a function from redux. It provides to use functions in redux
  
    const [textareaValue, setTextareaValue] = useState('');

  return (
    //is addModal is true, set className modal active, else set className modal 
    <div className={addModal ? "modal active": "modal"}>
        <div className="wrapper">
            <div className="topbar">
                <h3 className="mark">
                    Todo App
                </h3>
                <button className="closeButton" onClick={()=>dispatch(closeAddModal())} >
                x
                </button>
            </div>
            <form onSubmit={async (e)=>{
                e.preventDefault();                             //prevent to direct to another page
                const formData = {text: textareaValue};         //get value from textarea
                let response = await axios.post('/add', formData);
                response = response.data;
                
                if(response.type){
                   dispatch(addData(response.message));         //if response is true, add data to redux store
                   setTextareaValue('');                        //clear textarea value   
                   dispatch(closeAddModal());                   //close modal
                }
                
                }}>                   
                <div className="content">
                    <div className="area">
                        <textarea type="text" required="required"
                        value={textareaValue} onChange={(e)=>{setTextareaValue(e.target.value)}}
                        ></textarea>
                        <span>Add New List</span>
                    </div>
                </div>
                <div className="buttons">
                    <button type='button' onClick={()=>dispatch(closeAddModal())} >Cancel</button>
                    <button type='submit'>Add</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default AddModal