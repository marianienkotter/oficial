// FAQ interno da IA Elite Life
export const faqData = [
  {
    question: "Como funciona o quiz?",
    answer: "O quiz é uma forma interativa de testar seus conhecimentos. Você responde perguntas sobre os conteúdos estudados e ganha XP a cada acerto. Quanto mais você acerta, mais pontos acumula no ranking!",
    category: "plataforma",
  },
  {
    question: "Como acessar vídeos premium?",
    answer: "Vídeos premium estão disponíveis nos planos Pro, Pro Plus, Elite e Anual. Faça upgrade do seu plano para ter acesso completo à biblioteca de vídeos.",
    category: "plataforma",
  },
  {
    question: "Como ver certificados?",
    answer: "Seus certificados ficam salvos na área 'Certificados'. Complete cursos e trilhas para ganhar novos certificados que comprovam seu aprendizado.",
    category: "plataforma",
  },
  {
    question: "Como subir no ranking?",
    answer: "Para subir no ranking, você precisa:\n• Completar cursos e atividades\n• Fazer quiz e acertar questões\n• Manter sua sequência de estudos (streak)\n• Assistir vídeos completos\n• Participar ativamente da plataforma",
    category: "gamificação",
  },
  {
    question: "Como funciona o pagamento pelo PIX?",
    answer: "No checkout, selecione a opção PIX. Um QR Code será gerado para você escanear com o app do seu banco. Após o pagamento, seu plano é ativado automaticamente em até 5 minutos.",
    category: "pagamento",
  },
  {
    question: "Como mudar o idioma do app?",
    answer: "Vá em Configurações > Idioma e selecione o idioma desejado. Atualmente suportamos Português, Inglês e Espanhol.",
    category: "configurações",
  },
  {
    question: "Como editar o perfil?",
    answer: "Clique no seu avatar no canto superior direito e selecione 'Editar Perfil'. Lá você pode alterar nome, foto, idade e outras informações pessoais.",
    category: "conta",
  },
  {
    question: "Como cancelar assinatura?",
    answer: "Vá em Configurações > Assinatura > Cancelar Plano. Você continuará tendo acesso até o fim do período pago.",
    category: "pagamento",
  },
  {
    question: "Como recuperar senha?",
    answer: "Na tela de login, clique em 'Esqueci minha senha'. Digite seu e-mail e você receberá um link para criar uma nova senha.",
    category: "conta",
  },
  {
    question: "O que está incluído no plano Elite?",
    answer: "O plano Elite inclui:\n• Acesso total a todos os cursos\n• Biblioteca completa de vídeos\n• Quiz ilimitado\n• IA Premium personalizada\n• Carteira Inteligente\n• Certificados\n• Ranking e medalhas\n• Suporte prioritário\n• Conteúdo exclusivo",
    category: "planos",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer: "🆓 **Free**: Recursos básicos limitados\n🟡 **Pro**: Cursos, vídeos e certificados\n🟠 **Pro Plus**: Quase tudo, exceto IA Premium e Carteira\n🟣 **Elite/Anual**: Acesso total + recursos exclusivos\n🔵 **Influencer Pro**: Foco em criadores de conteúdo\n🟤 **E-commerce Pro**: Foco em vendas online",
    category: "planos",
  },
  {
    question: "Como funciona a Carteira Inteligente?",
    answer: "A Carteira Inteligente é uma ferramenta de gestão financeira que te ajuda a:\n• Controlar receitas e despesas\n• Definir metas financeiras\n• Acompanhar investimentos\n• Receber dicas personalizadas de economia\n\nDisponível nos planos Elite e Anual.",
    category: "recursos",
  },
  {
    question: "O que é a IA Premium?",
    answer: "A IA Premium é sua assistente pessoal que:\n• Cria planos de estudo personalizados\n• Responde dúvidas sobre conteúdos\n• Sugere próximos passos na sua jornada\n• Analisa seu progresso\n• Dá feedback sobre atividades\n\nDisponível nos planos Elite e Anual.",
    category: "recursos",
  },
  {
    question: "Como funciona o sistema de XP e níveis?",
    answer: "Você ganha XP (pontos de experiência) ao:\n• Completar aulas e cursos\n• Acertar questões no quiz\n• Assistir vídeos completos\n• Manter sequência de estudos\n\nAo acumular XP suficiente, você sobe de nível e desbloqueia recompensas!",
    category: "gamificação",
  },
  {
    question: "O que são medalhas e como ganhar?",
    answer: "Medalhas são conquistas especiais que você ganha ao:\n• Completar trilhas de aprendizado\n• Atingir marcos de estudo (10h, 50h, 100h)\n• Manter sequências longas (7, 30, 90 dias)\n• Alcançar posições no ranking\n• Completar desafios especiais",
    category: "gamificação",
  },
];

// Função para buscar resposta no FAQ
export function searchFAQ(query: string): string | null {
  const lowerQuery = query.toLowerCase();
  
  const match = faqData.find(item => 
    item.question.toLowerCase().includes(lowerQuery) ||
    item.answer.toLowerCase().includes(lowerQuery) ||
    lowerQuery.includes(item.question.toLowerCase().split(" ")[0])
  );

  return match ? match.answer : null;
}

// Função para obter FAQs por categoria
export function getFAQByCategory(category: string) {
  return faqData.filter(item => item.category === category);
}

// Todas as categorias disponíveis
export const faqCategories = [
  "plataforma",
  "planos",
  "pagamento",
  "conta",
  "configurações",
  "recursos",
  "gamificação",
];
