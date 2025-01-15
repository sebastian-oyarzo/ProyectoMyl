import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: 'ejemplo',
  initialState: { number: 0 },
  reducers: {
    ejemplo: (state) => {
      console.log("ejemplo ejecutado");
    }
  }
});

export const { ejemplo } = exampleSlice.actions; // Acción generada
export default exampleSlice.reducer; // Reducer generado
