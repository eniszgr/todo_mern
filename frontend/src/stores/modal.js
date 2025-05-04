import {createSlice} from "@reduxjs/toolkit"
import EditModal from "../components/EditModal"
//modal is a name of page, if there are multiple slices, we can collect under the same name

//setup settings
const initialState = {
    addModal: false,
    editModal: false,
    singleData:{}
}

//slice(variable) definition
const modal = createSlice({                 
    name:"modal",
    initialState,                   //import initialState from above / definition 
    reducers:{                      //actions
        openAddModal:(state)=>{
            state.addModal = true
        },
        closeAddModal:(state)=>{
            state.addModal = false
        },
        openEditModal:(state,{payload})=>{
            state.singleData= payload   //like defining singleData
            state.editModal = true
        },
        closeEditModal:(state)=>{
            state.editModal = false
        }
    }
})

export const {openAddModal,closeAddModal,openEditModal,closeEditModal} = modal.actions;
export default modal.reducer;