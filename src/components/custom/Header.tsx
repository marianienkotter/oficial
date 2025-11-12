'use client';

import { useState } from 'react';
import { Bell, Globe, Menu, X, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getTranslation, type Language } from '@/lib/translations';

export default function Header() {
  const [lang, setLang] = useState<Language>('pt');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const t = (key: string) => getTranslation(lang, key);

  const menuItems = [
    { label: t('home'), href: '#' },
    { label: t('courses'), href: '#cursos' },
    { label: t('moreCourses'), href: '#100-cursos' },
    { label: t('videos'), href: '#videos' },
    { label: t('schedule'), href: '#agenda' },
    { label: t('tracker'), href: '#tracker' },
    { label: t('wallet'), href: '#carteira' },
    { label: t('influencerPro'), href: '#influencer' },
    { label: t('ecommerce'), href: '#ecommerce' },
    { label: t('affiliates'), href: '#afilhados' },
    { label: t('ranking'), href: '#ranking' },
    { label: t('dashboard'), href: '#dashboard' },
    { label: t('certificates'), href: '#certificados' },
    { label: t('aiSupport'), href: '#suporte-ia' },
  ];

  const notifications = [
    { id: 1, text: 'Bem-vindo ao ELITE LIFE! 🎉', read: false },
    { id: 2, text: 'Desconto de 5% disponível', read: false },
    { id: 3, text: 'Lembrete: Treino em 30 minutos', read: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B] border-b border-[#D4AF37]/20">
      {/* Top Bar */}
      <div className="border-b border-[#D4AF37]/10">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
              <span className="text-[#0B0B0B] font-bold text-xl">EL</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[#D4AF37] font-bold text-xl tracking-wider">ELITE LIFE</h1>
              <p className="text-[#9A9A9A] text-xs">Transforme sua vida</p>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
                onClick={() => {
                  const langs: Language[] = ['pt', 'en', 'es'];
                  const currentIndex = langs.indexOf(lang);
                  setLang(langs[(currentIndex + 1) % langs.length]);
                }}
              >
                <Globe className="w-4 h-4 mr-1" />
                <span className="text-xs uppercase">{lang}</span>
              </Button>
            </div>

            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 relative"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <Bell className="w-5 h-5" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </Button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg shadow-2xl overflow-hidden">
                  <div className="p-4 border-b border-[#D4AF37]/10">
                    <h3 className="text-white font-semibold">Notificações</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-4 border-b border-[#D4AF37]/10 hover:bg-[#D4AF37]/5 cursor-pointer ${
                          !notif.read ? 'bg-[#D4AF37]/5' : ''
                        }`}
                      >
                        <p className="text-sm text-white">{notif.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile or Auth Buttons */}
            {isLoggedIn ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center gap-2"
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center">
                    <User className="w-4 h-4 text-[#0B0B0B]" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-xs font-semibold">Maria Silva</p>
                    <p className="text-[10px] text-[#D4AF37]">🏆 Elite Pro</p>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-[#D4AF37]/10">
                      <p className="text-white font-semibold">Maria Silva</p>
                      <p className="text-xs text-[#9A9A9A]">maria@email.com</p>
                    </div>
                    <button className="w-full p-3 text-left text-white hover:bg-[#D4AF37]/10 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Minha Conta
                    </button>
                    <button className="w-full p-3 text-left text-white hover:bg-[#D4AF37]/10 flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Editar Plano
                    </button>
                    <button className="w-full p-3 text-left text-white hover:bg-[#D4AF37]/10 flex items-center gap-2 border-t border-[#D4AF37]/10">
                      <LogOut className="w-4 h-4" />
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
                  onClick={() => setIsLoggedIn(true)}
                >
                  {t('login')}
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B] font-semibold hover:opacity-90"
                  onClick={() => setIsLoggedIn(true)}
                >
                  {t('createAccount')}
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-1 py-3 overflow-x-auto">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-t border-[#D4AF37]/20">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
