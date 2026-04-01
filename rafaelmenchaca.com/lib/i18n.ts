export const LOCALE_COOKIE = "site-locale"

export type Locale = "en" | "es"

export function normalizeLocale(value: string | null | undefined): Locale {
  return value === "es" ? "es" : "en"
}

const copy = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      toggleTheme: "Theme settings",
      toggleLanguage: "Switch language",
      switchToEnglish: "Switch to English",
      switchToSpanish: "Cambiar a espa\u00F1ol",
      themeAuto: "Auto",
      themeAutoHint: "Uses your local time",
      themeLight: "Light",
      themeDark: "Dark",
      themeCurrentAuto: "Theme: Auto",
      themeCurrentLight: "Theme: Light",
      themeCurrentDark: "Theme: Dark",
    },
    footer: {
      role: "Software Developer",
      cta: "Get in touch",
    },
    home: {
      heroTitle: "Software Developer",
      heroLead:
        "Building AI-powered web applications with solid architecture and real-world use cases.",
      heroBody:
        "I focus on software architecture, data flow, and AI integration, using frontend as a delivery layer for well-structured systems.",
      primaryCta: "View Projects",
      secondaryCta: "About Me",
      selectedWork: "Selected Work",
      featuredProjects: "Featured Projects",
      buildTitle: "Let's build something useful",
      buildBody:
        "I'm interested in frontend, full-stack roles, and building products with real users in mind.",
      buildCta: "Get in touch",
    },
    about: {
      title: "About Me",
      intro:
        "I'm a software developer interested in building reliable systems and implementing AI in practical, real-world applications.",
      focus:
        "While I work across the stack, my main focus is on software architecture, data modeling, API design, and AI-powered workflows. Frontend is a tool for delivering well-structured systems, not the end goal.",
      educativo:
        "I'm currently developing <strong>Educativo IA</strong>, an AI-powered educational platform. This project has allowed me to work on software architecture, authentication, database design, and AI integration using modern tools.",
      workWith: "What I work with",
      thinkingTitle: "How I think as a developer",
      thinkingBodyOne:
        "I care about writing code that is readable, maintainable, and easy to reason about. I prefer simple solutions that solve real problems instead of overengineering.",
      thinkingBodyTwo:
        "I'm continuously learning and improving by building projects, refactoring my own work, and understanding how real-world applications are structured.",
    },
    contact: {
      title: "Get in touch",
      intro:
        "I'm open to conversations about software products, AI-powered applications, and potential collaboration.",
      emailLead: "The easiest way to reach me is via email:",
      footerNote:
        "Currently focused on building and improving my portfolio and software development expertise.",
      form: {
        title: "Send a message",
        description:
          "A clean contact flow is on the way. For now the form is a visual preview, and I'm still available by email.",
        badge: "Coming soon",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        companyLabel: "Company or brand",
        companyPlaceholder: "Optional",
        projectTypeLabel: "Project type",
        projectTypePlaceholder: "Select one",
        projectTypeOptions: {
          webApp: "Web app",
          aiProduct: "AI product",
          collaboration: "Collaboration",
          other: "Other",
        },
        messageLabel: "Message",
        messagePlaceholder: "Tell me a bit about the product, timeline, or idea.",
        preferEmail: "Prefer email? Reach me directly at",
        submit: "Send message",
        pendingMessage:
          "Form integration coming soon. For now, email me directly at rafaelmenchaca.dev@gmail.com.",
      },
    },
    projects: {
      title: "Projects",
      intro:
        "A selection of projects focused on software systems, AI integration, and real-world use cases.",
      card: {
        liveDemo: "Live Demo",
        githubRepo: "GitHub Repo",
        viewCaseStudy: "View case study",
      },
      detail: {
        problem: "The Problem",
        solution: "The Solution",
        tech: "Tech Stack & Architecture",
        challenges: "Challenges",
        learnings: "Key Learnings",
        links: "Links",
        overviewAlt: "overview",
        solutionAlt: "solution preview",
      },
    },
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Sobre m\u00ED",
      projects: "Proyectos",
      contact: "Contacto",
      toggleTheme: "Opciones de tema",
      toggleLanguage: "Cambiar idioma",
      switchToEnglish: "Switch to English",
      switchToSpanish: "Cambiar a espa\u00F1ol",
      themeAuto: "Autom\u00E1tico",
      themeAutoHint: "Seg\u00FAn la hora local",
      themeLight: "Claro",
      themeDark: "Oscuro",
      themeCurrentAuto: "Tema: Autom\u00E1tico",
      themeCurrentLight: "Tema: Claro",
      themeCurrentDark: "Tema: Oscuro",
    },
    footer: {
      role: "Desarrollador de software",
      cta: "Cont\u00E1ctame",
    },
    home: {
      heroTitle: "Desarrollador de software",
      heroLead:
        "Construyendo aplicaciones web con IA, arquitectura s\u00F3lida y casos de uso reales.",
      heroBody:
        "Me enfoco en arquitectura de software, flujo de datos e integraci\u00F3n de IA, usando el frontend como capa de entrega para sistemas bien estructurados.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Sobre m\u00ED",
      selectedWork: "Trabajo seleccionado",
      featuredProjects: "Proyectos destacados",
      buildTitle: "Construyamos algo \u00FAtil",
      buildBody:
        "Me interesan roles frontend, full-stack y la creaci\u00F3n de productos pensados para usuarios reales.",
      buildCta: "Cont\u00E1ctame",
    },
    about: {
      title: "Sobre m\u00ED",
      intro:
        "Soy un desarrollador de software interesado en construir sistemas confiables e implementar IA en aplicaciones pr\u00E1cticas del mundo real.",
      focus:
        "Aunque trabajo en distintas capas del stack, mi enfoque principal est\u00E1 en arquitectura de software, modelado de datos, dise\u00F1o de APIs y flujos impulsados por IA. El frontend es una herramienta para entregar sistemas bien estructurados, no el objetivo final.",
      educativo:
        "Actualmente desarrollo <strong>Educativo IA</strong>, una plataforma educativa impulsada por IA. Este proyecto me ha permitido trabajar en arquitectura de software, autenticaci\u00F3n, dise\u00F1o de base de datos e integraci\u00F3n de IA con herramientas modernas.",
      workWith: "Con qu\u00E9 trabajo",
      thinkingTitle: "C\u00F3mo pienso como desarrollador",
      thinkingBodyOne:
        "Me importa escribir c\u00F3digo legible, mantenible y f\u00E1cil de razonar. Prefiero soluciones simples que resuelvan problemas reales en lugar de sobreingenier\u00EDa.",
      thinkingBodyTwo:
        "Sigo aprendiendo y mejorando al construir proyectos, refactorizar mi propio trabajo y entender c\u00F3mo se estructuran las aplicaciones del mundo real.",
    },
    contact: {
      title: "Contacto",
      intro:
        "Estoy abierto a conversar sobre productos de software, aplicaciones impulsadas por IA y posibles colaboraciones.",
      emailLead: "La forma m\u00E1s f\u00E1cil de contactarme es por correo:",
      footerNote:
        "Actualmente enfocado en seguir construyendo y mejorando mi portafolio y mi experiencia en desarrollo de software.",
      form: {
        title: "Enviar mensaje",
        description:
          "Un flujo de contacto m\u00E1s completo viene en camino. Por ahora el formulario es una vista previa visual y sigo disponible por correo.",
        badge: "Pr\u00F3ximamente",
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre",
        emailLabel: "Correo",
        emailPlaceholder: "tu@email.com",
        companyLabel: "Empresa o marca",
        companyPlaceholder: "Opcional",
        projectTypeLabel: "Tipo de proyecto",
        projectTypePlaceholder: "Selecciona una opci\u00F3n",
        projectTypeOptions: {
          webApp: "Aplicaci\u00F3n web",
          aiProduct: "Producto con IA",
          collaboration: "Colaboraci\u00F3n",
          other: "Otro",
        },
        messageLabel: "Mensaje",
        messagePlaceholder:
          "Cu\u00E9ntame un poco sobre el producto, el tiempo estimado o la idea.",
        preferEmail: "\u00BFPrefieres correo? Escr\u00EDbeme directamente a",
        submit: "Enviar mensaje",
        pendingMessage:
          "La integraci\u00F3n del formulario llegar\u00E1 pronto. Por ahora, escr\u00EDbeme directamente a rafaelmenchaca.dev@gmail.com.",
      },
    },
    projects: {
      title: "Proyectos",
      intro:
        "Una selecci\u00F3n de proyectos enfocados en sistemas de software, integraci\u00F3n de IA y casos de uso reales.",
      card: {
        liveDemo: "Demo en vivo",
        githubRepo: "Repositorio",
        viewCaseStudy: "Ver caso de estudio",
      },
      detail: {
        problem: "El problema",
        solution: "La soluci\u00F3n",
        tech: "Stack tecnol\u00F3gico y arquitectura",
        challenges: "Retos",
        learnings: "Aprendizajes clave",
        links: "Enlaces",
        overviewAlt: "vista general",
        solutionAlt: "vista de la soluci\u00F3n",
      },
    },
  },
} as const

export function getCopy(locale: Locale) {
  return copy[locale]
}
