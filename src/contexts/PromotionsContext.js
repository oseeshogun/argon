import React, { useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage.js';

const PromotionsContext = React.createContext();

export function usePromotions() {
    return useContext(PromotionsContext);
}

export function PromotionsProvider({ children }) {
  const [promotions, setPromotions] = useLocalStorage("promotions", [
    {year: "2010", number: 37, description: "Première promotion de l'université."},
    {year: "2011", number: 40, description: "Deuxième promotion de l'université."},
    {year: "2012", number: 45, description: "Troisième promotion de l'université, les meilleurs mathéticiens."},
    {year: "2013", number: 50, description: "Quatrième promotion de l'université."},
    {year: "2014", number: 57, description: "Cinquime promotion de l'université, les génies."},
  ]);
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
