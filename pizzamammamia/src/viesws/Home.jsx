import React from "react";
import { ComprarCard } from "../components/CompraCard";
import { useNavigate } from "react-router-dom";

const pizzas = [
  // Aquí deberías tener tus datos de pizzas
  {
    id: 1,
    description: "Pizza Margherita",
    image_url: "url_de_la_imagen",
    tags: ["Tomato", "Mozzarella", "Basil"],
  },
  // ... otras pizzas
];

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToCarrito = () => {
    navigate("/Carrito");
  };

  return (
    <div className="flex flex-wrap gap-5 justify-center my-5">
      {pizzas.map((pizza) => (
        <ComprarCard
          key={pizza.id}
          id={pizza.id}
          description={pizza.description}
          image_url={pizza.image_url}
          tags={pizza.tags}
        />
      ))}
      <button onClick={handleNavigateToCarrito}>Ir al Carrito</button>
    </div>
  );
};

export default Home;
