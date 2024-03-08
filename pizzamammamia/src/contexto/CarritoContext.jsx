import React, { createContext, useEffect, useState } from "react";

export const CompraContext = createContext();

export const ContextProvider = ({ children }) => {
  const [compra, setCompra] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchCompra = async () => {
    try {
      const response = await fetch("/pizzas.json");
      const pizzasJson = await response.json();

      // Actualiza el estado de 'compra' con los datos obtenidos
      setCompra(pizzasJson);
    } catch (error) {
      console.error("Error al obtener datos de compra:", error);
    }
  };

  useEffect(() => {
    fetchCompra();
  }, []);

  return (
    <CompraContext.Provider
      value={{
        compra,
        setCompra,
        cart,
        setCart,
      }}
    >
      {children}
    </CompraContext.Provider>
  );
};
