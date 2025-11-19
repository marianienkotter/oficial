import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Verificar se as credenciais do Supabase estão configuradas
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey && supabaseUrl !== '' && supabaseAnonKey !== '';

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any; // Retorna null se não configurado

// Tipos para notificações
export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'welcome' | 'coupon' | 'subscription' | 'video' | 'course' | 'medal' | 'recommendation' | 'mission' | 'warning';
  icon: string;
  read: boolean;
  action_url?: string;
  metadata?: Record<string, any>;
  created_at: string;
}

// Função para criar notificação
export async function createNotification(
  userId: string,
  notification: Omit<Notification, 'id' | 'user_id' | 'created_at' | 'read'>
) {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase não configurado. Configure as variáveis de ambiente.');
    return null;
  }

  const { data, error } = await supabase
    .from('notifications')
    .insert({
      user_id: userId,
      ...notification,
      read: false,
    })
    .select()
    .single();

  if (error) {
    console.error('Erro ao criar notificação:', error);
    return null;
  }

  return data;
}

// Função para buscar notificações do usuário
export async function getUserNotifications(userId: string) {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase não configurado. Configure as variáveis de ambiente.');
    return [];
  }

  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) {
    console.error('Erro ao buscar notificações:', error);
    return [];
  }

  return data as Notification[];
}

// Função para marcar notificação como lida
export async function markNotificationAsRead(notificationId: string) {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase não configurado. Configure as variáveis de ambiente.');
    return false;
  }

  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('id', notificationId);

  if (error) {
    console.error('Erro ao marcar notificação como lida:', error);
    return false;
  }

  return true;
}

// Função para marcar todas como lidas
export async function markAllNotificationsAsRead(userId: string) {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase não configurado. Configure as variáveis de ambiente.');
    return false;
  }

  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('user_id', userId)
    .eq('read', false);

  if (error) {
    console.error('Erro ao marcar todas notificações como lidas:', error);
    return false;
  }

  return true;
}

// Função para gerar cupom único
export function generateCouponCode(userId: string): string {
  return `ELITE5-${userId.substring(0, 8).toUpperCase()}`;
}

// Função para criar notificação de boas-vindas
export async function createWelcomeNotification(userId: string) {
  return createNotification(userId, {
    title: 'Bem-vindo à Elite Life!',
    message: 'É um prazer ter você aqui! Explore seus conteúdos e comece sua evolução hoje.',
    type: 'welcome',
    icon: '⭐',
    action_url: '/dashboard',
  });
}

// Função para criar notificação de cupom
export async function createCouponNotification(userId: string) {
  const couponCode = generateCouponCode(userId);
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);

  return createNotification(userId, {
    title: 'Cupom Exclusivo para Você 🎁',
    message: `Você ganhou 5% de desconto! Use o código ${couponCode}. Válido até ${expiryDate.toLocaleDateString('pt-BR')}.`,
    type: 'coupon',
    icon: '🎁',
    action_url: '/plans',
    metadata: {
      coupon_code: couponCode,
      discount: 5,
      expiry_date: expiryDate.toISOString(),
    },
  });
}

// Função para criar notificação de parabéns pela assinatura
export async function createSubscriptionNotification(userId: string) {
  return createNotification(userId, {
    title: 'Parabéns pela sua assinatura! 🎉',
    message: 'Agora você desbloqueou novos conteúdos e pode acessar sua área exclusiva.',
    type: 'subscription',
    icon: '🎉',
    action_url: '/dashboard',
  });
}
