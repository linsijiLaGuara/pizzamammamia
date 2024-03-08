import { useContext } from "react";
import { CompraContext } from "../contexto/CarritoContext";

const CartSelecion = () => {
  const { compra } = useContext(CompraContext);

  const favoritePhotos = compra.filter((compra) => compra.cart);

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.length ? (
          favoritePhotos.map((compra) => (
            <div
              key={compra.id}
              className="photo"
              style={{
                backgroundImage: `url(${compra.src.large})`,
                cursor: "default",
              }}
            >
              <p className="title">{compra.alt}</p>
              <p>{compra.photographer}</p>
            </div>
          ))
        ) : (
          <p className="message">Carrito vacio :(</p>
        )}
      </div>
    </div>
  );
};

export default CartSelecion;
