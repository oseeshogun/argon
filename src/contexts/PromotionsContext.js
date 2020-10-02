import React, { useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage.js';

const PromotionsContext = React.createContext();

export function usePromotions() {
    return useContext(PromotionsContext);
}

export function PromotionsProvider({ children }) {
  const [promotions, setPromotions] = useLocalStorage("promotions", []);

  const addPromotion = (data) => {
      console.log("New Promotion ", data);
    setPromotions([...promotions, data]);
    console.log("Updated promotions ", [...promotions, data]);
  };

  return (
    <PromotionsContext.Provider value={{ promotions, addPromotion }}>
      {children}
    </PromotionsContext.Provider>
  );
}
