import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CompraProvider } from "../contexto/CarritoContext";

export const Carrito = ({ id }) => {
  const { doCompra, cart } = useContext(CompraProvider);

  const isProductInCart = cart.some((item) => item.id === id);

  return (
    <button onClick={() => doCompra(id)}>
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
