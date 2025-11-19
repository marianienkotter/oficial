"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CreditCard,
  Smartphone,
  Check,
  ArrowLeft,
  Crown,
  Shield,
  Clock,
  QrCode,
  Copy,
  CheckCircle,
  Zap,
  Lock,
  Sparkles,
  Trophy
} from "lucide-react";

// Success Screen Component
function SuccessScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Success Icon */}
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-[#D4AF37]/30 blur-3xl rounded-full animate-pulse" />
          <div className="relative bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full p-8 shadow-2xl shadow-[#D4AF37]/50 animate-bounce-slow">
            <Trophy className="w-24 h-24 text-black" />
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 animate-gradient">
            BEM-VINDO À
          </h1>
          <h2 className="text-6xl sm:text-8xl font-black text-white tracking-wider animate-fade-in-up">
            VIDA DE ELITE
          </h2>
          <div className="flex items-center justify-center gap-3 text-[#D4AF37] animate-fade-in-up animation-delay-200">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <p className="text-xl sm:text-2xl font-semibold">
              Sua jornada de transformação começa agora!
            </p>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 animate-fade-in-up animation-delay-400">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <p className="text-white font-bold">Pagamento Confirmado</p>
          </div>
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all">
            <Zap className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
            <p className="text-white font-bold">Acesso Liberado</p>
          </div>
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all">
            <Crown className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
            <p className="text-white font-bold">Você é Elite Agora</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-full font-black text-xl hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 animate-pulse-glow"
        >
          <Sparkles className="w-6 h-6" />
          Começar Minha Jornada
          <Sparkles className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");

  const [paymentMethod, setPaymentMethod] = useState<"pix" | "credit" | "debit">("credit");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [processing, setProcessing] = useState(false);
  const [pixGenerated, setPixGenerated] = useState(false);
  const [pixCode, setPixCode] = useState("");
  const [countdown, setCountdown] = useState(600); // 10 minutos
  const [copied, setCopied] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Card form state
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
    installments: "1"
  });

  const plans = {
    pro: {
      name: "Pro",
      price: 49.90,
      period: "mensal",
      features: [
        "Acesso aos cursos principais",
        "Acesso completo aos vídeos",
        "Certificados",
        "Trilhas avançadas",
        "Ranking Pro"
      ]
    },
    "pro-plus": {
      name: "Pro Plus",
      price: 79.90,
      period: "mensal",
      features: [
        "Tudo do Pro +",
        "Agenda Premium",
        "IA Tutor ilimitada",
        "Lives Privadas",
        "Comunidade VIP",
        "Medalhas especiais",
        "XP Premium",
        "Suporte prioritário",
        "Badge Especial no Perfil"
      ]
    },
    elite: {
      name: "Elite",
      price: 89.90,
      period: "mensal",
      features: [
        "Tudo do Pro Plus +",
        "Influencer Pro",
        "E-commerce Pro",
        "Ranking Elite",
        "Acesso antecipado a novos cursos"
      ]
    },
    "ecommerce-pro": {
      name: "E-commerce Pro",
      price: 89.90,
      period: "mensal",
      features: [
        "Tudo do Pro Plus +",
        "E-commerce Pro completo",
        "Ranking Elite",
        "Acesso antecipado a novos cursos",
        "Ferramentas de vendas avançadas"
      ]
    },
    "influencer-pro": {
      name: "Influencer Pro",
      price: 39.99,
      period: "mensal",
      features: [
        "Acesso aos cursos principais",
        "Acesso completo aos vídeos",
        "Certificados",
        "Agenda Premium",
        "IA Tutor ilimitada",
        "Influencer Pro completo",
        "Lives Privadas",
        "Comunidade VIP",
        "Medalhas especiais",
        "XP Premium",
        "Suporte prioritário",
        "Badge Especial no Perfil"
      ]
    }
  };

  const selectedPlan = planId && plans[planId as keyof typeof plans] ? plans[planId as keyof typeof plans] : null;

  const calculateTotal = () => {
    if (!selectedPlan) return 0;
    const basePrice = selectedPlan.price;
    if (appliedCoupon) {
      return basePrice - (basePrice * appliedCoupon.discount / 100);
    }
    return basePrice;
  };

  const applyCoupon = () => {
    const coupons = {
      "ELITE10": 10,
      "ELITE20": 20,
      "ELITE30": 30,
      "BEMVINDO": 15
    };

    const discount = coupons[couponCode.toUpperCase() as keyof typeof coupons];
    if (discount) {
      setAppliedCoupon({ code: couponCode.toUpperCase(), discount });
    }
  };

  const generatePixCode = () => {
    const mockPixCode = `00020126580014br.gov.bcb.pix0136${Math.random().toString(36).substring(2, 15)}520400005303986540${calculateTotal().toFixed(2)}5802BR5913Elite Life6009SAO PAULO62070503***6304${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setPixCode(mockPixCode);
    setPixGenerated(true);
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCardPayment = async () => {
    setProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setProcessing(false);
    setShowSuccess(true);
  };

  const handlePixPayment = async () => {
    if (!pixGenerated) {
      generatePixCode();
    } else {
      setProcessing(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProcessing(false);
      setShowSuccess(true);
    }
  };

  useEffect(() => {
    if (pixGenerated && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [pixGenerated, countdown]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (showSuccess) {
    return <SuccessScreen />;
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Plano não encontrado</h1>
          <Link
            href="/plans"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-full font-bold hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Planos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/30 z-50 shadow-2xl shadow-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full group-hover:bg-[#D4AF37]/30 transition-all" />
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                  alt="Elite Life Logo"
                  className="relative h-10 w-10 sm:h-14 sm:w-14 object-contain rounded-lg drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(212,175,55,0.9)] transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider">
                  ELITE LIFE
                </h1>
                <p className="text-[8px] sm:text-[10px] text-[#D4AF37]/70 font-semibold tracking-widest uppercase hidden sm:block">
                  Checkout Seguro
                </p>
              </div>
            </Link>

            <Link
              href="/plans"
              className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#D4AF37] transition-all font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Plan Summary */}
            <div>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border-2 border-[#D4AF37] mb-6 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Crown className="w-8 h-8 text-[#D4AF37]" />
                    <h2 className="text-3xl font-black text-white">Plano {selectedPlan.name}</h2>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-black text-[#D4AF37]">
                        R$ {calculateTotal().toFixed(2)}
                      </span>
                      <span className="text-gray-400">/{selectedPlan.period}</span>
                    </div>
                    {appliedCoupon && (
                      <div className="mt-2 inline-block bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-bold">
                        Desconto de {appliedCoupon.discount}% aplicado
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-white font-bold text-lg mb-4">O que está incluído:</h3>
                    {selectedPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D4AF37]/20">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <Shield className="w-5 h-5 text-[#D4AF37]" />
                      <span>Pagamento 100% seguro e criptografado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#1A1A1A] rounded-xl p-4 text-center border border-[#D4AF37]/20">
                  <Shield className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                  <span className="text-xs text-gray-400">Pagamento Seguro</span>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl p-4 text-center border border-[#D4AF37]/20">
                  <Zap className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                  <span className="text-xs text-gray-400">Ativação Imediata</span>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl p-4 text-center border border-[#D4AF37]/20">
                  <CheckCircle className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                  <span className="text-xs text-gray-400">Garantia 7 dias</span>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-[#D4AF37]/20">
                <h2 className="text-2xl font-black text-white mb-6">Forma de Pagamento</h2>

                {/* Payment Method Selector */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <button
                    onClick={() => setPaymentMethod("credit")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "credit"
                        ? "border-[#D4AF37] bg-[#D4AF37]/10"
                        : "border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                    }`}
                  >
                    <CreditCard className={`w-6 h-6 mx-auto mb-2 ${
                      paymentMethod === "credit" ? "text-[#D4AF37]" : "text-gray-400"
                    }`} />
                    <span className={`text-xs font-bold ${
                      paymentMethod === "credit" ? "text-[#D4AF37]" : "text-gray-400"
                    }`}>
                      Crédito
                    </span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("debit")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "debit"
                        ? "border-[#D4AF37] bg-[#D4AF37]/10"
                        : "border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                    }`}
                  >
                    <CreditCard className={`w-6 h-6 mx-auto mb-2 ${
                      paymentMethod === "debit" ? "text-[#D4AF37]" : "text-gray-400"
                    }`} />
                    <span className={`text-xs font-bold ${
                      paymentMethod === "debit" ? "text-[#D4AF37]" : "text-gray-400"
                    }`}>
                      Débito
                    </span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("pix")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "pix"
                        ? "border-[#D4AF37] bg-[#D4AF37]/10"
                        : "border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                    }`}
                  >
                    <Smartphone className={`w-6 h-6 mx-auto mb-2 ${
                      paymentMethod === "pix" ? "text-[#D4AF37]" : "text-gray-400"
                    }`} />
                    <span className={`text-xs font-bold ${
                      paymentMethod === "pix" ? "text-[#D4AF37]" : "text-gray-400"
                    }`}>
                      PIX
                    </span>
                  </button>
                </div>

                {/* Coupon Field */}
                <div className="mb-8">
                  <label className="block text-white font-semibold mb-2">Cupom de Desconto</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Digite seu cupom"
                      className="flex-1 px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                      disabled={!!appliedCoupon}
                    />
                    <button
                      onClick={applyCoupon}
                      disabled={!!appliedCoupon || !couponCode}
                      className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {appliedCoupon ? "Aplicado" : "Aplicar"}
                    </button>
                  </div>
                  {appliedCoupon && (
                    <div className="mt-2 flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Cupom aplicado com sucesso! Desconto de {appliedCoupon.discount}%</span>
                    </div>
                  )}
                </div>

                {/* PIX Payment */}
                {paymentMethod === "pix" && (
                  <div className="space-y-6">
                    {!pixGenerated ? (
                      <button
                        onClick={generatePixCode}
                        className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                      >
                        <QrCode className="w-6 h-6" />
                        Gerar Código PIX
                      </button>
                    ) : (
                      <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl">
                          <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4">
                              {Array.from({ length: 64 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={`${
                                    Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                                  } rounded-sm`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-center text-sm text-gray-600 mb-4">
                            Escaneie o QR Code com seu app de pagamento
                          </p>
                          <div className="bg-gray-100 p-3 rounded-lg break-all text-xs text-gray-700 mb-3">
                            {pixCode}
                          </div>
                          <button
                            onClick={copyPixCode}
                            className="w-full py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                          >
                            {copied ? (
                              <>
                                <CheckCircle className="w-5 h-5" />
                                Copiado!
                              </>
                            ) : (
                              <>
                                <Copy className="w-5 h-5" />
                                Copiar Código PIX
                              </>
                            )}
                          </button>
                        </div>

                        <div className="bg-[#2A2A2A] p-4 rounded-xl border border-[#D4AF37]/20">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">Tempo restante:</span>
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-[#D4AF37]" />
                              <span className="text-[#D4AF37] font-bold text-xl">{formatTime(countdown)}</span>
                            </div>
                          </div>
                          <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#D4AF37] to-amber-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${(countdown / 600) * 100}%` }}
                            />
                          </div>
                        </div>

                        <button
                          onClick={handlePixPayment}
                          disabled={processing}
                          className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                          {processing ? (
                            <>
                              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                              Verificando...
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-6 h-6" />
                              Já Paguei
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Card Payment (Credit/Debit) */}
                {(paymentMethod === "credit" || paymentMethod === "debit") && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Nome no Cartão</label>
                      <input
                        type="text"
                        value={cardData.name}
                        onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                        placeholder="João Silva"
                        className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Número do Cartão</label>
                      <input
                        type="text"
                        value={cardData.number}
                        onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
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
                          className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">CVV</label>
                        <input
                          type="text"
                          value={cardData.cvv}
                          onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>

                    {paymentMethod === "credit" && (
                      <div>
                        <label className="block text-white font-semibold mb-2">Parcelas</label>
                        <select
                          value={cardData.installments}
                          onChange={(e) => setCardData({ ...cardData, installments: e.target.value })}
                          className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-xl text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                        >
                          <option value="1">1x de R$ {calculateTotal().toFixed(2)} sem juros</option>
                          <option value="2">2x de R$ {(calculateTotal() / 2).toFixed(2)} sem juros</option>
                          <option value="3">3x de R$ {(calculateTotal() / 3).toFixed(2)} sem juros</option>
                          <option value="4">4x de R$ {(calculateTotal() / 4).toFixed(2)} sem juros</option>
                          <option value="5">5x de R$ {(calculateTotal() / 5).toFixed(2)} sem juros</option>
                          <option value="6">6x de R$ {(calculateTotal() / 6).toFixed(2)} sem juros</option>
                        </select>
                      </div>
                    )}

                    <button
                      onClick={handleCardPayment}
                      disabled={processing || !cardData.name || !cardData.number || !cardData.expiry || !cardData.cvv}
                      className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {processing ? (
                        <>
                          <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin" />
                          Processando...
                        </>
                      ) : (
                        <>
                          <Lock className="w-6 h-6" />
                          Confirmar Pagamento
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
