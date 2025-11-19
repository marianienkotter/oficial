/**
 * EXEMPLO DE USO DO SISTEMA DE TRADUÇÃO MULTILÍNGUE
 * Elite Life - Sistema i18n
 * 
 * Este arquivo demonstra como usar o sistema de tradução em seus componentes.
 */

"use client";

import { useLanguage } from '@/lib/i18n/language-context';
import { Button } from '@/components/ui/button';

export function ExemploTraducao() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="p-8 space-y-6">
      {/* EXEMPLO 1: Tradução básica de textos */}
      <div>
        <h1 className="text-3xl font-bold">{t('nav.home')}</h1>
        <p className="text-gray-600">{t('nav.courses')}</p>
      </div>

      {/* EXEMPLO 2: Tradução em botões */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          {t('button.start')}
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          {t('button.continue')}
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">
          {t('button.cancel')}
        </button>
      </div>

      {/* EXEMPLO 3: Tradução em formulários */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            {t('profile.name')}
          </label>
          <input
            type="text"
            placeholder={t('profile.name')}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {t('profile.age')}
          </label>
          <input
            type="number"
            placeholder={t('profile.age')}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button type="submit" className="px-6 py-2 bg-[#D4AF37] text-black rounded">
          {t('button.save')}
        </button>
      </form>

      {/* EXEMPLO 4: Tradução em listas */}
      <div>
        <h2 className="text-2xl font-bold mb-4">{t('courses.title')}</h2>
        <ul className="space-y-2">
          <li className="p-3 bg-gray-100 rounded">
            {t('courses.inProgress')}: 5
          </li>
          <li className="p-3 bg-gray-100 rounded">
            {t('courses.completed')}: 12
          </li>
          <li className="p-3 bg-gray-100 rounded">
            {t('courses.locked')}: 3
          </li>
        </ul>
      </div>

      {/* EXEMPLO 5: Tradução em notificações */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold">{t('notifications.welcome.title')}</h3>
        <p className="text-sm">{t('notifications.welcome.message')}</p>
      </div>

      {/* EXEMPLO 6: Mostrar idioma atual */}
      <div className="p-4 bg-gray-100 rounded">
        <p className="font-semibold">Idioma atual: {language}</p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setLanguage('pt')}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm"
          >
            Português
          </button>
          <button
            onClick={() => setLanguage('en')}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            English
          </button>
          <button
            onClick={() => setLanguage('es')}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm"
          >
            Español
          </button>
        </div>
      </div>

      {/* EXEMPLO 7: Tradução em cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">{t('plans.free')}</h3>
          <p className="text-gray-600">{t('plans.monthly')}</p>
          <button className="mt-4 w-full px-4 py-2 bg-[#D4AF37] text-black rounded">
            {t('button.start')}
          </button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">{t('plans.pro')}</h3>
          <p className="text-gray-600">{t('plans.monthly')}</p>
          <button className="mt-4 w-full px-4 py-2 bg-[#D4AF37] text-black rounded">
            {t('button.upgrade')}
          </button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">{t('plans.elite')}</h3>
          <p className="text-gray-600">{t('plans.yearly')}</p>
          <button className="mt-4 w-full px-4 py-2 bg-[#D4AF37] text-black rounded">
            {t('button.upgrade')}
          </button>
        </div>
      </div>

      {/* EXEMPLO 8: Tradução em mensagens de status */}
      <div className="space-y-2">
        <div className="p-3 bg-green-50 border border-green-200 rounded">
          ✅ {t('message.success')}
        </div>
        <div className="p-3 bg-red-50 border border-red-200 rounded">
          ❌ {t('message.error')}
        </div>
        <div className="p-3 bg-blue-50 border border-blue-200 rounded">
          ⏳ {t('message.loading')}
        </div>
        <div className="p-3 bg-green-50 border border-green-200 rounded">
          💾 {t('message.saved')}
        </div>
      </div>

      {/* EXEMPLO 9: Tradução em timestamps */}
      <div className="space-y-2">
        <p>{t('time.now')}</p>
        <p>5{t('time.minutesAgo')}</p>
        <p>2{t('time.hoursAgo')}</p>
        <p>3{t('time.daysAgo')}</p>
      </div>
    </div>
  );
}

/**
 * COMO ADICIONAR NOVAS TRADUÇÕES:
 * 
 * 1. Abra o arquivo: src/lib/i18n/translations.ts
 * 
 * 2. Adicione a nova chave em TODOS os idiomas:
 * 
 * pt: {
 *   'minha.chave': 'Meu texto em português',
 * },
 * en: {
 *   'minha.chave': 'My text in English',
 * },
 * es: {
 *   'minha.chave': 'Mi texto en español',
 * },
 * // ... e assim por diante para todos os 10 idiomas
 * 
 * 3. Use no componente:
 *    {t('minha.chave')}
 * 
 * IMPORTANTE:
 * - Sempre adicione a tradução em TODOS os idiomas
 * - Use pontos (.) para organizar hierarquicamente: 'secao.subsecao.chave'
 * - Mantenha consistência nos nomes das chaves
 * - Teste em pelo menos 2-3 idiomas diferentes
 */
