"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

export default function AfiliadosPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div
      className="min-h-screen bg-black text-white flex items-center justify-center p-4 cursor-pointer"
      onClick={handleClick}
    >
      {/* Pop-up de "Ainda não disponível" */}
      {showPopup && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <div className="bg-black/90 backdrop-blur-sm border border-yellow-500/50 rounded-2xl px-6 py-4 shadow-2xl shadow-yellow-500/20">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚧</span>
              <p className="text-white font-medium">
                Este recurso ainda não está disponível. Em breve no Elite Life!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Card principal com cadeado */}
      <div className="max-w-2xl w-full">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-yellow-500/10">
          {/* Ícone de cadeado grande */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-full">
                <Lock className="w-16 h-16 text-black" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Programa de Afiliados Elite Life
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-center text-gray-300 mb-6">
            Lançamento previsto para breve
          </p>

          {/* Texto descritivo */}
          <p className="text-center text-gray-400 mb-8 max-w-md mx-auto">
            Este recurso está em desenvolvimento e será liberado em futuras
            atualizações.
          </p>

          {/* Botão bloqueado */}
          <div className="flex justify-center">
            <button
              disabled
              className="bg-gray-800 text-gray-500 px-8 py-4 rounded-xl font-semibold cursor-not-allowed border border-gray-700 flex items-center gap-3 opacity-50"
            >
              <Lock className="w-5 h-5" />
              Acessar Programa
            </button>
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">💰</div>
                <p className="text-sm text-gray-400">Comissões Atrativas</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📊</div>
                <p className="text-sm text-gray-400">Dashboard Completo</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-sm text-gray-400">Suporte Dedicado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Texto de rodapé */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Cadastre-se na lista de espera para ser notificado quando o programa
          for lançado
        </p>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translate(-50%, 100%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
