import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CompraContext } from "../contexto/CarritoContext";

export const Carrito = ({ id }) => {
  const { cart, setCart } = useContext(CompraContext);

  const isProductInCart = cart.some((item) => item.id === id);

  return (
    <button onClick={() => setCart(id)}>
      <FontAwesomeIcon
        icon={faShoppingCart}
        color={isProductInCart ? "red" : "gray"}
      />
    </button>
  );
};

Carrito.propTypes = {
  id: PropTypes.number.isRequired,
};
