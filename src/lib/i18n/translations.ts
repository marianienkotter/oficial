// Sistema de traduções multilíngue Elite Life
export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de' | 'it' | 'ja' | 'ko' | 'zh' | 'ar';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
];

export const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header e Navegação
    'nav.home': 'Início',
    'nav.courses': 'Cursos',
    'nav.activities': 'Atividades',
    'nav.exams': 'Provas',
    'nav.certificates': 'Certificados',
    'nav.books': 'Livros',
    'nav.movies': 'Filmes',
    'nav.profile': 'Perfil',
    'nav.plans': 'Planos',
    
    // Notificações
    'notifications.title': 'Notificações da Elite Life',
    'notifications.markAllRead': 'Marcar todas como lidas',
    'notifications.empty': 'Nenhuma notificação ainda',
    'notifications.viewAll': 'Ver todas as notificações',
    'notifications.welcome.title': 'Bem-vindo à Elite Life!',
    'notifications.welcome.message': 'Estamos felizes em ter você aqui! Aproveite sua jornada.',
    'notifications.coupon.title': 'Cupom Exclusivo 🎁',
    'notifications.coupon.message': 'Você ganhou 5% OFF! Use o cupom ELITE5-USER123.',
    'notifications.subscription.title': 'Parabéns pela sua assinatura! 🎉',
    'notifications.subscription.message': 'Você desbloqueou novos conteúdos. Sua jornada começa agora!',
    
    // Botões e Ações
    'button.start': 'Começar',
    'button.continue': 'Continuar',
    'button.save': 'Salvar',
    'button.cancel': 'Cancelar',
    'button.close': 'Fechar',
    'button.goToPlans': 'Ir para Planos',
    'button.upgrade': 'Fazer Upgrade',
    'button.download': 'Baixar',
    'button.share': 'Compartilhar',
    
    // Perfil
    'profile.title': 'Meu Perfil',
    'profile.edit': 'Editar Perfil',
    'profile.name': 'Nome',
    'profile.age': 'Idade',
    'profile.bio': 'Descrição',
    'profile.photo': 'Foto de Perfil',
    'profile.changePhoto': 'Alterar Foto',
    'profile.stats': 'Estatísticas',
    'profile.xp': 'XP',
    'profile.level': 'Nível',
    'profile.medals': 'Medalhas',
    'profile.completed': 'Concluídos',
    
    // Planos
    'plans.title': 'Escolha seu Plano',
    'plans.free': 'Gratuito',
    'plans.pro': 'Pro',
    'plans.elite': 'Elite',
    'plans.monthly': 'Mensal',
    'plans.yearly': 'Anual',
    
    // Cursos e Conteúdo
    'courses.title': 'Cursos',
    'courses.inProgress': 'Em Progresso',
    'courses.completed': 'Concluídos',
    'courses.locked': 'Bloqueado',
    'courses.unlock': 'Desbloquear',
    
    // Atividades
    'activities.title': 'Atividades',
    'activities.pending': 'Pendentes',
    'activities.completed': 'Concluídas',
    'activities.submit': 'Enviar',
    
    // Provas
    'exams.title': 'Provas',
    'exams.start': 'Iniciar Prova',
    'exams.timeLeft': 'Tempo Restante',
    'exams.submit': 'Enviar Prova',
    'exams.score': 'Pontuação',
    'exams.passed': 'Aprovado',
    'exams.failed': 'Reprovado',
    
    // Certificados
    'certificates.title': 'Certificados',
    'certificates.download': 'Baixar Certificado',
    'certificates.share': 'Compartilhar',
    'certificates.validate': 'Validar',
    
    // Livros
    'books.title': 'Biblioteca de Livros',
    'books.recommended': 'Recomendados',
    'books.category': 'Categoria',
    
    // Filmes
    'movies.title': 'Cinema Elite',
    'movies.films': 'Filmes',
    'movies.series': 'Séries',
    'movies.documentaries': 'Documentários',
    
    // Mensagens
    'message.success': 'Sucesso!',
    'message.error': 'Erro!',
    'message.loading': 'Carregando...',
    'message.saved': 'Salvo com sucesso!',
    
    // Tempo
    'time.now': 'Agora',
    'time.minutesAgo': 'min atrás',
    'time.hoursAgo': 'h atrás',
    'time.daysAgo': 'd atrás',
  },
  
  en: {
    // Header and Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.activities': 'Activities',
    'nav.exams': 'Exams',
    'nav.certificates': 'Certificates',
    'nav.books': 'Books',
    'nav.movies': 'Movies',
    'nav.profile': 'Profile',
    'nav.plans': 'Plans',
    
    // Notifications
    'notifications.title': 'Elite Life Notifications',
    'notifications.markAllRead': 'Mark all as read',
    'notifications.empty': 'No notifications yet',
    'notifications.viewAll': 'View all notifications',
    'notifications.welcome.title': 'Welcome to Elite Life!',
    'notifications.welcome.message': 'We are happy to have you here! Enjoy your journey.',
    'notifications.coupon.title': 'Exclusive Coupon 🎁',
    'notifications.coupon.message': 'You got 5% OFF! Use coupon ELITE5-USER123.',
    'notifications.subscription.title': 'Congratulations on your subscription! 🎉',
    'notifications.subscription.message': 'You unlocked new content. Your journey starts now!',
    
    // Buttons and Actions
    'button.start': 'Start',
    'button.continue': 'Continue',
    'button.save': 'Save',
    'button.cancel': 'Cancel',
    'button.close': 'Close',
    'button.goToPlans': 'Go to Plans',
    'button.upgrade': 'Upgrade',
    'button.download': 'Download',
    'button.share': 'Share',
    
    // Profile
    'profile.title': 'My Profile',
    'profile.edit': 'Edit Profile',
    'profile.name': 'Name',
    'profile.age': 'Age',
    'profile.bio': 'Bio',
    'profile.photo': 'Profile Photo',
    'profile.changePhoto': 'Change Photo',
    'profile.stats': 'Statistics',
    'profile.xp': 'XP',
    'profile.level': 'Level',
    'profile.medals': 'Medals',
    'profile.completed': 'Completed',
    
    // Plans
    'plans.title': 'Choose your Plan',
    'plans.free': 'Free',
    'plans.pro': 'Pro',
    'plans.elite': 'Elite',
    'plans.monthly': 'Monthly',
    'plans.yearly': 'Yearly',
    
    // Courses and Content
    'courses.title': 'Courses',
    'courses.inProgress': 'In Progress',
    'courses.completed': 'Completed',
    'courses.locked': 'Locked',
    'courses.unlock': 'Unlock',
    
    // Activities
    'activities.title': 'Activities',
    'activities.pending': 'Pending',
    'activities.completed': 'Completed',
    'activities.submit': 'Submit',
    
    // Exams
    'exams.title': 'Exams',
    'exams.start': 'Start Exam',
    'exams.timeLeft': 'Time Left',
    'exams.submit': 'Submit Exam',
    'exams.score': 'Score',
    'exams.passed': 'Passed',
    'exams.failed': 'Failed',
    
    // Certificates
    'certificates.title': 'Certificates',
    'certificates.download': 'Download Certificate',
    'certificates.share': 'Share',
    'certificates.validate': 'Validate',
    
    // Books
    'books.title': 'Book Library',
    'books.recommended': 'Recommended',
    'books.category': 'Category',
    
    // Movies
    'movies.title': 'Elite Cinema',
    'movies.films': 'Films',
    'movies.series': 'Series',
    'movies.documentaries': 'Documentaries',
    
    // Messages
    'message.success': 'Success!',
    'message.error': 'Error!',
    'message.loading': 'Loading...',
    'message.saved': 'Saved successfully!',
    
    // Time
    'time.now': 'Now',
    'time.minutesAgo': 'min ago',
    'time.hoursAgo': 'h ago',
    'time.daysAgo': 'd ago',
  },
  
  es: {
    // Encabezado y Navegación
    'nav.home': 'Inicio',
    'nav.courses': 'Cursos',
    'nav.activities': 'Actividades',
    'nav.exams': 'Exámenes',
    'nav.certificates': 'Certificados',
    'nav.books': 'Libros',
    'nav.movies': 'Películas',
    'nav.profile': 'Perfil',
    'nav.plans': 'Planes',
    
    // Notificaciones
    'notifications.title': 'Notificaciones de Elite Life',
    'notifications.markAllRead': 'Marcar todas como leídas',
    'notifications.empty': 'No hay notificaciones aún',
    'notifications.viewAll': 'Ver todas las notificaciones',
    'notifications.welcome.title': '¡Bienvenido a Elite Life!',
    'notifications.welcome.message': '¡Estamos felices de tenerte aquí! Disfruta tu viaje.',
    'notifications.coupon.title': 'Cupón Exclusivo 🎁',
    'notifications.coupon.message': '¡Obtuviste 5% de descuento! Usa el cupón ELITE5-USER123.',
    'notifications.subscription.title': '¡Felicitaciones por tu suscripción! 🎉',
    'notifications.subscription.message': 'Desbloqueaste nuevo contenido. ¡Tu viaje comienza ahora!',
    
    // Botones y Acciones
    'button.start': 'Comenzar',
    'button.continue': 'Continuar',
    'button.save': 'Guardar',
    'button.cancel': 'Cancelar',
    'button.close': 'Cerrar',
    'button.goToPlans': 'Ir a Planes',
    'button.upgrade': 'Mejorar',
    'button.download': 'Descargar',
    'button.share': 'Compartir',
    
    // Perfil
    'profile.title': 'Mi Perfil',
    'profile.edit': 'Editar Perfil',
    'profile.name': 'Nombre',
    'profile.age': 'Edad',
    'profile.bio': 'Biografía',
    'profile.photo': 'Foto de Perfil',
    'profile.changePhoto': 'Cambiar Foto',
    'profile.stats': 'Estadísticas',
    'profile.xp': 'XP',
    'profile.level': 'Nivel',
    'profile.medals': 'Medallas',
    'profile.completed': 'Completados',
    
    // Planes
    'plans.title': 'Elige tu Plan',
    'plans.free': 'Gratis',
    'plans.pro': 'Pro',
    'plans.elite': 'Elite',
    'plans.monthly': 'Mensual',
    'plans.yearly': 'Anual',
    
    // Cursos y Contenido
    'courses.title': 'Cursos',
    'courses.inProgress': 'En Progreso',
    'courses.completed': 'Completados',
    'courses.locked': 'Bloqueado',
    'courses.unlock': 'Desbloquear',
    
    // Actividades
    'activities.title': 'Actividades',
    'activities.pending': 'Pendientes',
    'activities.completed': 'Completadas',
    'activities.submit': 'Enviar',
    
    // Exámenes
    'exams.title': 'Exámenes',
    'exams.start': 'Iniciar Examen',
    'exams.timeLeft': 'Tiempo Restante',
    'exams.submit': 'Enviar Examen',
    'exams.score': 'Puntuación',
    'exams.passed': 'Aprobado',
    'exams.failed': 'Reprobado',
    
    // Certificados
    'certificates.title': 'Certificados',
    'certificates.download': 'Descargar Certificado',
    'certificates.share': 'Compartir',
    'certificates.validate': 'Validar',
    
    // Libros
    'books.title': 'Biblioteca de Libros',
    'books.recommended': 'Recomendados',
    'books.category': 'Categoría',
    
    // Películas
    'movies.title': 'Cine Elite',
    'movies.films': 'Películas',
    'movies.series': 'Series',
    'movies.documentaries': 'Documentales',
    
    // Mensajes
    'message.success': '¡Éxito!',
    'message.error': '¡Error!',
    'message.loading': 'Cargando...',
    'message.saved': '¡Guardado exitosamente!',
    
    // Tiempo
    'time.now': 'Ahora',
    'time.minutesAgo': 'min atrás',
    'time.hoursAgo': 'h atrás',
    'time.daysAgo': 'd atrás',
  },
  
  fr: {
    // En-tête et Navigation
    'nav.home': 'Accueil',
    'nav.courses': 'Cours',
    'nav.activities': 'Activités',
    'nav.exams': 'Examens',
    'nav.certificates': 'Certificats',
    'nav.books': 'Livres',
    'nav.movies': 'Films',
    'nav.profile': 'Profil',
    'nav.plans': 'Plans',
    
    // Notifications
    'notifications.title': 'Notifications Elite Life',
    'notifications.markAllRead': 'Tout marquer comme lu',
    'notifications.empty': 'Aucune notification pour le moment',
    'notifications.viewAll': 'Voir toutes les notifications',
    'notifications.welcome.title': 'Bienvenue sur Elite Life!',
    'notifications.welcome.message': 'Nous sommes heureux de vous avoir ici! Profitez de votre voyage.',
    'notifications.coupon.title': 'Coupon Exclusif 🎁',
    'notifications.coupon.message': 'Vous avez obtenu 5% de réduction! Utilisez le coupon ELITE5-USER123.',
    'notifications.subscription.title': 'Félicitations pour votre abonnement! 🎉',
    'notifications.subscription.message': 'Vous avez débloqué du nouveau contenu. Votre voyage commence maintenant!',
    
    // Boutons et Actions
    'button.start': 'Commencer',
    'button.continue': 'Continuer',
    'button.save': 'Enregistrer',
    'button.cancel': 'Annuler',
    'button.close': 'Fermer',
    'button.goToPlans': 'Aller aux Plans',
    'button.upgrade': 'Améliorer',
    'button.download': 'Télécharger',
    'button.share': 'Partager',
    
    // Profil
    'profile.title': 'Mon Profil',
    'profile.edit': 'Modifier le Profil',
    'profile.name': 'Nom',
    'profile.age': 'Âge',
    'profile.bio': 'Biographie',
    'profile.photo': 'Photo de Profil',
    'profile.changePhoto': 'Changer la Photo',
    'profile.stats': 'Statistiques',
    'profile.xp': 'XP',
    'profile.level': 'Niveau',
    'profile.medals': 'Médailles',
    'profile.completed': 'Complétés',
    
    // Plans
    'plans.title': 'Choisissez votre Plan',
    'plans.free': 'Gratuit',
    'plans.pro': 'Pro',
    'plans.elite': 'Elite',
    'plans.monthly': 'Mensuel',
    'plans.yearly': 'Annuel',
    
    // Cours et Contenu
    'courses.title': 'Cours',
    'courses.inProgress': 'En Cours',
    'courses.completed': 'Complétés',
    'courses.locked': 'Verrouillé',
    'courses.unlock': 'Déverrouiller',
    
    // Activités
    'activities.title': 'Activités',
    'activities.pending': 'En Attente',
    'activities.completed': 'Complétées',
    'activities.submit': 'Soumettre',
    
    // Examens
    'exams.title': 'Examens',
    'exams.start': 'Commencer l\'Examen',
    'exams.timeLeft': 'Temps Restant',
    'exams.submit': 'Soumettre l\'Examen',
    'exams.score': 'Score',
    'exams.passed': 'Réussi',
    'exams.failed': 'Échoué',
    
    // Certificats
    'certificates.title': 'Certificats',
    'certificates.download': 'Télécharger le Certificat',
    'certificates.share': 'Partager',
    'certificates.validate': 'Valider',
    
    // Livres
    'books.title': 'Bibliothèque de Livres',
    'books.recommended': 'Recommandés',
    'books.category': 'Catégorie',
    
    // Films
    'movies.title': 'Cinéma Elite',
    'movies.films': 'Films',
    'movies.series': 'Séries',
    'movies.documentaries': 'Documentaires',
    
    // Messages
    'message.success': 'Succès!',
    'message.error': 'Erreur!',
    'message.loading': 'Chargement...',
    'message.saved': 'Enregistré avec succès!',
    
    // Temps
    'time.now': 'Maintenant',
    'time.minutesAgo': 'min il y a',
    'time.hoursAgo': 'h il y a',
    'time.daysAgo': 'j il y a',
  },
  
  de: {
    // Kopfzeile und Navigation
    'nav.home': 'Startseite',
    'nav.courses': 'Kurse',
    'nav.activities': 'Aktivitäten',
    'nav.exams': 'Prüfungen',
    'nav.certificates': 'Zertifikate',
    'nav.books': 'Bücher',
    'nav.movies': 'Filme',
    'nav.profile': 'Profil',
    'nav.plans': 'Pläne',
    
    // Benachrichtigungen
    'notifications.title': 'Elite Life Benachrichtigungen',
    'notifications.markAllRead': 'Alle als gelesen markieren',
    'notifications.empty': 'Noch keine Benachrichtigungen',
    'notifications.viewAll': 'Alle Benachrichtigungen anzeigen',
    'notifications.welcome.title': 'Willkommen bei Elite Life!',
    'notifications.welcome.message': 'Wir freuen uns, Sie hier zu haben! Genießen Sie Ihre Reise.',
    'notifications.coupon.title': 'Exklusiver Gutschein 🎁',
    'notifications.coupon.message': 'Sie haben 5% Rabatt erhalten! Verwenden Sie den Gutschein ELITE5-USER123.',
    'notifications.subscription.title': 'Herzlichen Glückwunsch zu Ihrem Abonnement! 🎉',
    'notifications.subscription.message': 'Sie haben neue Inhalte freigeschaltet. Ihre Reise beginnt jetzt!',
    
    // Schaltflächen und Aktionen
    'button.start': 'Starten',
    'button.continue': 'Fortsetzen',
    'button.save': 'Speichern',
    'button.cancel': 'Abbrechen',
    'button.close': 'Schließen',
    'button.goToPlans': 'Zu den Plänen',
    'button.upgrade': 'Upgrade',
    'button.download': 'Herunterladen',
    'button.share': 'Teilen',
    
    // Profil
    'profile.title': 'Mein Profil',
    'profile.edit': 'Profil bearbeiten',
    'profile.name': 'Name',
    'profile.age': 'Alter',
    'profile.bio': 'Biografie',
    'profile.photo': 'Profilbild',
    'profile.changePhoto': 'Foto ändern',
    'profile.stats': 'Statistiken',
    'profile.xp': 'XP',
    'profile.level': 'Level',
    'profile.medals': 'Medaillen',
    'profile.completed': 'Abgeschlossen',
    
    // Pläne
    'plans.title': 'Wählen Sie Ihren Plan',
    'plans.free': 'Kostenlos',
    'plans.pro': 'Pro',
    'plans.elite': 'Elite',
    'plans.monthly': 'Monatlich',
    'plans.yearly': 'Jährlich',
    
    // Kurse und Inhalte
    'courses.title': 'Kurse',
    'courses.inProgress': 'In Bearbeitung',
    'courses.completed': 'Abgeschlossen',
    'courses.locked': 'Gesperrt',
    'courses.unlock': 'Freischalten',
    
    // Aktivitäten
    'activities.title': 'Aktivitäten',
    'activities.pending': 'Ausstehend',
    'activities.completed': 'Abgeschlossen',
    'activities.submit': 'Einreichen',
    
    // Prüfungen
    'exams.title': 'Prüfungen',
    'exams.start': 'Prüfung starten',
    'exams.timeLeft': 'Verbleibende Zeit',
    'exams.submit': 'Prüfung einreichen',
    'exams.score': 'Punktzahl',
    'exams.passed': 'Bestanden',
    'exams.failed': 'Nicht bestanden',
    
    // Zertifikate
    'certificates.title': 'Zertifikate',
    'certificates.download': 'Zertifikat herunterladen',
    'certificates.share': 'Teilen',
    'certificates.validate': 'Validieren',
    
    // Bücher
    'books.title': 'Buchbibliothek',
    'books.recommended': 'Empfohlen',
    'books.category': 'Kategorie',
    
    // Filme
    'movies.title': 'Elite Kino',
    'movies.films': 'Filme',
    'movies.series': 'Serien',
    'movies.documentaries': 'Dokumentationen',
    
    // Nachrichten
    'message.success': 'Erfolg!',
    'message.error': 'Fehler!',
    'message.loading': 'Laden...',
    'message.saved': 'Erfolgreich gespeichert!',
    
    // Zeit
    'time.now': 'Jetzt',
    'time.minutesAgo': 'Min. her',
    'time.hoursAgo': 'Std. her',
    'time.daysAgo': 'T. her',
  },
  
  it: {
    // Intestazione e Navigazione
    'nav.home': 'Home',
    'nav.courses': 'Corsi',
    'nav.activities': 'Attività',
    'nav.exams': 'Esami',
    'nav.certificates': 'Certificati',
    'nav.books': 'Libri',
    'nav.movies': 'Film',
    'nav.profile': 'Profilo',
    'nav.plans': 'Piani',
    
    // Notifiche
    'notifications.title': 'Notifiche Elite Life',
    'notifications.markAllRead': 'Segna tutte come lette',
    'notifications.empty': 'Nessuna notifica ancora',
    'notifications.viewAll': 'Vedi tutte le notifiche',
    'notifications.welcome.title': 'Benvenuto su Elite Life!',
    'notifications.welcome.message': 'Siamo felici di averti qui! Goditi il tuo viaggio.',
    'notifications.coupon.title': 'Coupon Esclusivo 🎁',
    'notifications.coupon.message': 'Hai ottenuto il 5% di sconto! Usa il coupon ELITE5-USER123.',
    'notifications.subscription.title': 'Congratulazioni per il tuo abbonamento! 🎉',
    'notifications.subscription.message': 'Hai sbloccato nuovi contenuti. Il tuo viaggio inizia ora!',
    
    // Pulsanti e Azioni
    'button.start': 'Inizia',
    'button.continue': 'Continua',
    'button.save': 'Salva',
    'button.cancel': 'Annulla',
    'button.close': 'Chiudi',
    'button.goToPlans': 'Vai ai Piani',
    'button.upgrade': 'Aggiorna',
    'button.download': 'Scarica',
    'button.share': 'Condividi',
    
    // Profilo
    'profile.title': 'Il Mio Profilo',
    'profile.edit': 'Modifica Profilo',
    'profile.name': 'Nome',
    'profile.age': 'Età',
    'profile.bio': 'Biografia',
    'profile.photo': 'Foto Profilo',
    'profile.changePhoto': 'Cambia Foto',
    'profile.stats': 'Statistiche',
    'profile.xp': 'XP',
    'profile.level': 'Livello',
    'profile.medals': 'Medaglie',
    'profile.completed': 'Completati',
    
    // Piani
    'plans.title': 'Scegli il tuo Piano',
    'plans.free': 'Gratuito',
    'plans.pro': 'Pro',
    'plans.elite': 'Elite',
    'plans.monthly': 'Mensile',
    'plans.yearly': 'Annuale',
    
    // Corsi e Contenuti
    'courses.title': 'Corsi',
    'courses.inProgress': 'In Corso',
    'courses.completed': 'Completati',
    'courses.locked': 'Bloccato',
    'courses.unlock': 'Sblocca',
    
    // Attività
    'activities.title': 'Attività',
    'activities.pending': 'In Sospeso',
    'activities.completed': 'Completate',
    'activities.submit': 'Invia',
    
    // Esami
    'exams.title': 'Esami',
    'exams.start': 'Inizia Esame',
    'exams.timeLeft': 'Tempo Rimanente',
    'exams.submit': 'Invia Esame',
    'exams.score': 'Punteggio',
    'exams.passed': 'Superato',
    'exams.failed': 'Fallito',
    
    // Certificati
    'certificates.title': 'Certificati',
    'certificates.download': 'Scarica Certificato',
    'certificates.share': 'Condividi',
    'certificates.validate': 'Valida',
    
    // Libri
    'books.title': 'Biblioteca di Libri',
    'books.recommended': 'Consigliati',
    'books.category': 'Categoria',
    
    // Film
    'movies.title': 'Cinema Elite',
    'movies.films': 'Film',
    'movies.series': 'Serie',
    'movies.documentaries': 'Documentari',
    
    // Messaggi
    'message.success': 'Successo!',
    'message.error': 'Errore!',
    'message.loading': 'Caricamento...',
    'message.saved': 'Salvato con successo!',
    
    // Tempo
    'time.now': 'Ora',
    'time.minutesAgo': 'min fa',
    'time.hoursAgo': 'h fa',
    'time.daysAgo': 'g fa',
  },
  
  ja: {
    // ヘッダーとナビゲーション
    'nav.home': 'ホーム',
    'nav.courses': 'コース',
    'nav.activities': 'アクティビティ',
    'nav.exams': '試験',
    'nav.certificates': '証明書',
    'nav.books': '本',
    'nav.movies': '映画',
    'nav.profile': 'プロフィール',
    'nav.plans': 'プラン',
    
    // 通知
    'notifications.title': 'Elite Life 通知',
    'notifications.markAllRead': 'すべて既読にする',
    'notifications.empty': 'まだ通知はありません',
    'notifications.viewAll': 'すべての通知を表示',
    'notifications.welcome.title': 'Elite Lifeへようこそ！',
    'notifications.welcome.message': 'ここにいてくれて嬉しいです！あなたの旅を楽しんでください。',
    'notifications.coupon.title': '限定クーポン 🎁',
    'notifications.coupon.message': '5%オフを獲得しました！クーポンELITE5-USER123を使用してください。',
    'notifications.subscription.title': 'サブスクリプションおめでとうございます！🎉',
    'notifications.subscription.message': '新しいコンテンツがアンロックされました。あなたの旅が始まります！',
    
    // ボタンとアクション
    'button.start': '開始',
    'button.continue': '続ける',
    'button.save': '保存',
    'button.cancel': 'キャンセル',
    'button.close': '閉じる',
    'button.goToPlans': 'プランへ',
    'button.upgrade': 'アップグレード',
    'button.download': 'ダウンロード',
    'button.share': '共有',
    
    // プロフィール
    'profile.title': 'マイプロフィール',
    'profile.edit': 'プロフィール編集',
    'profile.name': '名前',
    'profile.age': '年齢',
    'profile.bio': '自己紹介',
    'profile.photo': 'プロフィール写真',
    'profile.changePhoto': '写真を変更',
    'profile.stats': '統計',
    'profile.xp': 'XP',
    'profile.level': 'レベル',
    'profile.medals': 'メダル',
    'profile.completed': '完了',
    
    // プラン
    'plans.title': 'プランを選択',
    'plans.free': '無料',
    'plans.pro': 'プロ',
    'plans.elite': 'エリート',
    'plans.monthly': '月額',
    'plans.yearly': '年額',
    
    // コースとコンテンツ
    'courses.title': 'コース',
    'courses.inProgress': '進行中',
    'courses.completed': '完了',
    'courses.locked': 'ロック',
    'courses.unlock': 'アンロック',
    
    // アクティビティ
    'activities.title': 'アクティビティ',
    'activities.pending': '保留中',
    'activities.completed': '完了',
    'activities.submit': '提出',
    
    // 試験
    'exams.title': '試験',
    'exams.start': '試験開始',
    'exams.timeLeft': '残り時間',
    'exams.submit': '試験提出',
    'exams.score': 'スコア',
    'exams.passed': '合格',
    'exams.failed': '不合格',
    
    // 証明書
    'certificates.title': '証明書',
    'certificates.download': '証明書ダウンロード',
    'certificates.share': '共有',
    'certificates.validate': '検証',
    
    // 本
    'books.title': 'ブックライブラリ',
    'books.recommended': 'おすすめ',
    'books.category': 'カテゴリー',
    
    // 映画
    'movies.title': 'エリートシネマ',
    'movies.films': '映画',
    'movies.series': 'シリーズ',
    'movies.documentaries': 'ドキュメンタリー',
    
    // メッセージ
    'message.success': '成功！',
    'message.error': 'エラー！',
    'message.loading': '読み込み中...',
    'message.saved': '正常に保存されました！',
    
    // 時間
    'time.now': '今',
    'time.minutesAgo': '分前',
    'time.hoursAgo': '時間前',
    'time.daysAgo': '日前',
  },
  
  ko: {
    // 헤더 및 탐색
    'nav.home': '홈',
    'nav.courses': '코스',
    'nav.activities': '활동',
    'nav.exams': '시험',
    'nav.certificates': '인증서',
    'nav.books': '책',
    'nav.movies': '영화',
    'nav.profile': '프로필',
    'nav.plans': '플랜',
    
    // 알림
    'notifications.title': 'Elite Life 알림',
    'notifications.markAllRead': '모두 읽음으로 표시',
    'notifications.empty': '아직 알림이 없습니다',
    'notifications.viewAll': '모든 알림 보기',
    'notifications.welcome.title': 'Elite Life에 오신 것을 환영합니다!',
    'notifications.welcome.message': '여기 와주셔서 기쁩니다! 여정을 즐기세요.',
    'notifications.coupon.title': '독점 쿠폰 🎁',
    'notifications.coupon.message': '5% 할인을 받았습니다! 쿠폰 ELITE5-USER123을 사용하세요.',
    'notifications.subscription.title': '구독을 축하합니다! 🎉',
    'notifications.subscription.message': '새로운 콘텐츠가 잠금 해제되었습니다. 여정이 시작됩니다!',
    
    // 버튼 및 작업
    'button.start': '시작',
    'button.continue': '계속',
    'button.save': '저장',
    'button.cancel': '취소',
    'button.close': '닫기',
    'button.goToPlans': '플랜으로 이동',
    'button.upgrade': '업그레이드',
    'button.download': '다운로드',
    'button.share': '공유',
    
    // 프로필
    'profile.title': '내 프로필',
    'profile.edit': '프로필 편집',
    'profile.name': '이름',
    'profile.age': '나이',
    'profile.bio': '소개',
    'profile.photo': '프로필 사진',
    'profile.changePhoto': '사진 변경',
    'profile.stats': '통계',
    'profile.xp': 'XP',
    'profile.level': '레벨',
    'profile.medals': '메달',
    'profile.completed': '완료됨',
    
    // 플랜
    'plans.title': '플랜 선택',
    'plans.free': '무료',
    'plans.pro': '프로',
    'plans.elite': '엘리트',
    'plans.monthly': '월간',
    'plans.yearly': '연간',
    
    // 코스 및 콘텐츠
    'courses.title': '코스',
    'courses.inProgress': '진행 중',
    'courses.completed': '완료됨',
    'courses.locked': '잠김',
    'courses.unlock': '잠금 해제',
    
    // 활동
    'activities.title': '활동',
    'activities.pending': '대기 중',
    'activities.completed': '완료됨',
    'activities.submit': '제출',
    
    // 시험
    'exams.title': '시험',
    'exams.start': '시험 시작',
    'exams.timeLeft': '남은 시간',
    'exams.submit': '시험 제출',
    'exams.score': '점수',
    'exams.passed': '합격',
    'exams.failed': '불합격',
    
    // 인증서
    'certificates.title': '인증서',
    'certificates.download': '인증서 다운로드',
    'certificates.share': '공유',
    'certificates.validate': '검증',
    
    // 책
    'books.title': '도서 라이브러리',
    'books.recommended': '추천',
    'books.category': '카테고리',
    
    // 영화
    'movies.title': '엘리트 시네마',
    'movies.films': '영화',
    'movies.series': '시리즈',
    'movies.documentaries': '다큐멘터리',
    
    // 메시지
    'message.success': '성공!',
    'message.error': '오류!',
    'message.loading': '로딩 중...',
    'message.saved': '성공적으로 저장되었습니다!',
    
    // 시간
    'time.now': '지금',
    'time.minutesAgo': '분 전',
    'time.hoursAgo': '시간 전',
    'time.daysAgo': '일 전',
  },
  
  zh: {
    // 标题和导航
    'nav.home': '首页',
    'nav.courses': '课程',
    'nav.activities': '活动',
    'nav.exams': '考试',
    'nav.certificates': '证书',
    'nav.books': '书籍',
    'nav.movies': '电影',
    'nav.profile': '个人资料',
    'nav.plans': '计划',
    
    // 通知
    'notifications.title': 'Elite Life 通知',
    'notifications.markAllRead': '全部标记为已读',
    'notifications.empty': '暂无通知',
    'notifications.viewAll': '查看所有通知',
    'notifications.welcome.title': '欢迎来到 Elite Life！',
    'notifications.welcome.message': '我们很高兴您在这里！享受您的旅程。',
    'notifications.coupon.title': '独家优惠券 🎁',
    'notifications.coupon.message': '您获得了5%的折扣！使用优惠券 ELITE5-USER123。',
    'notifications.subscription.title': '恭喜您订阅！🎉',
    'notifications.subscription.message': '您已解锁新内容。您的旅程现在开始！',
    
    // 按钮和操作
    'button.start': '开始',
    'button.continue': '继续',
    'button.save': '保存',
    'button.cancel': '取消',
    'button.close': '关闭',
    'button.goToPlans': '前往计划',
    'button.upgrade': '升级',
    'button.download': '下载',
    'button.share': '分享',
    
    // 个人资料
    'profile.title': '我的个人资料',
    'profile.edit': '编辑个人资料',
    'profile.name': '姓名',
    'profile.age': '年龄',
    'profile.bio': '简介',
    'profile.photo': '个人照片',
    'profile.changePhoto': '更改照片',
    'profile.stats': '统计',
    'profile.xp': 'XP',
    'profile.level': '等级',
    'profile.medals': '奖章',
    'profile.completed': '已完成',
    
    // 计划
    'plans.title': '选择您的计划',
    'plans.free': '免费',
    'plans.pro': '专业版',
    'plans.elite': '精英版',
    'plans.monthly': '每月',
    'plans.yearly': '每年',
    
    // 课程和内容
    'courses.title': '课程',
    'courses.inProgress': '进行中',
    'courses.completed': '已完成',
    'courses.locked': '已锁定',
    'courses.unlock': '解锁',
    
    // 活动
    'activities.title': '活动',
    'activities.pending': '待处理',
    'activities.completed': '已完成',
    'activities.submit': '提交',
    
    // 考试
    'exams.title': '考试',
    'exams.start': '开始考试',
    'exams.timeLeft': '剩余时间',
    'exams.submit': '提交考试',
    'exams.score': '分数',
    'exams.passed': '通过',
    'exams.failed': '未通过',
    
    // 证书
    'certificates.title': '证书',
    'certificates.download': '下载证书',
    'certificates.share': '分享',
    'certificates.validate': '验证',
    
    // 书籍
    'books.title': '图书馆',
    'books.recommended': '推荐',
    'books.category': '类别',
    
    // 电影
    'movies.title': '精英影院',
    'movies.films': '电影',
    'movies.series': '系列',
    'movies.documentaries': '纪录片',
    
    // 消息
    'message.success': '成功！',
    'message.error': '错误！',
    'message.loading': '加载中...',
    'message.saved': '保存成功！',
    
    // 时间
    'time.now': '现在',
    'time.minutesAgo': '分钟前',
    'time.hoursAgo': '小时前',
    'time.daysAgo': '天前',
  },
  
  ar: {
    // العنوان والتنقل
    'nav.home': 'الرئيسية',
    'nav.courses': 'الدورات',
    'nav.activities': 'الأنشطة',
    'nav.exams': 'الامتحانات',
    'nav.certificates': 'الشهادات',
    'nav.books': 'الكتب',
    'nav.movies': 'الأفلام',
    'nav.profile': 'الملف الشخصي',
    'nav.plans': 'الخطط',
    
    // الإشعارات
    'notifications.title': 'إشعارات Elite Life',
    'notifications.markAllRead': 'وضع علامة مقروء على الكل',
    'notifications.empty': 'لا توجد إشعارات بعد',
    'notifications.viewAll': 'عرض جميع الإشعارات',
    'notifications.welcome.title': 'مرحبًا بك في Elite Life!',
    'notifications.welcome.message': 'نحن سعداء بوجودك هنا! استمتع برحلتك.',
    'notifications.coupon.title': 'قسيمة حصرية 🎁',
    'notifications.coupon.message': 'حصلت على خصم 5٪! استخدم القسيمة ELITE5-USER123.',
    'notifications.subscription.title': 'تهانينا على اشتراكك! 🎉',
    'notifications.subscription.message': 'لقد فتحت محتوى جديد. رحلتك تبدأ الآن!',
    
    // الأزرار والإجراءات
    'button.start': 'ابدأ',
    'button.continue': 'متابعة',
    'button.save': 'حفظ',
    'button.cancel': 'إلغاء',
    'button.close': 'إغلاق',
    'button.goToPlans': 'الذهاب إلى الخطط',
    'button.upgrade': 'ترقية',
    'button.download': 'تحميل',
    'button.share': 'مشاركة',
    
    // الملف الشخصي
    'profile.title': 'ملفي الشخصي',
    'profile.edit': 'تعديل الملف الشخصي',
    'profile.name': 'الاسم',
    'profile.age': 'العمر',
    'profile.bio': 'السيرة الذاتية',
    'profile.photo': 'صورة الملف الشخصي',
    'profile.changePhoto': 'تغيير الصورة',
    'profile.stats': 'الإحصائيات',
    'profile.xp': 'XP',
    'profile.level': 'المستوى',
    'profile.medals': 'الميداليات',
    'profile.completed': 'مكتمل',
    
    // الخطط
    'plans.title': 'اختر خطتك',
    'plans.free': 'مجاني',
    'plans.pro': 'محترف',
    'plans.elite': 'نخبة',
    'plans.monthly': 'شهري',
    'plans.yearly': 'سنوي',
    
    // الدورات والمحتوى
    'courses.title': 'الدورات',
    'courses.inProgress': 'قيد التقدم',
    'courses.completed': 'مكتمل',
    'courses.locked': 'مقفل',
    'courses.unlock': 'فتح',
    
    // الأنشطة
    'activities.title': 'الأنشطة',
    'activities.pending': 'معلق',
    'activities.completed': 'مكتمل',
    'activities.submit': 'إرسال',
    
    // الامتحانات
    'exams.title': 'الامتحانات',
    'exams.start': 'بدء الامتحان',
    'exams.timeLeft': 'الوقت المتبقي',
    'exams.submit': 'إرسال الامتحان',
    'exams.score': 'النتيجة',
    'exams.passed': 'نجح',
    'exams.failed': 'فشل',
    
    // الشهادات
    'certificates.title': 'الشهادات',
    'certificates.download': 'تحميل الشهادة',
    'certificates.share': 'مشاركة',
    'certificates.validate': 'التحقق',
    
    // الكتب
    'books.title': 'مكتبة الكتب',
    'books.recommended': 'موصى به',
    'books.category': 'الفئة',
    
    // الأفلام
    'movies.title': 'سينما النخبة',
    'movies.films': 'أفلام',
    'movies.series': 'مسلسلات',
    'movies.documentaries': 'وثائقيات',
    
    // الرسائل
    'message.success': 'نجاح!',
    'message.error': 'خطأ!',
    'message.loading': 'جاري التحميل...',
    'message.saved': 'تم الحفظ بنجاح!',
    
    // الوقت
    'time.now': 'الآن',
    'time.minutesAgo': 'دقيقة مضت',
    'time.hoursAgo': 'ساعة مضت',
    'time.daysAgo': 'يوم مضى',
  },
};
