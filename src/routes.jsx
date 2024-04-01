import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import App from "./App";
import ShowEquipaments from "./Page/ShowEquipaments";
import AddEquipment from "./Page/AddEquipment";
import ReserveEquipment from "./Page/ReserveEquipment";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<App />} />
          <Route path="/showEquipments" element={<ShowEquipaments />} />
          <Route path="/addEquipment" element={<AddEquipment />} />
          <Route path="/reserveEquipment" element={<ReserveEquipment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
