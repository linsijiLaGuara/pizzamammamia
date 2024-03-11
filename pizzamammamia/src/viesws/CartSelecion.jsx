import React, { useContext, useEffect, useState } from "react";
import { CompraContext } from "../contexto/CarritoContext";
import "./CartSeleccion.css";

const CartSeleccion = () => {
  const { compra, cart, setCart } = useContext(CompraContext);
  const [total, setTotal] = useState(0);

  const compraCarrito = compra.filter((item) => cart.includes(item.id));

  const handleQuantityChange = (productId, newQuantity) => {
    newQuantity = Math.max(newQuantity, 0);

    const updatedCart = cart.map((productIdInCart) =>
      productIdInCart === productId
        ? {
            ...compra.find((item) => item.id === productId),
            quantity: newQuantity,
          }
        : productIdInCart
    );

    setCart(updatedCart);
  };

  useEffect(() => {
    // Calcula el total sumando el precio de cada elemento en compraCarrito
    const newTotal = compraCarrito.reduce((acc, item) => {
      if (item.price && item.quantity) {
        return acc + item.price * item.quantity;
      }
      return acc;
    }, 0);

    setTotal(newTotal);
  }, [compraCarrito, setTotal, cart]);

  return (
    <>
      <h1>Tus Productos</h1>
      <div className="cart-selection-container">
        <div className="photo-gallery">
          {compraCarrito.length ? (
            compraCarrito.map((compraItem) => (
              <div
                key={compraItem.id}
                className="photo-card"
                style={{
                  backgroundImage: `url(${compraItem.img})`,
                  cursor: "default",
                }}
              >
                <div className="photo-details">
                  <p className="title">{compraItem.name}</p>
                  <p className="description">{compraItem.desc}</p>
                  <p className="photographer">Precio: ${compraItem.price}</p>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        handleQuantityChange(
                          compraItem.id,
                          compraItem.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                    <span className="quantity">{compraItem.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        handleQuantityChange(
                          compraItem.id,
                          compraItem.quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="message">Tu carrito está vacío :(</p>
          )}
          <p>Total a Pagar: ${total}</p>
        </div>
      </div>
    </>
  );
};

export default CartSeleccion;
