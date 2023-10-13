import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "../Slices/Teamslice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, teamReducer)

  export const Cricketstore = configureStore({
   
    reducer: persistedReducer,
  
 })



 export const persistor = persistStore(Cricketstore)