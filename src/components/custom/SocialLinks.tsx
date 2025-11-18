"use client";

import { Instagram, Send, MessageCircle } from "lucide-react";

// Ícone customizado do Discord (Lucide não tem Discord oficial)
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/elitelife_experience",
    icon: <Instagram className="w-5 h-5" />
  },
  {
    name: "Telegram",
    url: "https://t.me/boost/elitelifeApp",
    icon: <Send className="w-5 h-5" />
  },
  {
    name: "Discord",
    url: "https://discord.gg/yVPMQG8tk",
    icon: <DiscordIcon className="w-5 h-5" />
  },
  {
    name: "WhatsApp",
    url: "https://whatsapp.com/channel/0029Vb79nXTBvvsjVktkoE05",
    icon: <MessageCircle className="w-5 h-5" />
  }
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative flex items-center justify-center
            w-12 h-12 rounded-full
            bg-[#0D0D0D] border-2 border-[#D4AF37]/40
            hover:border-[#D4AF37] hover:bg-[#D4AF37]/10
            transition-all duration-300 ease-in-out
            hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]
            cursor-pointer
          "
          aria-label={`Visite nosso ${social.name}`}
        >
          {/* Glow effect dourado */}
          <div className="
            absolute inset-0 rounded-full
            bg-[#D4AF37] opacity-0 group-hover:opacity-20
            blur-xl transition-opacity duration-300
          " />
          
          {/* Icon - branco/dourado */}
          <div className="relative z-10 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
            {social.icon}
          </div>

          {/* Tooltip premium */}
          <div className="
            absolute -bottom-12 left-1/2 -translate-x-1/2
            px-4 py-2 rounded-lg
            bg-[#0D0D0D] backdrop-blur-sm
            text-[#D4AF37] text-xs font-bold
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none whitespace-nowrap
            border-2 border-[#D4AF37]/50
            shadow-[0_0_15px_rgba(212,175,55,0.4)]
          ">
            {social.name}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#D4AF37] rotate-45" />
          </div>
        </a>
      ))}
    </div>
  );
}
