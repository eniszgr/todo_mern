//base
import {configureStore} from '@reduxjs/toolkit';
import modal from './modal' //represent modal.reducers
import allDataProcess from './data.js'

const store = configureStore({
  reducer: {
    modal,
    allDataProcess,
  },

})

export default store;