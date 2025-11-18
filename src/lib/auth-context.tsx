"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  plan: "free" | "premium" | "elite";
  level: number;
  xp: number;
  xpToNextLevel: number;
  streak: number;
  totalMedals: number;
  hoursStudied: number;
  coursesCompleted: number;
  trailsCompleted: number;
  quizzesCompleted: number;
  activitiesCompleted: number;
  weeklyPoints: number;
  totalPoints: number;
  ranking: number;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  hasAccess: (contentType: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar se há usuário salvo no localStorage
    const savedUser = localStorage.getItem("elitelife_user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const register = async (name: string, email: string, phone: string, password: string): Promise<boolean> => {
    try {
      // Simular registro (em produção, fazer chamada API)
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        phone,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
        plan: "free",
        level: 1,
        xp: 0,
        xpToNextLevel: 100,
        streak: 0,
        totalMedals: 0,
        hoursStudied: 0,
        coursesCompleted: 0,
        trailsCompleted: 0,
        quizzesCompleted: 0,
        activitiesCompleted: 0,
        weeklyPoints: 0,
        totalPoints: 0,
        ranking: 0,
        createdAt: new Date().toISOString()
      };

      // Salvar usuário e senha no localStorage
      localStorage.setItem("elitelife_user", JSON.stringify(newUser));
      localStorage.setItem(`elitelife_password_${email}`, password);

      setUser(newUser);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error("Erro ao registrar:", error);
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Verificar credenciais (em produção, fazer chamada API)
      const savedPassword = localStorage.getItem(`elitelife_password_${email}`);
      
      if (savedPassword === password) {
        const savedUser = localStorage.getItem("elitelife_user");
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          if (parsedUser.email === email) {
            setUser(parsedUser);
            setIsAuthenticated(true);
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("elitelife_user");
  };

  const hasAccess = (contentType: string): boolean => {
    if (!user) return false;
    
    // Plano free: acesso limitado
    if (user.plan === "free") {
      return false;
    }
    
    // Plano premium: acesso a maioria do conteúdo
    if (user.plan === "premium") {
      return contentType !== "elite-exclusive";
    }
    
    // Plano elite: acesso total
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, hasAccess }}>
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
