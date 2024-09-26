import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hooks from "./pages/hooks";
import UseContext from "./pages/useContext";
import UseEffect from "./pages/useEffect";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="/useeffect" element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
