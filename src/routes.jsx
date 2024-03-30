import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import App from "./App";
import ShowEquipaments from "./Page/ShowEquipaments";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<App />} />
          <Route path="/showEquipments" element={<ShowEquipaments />} />
          <Route path="/addEquipment" element={<div>addEquipment</div>} />
          <Route
            path="/reserveEquipment"
            element={<div>reserveEquipment</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
