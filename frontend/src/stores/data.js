import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const response = await axios.post("/");
const responseData = response.data.message;

const initialState = {
  data: responseData,
};
const allDataProcess = createSlice({
  name: "allDataProcess",
  initialState, //allDataProcess includes {data} which is identified by initialState  & used in List.jsx
  reducers: {
    addData: (state, { payload }) => {
      //add data for frontend
      state.data = [...state.data, payload]; //payload is new item
    },
    deleteData: (state, { payload }) => {
      state.data = state.data.filter((item) => item._id !== payload._id); //filter out the item that is deleted
    },
    editData: (state, { payload }) => {
      let newData = state.data.map((item) =>
        item._id === payload._id ? payload : item
      );
      state.data = newData;
    },
    searchData: (state, { payload }) => {
      let newData = responseData.filter((item) =>
        item.text.toLowerCase().includes(payload.toLowerCase())
      );
      state.data = newData;
    },
  },
});

export const { addData, deleteData, editData, searchData } =
  allDataProcess.actions;
export default allDataProcess.reducer;
