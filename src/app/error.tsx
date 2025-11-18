'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log do erro para debugging
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-600 mb-6">
          <AlertTriangle className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-3xl font-black text-white mb-4">
          Algo deu errado
        </h1>
        
        <p className="text-gray-400 mb-8">
          Não se preocupe, isso acontece. Tente recarregar a página ou voltar para o início.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-bold hover:shadow-xl hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Tentar Novamente
          </button>
          
          <Link
            href="/"
            className="px-6 py-3 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-bold hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}
