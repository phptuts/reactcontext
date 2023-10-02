import { createContext, useReducer, useState } from "react";
import backgroundColorReducer from "../reducers/backgroundcolor.reducer";

export const BackgroundColorContext = createContext();

const BackgroundColorContextProvider = ({ children }) => {
  //const [backgroundColor, setBackgroundColor] = useState("blue");
  const [{ backgroundColor }, dispatch] = useReducer(backgroundColorReducer, {
    backgroundColor: "orange",
  });

  return (
    <BackgroundColorContext.Provider value={{ backgroundColor, dispatch }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

export default BackgroundColorContextProvider;
