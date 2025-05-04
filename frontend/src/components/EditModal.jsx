import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { closeEditModal } from "../stores/modal.js";
import { editData } from "../stores/data.js";
import { useState, useEffect } from "react";
import axios from "axios";

function EditModal() {
  const { editModal,singleData } = useSelector((state) => state.modal);
  //useSelector is a hook from redux. It access to global states in redux
  //we filter to our modal slice and get EditModal value

  const dispatch = useDispatch();
  //useDispatch is a function from redux. It provides to use functions in redux

  const [textareaValue, setTextareaValue] = useState("");
  //it's o hook for get text area value
  


  useEffect(() => {
   if(singleData.text){
    setTextareaValue(singleData.text); //set textarea value to singleData.text
   }
  }, [singleData]); //useEffect is a hook that runs when the component mounts or when the singleData changes

  return (
    //is EditModal is true, set className modal active, else set className modal
    <div className={editModal ? "modal active" : "modal"}>
      <div className="wrapper">
        <div className="topbar">
          <h3 className="mark">Todo App</h3>
          <button
            className="closeButton"
            onClick={() => dispatch(closeEditModal())}
          >
            x
          </button>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault(); //prevent to direct to another page
            const formData = { id:singleData._id, text: textareaValue }; //get value from textarea & defined as text on schema
            let response = await axios.post("/edit", formData);
            response = response.data;

            if (response.type) {
              dispatch(editData(response.message)); //if response is true, add data to redux store
              setTextareaValue(""); //clear textarea value
              dispatch(closeEditModal()); //close modal
              window.location.reload();
            }
          }}
        >
          <div className="content">
            <div className="area">
              <textarea
                type="text"
                required="required"
                value={textareaValue}
                onChange={(e) => {
                  setTextareaValue(e.target.value);
                }}
              ></textarea>
              <span>Update New List</span>
            </div>
          </div>
          <div className="buttons">
            <button type="button" onClick={() => dispatch(closeEditModal())}>
              Cancel
            </button>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
