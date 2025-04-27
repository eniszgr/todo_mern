import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {closeAddModal} from '../stores/modal.js'

function AddModal() {
  const {addModal} = useSelector((state=>state.modal));
  console.log(addModal);
  const dispatch = useDispatch();


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
            <form>
                <div className="content">
                    <div className="area">
                        <textarea type="text" required="required"></textarea>
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