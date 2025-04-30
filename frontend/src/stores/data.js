import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const response = await axios.post('/');
const responseData = response.data.message;

const initialState = {
    data: responseData
}
const allDataProcess = createSlice({
  name:'allDataProcess',
  initialState,
  reducers:{
    addData:(state,{payload})=>{              //add data for frontend
      state.data= [...state.data, payload];
    }
  }
})

export const {addData} = allDataProcess.actions;
export default allDataProcess.reducer;