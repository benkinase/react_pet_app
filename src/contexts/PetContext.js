import React, { createContext, useReducer, useEffect } from "react";
import { petReducer } from "../reducers/petReducer";

export const PetContext = createContext();

const PetContextProvider = (props) => {
  const [pets, dispatch] = useReducer(petReducer, [], () => {
    const localData = localStorage.getItem("pets");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  return (
    <PetContext.Provider value={{ pets, dispatch }}>
      {props.children}
    </PetContext.Provider>
  );
};

export default PetContextProvider;
