import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import { Route, Routes } from "react-router-dom";
import SubmitLogIn from "./pages/SubmitLogIn";

function SnapBetsApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/submitLogIn" element={<SubmitLogIn />} />
    </Routes>
  );
}

export default SnapBetsApp;
