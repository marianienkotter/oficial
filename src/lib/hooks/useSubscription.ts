"use client";

import { useState, useEffect } from 'react';

export type SubscriptionPlan = 'free' | 'monthly' | 'annual' | 'influencer';
export type SubscriptionStatus = 'active' | 'inactive' | 'cancelled' | 'pending';

export interface SubscriptionData {
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  stripeStatus: 'paid' | 'unpaid' | 'pending';
  nextBilling?: string;
  features: string[];
}

/**
 * Hook para verificar status da assinatura do usuário
 * Integra com banco de dados e Stripe
 */
export function useSubscription() {
  const [subscription, setSubscription] = useState<SubscriptionData>({
    plan: 'free',
    status: 'inactive',
    stripeStatus: 'unpaid',
    features: []
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular busca do banco de dados
    // Em produção, isso seria uma chamada real à API
    const fetchSubscription = async () => {
      try {
        // Aqui você faria:
        // const response = await fetch('/api/subscription');
        // const data = await response.json();
        
        // Por enquanto, simulamos com localStorage para demonstração
        const storedPlan = localStorage.getItem('userPlan') as SubscriptionPlan || 'free';
        const storedStatus = localStorage.getItem('subscriptionStatus') as SubscriptionStatus || 'inactive';
        
        setSubscription({
          plan: storedPlan,
          status: storedStatus,
          stripeStatus: storedPlan !== 'free' ? 'paid' : 'unpaid',
          features: getFeaturesByPlan(storedPlan)
        });
      } catch (error) {
        console.error('Erro ao buscar assinatura:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubscription();
  }, []);

  /**
   * Verifica se usuário tem acesso a um recurso específico
   */
  const hasAccess = (feature: string): boolean => {
    if (subscription.plan === 'free') return false;
    if (subscription.status !== 'active') return false;
    if (subscription.stripeStatus !== 'paid') return false;
    
    return true;
  };

  /**
   * Verifica se usuário pode acessar vídeos
   */
  const canAccessVideos = (): boolean => {
    return hasAccess('videos');
  };

  /**
   * Verifica se usuário pode acessar cursos
   */
  const canAccessCourses = (): boolean => {
    return hasAccess('courses');
  };

  /**
   * Verifica se usuário pode acessar carteira
   */
  const canAccessWallet = (): boolean => {
    // Influencer não tem acesso à carteira
    if (subscription.plan === 'influencer') return false;
    return hasAccess('wallet');
  };

  /**
   * Verifica se usuário pode acessar área de influencer
   */
  const canAccessInfluencer = (): boolean => {
    return hasAccess('influencer');
  };

  /**
   * Verifica se usuário pode acessar vídeos de finanças
   */
  const canAccessFinanceVideos = (): boolean => {
    // Influencer não tem acesso a vídeos de finanças
    if (subscription.plan === 'influencer') return false;
    return hasAccess('videos');
  };

  /**
   * Atualiza o plano do usuário (após pagamento)
   */
  const updatePlan = (newPlan: SubscriptionPlan, newStatus: SubscriptionStatus = 'active') => {
    localStorage.setItem('userPlan', newPlan);
    localStorage.setItem('subscriptionStatus', newStatus);
    
    setSubscription({
      plan: newPlan,
      status: newStatus,
      stripeStatus: 'paid',
      features: getFeaturesByPlan(newPlan)
    });
  };

  return {
    subscription,
    isLoading,
    hasAccess,
    canAccessVideos,
    canAccessCourses,
    canAccessWallet,
    canAccessInfluencer,
    canAccessFinanceVideos,
    updatePlan,
    isPremium: subscription.plan !== 'free' && subscription.status === 'active'
  };
}

/**
 * Retorna features disponíveis por plano
 */
function getFeaturesByPlan(plan: SubscriptionPlan): string[] {
  const features: Record<SubscriptionPlan, string[]> = {
    free: ['dashboard-basic'],
    monthly: ['videos', 'courses', 'quizzes', 'activities', 'wallet', 'certificates', 'ai-support'],
    annual: ['videos', 'courses', 'quizzes', 'activities', 'wallet', 'certificates', 'ai-support', 'advanced-dashboard'],
    influencer: ['videos', 'courses', 'influencer-tools', 'thumbnails', 'scripts', 'hashtags', 'tracker']
  };

  return features[plan] || [];
}
