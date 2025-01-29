import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './Reducers/Search'

const store = configureStore({
  reducer: {
    search: searchReducer, // Asegúrate de que el reducer esté registrado aquí
  },
});

export default store;
