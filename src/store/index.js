import { configureStore } from "@reduxjs/toolkit";
import equipmentsSlice from "./reducers/equipments";

const store = configureStore({
  reducer: {
    equipments: equipmentsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
