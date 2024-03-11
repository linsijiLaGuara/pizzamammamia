// PizzaId.js
import React, { useContext } from "react";
import { CompraContext } from "../contexto/CarritoContext";
import "./PizzaId.css";

const PizzaId = () => {
  const { pizzaId } = useContext(CompraContext);

  return (
    <div className="cart-selection-container">
      <h1>Detalles de tu pizza</h1>
      {pizzaId ? (
        <div
          key={pizzaId.id}
          className="photo-card"
          style={{ backgroundImage: `url(${pizzaId.img})` }}
        >
          <div className="photo-details">
            <p className="title">{pizzaId.name}</p>
            <p className="description">{pizzaId.desc}</p>
            {/* ... (otros detalles que quieras mostrar) */}
          </div>
        </div>
      ) : (
        <p className="message-Id">
          Tu carrito está vacío: Recuerda seleccionar el carrito para ver tu detalle
        </p>
      )}
    </div>
  );
};

export default PizzaId;
