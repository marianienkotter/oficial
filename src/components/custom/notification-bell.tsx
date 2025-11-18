"use client";

import { Bell } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useNotifications } from '@/hooks/useNotifications';

export function NotificationBell() {
  const router = useRouter();
  const { unreadCount } = useNotifications();

  return (
    <button
      onClick={() => router.push('/notifications')}
      className="relative p-2 rounded-full hover:bg-white/10 transition-all duration-300 group"
      aria-label="Notificações"
    >
      <Bell className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
      
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          {unreadCount > 9 ? '9+' : unreadCount}
        </span>
      )}
    </button>
  );
}
