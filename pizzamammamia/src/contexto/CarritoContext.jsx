import React, { createContext, useEffect, useState } from "react";

export const CompraProvider = createContext();

export const ContextProvider = ({ children }) => {
  const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];
  const [compra, setCompra] = useState([]);
  const [cart, setCart] = useState(cartStorage);

  const fetchCompra = async () => {
    try {
      const compraJson = await fetch("/pizzas.json");
      const { compra } = await compraJson.json();
      setCompra(compra || []); 
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  };

  const doCompra = (id) => {
    if (!compra) return; // Evitar operaciones si compra es undefined

    const compraUpdated = compra.map((item) =>
      item.id === id ? { ...item, likes: item.likes + 1 } : item
    );
    setCompra(compraUpdated);

    const itemsInCart = compraUpdated.filter((item) => item.likes > 0);

    setCart(itemsInCart);
    localStorage.setItem("cart", JSON.stringify(itemsInCart));
  };

  useEffect(() => {
    fetchCompra();
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (JSON.stringify(cart) !== JSON.stringify(storedCart)) {
      setCart(storedCart);
    }
  }, [cart]);

  return (
    <CompraProvider.Provider
      value={{
        compra,
        setCompra,
        cart,
        setCart,
        doCompra,
      }}
    >
      {children}
    </CompraProvider.Provider>
  );
};
