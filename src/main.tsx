import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LogIn from "./components/login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LogIn />
  </StrictMode>
);
