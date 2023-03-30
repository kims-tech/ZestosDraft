import { createContext, useState } from "react";

const IndiceContext = createContext();
const IndiceProvider = ({ children }) => {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);

  const toggleSideMenu = () => {
    setDisplaySideMenu(!displaySideMenu);
  };

  return (
    <IndiceContext.Provider value={{ displaySideMenu, toggleSideMenu }}>
      {children}
    </IndiceContext.Provider>
  );
};

export { IndiceProvider, IndiceContext };
