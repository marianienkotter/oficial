"use client";

import { useState, useEffect } from 'react';
import { Notification, NotificationType } from '@/lib/types/notification';

// Mock de notificações - substituir por integração real com Supabase
const mockNotifications: Notification[] = [
  {
    id: '1',
    user_id: 'user1',
    titulo: 'Bem-vindo(a) à Elite Life!',
    mensagem: 'Sua jornada de transformação começou. Explore os cursos, vídeos, quizzes e ferramentas criadas para acelerar sua evolução.',
    tipo: 'boas_vindas',
    data_envio: new Date(),
    lido: false,
    acao: 'abrir_inicio'
  },
  {
    id: '2',
    user_id: 'user1',
    titulo: 'Cupom exclusivo disponível',
    mensagem: 'Você ganhou um cupom de 5% OFF! Toque para acessar seu prêmio especial.',
    tipo: 'desconto',
    data_envio: new Date(Date.now() - 3600000),
    lido: false,
    acao: 'abrir_cupom'
  },
  {
    id: '3',
    user_id: 'user1',
    titulo: 'Seu progresso importa',
    mensagem: 'Não esqueça de continuar seu curso hoje para manter sua constância!',
    tipo: 'lembrete',
    data_envio: new Date(Date.now() - 7200000),
    lido: true,
    acao: 'abrir_cursos'
  }
];

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [filter, setFilter] = useState<NotificationType | 'todas' | 'importantes'>('todas');

  const unreadCount = notifications.filter(n => !n.lido).length;

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'todas') return true;
    if (filter === 'importantes') return ['assinatura', 'alerta', 'sistema'].includes(notification.tipo);
    return notification.tipo === filter;
  });

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, lido: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, lido: true }))
    );
  };

  const addNotification = (notification: Omit<Notification, 'id' | 'user_id' | 'data_envio'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      user_id: 'user1',
      data_envio: new Date()
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  return {
    notifications: filteredNotifications,
    unreadCount,
    filter,
    setFilter,
    markAsRead,
    markAllAsRead,
    addNotification
  };
}
