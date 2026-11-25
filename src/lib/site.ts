import type { IconName } from "@/components/Icon";

export const CONTACT = {
  phoneDisplay: "+52 (844) 858-0335",
  phoneHref: "tel:+528448580335",
  email: "fervazquez@neurovix.com.mx",
  whatsappHref:
    "https://api.whatsapp.com/send/?phone=528448580335&text=Hola%20Neurovix%2C%20estoy%20interesado%20en%20sus%20servicios.%20¿Podrían%20proporcionarme%20más%20información%3F",
  hours: "08:00 a 20:00, de lunes a domingo",
  location: "Saltillo, Coahuila, México",
  facebook: "https://facebook.com/neurovix.nv",
  instagram: "https://instagram.com/neurovix.nv",
};

export const NAV_LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre_nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const STATS = [
  { value: "+8", label: "Proyectos entregados" },
  { value: "+$300K", label: "MXN en proyectos desarrollados" },
  { value: "40–70%", label: "Reducción de tiempos operativos" },
  { value: "MX · US", label: "Clientes en dos países" },
];

export const CLIENTS = [
  { name: "A | G Maquinado", logo: "/companies/ag_maquinado.webp", width: 160, height: 50 },
  { name: "ALRA Plastic", logo: "/companies/alra_plastic.png", width: 90, height: 50 },
  { name: "MBS Construcciones", logo: "/companies/mbs_construcciones.webp", width: 160, height: 50 },
];

export type Service = {
  icon: IconName;
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

export const SERVICES: Service[] = [
  {
    icon: "code",
    title: "Desarrollo Web",
    description:
      "Plataformas robustas, rápidas, seguras y escalables: desde sitios corporativos con SEO técnico hasta sistemas internos, e-commerce y productos SaaS multi-inquilino.",
    tags: ["Next.js", "React", "TypeScript", "Astro", "Supabase"],
    image: "/web_development.jpg",
  },
  {
    icon: "mobile",
    title: "Apps Móviles",
    description:
      "Apps Android e iOS y PWA que se usan a diario en planta, en campo o en el celular: cámara, firma, ubicación, QR y modo sin conexión.",
    tags: ["Flutter", "PWA", "Offline"],
    image: "/mobile_development.jpg",
  },
  {
    icon: "layers",
    title: "Sistemas ERP / CRM",
    description:
      "Automatiza y centraliza las operaciones de tu empresa con sistemas hechos para tus flujos: CRM, ventas, inventario, reportes de servicio y portales de clientes.",
    tags: ["Next.js", "Supabase", "Roles y RLS"],
    image: "/development_software.jpg",
  },
  {
    icon: "cog",
    title: "Automatización IoT & IIoT",
    description:
      "Eliminamos tareas repetitivas e implementamos automatización industrial basada en IoT e IIoT para optimizar procesos y reducir costos.",
    tags: ["IIoT", "Sensores", "Dashboards"],
    image: "/process_automation.jpg",
  },
  {
    icon: "sparkles",
    title: "Inteligencia Artificial",
    description:
      "Modelos de lenguaje, visión computacional y machine learning aplicados a los procesos reales de tu negocio, como reconocimiento facial con antispoofing.",
    tags: ["Python", "FastAPI", "ONNX"],
    image: "/artificial_intelligence.jpg",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Despliegue en Vercel, Hostinger o VPS según tu proyecto, con CI en GitHub Actions y revisiones en cada cambio. Tu software siempre disponible.",
    tags: ["Vercel", "GitHub Actions", "VPS"],
    image: "/cloud_computing.jpg",
  },
  {
    icon: "plug",
    title: "APIs & Integraciones",
    description:
      "APIs con contrato OpenAPI, tiempo real con WebSockets y conexión con tus sistemas: pagos con Mercado Pago, correo transaccional, facturación electrónica (SAT) y más.",
    tags: ["Go", "OpenAPI", "Mercado Pago", "CFDI"],
  },
  {
    icon: "compass",
    title: "Consultoría TI",
    description:
      "Te ayudamos a optimizar procesos, mejorar tu infraestructura tecnológica y alcanzar tus objetivos estratégicos.",
    tags: ["Arquitectura", "Auditoría", "Roadmap"],
    image: "/it_consulting.jpg",
  },
  {
    icon: "wrench",
    title: "Soporte & Mantenimiento",
    description:
      "Soporte técnico continuo y mantenimiento preventivo para garantizar el correcto funcionamiento de tus sistemas.",
    tags: ["SLA", "Monitoreo", "Actualizaciones"],
    image: "/hardware.jpg",
  },
];

export const PROCESS = [
  {
    title: "Descubrimiento",
    description: "Entendemos tu negocio, metas y problemas antes de escribir una sola línea de código.",
  },
  {
    title: "Diseño & Arquitectura",
    description: "Prototipamos la solución y definimos la arquitectura técnica más adecuada.",
  },
  {
    title: "Desarrollo iterativo",
    description: "Construimos en sprints con entregas parciales, PRs revisados y CI en GitHub Actions. Tú siempre ves el avance real.",
  },
  {
    title: "Lanzamiento & Soporte",
    description: "Desplegamos en Vercel, Hostinger o VPS según tu caso, capacitamos y seguimos contigo después del go-live.",
  },
];

export const WHY_US = [
  {
    title: "Código 100% propio y entregado",
    description: "El código fuente es tuyo desde el día uno. Sin dependencias ocultas ni licencias atrapadas.",
  },
  {
    title: "Comunicación directa y transparente",
    description: "Sin intermediarios. Hablas directamente con los ingenieros que construyen tu producto.",
  },
  {
    title: "Seguridad desde el diseño",
    description: "Seguridad a nivel de fila (RLS) en todas las tablas, roles explícitos, enlaces por token y webhooks verificados.",
  },
  {
    title: "Experiencia en el mercado mexicano",
    description: "Conocemos el ecosistema local: SAT, CFDI, Mercado Pago, la reforma laboral y las necesidades reales de empresas en México.",
  },
];

export const STACK = [
  { area: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind", "Astro"] },
  { area: "Backend", items: ["Go", "Python", "Node"] },
  { area: "Datos", items: ["Supabase", "PostgreSQL", "Redis"] },
  { area: "Mobile", items: ["Flutter", "PWA"] },
  { area: "Deploy", items: ["Vercel", "GitHub Actions", "VPS"] },
];

export const VALUES: { icon: IconName; title: string; description: string }[] = [
  { icon: "scale", title: "Creemos en la razón y la justicia", description: "Valoramos la transparencia, el respeto y la equidad en todas nuestras interacciones." },
  { icon: "users", title: "Creemos en el talento humano", description: "Valoramos el desarrollo profesional y el crecimiento personal de cada miembro de nuestro equipo." },
  { icon: "shield", title: "Creemos en la seguridad", description: "Valoramos la protección de información y activos críticos de nuestros clientes." },
  { icon: "clock", title: "Creemos en la puntualidad", description: "Valoramos el cumplimiento de plazos y la eficiencia en todas nuestras entregas." },
  { icon: "bulb", title: "Creemos en la creatividad", description: "Valoramos la innovación y el pensamiento creativo en todos nuestros proyectos." },
  { icon: "bolt", title: "Creemos en la prontitud a la acción", description: "Valoramos la capacidad de responder rápidamente a las necesidades de nuestros clientes." },
];

export type ProjectId = "alra" | "ceccin" | "minuteko" | "storix" | "ulrex" | "tindertec" | "mbs" | "ag";

export type Project = {
  id: ProjectId;
  category: string;
  title: string;
  client: string;
  summary: string;
  description: string;
  highlights: string[];
  tags: string[];
  delivery: string;
};

export const PROJECTS: Project[] = [
  {
    id: "alra",
    category: "PWA industrial",
    title: "ALRA Trazabilidad",
    client: "ALRA Plastic Recycling",
    summary: "Trazabilidad de reciclaje con lotes QR, pesos, fotos e inventario por material.",
    description:
      "Sistema de planta en PWA para el reciclaje de plástico. Cada lote y sublote recibe un código QR (LT-n) y avanza por su ciclo Recibido → Molienda → Peletizado → Finalizado; en cada paso (molienda, peletizado, venta, retorno) se registra peso y foto. El inventario por material (PET, HDPE, LDPE, PP) se actualiza con cada movimiento, con historial y gráficas.",
    highlights: [
      "Lotes y sublotes con código QR",
      "Inventario por material actualizado en cada movimiento",
      "Clientes empresa con contactos",
      "Roles Administrador / Operador con RLS en todas las tablas",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "Edge Functions", "react-email"],
    delivery: "PWA de uso diario en planta",
  },
  {
    id: "ceccin",
    category: "ERP · PWA",
    title: "CECCIN",
    client: "Protección contra incendios",
    summary: "ERP para reportes de servicio de extintores e hidrantes, con app de campo y portal de clientes.",
    description:
      "ERP para el servicio de extintores e hidrantes. Los técnicos levantan reportes en campo con fotos, firma digital y ubicación del operador; la evidencia se organiza por activo y posición, y cada reporte genera un formato de inspección imprimible. Tres frentes: app de campo, dashboard (clientes, usuarios, plantillas por planta y reportes) y portal de clientes con acceso por token.",
    highlights: [
      "Levantamiento en campo con fotos, firma digital y ubicación",
      "Plantillas de inspección por planta",
      "Portal de clientes con acceso por token",
      "Formato de inspección imprimible",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "sharp"],
    delivery: "PWA de campo + dashboard + portal de clientes",
  },
  {
    id: "minuteko",
    category: "SaaS",
    title: "Minuteko",
    client: "Registro de jornada laboral",
    summary: "SaaS multi-inquilino de registro de jornada con reconocimiento facial y modo sin conexión.",
    description:
      "SaaS multi-inquilino para plantas industriales y técnicos en campo, pensado para la reforma laboral que hace obligatorio el registro electrónico de jornada. Incluye roles para RH, supervisores, auditores y operadores; consentimiento, correcciones, comprobantes y reportes. La app móvil permite checar, reportar incidencias, pedir vacaciones, ver al equipo y recibir avisos, incluso sin conexión.",
    highlights: [
      "Reconocimiento facial con antispoofing",
      "App móvil con modo sin conexión",
      "API en Go con contrato OpenAPI",
      "Esquema Postgres multi-inquilino con RLS",
    ],
    tags: ["Go", "OpenAPI", "Next.js", "Flutter", "FastAPI", "ONNX", "PostgreSQL", "Astro"],
    delivery: "API + web admin + app móvil + servicio biométrico + landing",
  },
  {
    id: "storix",
    category: "E-commerce",
    title: "Storix",
    client: "neurovix.store",
    summary: "Tienda de ropa tech donde el logo se dibuja en vivo sobre la foto real de la prenda.",
    description:
      "E-commerce de playeras, hoodies y gorras con logos de lenguajes, frameworks y herramientas de IA. La impresión no es una imagen fija: el logo se compone en vivo sobre una foto real de la prenda, y el cliente elige color, tamaño y posición antes de agregar al carrito. Pipeline propio con una foto por prenda y color y el área de impresión definida en píxeles.",
    highlights: [
      "Personalizador de logo en vivo sobre la prenda",
      "Pagos con Mercado Pago (Checkout API + webhook)",
      "Acceso sin contraseña con código por correo",
      "CI/CD con GitHub Actions",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "Mercado Pago", "Resend", "sharp"],
    delivery: "Tienda en línea en neurovix.store",
  },
  {
    id: "ulrex",
    category: "Sitio web + panel interno",
    title: "Ulrex",
    client: "Ulrex General Contracting",
    summary: "Sitio con escena 3D hecha a mano y panel interno de CRM, ventas y organización.",
    description:
      "Sitio público de una página con una escena 3D hecha a mano y animaciones al hacer scroll, exportado como sitio estático. Detrás, un panel interno con CRM (leads y oportunidades), ventas (cotizaciones, productos y facturas), organización (equipo, calendario y reportes) y ajustes.",
    highlights: [
      "Escena 3D propia con three.js",
      "CRM de leads y oportunidades",
      "Cotizaciones, productos y facturas",
      "Equipo, calendario y reportes",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "three.js", "Framer Motion", "Supabase"],
    delivery: "Sitio estático en Hostinger + panel de administración",
  },
  {
    id: "tindertec",
    category: "Web + móvil",
    title: "TinderTec / ConectaTec",
    client: "Red social universitaria · México",
    summary: "Red social para estudiantes con chat en tiempo real, Premium y app móvil.",
    description:
      "PWA para que estudiantes de México se conozcan, con app móvil. Filtros por estado, ciudad, universidad y campus; matches, chat en tiempo real, suscripción Premium con pagos en línea y agentes de cobro en efectivo, reportes y panel de administración. Tres piezas: web PWA, API en Go con WebSockets y cliente Flutter.",
    highlights: [
      "Chat en tiempo real con WebSockets",
      "Premium con Mercado Pago y cobro en efectivo",
      "Filtros por estado, ciudad, universidad y campus",
      "Moderación con reportes y panel de admin",
    ],
    tags: ["Next.js", "Go", "Flutter", "Supabase", "Redis", "Mercado Pago"],
    delivery: "PWA + app móvil + API en VPS",
  },
  {
    id: "mbs",
    category: "Sitio web",
    title: "MBS México",
    client: "MBS Construcciones",
    summary: "Sitio corporativo de construcción, estático y optimizado para SEO técnico.",
    description:
      "Sitio corporativo con cinco secciones: inicio, servicios, proyectos, nosotros y contacto. Generado como sitio estático para cargar rápido y optimizado para SEO técnico, de modo que la empresa aparezca cuando sus clientes la buscan.",
    highlights: [
      "Cinco secciones con portafolio de obras",
      "Sitio estático de carga rápida",
      "SEO técnico desde el inicio",
    ],
    tags: ["Astro", "Tailwind CSS"],
    delivery: "Sitio web corporativo",
  },
  {
    id: "ag",
    category: "Sitio web",
    title: "A | G Maquinado",
    client: "A | G Maquinado Industrial",
    summary: "Presencia digital completa para una empresa de maquinado industrial.",
    description:
      "Desarrollamos su sitio web oficial con portafolio de proyectos, catálogo de servicios con presentaciones profesionales, formulario de cotizaciones, correos empresariales con Google Workspace y firmas corporativas para cada colaborador.",
    highlights: [
      "Portafolio y catálogo de servicios",
      "Formulario de cotizaciones",
      "Correo empresarial y firmas corporativas",
    ],
    tags: ["Astro", "Tailwind CSS", "Canva", "Google Workspace"],
    delivery: "Sitio web corporativo + Google Workspace",
  },
];
