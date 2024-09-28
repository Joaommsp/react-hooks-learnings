import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hooks from "./pages/hooks";
import UseContext from "./pages/useContext";
import UseEffect from "./pages/useEffect";
import UseRef from "./pages/useRef";
import UseLayoutEffect from "./pages/useLayoutEffect";
import UseReduce from "./pages/useReduce";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/uselayouteffect" element={<UseLayoutEffect />} />
        <Route path="/usereduce" element={<UseReduce />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
