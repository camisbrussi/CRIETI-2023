import { ReactNode, createContext, useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";

export type User = {
  id: number;
  nome: string;
  email: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  getLogged: () => void;
  user?: User;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;
  const [user, setUser] = useState<User>();

  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      const userLogged = await getLogged();

      if (userLogged) {
        // TODO: Requisição para API buscando o usuário logado
        setUser({
          id: 1,
          nome: "Juca bala",
          email: "juca@batatinha.com",
        });
      }
    }

    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("logged");

    setUser(undefined);
    router.push("/login");
  };

  const setLogged = (token: string) => {
    localStorage.setItem("logged", JSON.stringify(token));
    return true;
  };

  const getLogged = async () => {
    if (typeof window !== "undefined") {
      const logged = localStorage?.getItem("logged");

      if (logged) {
        const userLogged = JSON.parse(logged);

        axios.defaults.headers.common[
          "Authorization"
        ] = `Basic ${userLogged.token}`;

        axios.defaults.headers.common["Cache-Control"] = "no-store";
      }
      return logged && JSON.parse(logged);
    }

    return;
  };

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await axios.post("http://localhost:3333/login", {
        email,
        senha: password,
      });

      const { token } = response.data;

      setLogged(token);
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, getLogged, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
