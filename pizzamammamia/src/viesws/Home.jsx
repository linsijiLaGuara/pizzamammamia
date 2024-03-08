import React from "react";
import Productos from "../components/Productos";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToCarrito = () => {
    navigate("/Carrito");
  };

  return (
    <>
      <Productos />
      <button onClick={handleNavigateToCarrito}>Ir al Carrito</button>
    </>
  );
};

export default Home;
