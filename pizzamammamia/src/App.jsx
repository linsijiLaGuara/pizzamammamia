import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./viesws/Home";
import { ContextProvider } from "./contexto/CarritoContext";
import { SeleccionarCard } from "./viesws/SelecionarCard";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrito" element={<SeleccionarCard />} />
          <Route path="/Carrito/:id" element={<SeleccionarCard />} />
        </Routes>
      </>
    </ContextProvider>
  );
}

export default App;
