import type { Locale } from "@/lib/i18n"

export type Project = {
  title: string
  tagline: string
  cardSummary: string
  overview: string
  problem: string
  solution: string
  tech: string[]
  image: string
  featured?: boolean
  caseStudyImages?: {
    overview: string
    solution: string
  }
  challenges: string[]
  learnings: string[]
  links?: {
    demo?: string
    github?: string
  }
  translations?: {
    es: {
      tagline: string
      cardSummary: string
      overview: string
      problem: string
      solution: string
      challenges: string[]
      learnings: string[]
    }
  }
}

export const projects = {
  "punto-de-venta": {
    title: "Punto de Venta",
    tagline: "Full-stack POS system for sales, cash, and inventory workflows",
    cardSummary:
      "Small businesses often end up managing sales, inventory, and cash flow across disconnected processes. This project brings those operations into one modular system designed for reliability, clearer workflows, and room to grow.",
    overview:
      "Punto de Venta is a full-stack point-of-sale system designed to manage daily business operations such as cash handling, sales processing, and inventory control. It uses a modular architecture that separates core business domains while preserving transactional consistency and room to scale.",
    problem:
      "Day-to-day business operations often become fragmented across manual processes or disconnected tools, making it harder to track cash movement, keep inventory accurate, and process sales reliably as the system grows.",
    solution:
      "The system is structured around clear business modules for cash, sales, and inventory, with an application architecture designed to keep operations consistent across the full workflow. This approach supports cleaner domain boundaries, better maintainability, and a foundation that can scale with additional operational features.",
    tech: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL (Supabase)",
      "Prisma",
      "Tailwind CSS",
    ],
    image: "/images/projects/punto_de_venta/punto_de_venta.png",
    featured: true,
    caseStudyImages: {
      overview: "/images/projects/punto_de_venta/punto_de_venta.png",
      solution: "/images/projects/punto_de_venta/punto_de_venta.png",
    },
    challenges: [
      "Modeling cash, sales, and inventory as separate domains without losing operational coherence",
      "Keeping transactional flows reliable across stock updates, sales records, and cash movements",
      "Designing the system so new business features can be added without coupling the core modules",
    ],
    learnings: [
      "Stronger understanding of modular software design for business-critical workflows",
      "Better handling of transactional consistency across interconnected domains",
      "More discipline around designing full-stack systems with scalability in mind from the start",
    ],
    links: {
      github: "https://github.com/RafaelMenchaca/punto_de_venta",
    },
    translations: {
      es: {
        tagline: "Sistema POS full-stack para ventas, caja e inventario",
        cardSummary:
          "Muchos negocios pequeños terminan gestionando ventas, inventario y flujo de caja con procesos desconectados. Este proyecto reúne esas operaciones en un sistema modular pensado para mayor confiabilidad, flujos más claros y espacio para crecer.",
        overview:
          "Punto de Venta es un sistema full-stack diseñado para administrar operaciones diarias de negocio como manejo de caja, procesamiento de ventas y control de inventario. Usa una arquitectura modular que separa dominios clave del negocio sin perder consistencia transaccional ni capacidad de crecimiento.",
        problem:
          "Las operaciones del día a día suelen fragmentarse entre procesos manuales o herramientas desconectadas, lo que dificulta seguir el movimiento de caja, mantener un inventario preciso y procesar ventas con confiabilidad a medida que el sistema crece.",
        solution:
          "El sistema está estructurado alrededor de módulos claros para caja, ventas e inventario, con una arquitectura pensada para mantener consistencia en todo el flujo operativo. Esto permite límites de dominio más limpios, mejor mantenibilidad y una base que puede escalar con nuevas funciones.",
        challenges: [
          "Modelar caja, ventas e inventario como dominios separados sin perder coherencia operativa",
          "Mantener flujos transaccionales confiables entre actualizaciones de stock, ventas y movimientos de caja",
          "Diseñar el sistema para agregar nuevas funciones sin acoplar los módulos centrales",
        ],
        learnings: [
          "Mayor entendimiento del diseño modular para flujos críticos de negocio",
          "Mejor manejo de la consistencia transaccional entre dominios interconectados",
          "Más disciplina al diseñar sistemas full-stack con escalabilidad desde el inicio",
        ],
      },
    },
  },
  "educativo-ia": {
    title: "Educativo IA",
    tagline: "AI-powered lesson planning platform",
    cardSummary:
      "Teachers can lose too much time repeating the same lesson-plan structure by hand. Educativo IA turns structured input into reusable AI-assisted planning with saved results and a faster content workflow.",
    overview:
      "Educativo IA is a software platform focused on AI-powered content generation, data persistence, and structured educational workflows.",
    problem:
      "Teachers often spend hours manually creating lesson plans, repeating similar structures and formats, which reduces the time available for teaching and student engagement.",
    solution:
      "The platform is built around a software-first approach, combining structured user input, AI-generated content, and persistent storage to deliver consistent and reusable lesson plans.",
    tech: [
      "JavaScript",
      "Node.js",
      "Supabase",
      "OpenAI API",
      "Tailwind CSS",
      "HTML",
    ],
    image: "/images/projects/educativo-ia/preview2.png",
    featured: true,
    caseStudyImages: {
      overview: "/images/projects/educativo-ia/laptop.png",
      solution: "/images/projects/educativo-ia/preview2.png",
    },
    challenges: [
      "Designing a clear multi-step form without overwhelming users",
      "Integrating AI responses into structured educational content",
      "Handling authentication and data persistence with Supabase",
    ],
    learnings: [
      "Improved understanding of full-stack application architecture",
      "Better handling of async data flows and API integration",
      "Stronger focus on UX and product-driven development",
    ],
    links: {
      demo: "https://rafaelmenchaca.github.io/planeacion-docente-ia/",
      github: "https://github.com/RafaelMenchaca/planeacion-docente-ia?tab=readme-ov-file",
    },
    translations: {
      es: {
        tagline: "Plataforma de planeación educativa impulsada por IA",
        cardSummary:
          "Los docentes pueden perder demasiado tiempo repitiendo la misma estructura de planeación a mano. Educativo IA convierte entradas estructuradas en planeaciones asistidas por IA, reutilizables y con resultados guardados para acelerar el flujo de trabajo.",
        overview:
          "Educativo IA es una plataforma de software enfocada en generación de contenido con IA, persistencia de datos y flujos educativos estructurados.",
        problem:
          "Los docentes suelen dedicar horas a crear planeaciones manualmente, repitiendo estructuras y formatos similares, lo que reduce el tiempo disponible para enseñar y acompañar a sus estudiantes.",
        solution:
          "La plataforma está construida con un enfoque software-first que combina entrada estructurada del usuario, generación de contenido con IA y almacenamiento persistente para entregar planeaciones consistentes y reutilizables.",
        challenges: [
          "Diseñar un formulario de varios pasos sin abrumar al usuario",
          "Integrar respuestas de IA dentro de contenido educativo estructurado",
          "Resolver autenticación y persistencia de datos con Supabase",
        ],
        learnings: [
          "Mejor entendimiento de la arquitectura de aplicaciones full-stack",
          "Mayor dominio de flujos async e integración de APIs",
          "Enfoque más fuerte en UX y desarrollo guiado por producto",
        ],
      },
    },
  },
} satisfies Record<string, Project>

export type ProjectSlug = keyof typeof projects

export function getProjectContent(project: Project, locale: Locale) {
  const translated = locale === "es" ? project.translations?.es : undefined

  return {
    title: project.title,
    tagline: translated?.tagline ?? project.tagline,
    cardSummary: translated?.cardSummary ?? project.cardSummary,
    overview: translated?.overview ?? project.overview,
    problem: translated?.problem ?? project.problem,
    solution: translated?.solution ?? project.solution,
    challenges: translated?.challenges ?? project.challenges,
    learnings: translated?.learnings ?? project.learnings,
  }
}
