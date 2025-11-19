"use client";

import { useState, useEffect } from 'react';

export type SubscriptionPlan = 'free' | 'pro' | 'pro-plus' | 'elite' | 'anual' | 'influencer-pro';
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
    const fetchSubscription = async () => {
      try {
        // Buscar do localStorage (em produção seria API)
        const userData = localStorage.getItem('elite_user');
        if (userData) {
          const user = JSON.parse(userData);
          const plan = user.plano_atual || 'free';
          
          setSubscription({
            plan,
            status: plan !== 'free' ? 'active' : 'inactive',
            stripeStatus: plan !== 'free' ? 'paid' : 'unpaid',
            features: getFeaturesByPlan(plan)
          });
        }
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
    
    return subscription.features.includes(feature);
  };

  /**
   * Verifica se usuário pode acessar vídeos
   */
  const canAccessVideos = (): boolean => {
    return subscription.plan !== 'free';
  };

  /**
   * Verifica se usuário pode acessar cursos
   */
  const canAccessCourses = (): boolean => {
    return subscription.plan !== 'free';
  };

  /**
   * Verifica se usuário pode acessar Influencer Pro
   */
  const canAccessInfluencerPro = (): boolean => {
    return subscription.plan === 'elite' || 
           subscription.plan === 'anual' || 
           subscription.plan === 'influencer-pro';
  };

  /**
   * Atualiza o plano do usuário (após pagamento)
   */
  const updatePlan = (newPlan: SubscriptionPlan, newStatus: SubscriptionStatus = 'active') => {
    const userData = localStorage.getItem('elite_user');
    if (userData) {
      const user = JSON.parse(userData);
      user.plano_atual = newPlan;
      localStorage.setItem('elite_user', JSON.stringify(user));
    }
    
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
    canAccessInfluencerPro,
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
    pro: ['videos', 'courses-basic', 'quizzes', 'activities'],
    'pro-plus': ['videos', 'courses', 'quizzes', 'activities', 'certificates', 'support'],
    elite: ['videos', 'courses', 'quizzes', 'activities', 'certificates', 'support', 'influencer-pro'],
    anual: ['videos', 'courses', 'quizzes', 'activities', 'certificates', 'support', 'influencer-pro', 'bonus'],
    'influencer-pro': ['videos', 'courses', 'influencer-pro', 'hashtags', 'thumbnails', 'scripts', 'dietas', 'agenda']
  };

  return features[plan] || [];
}
