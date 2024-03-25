import { configureStore } from "@reduxjs/toolkit";
import equipmentsSlice from "./reducers/equipments";

const store = configureStore({
  reducer: {
    equipments: equipmentsSlice,
  },
});

export default store;
