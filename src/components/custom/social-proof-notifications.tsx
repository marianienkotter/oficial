"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, DollarSign, GraduationCap, Trophy, Award, TrendingUp } from "lucide-react";

// Banco de 200 nomes fictícios brasileiros
const NAMES = [
  "Mariana S.", "Carlos T.", "João R.", "Lucas P.", "Bianca G.", "Henrique L.",
  "Julia C.", "Pedro V.", "Marcela H.", "João P.", "Amanda Q.", "Rodrigo E.",
  "Tainá M.", "Roberta F.", "Eduardo M.", "Ana Paula L.", "Felipe S.", "Camila R.",
  "Bruno M.", "Larissa F.", "Rafael O.", "Beatriz A.", "Thiago N.", "Fernanda C.",
  "Gabriel P.", "Juliana M.", "Diego S.", "Patrícia L.", "Vinicius R.", "Renata B.",
  "André F.", "Carolina T.", "Matheus G.", "Isabela S.", "Leonardo D.", "Priscila M.",
  "Gustavo A.", "Vanessa P.", "Ricardo H.", "Daniela F.", "Marcelo V.", "Tatiana R.",
  "Paulo C.", "Adriana S.", "Rodrigo M.", "Letícia O.", "Fernando B.", "Cristina L.",
  "Alexandre N.", "Mônica G.", "Fábio T.", "Luciana A.", "Sérgio P.", "Simone R.",
  "Márcio F.", "Elaine M.", "Roberto S.", "Viviane C.", "Anderson L.", "Karina B.",
  "William O.", "Aline T.", "Leandro G.", "Natália F.", "Igor M.", "Bruna S.",
  "César A.", "Jéssica R.", "Murilo P.", "Débora L.", "Caio N.", "Raquel M.",
  "Renan T.", "Michele F.", "Douglas S.", "Sabrina C.", "Fábio R.", "Carla O.",
  "Vinícius B.", "Thaís G.", "Guilherme L.", "Lívia A.", "Marcos P.", "Silvia M.",
  "Edson F.", "Cláudia T.", "Júlio S.", "Regina C.", "Antônio R.", "Marcia L.",
  "José N.", "Sandra G.", "Francisco M.", "Vera P.", "Luiz A.", "Helena F.",
  "Pedro H.", "Sônia R.", "Jorge T.", "Lúcia S.", "Manoel C.", "Rosa M.",
  "Miguel O.", "Maria L.", "Joaquim B.", "Tereza G.", "Sebastião P.", "Aparecida N.",
  "Raimundo F.", "Conceição A.", "Benedito M.", "Francisca R.", "Geraldo T.", "Antônia S.",
  "Valdir C.", "Terezinha L.", "Osvaldo O.", "Marlene B.", "Waldir G.", "Irene P.",
  "Davi N.", "Neusa F.", "Samuel A.", "Célia M.", "Isaac R.", "Marta T.",
  "Elias S.", "Sueli C.", "Josué L.", "Vera Lúcia O.", "Ezequiel B.", "Maria José G.",
  "Daniel P.", "Ana Maria N.", "Nathan F.", "Fátima A.", "Enzo M.", "Rosângela R.",
  "Arthur T.", "Solange S.", "Heitor C.", "Ivone L.", "Bernardo O.", "Neuza B.",
  "Lorenzo G.", "Marlene P.", "Benício N.", "Dalva F.", "Théo A.", "Zilda M.",
  "Pietro R.", "Dirce T.", "Gael S.", "Olga C.", "Davi Lucca L.", "Nair O.",
  "Anthony B.", "Odete G.", "João Miguel P.", "Lourdes N.", "Enzo Gabriel F.", "Glória A.",
  "João Pedro M.", "Nilza R.", "Murilo T.", "Eunice S.", "Pedro Henrique C.", "Alzira L.",
  "Arthur Miguel O.", "Joana B.", "Davi Lucas G.", "Ester P.", "Bryan N.", "Noêmia F.",
  "Kaique A.", "Edna M.", "Erick R.", "Ivete T.", "Nicolas S.", "Cleusa C.",
  "Cauã L.", "Zuleica O.", "Yuri B.", "Nilce G.", "Otávio P.", "Diva N.",
  "Ian F.", "Elza A.", "Caleb M.", "Nilda R.", "João Vitor T.", "Dalila S.",
  "Ryan C.", "Elisa L.", "Benício O.", "Hilda B.", "Davi Miguel G.", "Edith P.",
  "Enrico N.", "Norma F.", "João Lucas A.", "Olívia M.", "Theo R.", "Inês T.",
  "Levi S.", "Josélia C.", "Bento L.", "Amélia O.", "Joaquim B.", "Luzia G.",
];

// Tipos de notificações com ícones e mensagens
const NOTIFICATION_TYPES = [
  // Compras de planos
  {
    type: "purchase",
    icon: ShoppingCart,
    color: "text-yellow-400",
    messages: [
      "acabou de adquirir o Plano Elite!",
      "assinou o Pro Plus agora mesmo.",
      "entrou para o Plano Influencer Pro.",
      "acabou de se tornar membro Elite!",
      "assinou o plano Pro Plus há poucos minutos.",
      "entrou para a Elite Life agora!",
    ],
  },
  // Ganhos financeiros
  {
    type: "earnings",
    icon: DollarSign,
    color: "text-green-400",
    messages: [
      "fez R$ 2.400 essa semana aplicando o módulo de E-commerce!",
      "faturou R$ 750 em 24h usando as estratégias da Elite Life.",
      "bateu R$ 10.000 no mês após aplicar o curso de Mindset + Finanças.",
      "conquistou R$ 5.200 em vendas online este mês!",
      "fez R$ 1.800 em comissões de afiliados.",
      "alcançou R$ 3.500 de lucro com investimentos.",
    ],
  },
  // Progresso no curso
  {
    type: "progress",
    icon: GraduationCap,
    color: "text-blue-400",
    messages: [
      "concluiu o Curso de Investimentos para Iniciantes.",
      "finalizou o Módulo 4 – Análise de Mercado.",
      "completou 7 atividades hoje!",
      "terminou o curso de E-commerce com 100%!",
      "concluiu o Módulo de Mindset Empreendedor.",
      "finalizou todas as aulas de Produtividade.",
    ],
  },
  // Medalhas e ranking
  {
    type: "achievement",
    icon: Trophy,
    color: "text-purple-400",
    messages: [
      "conquistou a Medalha de Prata!",
      "subiu para o Top 50 do ranking.",
      "recebeu 500 XP por terminar um curso!",
      "desbloqueou a Medalha de Ouro!",
      "entrou no Top 10 do ranking global!",
      "conquistou a Medalha Diamante!",
    ],
  },
  // Influencer Pro
  {
    type: "influencer",
    icon: TrendingUp,
    color: "text-pink-400",
    messages: [
      "criou uma thumbnail viral no Influencer Pro.",
      "gerou hashtags otimizadas pela IA agora mesmo.",
      "baixou uma das 400 dietas personalizadas.",
      "criou um script viral usando a IA.",
      "gerou uma agenda personalizada de conteúdo.",
      "criou 5 thumbnails profissionais hoje!",
    ],
  },
];

interface Notification {
  id: string;
  name: string;
  message: string;
  icon: any;
  color: string;
  avatar: string;
}

export function SocialProofNotifications() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    const showNotification = () => {
      // Gerar notificação aleatória
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const randomType = NOTIFICATION_TYPES[Math.floor(Math.random() * NOTIFICATION_TYPES.length)];
      
      // Garantir que não repete a mesma mensagem
      let randomMessage;
      do {
        randomMessage = randomType.messages[Math.floor(Math.random() * randomType.messages.length)];
      } while (randomMessage === lastMessage && randomType.messages.length > 1);
      
      setLastMessage(randomMessage);

      // Gerar avatar com iniciais
      const initials = randomName.split(" ").map(n => n[0]).join("");
      const avatarColor = `hsl(${Math.random() * 360}, 70%, 50%)`;

      const newNotification: Notification = {
        id: Date.now().toString(),
        name: randomName,
        message: randomMessage,
        icon: randomType.icon,
        color: randomType.color,
        avatar: avatarColor,
      };

      setNotification(newNotification);
      setIsVisible(true);

      // Esconder após 5 segundos
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setNotification(null), 500); // Tempo para animação de saída
      }, 5000);
    };

    // Primeira notificação após 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);

    // Notificações subsequentes a cada 20-45 segundos
    const interval = setInterval(() => {
      const randomDelay = Math.random() * (45000 - 20000) + 20000;
      setTimeout(showNotification, randomDelay);
    }, 45000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [lastMessage]);

  if (!notification) return null;

  const Icon = notification.icon;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-black/70 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 shadow-2xl max-w-sm flex items-start gap-3 hover:border-yellow-500/50 transition-colors">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: notification.avatar }}
        >
          {notification.name.split(" ").map(n => n[0]).join("")}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Icon className={`w-4 h-4 ${notification.color}`} />
            <p className="text-white font-semibold text-sm truncate">
              {notification.name}
            </p>
          </div>
          <p className="text-gray-300 text-xs leading-relaxed">
            {notification.message}
          </p>
        </div>
      </div>
    </div>
  );
}
