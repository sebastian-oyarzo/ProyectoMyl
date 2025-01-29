import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  tipo: "Todos",
  edicion: "Espada_Sagrada",
  formato: "primerbloque",
  page: 1
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setTipo: (state, action) => {
      state.tipo = action.payload;
    },
    setEdicion: (state, action) => {
      state.edicion = action.payload;
    },
    setFormato: (state, action) => {
      state.formato = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    }
    // handleSearch: (state, action) => {
    //   const navigate = action.payload;
    //   const queryParams = new URLSearchParams({
    //     tipo: state.tipo,
    //     edicion: state.edicion,
    //     formato: state.formato,
    //     page: state.page
    //   }).toString();
    //   console.log("Datos para filtrar: ", queryParams);
    //   navigate(`/resultados?${queryParams}`);
    // }
  }
});

export const { setTipo, setEdicion, setFormato, setPage, handleSearch } = searchSlice.actions;
export default searchSlice.reducer;

