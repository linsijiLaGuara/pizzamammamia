import React, { useContext } from "react";
import { CompraContext } from "../contexto/CarritoContext";
import "./CartSeleccion.css";

const CartSelecion = () => {
  const { compra } = useContext(CompraContext);

  const compraCarrito = compra.filter((item) => item.cart);

  return (
    <>
      <h1>Tus Fotos Favoritas</h1>
      <div className="cart-selection-container">
        <div className="photo-gallery">
          {compraCarrito.length ? (
            compraCarrito.map((compra) => (
              <div
                key={compra.id}
                className="photo-card"
                style={{
                  backgroundImage: `url(${compra.img})`,
                  cursor: "default",
                }}
              >
                <div className="photo-details">
                  <p className="title">{compra.name}</p>
                  <p className="description">{compra.desc}</p>
              
                  <p className="photographer"> Precio : {compra.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="message">Tu carrito está vacío :(</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSelecion;
