// Sistema de gerenciamento de notificações
export interface NotificationData {
  id: string;
  userId: string;
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
  expiresAt?: Date;
}

// Função para criar notificação de boas-vindas
export function createWelcomeNotification(userId: string): NotificationData {
  return {
    id: `welcome-${userId}-${Date.now()}`,
    userId,
    title: "Bem-vindo à Elite Life!",
    message: "Estamos felizes em ter você aqui! Aproveite sua jornada.",
    icon: "welcome",
    timestamp: new Date(),
    read: false,
  };
}

// Função para criar notificação de cupom
export function createCouponNotification(userId: string): NotificationData {
  const couponCode = `ELITE5-${userId.substring(0, 8).toUpperCase()}`;
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 dias de validade

  return {
    id: `coupon-${userId}-${Date.now()}`,
    userId,
    title: "Cupom Exclusivo 🎁",
    message: `Você ganhou 5% OFF! Use o cupom ${couponCode}.`,
    icon: "coupon",
    timestamp: new Date(),
    read: false,
    action: {
      label: "Ir para Planos",
      href: "/plans",
    },
    expiresAt,
  };
}

// Função para criar notificação de assinatura
export function createSubscriptionNotification(userId: string, planName: string): NotificationData {
  return {
    id: `subscription-${userId}-${Date.now()}`,
    userId,
    title: "Parabéns pela sua assinatura! 🎉",
    message: `Você desbloqueou novos conteúdos com o plano ${planName}. Sua jornada começa agora!`,
    icon: "subscription",
    timestamp: new Date(),
    read: false,
    action: {
      label: "Ir para Minha Área",
      href: "/dashboard",
    },
  };
}

// Função para criar notificação de novo curso
export function createCourseNotification(
  userId: string,
  courseName: string,
  requiresPlan?: "pro" | "pro_plus" | "elite"
): NotificationData {
  return {
    id: `course-${userId}-${Date.now()}`,
    userId,
    title: "Novo curso liberado! 📚",
    message: `O curso "${courseName}" está disponível para você.`,
    icon: "course",
    timestamp: new Date(),
    read: false,
    action: {
      label: "Ver Curso",
      href: "/courses",
    },
    requiresPlan,
  };
}

// Função para criar notificação de medalha
export function createMedalNotification(userId: string, medalName: string): NotificationData {
  return {
    id: `medal-${userId}-${Date.now()}`,
    userId,
    title: "Medalha conquistada! 🏆",
    message: `Parabéns! Você conquistou a medalha "${medalName}".`,
    icon: "medal",
    timestamp: new Date(),
    read: false,
    action: {
      label: "Ver Medalhas",
      href: "/profile",
    },
  };
}

// Função para criar notificação de missão diária
export function createMissionNotification(userId: string): NotificationData {
  return {
    id: `mission-${userId}-${Date.now()}`,
    userId,
    title: "Missão diária disponível! ⭐",
    message: "Complete sua missão diária e ganhe XP extra!",
    icon: "mission",
    timestamp: new Date(),
    read: false,
    action: {
      label: "Ver Missões",
      href: "/dashboard",
    },
  };
}

// Função para criar notificação de atualização
export function createUpdateNotification(userId: string, updateTitle: string, updateMessage: string): NotificationData {
  return {
    id: `update-${userId}-${Date.now()}`,
    userId,
    title: updateTitle,
    message: updateMessage,
    icon: "update",
    timestamp: new Date(),
    read: false,
  };
}

// Função para salvar notificação (substituir por chamada real ao backend)
export async function saveNotification(notification: NotificationData): Promise<void> {
  // TODO: Implementar salvamento no banco de dados
  
  // Simular salvamento
  if (typeof window !== "undefined") {
    const notifications = getStoredNotifications();
    notifications.push(notification);
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }
}

// Função para buscar notificações do usuário
export function getUserNotifications(userId: string): NotificationData[] {
  // TODO: Implementar busca no banco de dados
  const notifications = getStoredNotifications();
  return notifications
    .filter(n => n.userId === userId)
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
}

// Função para marcar notificação como lida
export async function markNotificationAsRead(notificationId: string): Promise<void> {
  // TODO: Implementar atualização no banco de dados
  if (typeof window !== "undefined") {
    const notifications = getStoredNotifications();
    const updated = notifications.map(n =>
      n.id === notificationId ? { ...n, read: true } : n
    );
    localStorage.setItem("notifications", JSON.stringify(updated));
  }
}

// Função para marcar todas como lidas
export async function markAllNotificationsAsRead(userId: string): Promise<void> {
  // TODO: Implementar atualização no banco de dados
  if (typeof window !== "undefined") {
    const notifications = getStoredNotifications();
    const updated = notifications.map(n =>
      n.userId === userId ? { ...n, read: true } : n
    );
    localStorage.setItem("notifications", JSON.stringify(updated));
  }
}

// Função para limpar notificações antigas (30 dias)
export async function cleanOldNotifications(): Promise<void> {
  if (typeof window !== "undefined") {
    const notifications = getStoredNotifications();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const filtered = notifications.filter(
      n => new Date(n.timestamp) > thirtyDaysAgo
    );
    localStorage.setItem("notifications", JSON.stringify(filtered));
  }
}

// Helper para obter notificações do localStorage
function getStoredNotifications(): NotificationData[] {
  if (typeof window === "undefined") return [];
  
  const stored = localStorage.getItem("notifications");
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return parsed.map((n: NotificationData) => ({
      ...n,
      timestamp: new Date(n.timestamp),
      expiresAt: n.expiresAt ? new Date(n.expiresAt) : undefined,
    }));
  } catch {
    return [];
  }
}

// Função para inicializar notificações de novo usuário
export async function initializeUserNotifications(userId: string): Promise<void> {
  // Criar notificação de boas-vindas
  const welcomeNotification = createWelcomeNotification(userId);
  await saveNotification(welcomeNotification);

  // Criar notificação de cupom
  const couponNotification = createCouponNotification(userId);
  await saveNotification(couponNotification);
}
