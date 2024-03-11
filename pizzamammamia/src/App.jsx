import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./viesws/Home";
import { ContextProvider } from "./contexto/CarritoContext";
import CartSelecion from "./viesws/CartSelecion";
import PizzaId from "./viesws/PizzaId";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaId />} />
          <Route path="/Carrito" element={<CartSelecion />} />
        </Routes>
      </>
    </ContextProvider>
  );
}

export default App;
