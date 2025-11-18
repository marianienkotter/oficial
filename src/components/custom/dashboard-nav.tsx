"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Video,
  Calendar,
  BarChart3,
  Wallet,
  TrendingUp,
  ShoppingCart,
  Users,
  Trophy,
  User,
  Bell,
  Globe,
  Lock,
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { PremiumModal } from "./premium-modal";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  locked: boolean;
  requiredPlan?: string;
}

interface DashboardNavProps {
  userPlan?: "free" | "pro" | "proplus" | "elite" | "anual" | "influencer" | "ecommerce";
}

export function DashboardNav({ userPlan = "free" }: DashboardNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [premiumModal, setPremiumModal] = useState<{ isOpen: boolean; feature: string; requiredPlan: string }>({
    isOpen: false,
    feature: "",
    requiredPlan: "Pro"
  });

  // Define quais recursos estão desbloqueados por plano
  const unlockedFeatures = {
    free: ["inicio", "afiliados", "ranking"],
    pro: ["inicio", "cursos", "videos", "agenda", "tracker", "afiliados", "ranking"],
    proplus: ["inicio", "cursos", "videos", "agenda", "tracker", "afiliados", "ranking"],
    elite: ["inicio", "cursos", "videos", "agenda", "tracker", "carteira", "afiliados", "ranking"],
    anual: ["inicio", "cursos", "videos", "agenda", "tracker", "carteira", "afiliados", "ranking"],
    influencer: ["inicio", "cursos", "videos", "agenda", "tracker", "influencer", "afiliados", "ranking"],
    ecommerce: ["inicio", "cursos", "videos", "agenda", "tracker", "ecommerce", "afiliados", "ranking"]
  };

  const isFeatureUnlocked = (featureId: string) => {
    return unlockedFeatures[userPlan]?.includes(featureId) || false;
  };

  const navItems: NavItem[] = [
    {
      name: "Início",
      href: "/dashboard",
      icon: <Home className="w-5 h-5" />,
      locked: !isFeatureUnlocked("inicio")
    },
    {
      name: "Cursos",
      href: "/courses",
      icon: <BookOpen className="w-5 h-5" />,
      locked: !isFeatureUnlocked("cursos"),
      requiredPlan: "Pro"
    },
    {
      name: "Vídeos",
      href: "/videos",
      icon: <Video className="w-5 h-5" />,
      locked: !isFeatureUnlocked("videos"),
      requiredPlan: "Pro"
    },
    {
      name: "Agenda",
      href: "/agenda",
      icon: <Calendar className="w-5 h-5" />,
      locked: !isFeatureUnlocked("agenda"),
      requiredPlan: "Pro"
    },
    {
      name: "Tracker",
      href: "/tracker",
      icon: <BarChart3 className="w-5 h-5" />,
      locked: !isFeatureUnlocked("tracker"),
      requiredPlan: "Pro"
    },
    {
      name: "Carteira",
      href: "/wallet",
      icon: <Wallet className="w-5 h-5" />,
      locked: !isFeatureUnlocked("carteira"),
      requiredPlan: "Elite"
    },
    {
      name: "Influencer Pro",
      href: "/influencer",
      icon: <TrendingUp className="w-5 h-5" />,
      locked: !isFeatureUnlocked("influencer"),
      requiredPlan: "Influencer Pro"
    },
    {
      name: "E-commerce",
      href: "/ecommerce",
      icon: <ShoppingCart className="w-5 h-5" />,
      locked: !isFeatureUnlocked("ecommerce"),
      requiredPlan: "E-commerce Pro"
    },
    {
      name: "Afiliados",
      href: "/affiliates",
      icon: <Users className="w-5 h-5" />,
      locked: !isFeatureUnlocked("afiliados")
    },
    {
      name: "Ranking",
      href: "/ranking",
      icon: <Trophy className="w-5 h-5" />,
      locked: !isFeatureUnlocked("ranking")
    }
  ];

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.locked) {
      e.preventDefault();
      setPremiumModal({
        isOpen: true,
        feature: item.name,
        requiredPlan: item.requiredPlan || "Pro"
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-[#D4AF37]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white">ELITE LIFE</span>
            </Link>

            {/* Navigation Items */}
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    item.locked
                      ? "text-[#9A9A9A] hover:text-white hover:bg-[#1A1A1A] cursor-not-allowed"
                      : "text-white hover:text-[#D4AF37] hover:bg-[#1A1A1A]"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                  {item.locked && <Lock className="w-4 h-4" />}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-[#D4AF37] transition-colors">
                <Bell className="w-6 h-6" />
              </button>
              <button className="text-white hover:text-[#D4AF37] transition-colors">
                <Globe className="w-6 h-6" />
              </button>
              <Link
                href="/profile"
                className="w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center"
              >
                <User className="w-5 h-5 text-[#0B0B0B]" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-[#D4AF37]/20 z-50">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-xl font-bold text-white">ELITE LIFE</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-[#1A1A1A] border-t border-[#D4AF37]/20">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(item, e);
                    if (!item.locked) setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    item.locked
                      ? "text-[#9A9A9A] hover:text-white hover:bg-[#2A2A2A]"
                      : "text-white hover:text-[#D4AF37] hover:bg-[#2A2A2A]"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.locked && <Lock className="w-4 h-4 ml-auto" />}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Premium Modal */}
      <PremiumModal
        isOpen={premiumModal.isOpen}
        onClose={() => setPremiumModal({ ...premiumModal, isOpen: false })}
        feature={premiumModal.feature}
        requiredPlan={premiumModal.requiredPlan}
      />
    </>
  );
}
