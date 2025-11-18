'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Prevenir erros de navegação
    const handleError = (e: ErrorEvent) => {
      if (e.message.includes('Load failed') || e.message.includes('RSC payload')) {
        e.preventDefault();
        console.log('Navigation error prevented');
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-400 mb-8">
          A página que você está procurando não existe.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-bold hover:shadow-xl hover:shadow-[#D4AF37]/50 transition-all"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
}
