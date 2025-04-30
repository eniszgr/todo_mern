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
    getData:()=>{

    }
  }
})

export const {getData} = allDataProcess.actions;
export default allDataProcess.reducer;