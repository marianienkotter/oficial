"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, CompleteUser } from './supabase';
import bcrypt from 'bcryptjs';

interface AuthContextType {
  user: CompleteUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, telefone?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (data: Partial<CompleteUser>) => Promise<{ success: boolean; error?: string }>;
  uploadProfilePhoto: (file: File) => Promise<{ success: boolean; url?: string; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<CompleteUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const loadUser = async () => {
      const storedUser = localStorage.getItem('elite_life_user');
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          // Buscar dados atualizados do banco
          const completeUser = await fetchCompleteUserData(userData.id);
          if (completeUser) {
            setUser(completeUser);
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('elite_life_user');
          }
        } catch (error) {
          console.error('Erro ao carregar usuário:', error);
          localStorage.removeItem('elite_life_user');
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  // Buscar dados completos do usuário
  const fetchCompleteUserData = async (userId: string): Promise<CompleteUser | null> => {
    try {
      // Buscar dados do usuário
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (userError || !userData) return null;

      // Buscar perfil
      const { data: profileData } = await supabase
        .from('user_profile')
        .select('*')
        .eq('user_id', userId)
        .single();

      // Buscar estatísticas
      const { data: statsData } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', userId)
        .single();

      // Buscar assinatura
      const { data: subscriptionData } = await supabase
        .from('user_subscription')
        .select('*')
        .eq('user_id', userId)
        .single();

      const completeUser: CompleteUser = {
        ...userData,
        nome: profileData?.nome || '',
        idade: profileData?.idade || 0,
        descricao: profileData?.descricao || '',
        foto_perfil: profileData?.foto_perfil || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default',
        pontos: statsData?.xp || 0,
        medalha_atual: statsData?.medalhas || 'Iniciante',
        cursos_concluidos: statsData?.cursos_concluidos || 0,
        plano_atual: subscriptionData?.plano || 'free'
      };

      return completeUser;
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      return null;
    }
  };

  // Registrar novo usuário
  const register = async (email: string, password: string, telefone?: string) => {
    try {
      // Verificar se email já existe
      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single();

      if (existingUser) {
        return { success: false, error: 'Este e-mail já está cadastrado' };
      }

      // Hash da senha
      const passwordHash = await bcrypt.hash(password, 10);

      // Criar usuário
      const { data: newUser, error: userError } = await supabase
        .from('users')
        .insert({
          email,
          password_hash: passwordHash,
          telefone: telefone || null
        })
        .select()
        .single();

      if (userError || !newUser) {
        return { success: false, error: 'Erro ao criar conta. Tente novamente.' };
      }

      // Criar perfil inicial
      await supabase.from('user_profile').insert({
        user_id: newUser.id,
        nome: '',
        idade: null,
        descricao: '',
        foto_perfil: 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'
      });

      // Criar estatísticas iniciais
      await supabase.from('user_stats').insert({
        user_id: newUser.id,
        xp: 0,
        medalhas: 'Iniciante',
        cursos_concluidos: 0,
        atividades_completadas: 0
      });

      // Criar assinatura inicial (free)
      await supabase.from('user_subscription').insert({
        user_id: newUser.id,
        plano: 'free',
        ativo: true
      });

      // Buscar dados completos
      const completeUser = await fetchCompleteUserData(newUser.id);
      
      if (completeUser) {
        setUser(completeUser);
        setIsAuthenticated(true);
        localStorage.setItem('elite_life_user', JSON.stringify(completeUser));
        return { success: true };
      }

      return { success: false, error: 'Erro ao criar perfil completo' };
    } catch (error) {
      console.error('Erro no registro:', error);
      return { success: false, error: 'Erro ao criar conta. Tente novamente.' };
    }
  };

  // Login
  const login = async (email: string, password: string) => {
    try {
      // Buscar usuário por email
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

      if (userError || !userData) {
        return { success: false, error: 'E-mail ou senha incorretos' };
      }

      // Verificar senha
      const passwordMatch = await bcrypt.compare(password, userData.password_hash);
      
      if (!passwordMatch) {
        return { success: false, error: 'E-mail ou senha incorretos' };
      }

      // Buscar dados completos
      const completeUser = await fetchCompleteUserData(userData.id);
      
      if (completeUser) {
        setUser(completeUser);
        setIsAuthenticated(true);
        localStorage.setItem('elite_life_user', JSON.stringify(completeUser));
        return { success: true };
      }

      return { success: false, error: 'Erro ao carregar dados do usuário' };
    } catch (error) {
      console.error('Erro no login:', error);
      return { success: false, error: 'Erro ao fazer login. Tente novamente.' };
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('elite_life_user');
  };

  // Atualizar perfil
  const updateProfile = async (data: Partial<CompleteUser>) => {
    if (!user) return { success: false, error: 'Usuário não autenticado' };

    try {
      // Atualizar perfil
      if (data.nome !== undefined || data.idade !== undefined || data.descricao !== undefined || data.foto_perfil !== undefined) {
        const profileUpdate: any = {};
        if (data.nome !== undefined) profileUpdate.nome = data.nome;
        if (data.idade !== undefined) profileUpdate.idade = data.idade;
        if (data.descricao !== undefined) profileUpdate.descricao = data.descricao;
        if (data.foto_perfil !== undefined) profileUpdate.foto_perfil = data.foto_perfil;

        const { error: profileError } = await supabase
          .from('user_profile')
          .update(profileUpdate)
          .eq('user_id', user.id);

        if (profileError) {
          return { success: false, error: 'Erro ao atualizar perfil' };
        }
      }

      // Buscar dados atualizados
      const updatedUser = await fetchCompleteUserData(user.id);
      
      if (updatedUser) {
        setUser(updatedUser);
        localStorage.setItem('elite_life_user', JSON.stringify(updatedUser));
        return { success: true };
      }

      return { success: false, error: 'Erro ao carregar dados atualizados' };
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      return { success: false, error: 'Erro ao atualizar perfil. Tente novamente.' };
    }
  };

  // Upload de foto de perfil
  const uploadProfilePhoto = async (file: File) => {
    if (!user) return { success: false, error: 'Usuário não autenticado' };

    try {
      // Criar nome único para o arquivo
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `profile-photos/${fileName}`;

      // Upload para o Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {
        return { success: false, error: 'Erro ao fazer upload da foto' };
      }

      // Obter URL pública
      const { data: urlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      const photoUrl = urlData.publicUrl;

      // Atualizar perfil com nova foto
      const result = await updateProfile({ foto_perfil: photoUrl });
      
      if (result.success) {
        return { success: true, url: photoUrl };
      }

      return { success: false, error: 'Erro ao atualizar foto no perfil' };
    } catch (error) {
      console.error('Erro ao fazer upload da foto:', error);
      return { success: false, error: 'Erro ao fazer upload da foto. Tente novamente.' };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#D4AF37] font-semibold">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, updateProfile, uploadProfilePhoto }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
