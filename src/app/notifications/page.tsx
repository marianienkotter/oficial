"use client";

import { useRouter } from 'next/navigation';
import { useNotifications } from '@/hooks/useNotifications';
import { NotificationFilter } from '@/lib/types/notification';
import { 
  Bell, 
  Gift, 
  AlertCircle, 
  Settings, 
  TrendingUp, 
  Calendar,
  Sparkles,
  CheckCheck,
  ArrowLeft
} from 'lucide-react';

const filters: NotificationFilter[] = [
  { label: 'Todas', value: 'todas' },
  { label: 'Importantes', value: 'importantes' },
  { label: 'Promoções', value: 'promocao' },
  { label: 'Sistema', value: 'sistema' },
  { label: 'Assinatura', value: 'assinatura' },
  { label: 'Lembretes', value: 'lembrete' },
  { label: 'Atualizações', value: 'atualizacao' }
];

const notificationIcons = {
  boas_vindas: Sparkles,
  assinatura: TrendingUp,
  desconto: Gift,
  alerta: AlertCircle,
  sistema: Settings,
  promocao: Gift,
  lembrete: Calendar,
  quiz: Bell,
  estatisticas: TrendingUp,
  atualizacao: Sparkles
};

export default function NotificationsPage() {
  const router = useRouter();
  const { notifications, filter, setFilter, markAsRead, markAllAsRead, unreadCount } = useNotifications();

  const handleNotificationClick = (id: string, acao?: string) => {
    markAsRead(id);
    
    if (acao) {
      const actionRoutes: Record<string, string> = {
        abrir_inicio: '/dashboard',
        abrir_planos: '/plans',
        abrir_cupom: '/coupon',
        abrir_cursos: '/dashboard',
        abrir_quizzes: '/dashboard',
        abrir_estatisticas: '/dashboard',
        abrir_seguranca: '/profile',
        recarregar: '/dashboard'
      };
      
      const route = actionRoutes[acao];
      if (route) router.push(route);
    }
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Agora';
    if (minutes < 60) return `${minutes}min atrás`;
    if (hours < 24) return `${hours}h atrás`;
    return `${days}d atrás`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-900 to-black border-b border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-amber-400" />
            </button>
            
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Notificações
            </h1>
            
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg transition-colors text-sm text-amber-400"
              >
                <CheckCheck className="w-4 h-4" />
                Marcar todas
              </button>
            )}
          </div>

          {/* Filtros */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  filter === f.value
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de Notificações */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {notifications.length === 0 ? (
          <div className="text-center py-16">
            <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Nenhuma notificação por aqui</p>
            <p className="text-gray-500 text-sm mt-2">
              Quando houver novidades, você verá aqui
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => {
              const Icon = notificationIcons[notification.tipo];
              
              return (
                <button
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification.id, notification.acao)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    notification.lido
                      ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                      : 'bg-gradient-to-r from-amber-500/10 to-amber-600/5 border-amber-500/30 hover:border-amber-500/50'
                  }`}
                >
                  <div className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      notification.lido ? 'bg-slate-800' : 'bg-amber-500/20'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        notification.lido ? 'text-gray-400' : 'text-amber-400'
                      }`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className={`font-semibold ${
                          notification.lido ? 'text-gray-300' : 'text-white'
                        }`}>
                          {notification.titulo}
                        </h3>
                        {!notification.lido && (
                          <span className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                        )}
                      </div>
                      
                      <p className={`text-sm mb-2 ${
                        notification.lido ? 'text-gray-500' : 'text-gray-300'
                      }`}>
                        {notification.mensagem}
                      </p>
                      
                      <span className="text-xs text-gray-500">
                        {formatDate(notification.data_envio)}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
