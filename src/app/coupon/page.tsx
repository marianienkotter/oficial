"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Gift, Copy, Check, ArrowLeft, Sparkles } from 'lucide-react';

export default function CouponPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const couponCode = 'ELITE5';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background decorativo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-b from-slate-900 to-black border-b border-amber-500/20">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-white/10 rounded-full transition-colors mb-4"
          >
            <ArrowLeft className="w-6 h-6 text-amber-400" />
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-4">
              <Gift className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
              Cupom Especial Elite Life
            </h1>
            <p className="text-gray-400">
              Seu prêmio exclusivo está aqui!
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative max-w-2xl mx-auto px-4 py-12">
        {/* Card do Cupom */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-amber-500/30 p-8 mb-6 shadow-2xl shadow-amber-500/10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-semibold uppercase text-sm tracking-wider">
              Desconto Exclusivo
            </span>
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>

          <div className="text-center mb-8">
            <div className="inline-block bg-black/50 rounded-xl px-8 py-6 border-2 border-dashed border-amber-500/50 mb-4">
              <p className="text-gray-400 text-sm mb-2">Código do Cupom</p>
              <p className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent tracking-wider">
                {couponCode}
              </p>
            </div>
            
            <p className="text-2xl font-bold text-white mb-2">
              5% de Desconto
            </p>
            <p className="text-gray-400">
              Use este cupom e ganhe 5% OFF em qualquer plano
            </p>
          </div>

          {/* Botão Copiar */}
          <button
            onClick={handleCopy}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 mb-4"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                Código Copiado!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copiar Código
              </>
            )}
          </button>

          {/* Botão Aplicar */}
          <button
            onClick={() => router.push('/plans')}
            className="w-full bg-white/5 hover:bg-white/10 text-white font-semibold py-4 rounded-xl transition-all duration-300 border border-amber-500/30 hover:border-amber-500/50"
          >
            Aplicar na Página de Pagamento
          </button>
        </div>

        {/* Informações Adicionais */}
        <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Como usar seu cupom:</h3>
          <ol className="space-y-3 text-gray-400">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span>Copie o código do cupom acima</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span>Escolha seu plano na página de assinaturas</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span>Cole o código no campo "Cupom de Desconto"</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span>Aproveite seu desconto exclusivo!</span>
            </li>
          </ol>
        </div>

        {/* Aviso */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            * Cupom válido para todos os planos Elite Life
          </p>
          <p className="text-sm text-gray-500">
            * Não acumulativo com outras promoções
          </p>
        </div>
      </div>
    </div>
  );
}
