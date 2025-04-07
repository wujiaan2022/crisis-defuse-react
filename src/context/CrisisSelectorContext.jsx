// src/context/CrisisSelectorContext.js

import { createContext, useContext } from "react";
import useFetchScripturesByCrisis from "../hooks/useFetchScripturesByCrisis";

const CrisisSelectorContext = createContext();

export const CrisisSelectorProvider = ({ children, backendURL }) => {
  const CrisisSelectorState = useFetchScripturesByCrisis(backendURL);

  return (
    <CrisisSelectorContext.Provider value={CrisisSelectorState}>
      {children}
    </CrisisSelectorContext.Provider>
  );
};

// This is your custom hook to access the context
export const useCrisisSelector = () => useContext(CrisisSelectorContext);
