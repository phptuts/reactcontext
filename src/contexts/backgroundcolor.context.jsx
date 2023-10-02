import { createContext, useState } from "react";

export const BackgroundColorContext = createContext();

const BackgroundColorContextProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const initalValue = {
    backgroundColor,
    setBackgroundColor,
  };
  return (
    <BackgroundColorContext.Provider value={initalValue}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

export default BackgroundColorContextProvider;
