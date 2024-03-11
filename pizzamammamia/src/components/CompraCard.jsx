import React, { useContext } from "react";
import { CompraContext } from "../contexto/CarritoContext";

const CartSelecion = () => {
  const { compra, setCompra } = useContext(CompraContext);

  const compraCarrito = compra.filter((item) => item.cart);

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {compraCarrito.length ? (
          compraCarrito.map((compra) => (
            <div
              key={compra.id}
              className="compra"
              style={{
                backgroundImage: `url(${compra.src?.large})`,
                cursor: "default",
              }}
            >
              <p className="title">{compra.alt}</p>
              <p>{compra.photographer}</p>
            </div>
          ))
        ) : (
          <p className="message">Carrito vacío :(</p>
        )}
      </div>
    </div>
  );
};

export default CartSelecion;
