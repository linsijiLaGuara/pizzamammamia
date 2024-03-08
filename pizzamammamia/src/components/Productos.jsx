import React, { useContext } from "react";
import { CompraContext } from "../contexto/CarritoContext";
import { Card } from "react-bootstrap";
import Carrito from "./IcoCarrito";

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

  return (
    <div className="p-3 gallery grid-columns-4">
      {compra.map((item) => (
        <Card key={item.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={item.img} alt={item.name} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
            <Card.Text>Ingredients: {item.ingredients.join(", ")}</Card.Text>
            <Card.Text>Price: {item.price}</Card.Text>
            <div
              onClick={() => handleCart(item.id)}
              style={{
                fontSize: "12px",
                color: cart.includes(item.id) ? "red" : "black",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <Carrito id={item.id} filled={cart.includes(item.id)} />
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Productos;
