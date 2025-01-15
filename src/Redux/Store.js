import { configureStore } from "@reduxjs/toolkit";
import ejemploReducer from "./Reducers/Search"; // Importar el reducer generado en el slice

const store = configureStore({
  reducer: {
    ejemplo: ejemploReducer, // Registrar el reducer en el estado global
  }
});

export default store;
