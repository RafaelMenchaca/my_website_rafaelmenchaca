export type Project = {
  title: string
  tagline: string
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
}

export const projects = {
  "punto-de-venta": {
    title: "Punto de Venta",
    tagline: "Full-stack POS system for sales, cash, and inventory workflows",
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
  },
  "educativo-ia": {
    title: "Educativo IA",
    tagline: "AI-powered lesson planning platform",
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
      "Bootstrap",
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
  },
} satisfies Record<string, Project>

export type ProjectSlug = keyof typeof projects
