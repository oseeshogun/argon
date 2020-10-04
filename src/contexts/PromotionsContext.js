import React, { useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage.js';

const PromotionsContext = React.createContext();

export function usePromotions() {
    return useContext(PromotionsContext);
}

export function PromotionsProvider({ children }) {
  const [promotions, setPromotions] = useLocalStorage("promotions", []);
  const [currentUser, setCurrentUser] = useLocalStorage("user", null);

  const addPromotion = (data) => {
      console.log("New Promotion ", data);
    setPromotions([...promotions, data]);
    console.log("Updated promotions ", [...promotions, data]);
  };

  const setUser = (data) => {
      console.log("New User ", data);
      if (data === null) setCurrentUser(null);
      else setCurrentUser({"pseudo": data});
  };

  return (
    <PromotionsContext.Provider value={{ promotions, currentUser, addPromotion, setUser }}>
      {children}
    </PromotionsContext.Provider>
  );
}
