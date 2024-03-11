import React from "react";
import Productos from "../components/Productos";
import { useNavigate } from "react-router-dom";
import './Home.css'
const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToCarrito = () => {
    navigate("/Carrito");
  };

  return (
    <>
      <div className="banner">
        <h1>Bienvenido a nuestra Pizzería</h1>
        <p>Descubre nuestras deliciosas pizzas artesanales</p>
      </div>
      <Productos />
      <button onClick={handleNavigateToCarrito}>Ir al Carrito</button>
      
    </>
  );
};

export default Home;
