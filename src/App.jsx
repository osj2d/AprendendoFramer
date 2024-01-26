import React from "react";
import "./App.css";
import Quadrado from "./components/Quadrado/Quadrado";
import Circulo from "./components/Circulo/Circulo";
import Triangulo from "./components/Triangulo/Triangulo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MenuL from "./components/menu/MenuL";
import SvgIcon from "./components/svgIcons/svgIcon";

function App() {
  return (
    <>
      <div className="mainApp">
        <BrowserRouter>
          <MenuL />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="quadrado" element={<Quadrado />} />
            <Route path="circulo" element={<Circulo />} />
            <Route path="triangulo" element={<Triangulo />} />
            <Route path="svgIcon" element={<SvgIcon />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
