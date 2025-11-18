"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Check, CreditCard, Smartphone, Lock, Tag, Sparkles, Crown } from "lucide-react";
import Link from "next/link";
import { PLANS, type PlanId } from "@/lib/types/subscription";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const planId = params.planId as PlanId;
  const plan = PLANS[planId];

  const [paymentMethod, setPaymentMethod] = useState<"card" | "pix" | "debit">("card");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPixQR, setShowPixQR] = useState(false);

  // Dados do cartão
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  if (!plan) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Plano não encontrado</h1>
          <Link href="/plans" className="text-[#D4AF37] hover:underline">
            Voltar para planos
          </Link>
        </div>
      </div>
    );
  }

  const finalPrice = plan.price - (plan.price * discount / 100);

  const handleApplyPromo = () => {
    // Simulação de validação de cupom
    if (promoCode.toUpperCase() === "ELITE10") {
      setDiscount(10);
    } else if (promoCode.toUpperCase() === "ELITE20") {
      setDiscount(20);
    } else {
      alert("Cupom inválido");
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    // Simular processamento
    setTimeout(() => {
      if (paymentMethod === "pix") {
        setShowPixQR(true);
        setIsProcessing(false);
      } else {
        // Redirecionar para página de sucesso
        router.push(`/checkout/success?plan=${planId}`);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-[#D4AF37]/20 bg-black/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/plans" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para planos</span>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Coluna Esquerda - Resumo do Pedido */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-black text-white mb-2">Finalizar Assinatura</h1>
              <p className="text-gray-400">Complete seu pagamento para desbloquear todos os recursos</p>
            </div>

            {/* Card do Plano */}
            <div className={`relative bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-8 border-2 border-[#D4AF37]/30 overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-black text-white mb-2">{plan.name}</h2>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    {discount > 0 && (
                      <span className="text-2xl text-gray-500 line-through">R$ {plan.price}</span>
                    )}
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                      R$ {finalPrice.toFixed(2)}
                    </span>
                    <span className="text-gray-400">/{plan.interval === "monthly" ? "mês" : "ano"}</span>
                  </div>
                  {discount > 0 && (
                    <div className="mt-2 inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 rounded-full px-3 py-1">
                      <Tag className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-bold">{discount}% de desconto aplicado</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cupom de Desconto */}
            <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <label className="block text-white font-bold mb-3">Código Promocional</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Digite seu cupom"
                  className="flex-1 bg-black/50 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button
                  onClick={handleApplyPromo}
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
                >
                  Aplicar
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2">Cupons disponíveis: ELITE10, ELITE20</p>
            </div>
          </div>

          {/* Coluna Direita - Pagamento */}
          <div className="space-y-6">
            {/* Métodos de Pagamento */}
            <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <h3 className="text-xl font-bold text-white mb-4">Método de Pagamento</h3>
              
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-[#D4AF37] bg-[#D4AF37]/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <CreditCard className="w-6 h-6 text-[#D4AF37]" />
                  <div className="flex-1 text-left">
                    <div className="text-white font-bold">Cartão de Crédito</div>
                    <div className="text-gray-400 text-sm">Parcelamento disponível</div>
                  </div>
                  {paymentMethod === "card" && (
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                  )}
                </button>

                <button
                  onClick={() => setPaymentMethod("pix")}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "pix"
                      ? "border-[#D4AF37] bg-[#D4AF37]/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <Smartphone className="w-6 h-6 text-[#D4AF37]" />
                  <div className="flex-1 text-left">
                    <div className="text-white font-bold">PIX</div>
                    <div className="text-gray-400 text-sm">Aprovação instantânea</div>
                  </div>
                  {paymentMethod === "pix" && (
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                  )}
                </button>

                <button
                  onClick={() => setPaymentMethod("debit")}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "debit"
                      ? "border-[#D4AF37] bg-[#D4AF37]/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <CreditCard className="w-6 h-6 text-[#D4AF37]" />
                  <div className="flex-1 text-left">
                    <div className="text-white font-bold">Cartão de Débito</div>
                    <div className="text-gray-400 text-sm">Pagamento à vista</div>
                  </div>
                  {paymentMethod === "debit" && (
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                  )}
                </button>
              </div>

              {/* Formulário de Cartão */}
              {(paymentMethod === "card" || paymentMethod === "debit") && !showPixQR && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Número do Cartão</label>
                    <input
                      type="text"
                      value={cardData.number}
                      onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Nome no Cartão</label>
                    <input
                      type="text"
                      value={cardData.name}
                      onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                      placeholder="NOME COMPLETO"
                      className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors uppercase"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">Validade</label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                        placeholder="MM/AA"
                        maxLength={5}
                        className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">CVV</label>
                      <input
                        type="text"
                        value={cardData.cvv}
                        onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                        placeholder="000"
                        maxLength={4}
                        className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* QR Code PIX */}
              {showPixQR && paymentMethod === "pix" && (
                <div className="text-center space-y-4">
                  <div className="bg-white p-6 rounded-2xl inline-block">
                    <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">QR Code PIX</span>
                    </div>
                  </div>
                  <p className="text-gray-400">Escaneie o QR Code com seu app de banco</p>
                  <div className="bg-black/50 border border-[#D4AF37]/30 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-2">Ou copie o código:</p>
                    <p className="text-white font-mono text-sm break-all">
                      00020126580014br.gov.bcb.pix...
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Botão de Pagamento */}
            {!showPixQR && (
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isProcessing ? (
                  <>
                    <div className="w-6 h-6 border-3 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Processando...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-6 h-6" />
                    <span>Pagar Agora - R$ {finalPrice.toFixed(2)}</span>
                  </>
                )}
              </button>
            )}

            {/* Garantias */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Garantia de 7 Dias</h4>
                  <p className="text-gray-400 text-sm">
                    Se você não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                  </p>
                </div>
              </div>
            </div>

            {/* Segurança */}
            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Stripe Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
