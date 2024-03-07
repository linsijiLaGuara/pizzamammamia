// SeleccionarCard.js
import React, { useContext } from "react";
import { ContextProvider } from "../contexto/CarritoContext";
import { ComprarCard } from "../components/CompraCard";
export const SeleccionarCard = () => {
  const { cart } = useContext(ContextProvider);

  return (
    <div className="flex flex-wrap gap-5 justify-center my-5">
      {cart.map(({ id, description, image_url, tags }) => (
        <ComprarCard
          key={id}
          id={id}
          description={description}
          image_url={image_url}
          tags={tags}
        />
      ))}
    </div>
  );
};
