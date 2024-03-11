import { useContext } from "react";
import { CompraContext } from "../contexto/CarritoContext";
import { Container, Row, Card, Button } from "react-bootstrap";
import Carrito from "./IcoCarrito";

const Productos = () => {
  const { compra, setCompra, cart, setCart, setSelectedProducts } =
    useContext(CompraContext);

  const handleCart = (id) => {
    const updatedCompra = compra.map((item) =>
      item.id === id ? { ...item, cart: !item.cart } : item
    );

    setCompra(updatedCompra);

    const updatedCart = cart.includes(id)
      ? cart.filter((cartId) => cartId !== id)
      : [...cart, id];

    setCart(updatedCart);

    const selectedProduct = compra.find((item) => item.id === id);
    setSelectedProducts((prev) => [...prev, selectedProduct]);
  };

  return (
    <Container fluid>
      <Row className="tarjeta">
        {compra.map((item) => (
          <Card key={item.id} className="mb-2" style={{ width: "20rem" }}>
            <div className="card-img-container">
              <Card.Img
                variant="top"
                src={item.img}
                alt={item.name}
                className="card-img"
              />
            </div>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <Card.Text>Ingredients: {item.ingredients.join(", ")}</Card.Text>
              <Card.Text>Price: {item.price}</Card.Text>
              <div onClick={() => handleCart(item.id)}>
                <Carrito id={item.id} filled={cart.includes(item.id)} />
                {cart.includes(item.id) ? " Remove from Cart" : " Add to Cart"}
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
