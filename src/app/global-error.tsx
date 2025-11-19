'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error caught:', error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body className="bg-[#000000]">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-600 mb-6">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl font-black text-white mb-4">
              Erro Crítico
            </h1>
            
            <p className="text-gray-400 mb-8">
              Ocorreu um erro inesperado. Por favor, recarregue a página.
            </p>
            
            <button
              onClick={reset}
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-bold hover:shadow-xl hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2 mx-auto"
            >
              <RefreshCw className="w-5 h-5" />
              Recarregar Página
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
