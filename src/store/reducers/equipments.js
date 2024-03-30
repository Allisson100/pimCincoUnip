import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import icons from "../../assets/icons";

const initialState = [
  {
    id: uuidv4(),
    name: "Projetor",
    icon: icons[0].icon,
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Tela de Projeção",
    icon: icons[1].icon,
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Material de Ciência",
    icon: icons[2].icon,
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "DVD",
    icon: icons[3].icon,
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Notebook",
    icon: icons[4].icon,
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Microfone",
    icon: icons[5].icon,
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Caixa de Som",
    icon: icons[6].icon,
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Televisão",
    icon: icons[7].icon,
    reserve: [],
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
