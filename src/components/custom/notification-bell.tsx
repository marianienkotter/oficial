"use client";

import { Bell, X, Gift, Star, Trophy, BookOpen, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";

interface Notification {
  id: string;
  title: string;
  message: string;
  icon: "welcome" | "coupon" | "subscription" | "course" | "medal" | "mission" | "update";
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    href: string;
  };
  requiresPlan?: "pro" | "pro_plus" | "elite";
}

export function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  let t: (key: string) => string;
  try {
    const languageContext = useLanguage();
    t = languageContext.t;
  } catch (error) {
    // Fallback se o contexto não estiver disponível
    t = (key: string) => key;
  }

  // Garantir que o componente está montado no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Carregar notificações ao montar o componente
  useEffect(() => {
    if (mounted) {
      loadNotifications();
    }
  }, [mounted]);

  // Atualizar contador de não lidas
  useEffect(() => {
    const count = notifications.filter(n => !n.read).length;
    setUnreadCount(count);
  }, [notifications]);

  const loadNotifications = () => {
    // Simular carregamento de notificações (substituir por chamada real ao backend)
    const mockNotifications: Notification[] = [
      {
        id: "1",
        title: t('notifications.welcome.title') || 'Bem-vindo à Elite Life!',
        message: t('notifications.welcome.message') || 'Estamos felizes em ter você aqui!',
        icon: "welcome",
        timestamp: new Date(),
        read: false,
      },
      {
        id: "2",
        title: t('notifications.coupon.title') || 'Cupom Exclusivo 🎁',
        message: t('notifications.coupon.message') || 'Você ganhou 5% OFF!',
        icon: "coupon",
        timestamp: new Date(),
        read: false,
        action: {
          label: t('button.goToPlans') || 'Ir para Planos',
          href: "/plans",
        },
      },
    ];

    setNotifications(mockNotifications);
  };

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: Notification["icon"]) => {
    const iconClass = "w-5 h-5";
    switch (type) {
      case "welcome":
        return <Star className={iconClass} />;
      case "coupon":
        return <Gift className={iconClass} />;
      case "subscription":
        return <CheckCircle className={iconClass} />;
      case "course":
        return <BookOpen className={iconClass} />;
      case "medal":
        return <Trophy className={iconClass} />;
      case "mission":
        return <Star className={iconClass} />;
      case "update":
        return <Bell className={iconClass} />;
      default:
        return <Bell className={iconClass} />;
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return t('time.now') || 'Agora';
    if (minutes < 60) return `${minutes}${t('time.minutesAgo') || 'min atrás'}`;
    if (hours < 24) return `${hours}${t('time.hoursAgo') || 'h atrás'}`;
    return `${days}${t('time.daysAgo') || 'd atrás'}`;
  };

  // Não renderizar até estar montado no cliente
  if (!mounted) {
    return (
      <button
        className="relative p-2 text-[#D4AF37] hover:text-amber-400 transition-all hover:scale-110 group"
        aria-label="Notificações"
      >
        <Bell className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="relative">
      {/* Botão do Sino */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-[#D4AF37] hover:text-amber-400 transition-all hover:scale-110 group"
        aria-label={t('notifications.title') || 'Notificações'}
      >
        <Bell className="w-6 h-6 group-hover:animate-bounce" />
        
        {/* Badge de notificações não lidas */}
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-lg shadow-red-500/50">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Painel de Notificações */}
      {isOpen && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Painel */}
          <div className="absolute right-0 top-12 w-80 sm:w-96 bg-[#0A0A0A] border-2 border-[#D4AF37] rounded-2xl shadow-2xl shadow-[#D4AF37]/20 z-50 overflow-hidden animate-in slide-in-from-top-5 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/20 p-4 border-b border-[#D4AF37]/30">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <Bell className="w-5 h-5 text-[#D4AF37]" />
                  {t('notifications.title') || 'Notificações'}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={t('button.close') || 'Fechar'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="mt-2 text-xs text-[#D4AF37] hover:text-amber-400 transition-colors font-semibold"
                >
                  {t('notifications.markAllRead') || 'Marcar todas como lidas'}
                </button>
              )}
            </div>

            {/* Lista de Notificações */}
            <div className="max-h-96 overflow-y-auto custom-scrollbar">
              {notifications.length === 0 ? (
                <div className="p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">{t('notifications.empty') || 'Nenhuma notificação ainda'}</p>
                </div>
              ) : (
                <div className="divide-y divide-[#D4AF37]/10">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-[#D4AF37]/5 transition-all cursor-pointer ${
                        !notification.read ? "bg-[#D4AF37]/10" : ""
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex gap-3">
                        {/* Ícone */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center text-white">
                          {getIcon(notification.icon)}
                        </div>

                        {/* Conteúdo */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="text-white font-semibold text-sm">
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            )}
                          </div>
                          
                          <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-[#D4AF37] text-xs font-medium">
                              {formatTimestamp(notification.timestamp)}
                            </span>
                            
                            {notification.action && (
                              <Link
                                href={notification.action.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xs text-[#D4AF37] hover:text-amber-400 font-semibold transition-colors"
                              >
                                {notification.action.label} →
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-3 bg-[#0A0A0A] border-t border-[#D4AF37]/30 text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-gray-400 hover:text-white transition-colors font-semibold"
                >
                  {t('notifications.viewAll') || 'Ver todas as notificações'}
                </button>
              </div>
            )}
          </div>
        </>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(212, 175, 55, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #B8941F;
        }
      `}</style>
    </div>
  );
}
