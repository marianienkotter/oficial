import { useState, useEffect } from "react";
import { UserPermissions, PlanId, PLAN_PERMISSIONS } from "@/lib/types/subscription";

// Hook para verificar permissões do usuário
export function usePermissions() {
  const [permissions, setPermissions] = useState<UserPermissions | null>(null);
  const [currentPlan, setCurrentPlan] = useState<PlanId>("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de permissões do usuário
    // Em produção, isso viria de uma API/Supabase
    const loadPermissions = async () => {
      try {
        // Simulação - substituir por chamada real à API
        const userPlan: PlanId = "free"; // Pegar do contexto/auth
        const userPermissions = PLAN_PERMISSIONS[userPlan] as UserPermissions;
        
        setCurrentPlan(userPlan);
        setPermissions(userPermissions);
      } catch (error) {
        console.error("Erro ao carregar permissões:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPermissions();
  }, []);

  const hasPermission = (permission: keyof UserPermissions): boolean => {
    if (!permissions) return false;
    return permissions[permission] === true;
  };

  const checkFeatureAccess = (feature: keyof UserPermissions): {
    hasAccess: boolean;
    requiredPlan?: PlanId;
  } => {
    const hasAccess = hasPermission(feature);
    
    if (hasAccess) {
      return { hasAccess: true };
    }

    // Encontrar o plano mínimo necessário
    const plans: PlanId[] = ["pro", "pro-plus", "elite", "anual", "influencer-pro", "ecommerce-pro"];
    
    for (const plan of plans) {
      const planPerms = PLAN_PERMISSIONS[plan];
      if (planPerms[feature]) {
        return { hasAccess: false, requiredPlan: plan };
      }
    }

    return { hasAccess: false };
  };

  return {
    permissions,
    currentPlan,
    loading,
    hasPermission,
    checkFeatureAccess
  };
}

// Hook para gerenciar modal de upgrade
export function useUpgradeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [requiredFeature, setRequiredFeature] = useState<string>("");
  const [requiredPlan, setRequiredPlan] = useState<PlanId | null>(null);

  const openModal = (feature: string, plan?: PlanId) => {
    setRequiredFeature(feature);
    setRequiredPlan(plan || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setRequiredFeature("");
    setRequiredPlan(null);
  };

  return {
    isOpen,
    requiredFeature,
    requiredPlan,
    openModal,
    closeModal
  };
}
