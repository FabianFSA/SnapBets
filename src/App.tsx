import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import { Route, Routes } from "react-router-dom";

function SnapBetsApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default SnapBetsApp;
