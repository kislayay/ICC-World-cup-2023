import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./Teamslice";
const Cricketstore = configureStore({
   reducer: {
       team: teamReducer,
   }
})

export default Cricketstore;