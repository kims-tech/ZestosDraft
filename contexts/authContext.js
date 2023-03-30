import { createContext, useContext, useEffect, useState } from "react";
import authApi from "../utils/Api/auth.api";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState(undefined);
  const getUser = async (token) => {
    try {
      const res = await authApi.getUserDetail(token);
      setUser(res.user);
      setToken(res.token);
      localStorage.setItem("token", res.token);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };

export const useAuthContext = () => useContext(AuthContext);
export const useAuthToken = () => useAuthContext().token;
