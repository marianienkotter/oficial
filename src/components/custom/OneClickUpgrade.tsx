"use client";

import { useState } from "react";
import { Zap, CreditCard, Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface OneClickUpgradeProps {
  currentPlan: string;
  targetPlan: string;
  targetPrice: number;
  hasPaymentMethod: boolean;
}

export default function OneClickUpgrade({ 
  currentPlan, 
  targetPlan, 
  targetPrice,
  hasPaymentMethod 
}: OneClickUpgradeProps) {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Só mostrar se usuário tem método de pagamento salvo
  if (!hasPaymentMethod) {
    return null;
  }

  const handleOneClickUpgrade = async () => {
    setProcessing(true);

    try {
      // Simular processamento de pagamento
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Aqui você faria a chamada real para o gateway de pagamento
      // usando o método de pagamento salvo do usuário
      
      // Exemplo:
      // const response = await fetch('/api/upgrade', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     targetPlan,
      //     useStoredPaymentMethod: true
      //   })
      // });

      // Simular sucesso
      setSuccess(true);

      // Mostrar notificação
      setTimeout(() => {
        alert("✅ Seu plano foi atualizado com sucesso!");
        router.push("/");
      }, 1500);

    } catch (error) {
      console.error("Erro no upgrade:", error);
      alert("Erro ao processar upgrade. Tente novamente.");
    } finally {
      setProcessing(false);
    }
  };

  const getPlanName = (plan: string) => {
    const names: { [key: string]: string } = {
      "pro": "Pro",
      "pro-plus": "Pro Plus",
      "elite": "Elite",
      "ecommerce-pro": "E-commerce Pro",
      "influencer-pro": "Influencer Pro"
    };
    return names[plan] || plan;
  };

  return (
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/30 relative overflow-hidden">
      {/* Efeito de brilho */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-br from-[#D4AF37] to-amber-600 p-3 rounded-xl">
            <Zap className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Upgrade Instantâneo</h3>
            <p className="text-sm text-gray-400">Sem preencher dados novamente</p>
          </div>
        </div>

        {/* Upgrade info */}
        <div className="bg-[#2A2A2A]/50 rounded-xl p-4 mb-4 border border-[#D4AF37]/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Plano Atual:</span>
            <span className="text-white font-bold">{getPlanName(currentPlan)}</span>
          </div>
          <div className="flex items-center justify-center my-2">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Upgrade para:</span>
            <span className="text-[#D4AF37] font-bold text-lg">{getPlanName(targetPlan)}</span>
          </div>
        </div>

        {/* Preço */}
        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm mb-1">Novo valor mensal:</p>
          <p className="text-4xl font-black text-[#D4AF37]">R$ {targetPrice.toFixed(2)}</p>
        </div>

        {/* Método de pagamento salvo */}
        <div className="flex items-center gap-3 bg-[#2A2A2A]/50 rounded-xl p-4 mb-6 border border-[#D4AF37]/20">
          <CreditCard className="w-5 h-5 text-[#D4AF37]" />
          <div className="flex-1">
            <p className="text-white text-sm font-semibold">Cartão •••• 4242</p>
            <p className="text-gray-500 text-xs">Método de pagamento salvo</p>
          </div>
          <Check className="w-5 h-5 text-green-400" />
        </div>

        {/* Botão de upgrade */}
        {!success ? (
          <button
            onClick={handleOneClickUpgrade}
            disabled={processing}
            className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-glow"
          >
            {processing ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Processando Upgrade...
              </>
            ) : (
              <>
                <Zap className="w-6 h-6" />
                Upgrade com 1 Clique
              </>
            )}
          </button>
        ) : (
          <div className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3">
            <Check className="w-6 h-6" />
            Upgrade Realizado com Sucesso!
          </div>
        )}

        {/* Informações adicionais */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Check className="w-4 h-4 text-green-400" />
            <span>Cobrança automática no cartão salvo</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Check className="w-4 h-4 text-green-400" />
            <span>Ativação imediata do novo plano</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Check className="w-4 h-4 text-green-400" />
            <span>Sem taxas adicionais</span>
          </div>
        </div>

        {/* Nota de segurança */}
        <p className="text-xs text-gray-500 text-center mt-4">
          🔒 Transação 100% segura e criptografada
        </p>
      </div>
    </div>
  );
}
