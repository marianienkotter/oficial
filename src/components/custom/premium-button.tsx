"use client";

import { ReactNode } from "react";
import { Crown, Sparkles, Zap, Rocket } from "lucide-react";

interface PremiumButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "elite" | "success";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: "crown" | "sparkles" | "zap" | "rocket";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export function PremiumButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  fullWidth = false,
  className = ""
}: PremiumButtonProps) {
  const variants = {
    primary: "from-[#D4AF37] via-amber-500 to-yellow-600 text-black hover:shadow-[#D4AF37]/60",
    secondary: "from-purple-500 to-indigo-600 text-white hover:shadow-purple-500/60",
    elite: "from-[#D4AF37] to-amber-600 text-black hover:shadow-[#D4AF37]/70",
    success: "from-green-500 to-emerald-600 text-white hover:shadow-green-500/60"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  const icons = {
    crown: <Crown className="w-5 h-5" />,
    sparkles: <Sparkles className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    rocket: <Rocket className="w-5 h-5" />
  };

  const baseClasses = `
    relative overflow-hidden
    bg-gradient-to-r ${variants[variant]}
    rounded-full font-bold
    hover:shadow-2xl
    transition-all transform hover:scale-105
    flex items-center justify-center gap-3
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer animate-pulse-glow"}
    ${className}
  `;

  const content = (
    <>
      {icon && <span className="relative z-10">{icons[icon]}</span>}
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={`${baseClasses} group`}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} group`}
    >
      {content}
    </button>
  );
}
