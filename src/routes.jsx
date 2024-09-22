import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hooks from "./pages/hooks";
import UseContext from "./pages/useContext";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="/usecontext" element={<UseContext />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
