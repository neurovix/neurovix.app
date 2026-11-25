import Image from "next/image";
import Link from "next/link";
import { CLIENTS, CONTACT, PROCESS, PROJECTS, SERVICES, STACK, STATS, WHY_US, type Project } from "@/lib/site";
import Icon from "./Icon";
import ProjectMockup from "./ProjectMockup";
import { ButtonLink, Container, IconBadge, Section, SectionHeading, Tag } from "./ui";

export function StatsGrid({ className = "" }: { className?: string }) {
  return (
    <dl className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 lg:grid-cols-4 ${className}`}>
      {STATS.map((s) => (
        <div key={s.label} className="bg-white p-6 md:p-8">
          <dt className="text-sm text-neutral-500">{s.label}</dt>
          <dd className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ClientsStrip() {
  return (
    <div className="border-y border-neutral-200 bg-white">
      <Container className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <p className="text-sm text-neutral-500 md:max-w-[14rem]">Empresas que confían en nosotros</p>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {CLIENTS.map((c) => (
            // Logos sit on the paper tile in both themes so their own colors stay legible.
            <li key={c.name} className="flex h-16 items-center rounded-xl bg-paper px-5">
              <Image
                src={c.logo}
                alt={c.name}
                width={c.width}
                height={c.height}
                className="h-10 w-auto object-contain grayscale transition hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <article key={s.title} className="group flex flex-col bg-white p-7 transition-colors hover:bg-neutral-100">
          <IconBadge>
            <Icon name={s.icon} />
          </IconBadge>
          <h3 className="mt-6 text-lg font-semibold text-neutral-900">{s.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">{s.description}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {s.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ServicesSection({ limit }: { limit?: number }) {
  return (
    <Section id="servicios">
      <SectionHeading
        eyebrow="Servicios"
        title="Todo lo que tu empresa necesita para operar con software propio"
        description="Cada solución se construye desde cero para adaptarse exactamente a los procesos y objetivos de tu negocio."
        action={
          limit ? (
            <ButtonLink href="/servicios" variant="secondary" arrow>
              Ver todos los servicios
            </ButtonLink>
          ) : undefined
        }
      />
      <ServicesGrid limit={limit} />
    </Section>
  );
}

export function ProjectPreviewCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/proyectos#${project.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300"
    >
      <div className="relative flex h-72 items-center justify-center overflow-hidden border-b border-neutral-200 bg-neutral-100 p-6">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div className="relative origin-center scale-[0.85] transition-transform duration-500 group-hover:scale-[0.9]">
          <ProjectMockup id={project.id} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-500">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-neutral-300" />
          <span className="text-accent-text">{project.category}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-neutral-900">{project.title}</h3>
        <p className="mt-1 text-sm text-neutral-500">{project.client}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{project.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text">
          Ver caso
          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

export function ProjectsSection() {
  return (
    <Section id="proyectos" className="bg-white border-y border-neutral-200">
      <SectionHeading
        eyebrow="Proyectos"
        title="Software real, en producción, para empresas reales"
        description="Desde reciclaje industrial hasta construcción y educación: hemos diseñado, construido y desplegado soluciones en sectores muy distintos."
        action={
          <ButtonLink href="/proyectos" variant="secondary" arrow>
            Ver todos los proyectos
          </ButtonLink>
        }
      />
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectPreviewCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section id="proceso">
      <SectionHeading
        eyebrow="Proceso"
        title="Cómo trabajamos"
        description="Un proceso claro, con entregas frecuentes y comunicación directa con el equipo que construye tu producto."
        align="center"
      />
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((step, i) => (
          <li key={step.title} className="relative rounded-2xl border border-neutral-200 bg-white p-6">
            <span className="font-mono text-sm text-accent-text">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-lg font-semibold text-neutral-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">{step.description}</p>
            {i < PROCESS.length - 1 && (
              <Icon
                name="arrowRight"
                className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full border border-neutral-200 bg-neutral-50 p-2 text-neutral-400 lg:block"
                strokeWidth={2}
              />
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function WhyUsSection() {
  const year = new Date().getFullYear();
  return (
    <Section id="nosotros" className="bg-white border-y border-neutral-200">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Por qué Neurovix"
            title={
              <>
                No somos una agencia más.
              </>
            }
            description="Somos un equipo de ingenieros y estrategas de producto que construyen software como si fuera nuestro propio negocio. Cada decisión técnica tiene un porqué de negocio detrás."
          />
          <ul className="-mt-4 space-y-3">
            {WHY_US.map((item) => (
              <li key={item.title} className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 bg-glow opacity-70" />
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8 font-mono">
            <div className="mb-6 flex items-center justify-between text-sm">
              <span className="text-neutral-500">
                <span className="text-accent-text">neurovix</span> / stack
              </span>
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              </span>
            </div>
            <dl className="divide-y divide-neutral-200">
              {STACK.map((row) => (
                <div key={row.area} className="flex flex-wrap items-center justify-between gap-3 py-3.5">
                  <dt className="text-xs uppercase tracking-widest text-neutral-500">{row.area}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {row.items.map((item) => (
                      <span key={item} className="rounded-md border border-neutral-200 bg-white px-2 py-0.5 text-xs text-neutral-700">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex items-center gap-2.5 border-t border-neutral-200 pt-5 text-xs text-neutral-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponibles para nuevos proyectos · {year}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function CTASection({
  title = "¿Listo para construir algo?",
  description = "Cuéntanos sobre tu proyecto. Sin compromisos: solo una conversación honesta sobre si podemos ayudarte.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-accent px-6 py-14 text-ink md:px-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 60% 80% at 100% 50%, black, transparent)",
          }}
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">{title}</h2>
            <p className="mt-4 max-w-xl text-base md:text-lg text-ink/75">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <Link
              href="/contacto"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 font-medium text-paper transition-opacity hover:opacity-85"
            >
              Solicitar una demostración
              <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/25 px-6 font-medium transition-colors hover:bg-ink/10"
            >
              <Icon name="chat" className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
