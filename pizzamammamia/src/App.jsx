import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./viesws/Home";
import { ContextProvider } from "./contexto/CarritoContext";
import CartSelecion from "./viesws/Cart";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrito" element={<CartSelecion />} />
          <Route path="/Carrito/:id" element={<CartSelecion />} />
        </Routes>
      </>
    </ContextProvider>
  );
}

export default App;
