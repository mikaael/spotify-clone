import { createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function signUp(email, password) {
    const users = cookies.get("users") ?? [];

    if (users.find((user) => user.email === email)) {
      return false;
    }

    users.push({ email, password });
    cookies.set("users", users, { path: "/" });

    return true;
  }

  function authenticate(email, password) {
    const users = cookies.get("users") ?? [];

    for (const user of users) {
      if (user.email === email && user.password === password) {
        setIsAuthenticated(true);
        return true;
      }
    }

    return false;
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signUp, authenticate, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthContextProvider.");
  }

  const { isAuthenticated, signUp, authenticate, logout } = context;
  return { isAuthenticated, signUp, authenticate, logout };
}
