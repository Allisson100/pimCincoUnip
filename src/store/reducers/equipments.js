import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import icons from "../../assets/icons";

const initialState = [
  {
    id: uuidv4(),
    name: "Projetor",
    icon: icons[0].icon,
    category: "eletrônico",
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Tela de Projeção",
    icon: icons[1].icon,
    category: "eletrônico",
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Material de Ciência",
    icon: icons[2].icon,
    category: "ciência",
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "DVD",
    icon: icons[3].icon,
    category: "eletrônico",
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Notebook",
    icon: icons[4].icon,
    category: "eletrônico",
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Microfone",
    icon: icons[5].icon,
    category: "eletrônico",
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Caixa de Som",
    icon: icons[6].icon,
    category: "eletrônico",
    reserve: [],
  },
  {
    id: uuidv4(),
    name: "Televisão",
    icon: icons[7].icon,
    category: "eletrônico",
    reserve: [],
  },
];

const equipmentsSlice = createSlice({
  name: "equipments",
  initialState: initialState,
  reducers: {
    addEquipment: (state, { payload }) => {
      state.push(payload);
    },
    reserveEquipment: (state, { payload }) => {
      const { equipmentId } = payload;
      const equipmentIndex = state.findIndex(
        (equipment) => equipment.id === equipmentId
      );

      if (equipmentIndex !== -1) {
        state[equipmentIndex].reserve.push(payload);
      }

      return state;
    },
  },
});

export default equipmentsSlice.reducer;

export const { addEquipment, reserveEquipment } = equipmentsSlice.actions;
