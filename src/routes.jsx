import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import App from "./App";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
