import React from 'react'
import {useState} from 'react'

function AddModal() {
    const [addModal, setAddModal] = useState(true)


  return (
    <div className={addModal ? "modal active": "modal"}>
        <div className="wrapper">
            <div className="topbar">
                <h3 className="mark">
                    Todo App
                </h3>
                <button className="closeButton" onClick={()=>setAddModal(false)}>
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
                    <button type='button' onClick={()=>setAddModal(false)}>Cancel</button>
                    <button type='submit'>Add</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default AddModal