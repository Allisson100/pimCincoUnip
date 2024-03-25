import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    name: "DataShow",
    icon: "teste",
    reserve: ["25/03/2024-13h00", "25/03/2024-13h00", "25/03/2024-13h00"],
  },
  {
    id: uuidv4(),
    name: "Tv com vcr",
    icon: "teste",
    reserve: ["25/03/2024-13h00", "25/03/2024-13h00", "25/03/2024-13h00"],
  },
];

const equipmentsSlice = createSlice({
  name: "equipments",
  initialState: initialState,
  reducers: {
    addEquipment: (state, { payload }) => {
      state.push(...payload);
    },
  },
});

export default equipmentsSlice.reducer;

export const { addEquipment } = equipmentsSlice.actions;
