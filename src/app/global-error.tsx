'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Suprimir erros de chunk loading e RSC payload em ambiente de desenvolvimento
    const errorMessage = error.message || '';
    
    const suppressedErrors = [
      'Failed to load chunk',
      'Failed to fetch RSC payload',
      'Load failed',
      'hmr-client',
      '__nextjs_original-stack-frames',
    ];
    
    const shouldSuppress = suppressedErrors.some(msg => 
      errorMessage.toLowerCase().includes(msg.toLowerCase())
    );
    
    if (shouldSuppress) {
      // Não fazer nada - erro suprimido
      console.log('[Dev] Erro de desenvolvimento suprimido:', errorMessage.substring(0, 100));
      return;
    }
    
    // Log apenas erros reais
    console.error('[Global Error]', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-2">
              Algo deu errado
            </h2>
            
            <p className="text-gray-400 mb-6">
              Ocorreu um erro inesperado. Tente recarregar a página.
            </p>
            
            <button
              onClick={() => reset()}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
            >
              Tentar Novamente
            </button>
            
            <a
              href="/"
              className="block mt-4 text-[#D4AF37] hover:text-amber-500 transition-colors"
            >
              Voltar para o início
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
