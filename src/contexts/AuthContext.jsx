import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function signUp(email, password) {
    if (!email || !password) {
      return { status: 400, message: "E-mail e senha são obrigatórios!" };
    }

    const users = JSON.parse(localStorage.getItem("users")) ?? [];

    if (users.find((user) => user.email === email)) {
      return { status: 409, message: "E-mail já registrado!" };
    }

    if (password.length < 8) {
      return {
        status: 400,
        message: "A senha deve conter pelo menos 8 caracteres!",
      };
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    return { status: 201, message: "Conta criada com sucesso!" };
  }

  function authenticate(email, password) {
    if (!email || !password) {
      return { status: 400, message: "E-mail e senha são obrigatórios!" };
    }

    const users = JSON.parse(localStorage.getItem("users")) ?? [];

    for (const user of users) {
      if (user.email === email && user.password === password) {
        setIsAuthenticated(true);
        return { status: 200, message: "Conta conectada com sucesso!" };
      }
    }

    return { status: 401, message: "E-mail e/ou senha inválido(s)!" };
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
