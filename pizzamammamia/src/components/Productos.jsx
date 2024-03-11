import { useContext } from "react";
import { CompraContext } from "../contexto/CarritoContext";
import { Container, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Carrito from "./IcoCarrito";
import "./Productos.css";

const Productos = () => {
  const navigate = useNavigate();
  const {
    compra,
    setCompra,
    cart,
    setCart,
    setSelectedProducts,
    setPizzaId, 
  } = useContext(CompraContext);

  const handleViewDetail = (id) => {
    const selectedProduct = compra.find((item) => item.id === id);
    setPizzaId(selectedProduct); 
    navigate(`/pizza/${id}`);
  };
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
              <Card.Title className="Title">{item.name}</Card.Title>
              <Card.Text>Ingredientes: {item.ingredients.join(", ")}</Card.Text>
              <Card.Text>$ {item.price}</Card.Text>
              <div className="acciones">
                <div className="detalle-btn">
                  <button
                    type="button"
                    className="btn btn-detalles"
                    onClick={() => handleViewDetail(item.id)}
                  >
                    Ver detalles
                  </button>
                </div>
                <div
                  onClick={() => handleCart(item.id)}
                  className="carrito-container"
                >
                  <Carrito id={item.id} filled={cart.includes(item.id)} />
                  <span className="carrito-text">
                    {cart.includes(item.id)
                      ? " Quitar del Carrito"
                      : " Agregar al Carrito"}
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
