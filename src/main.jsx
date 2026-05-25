import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import MisCursos from "./Paginas/Profesores/MisMaterias";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profesor" element={<MisCursos />} />
    </Routes>
  </BrowserRouter>
);

