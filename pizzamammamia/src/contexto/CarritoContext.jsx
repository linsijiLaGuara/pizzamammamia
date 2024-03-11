import React, { createContext, useEffect, useState } from "react";

export const CompraContext = createContext();

export const ContextProvider = ({ children }) => {
  const [compra, setCompra] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const fetchCompra = async () => {
    try {
      const response = await fetch("/pizzas.json");
      const pizzasJson = await response.json();

    
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
      selectedProducts,
      setSelectedProducts,
    }}
    >
      {children}
    </CompraContext.Provider>
  );
};
