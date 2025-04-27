import {createSlice} from "@reduxjs/toolkit"

//setup settings
const initialState = {
    addModal: false,
}
//slice(variable) definition
const modal = createSlice({                 
    name:"modal",
    initialState,                   //import initialState from above    
    reducers:{                      //actions
        openAddModal:(state)=>{
            state.addModal = true
        },
        closeAddModal:(state)=>{
            state.addModal = false
        }
    }
})

export const {openAddModal,closeAddModal} = modal.actions;
export default modal.reducer;