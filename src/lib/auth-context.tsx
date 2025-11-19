"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  nome?: string;
  idade?: number;
  photo_url?: string;
  telefone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, senha: string) => Promise<boolean>;
  signup: (email: string, senha: string, telefone: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<boolean>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar se há usuário logado no localStorage
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("elite_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    }
  }, []);

  const login = async (email: string, senha: string): Promise<boolean> => {
    try {
      // Buscar usuários do localStorage
      const users = JSON.parse(localStorage.getItem("elite_users") || "[]");
      const foundUser = users.find((u: any) => u.email === email && u.senha === senha);

      if (foundUser) {
        const userData = {
          id: foundUser.id,
          email: foundUser.email,
          nome: foundUser.nome,
          idade: foundUser.idade,
          photo_url: foundUser.photo_url,
          telefone: foundUser.telefone,
        };
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("elite_user", JSON.stringify(userData));
        
        // Atualizar último login
        foundUser.ultimo_login = new Date().toISOString();
        localStorage.setItem("elite_users", JSON.stringify(users));
        
        return true;
      }
      return false;
    } catch (error) {
      console.error("Erro no login:", error);
      return false;
    }
  };

  const signup = async (email: string, senha: string, telefone: string): Promise<boolean> => {
    try {
      // Verificar se email já existe
      const users = JSON.parse(localStorage.getItem("elite_users") || "[]");
      const emailExists = users.some((u: any) => u.email === email);

      if (emailExists) {
        return false;
      }

      // Criar novo usuário
      const newUser = {
        id: crypto.randomUUID(),
        email,
        senha,
        telefone,
        data_criacao: new Date().toISOString(),
        ultimo_login: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem("elite_users", JSON.stringify(users));

      // Fazer login automático
      const userData = {
        id: newUser.id,
        email: newUser.email,
        telefone: newUser.telefone,
      };
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem("elite_user", JSON.stringify(userData));

      return true;
    } catch (error) {
      console.error("Erro no cadastro:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("elite_user");
    }
  };

  const updateProfile = async (data: Partial<User>): Promise<boolean> => {
    try {
      if (!user) return false;

      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem("elite_user", JSON.stringify(updatedUser));

      // Atualizar também no array de usuários
      const users = JSON.parse(localStorage.getItem("elite_users") || "[]");
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...data };
        localStorage.setItem("elite_users", JSON.stringify(users));
      }

      return true;
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateProfile, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
