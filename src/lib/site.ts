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
      "Plataformas robustas, rápidas, seguras y escalables. Desde sistemas internos hasta productos SaaS listos para el mercado.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    image: "/web_development.jpg",
  },
  {
    icon: "mobile",
    title: "Apps Móviles",
    description:
      "Aplicaciones Android e iOS con experiencia de usuario intuitiva y moderna, rendimiento real y sincronización en tiempo real.",
    tags: ["React Native", "Flutter", "Expo"],
    image: "/mobile_development.jpg",
  },
  {
    icon: "layers",
    title: "Sistemas ERP / CRM",
    description:
      "Automatiza y centraliza las operaciones de tu empresa con sistemas hechos exactamente para tus flujos de trabajo.",
    tags: ["Laravel", "Django", "MySQL"],
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
      "Modelos de lenguaje, visión computacional y machine learning aplicados a los procesos reales de tu negocio.",
    tags: ["OpenAI", "Python", "TensorFlow"],
    image: "/artificial_intelligence.jpg",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Infraestructura en la nube, pipelines de CI/CD, contenedores y monitoreo. Tu software siempre disponible y eficiente.",
    tags: ["AWS", "Docker", "Kubernetes"],
    image: "/cloud_computing.jpg",
  },
  {
    icon: "plug",
    title: "APIs & Integraciones",
    description:
      "Conectamos tus sistemas existentes: pagos, facturación electrónica (SAT), logística y más.",
    tags: ["REST", "GraphQL", "CFDI"],
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
    description: "Construimos en sprints con entregas parciales. Tú siempre ves el avance real.",
  },
  {
    title: "Lanzamiento & Soporte",
    description: "Desplegamos, capacitamos y seguimos contigo después del go-live.",
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
    title: "Experiencia en el mercado mexicano",
    description: "Conocemos el ecosistema local: SAT, CFDI, regulaciones y las necesidades reales de empresas en México.",
  },
];

export const STACK = [
  { area: "Frontend", items: ["React", "Next.js", "Astro"] },
  { area: "Backend", items: ["Node", "Python", "Laravel"] },
  { area: "Datos", items: ["PostgreSQL", "MongoDB", "Supabase"] },
  { area: "Cloud", items: ["AWS", "GCP", "Azure"] },
  { area: "Mobile", items: ["Flutter", "React Native"] },
];

export const VALUES: { icon: IconName; title: string; description: string }[] = [
  { icon: "scale", title: "Creemos en la razón y la justicia", description: "Valoramos la transparencia, el respeto y la equidad en todas nuestras interacciones." },
  { icon: "users", title: "Creemos en el talento humano", description: "Valoramos el desarrollo profesional y el crecimiento personal de cada miembro de nuestro equipo." },
  { icon: "shield", title: "Creemos en la seguridad", description: "Valoramos la protección de información y activos críticos de nuestros clientes." },
  { icon: "clock", title: "Creemos en la puntualidad", description: "Valoramos el cumplimiento de plazos y la eficiencia en todas nuestras entregas." },
  { icon: "bulb", title: "Creemos en la creatividad", description: "Valoramos la innovación y el pensamiento creativo en todos nuestros proyectos." },
  { icon: "bolt", title: "Creemos en la prontitud a la acción", description: "Valoramos la capacidad de responder rápidamente a las necesidades de nuestros clientes." },
];

export type ProjectId = "alra" | "gestion" | "tindertec" | "ag";

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
    category: "App móvil",
    title: "ALRA APP",
    client: "ALRA Plastic Recycling",
    summary: "Trazabilidad en tiempo real de lotes de plástico reciclado con códigos QR.",
    description:
      "Aplicación móvil para el seguimiento completo de lotes de plástico reciclado. Cada lote recibe un código QR único que se escanea en cada etapa del proceso: Entrada → Molienda → Peletizado → Salida, garantizando trazabilidad total y control de calidad en tiempo real.",
    highlights: [
      "Información instantánea de cada lote procesado",
      "Historial completo de transformación",
      "Certificados digitales de calidad",
    ],
    tags: ["React Native", "Nativewind", "Supabase", "Expo", "QR"],
    delivery: "Google Play Store & Apple App Store",
  },
  {
    id: "gestion",
    category: "Web app",
    title: "Sistema de Gestión de Proyectos",
    client: "Empresa de construcción",
    summary: "Gestión de obras, equipos y avances con sitio corporativo integrado.",
    description:
      "Plataforma completa para la gestión de proyectos de construcción. Permite crear y administrar proyectos, asignar tareas a equipos, establecer fechas de vencimiento y monitorear el progreso en tiempo real. Incluye página web corporativa propia integrada al sistema.",
    highlights: [
      "Tableros de tareas por equipo",
      "Seguimiento de avance por obra",
      "Sitio corporativo integrado",
    ],
    tags: ["React", "Node.js", "Express", "Supabase", "Tailwind CSS"],
    delivery: "Web app + sitio corporativo",
  },
  {
    id: "tindertec",
    category: "Web app",
    title: "TinderTec",
    client: "TECNM Campus Saltillo",
    summary: "Red social universitaria con algoritmo de afinidad propio.",
    description:
      "Plataforma de conexión social universitaria. Los estudiantes crean perfiles, descubren compañeros con intereses afines y hacen match mediante algoritmos de afinidad propios. Comenzó como app móvil y fue migrada a web en 48 horas tras el rechazo en App Store: una prueba de nuestra capacidad de adaptación bajo presión.",
    highlights: [
      "Algoritmo de afinidad propio",
      "Migración de móvil a web en 48 horas",
      "Desplegado en VPS propio",
    ],
    tags: ["Flutter", "Next.js", "Supabase", "Tailwind CSS"],
    delivery: "VPS Hostinger",
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
