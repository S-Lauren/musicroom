import {  configureStore } from "@reduxjs/toolkit";
import tracksReducer  from "./trackSlice";

const store = configureStore( {
  reducer : {
    tracks: tracksReducer
  }
})
export default store; 