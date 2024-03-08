import React, { useContext } from "react";
import { CompraContext } from "../contexto/CarritoContext";
import { Card } from "react-bootstrap";
import { Carrito } from "./IcoCarrito";

const Productos = () => {
  const { compra, setCompra, cart, setCart } = useContext(CompraContext);

  const handleCart = (id) => {
    const updatedCompra = compra.map((item) =>
      item.id === id ? { ...item, cart: !item.cart } : item
    );

    setCompra(updatedCompra);

    const updatedCart = cart.includes(id)
      ? cart.filter((cartId) => cartId !== id)
      : [...cart, id];

    setCart(updatedCart);
  };

  const renderCompra = () => {
    return compra.map((item) => (
      <div
        key={item.id}
        className="compra"
        style={{
          backgroundImage:
            item.src && item.src.large ? `url(${item.src.large})` : "",
          cursor: "default",
        }}
      >
        <Card>
          <Card.Body>
            <Card.Title>{item.alt}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <button
              onClick={() => handleCart(item.id)}
              style={{
                fontSize: "12px",
                color: cart.includes(item.id) ? "red" : "black",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <Carrito filled={cart.includes(item.id)} />
            </button>
          </Card.Footer>
          <br />
          <span>{item.photographer}</span>
        </Card>
      </div>
    ));
  };

  return (
    <div className="App">
      <div className="p-3 gallery grid-columns-4">{renderCompra()}</div>
    </div>
  );
};

export default Productos;
