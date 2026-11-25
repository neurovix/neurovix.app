import Image from "next/image";
import Icon from "@/components/Icon";
import ProjectMockup from "@/components/ProjectMockup";
import {
  CTASection,
  ClientsStrip,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  StatsGrid,
  WhyUsSection,
} from "@/components/sections";
import { ButtonLink, Container, Eyebrow, Section, Tag } from "@/components/ui";
import { PROJECTS } from "@/lib/site";

const alra = PROJECTS[0];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <Container className="relative grid items-center gap-14 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Disponibles para nuevos proyectos
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              Desarrollo de software a la medida y{" "}
              <span className="text-accent-text">automatización de procesos</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-500 text-pretty">
              Reduce costos y aumenta la eficiencia de tus operaciones con plataformas, apps y sistemas que se adaptan 100%
              a las necesidades de tu empresa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contacto" size="lg" arrow>
                Solicitar una demostración
              </ButtonLink>
              <ButtonLink href="/proyectos" size="lg" variant="secondary">
                Ver proyectos
              </ButtonLink>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-neutral-500">
              Web · Móvil · IoT & IIoT · Inteligencia artificial · Cloud
            </p>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
              <Image
                src="/hero_photo.jpeg"
                alt="Equipo de Neurovix desarrollando software"
                fill
                sizes="(min-width: 1024px) 512px, 100vw"
                className="object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl shadow-black/10 sm:-left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-ink">
                <Icon name="qr" />
              </span>
              <div>
                <p className="text-xs text-neutral-500">Lote escaneado</p>
                <p className="font-mono text-sm font-semibold text-neutral-900">#LT-2/SL-5</p>
              </div>
            </div>
            <div className="absolute -top-5 -right-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-xl shadow-black/10 sm:-right-6">
              <p className="text-xs text-neutral-500">Reducción de tiempos</p>
              <p className="text-2xl font-semibold tracking-tight text-accent-text">40–70%</p>
            </div>
          </div>
        </Container>
      </section>

      <ClientsStrip />

      {/* STATS */}
      <Section>
        <div className="mb-10 max-w-3xl">
          <Eyebrow>Resultados</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            Creamos <span className="text-accent-text">plataformas y sistemas a medida</span> que se adaptan 100% a tu empresa
          </h2>
          <p className="mt-4 text-lg text-neutral-500">Desde aplicaciones móviles y web hasta soluciones de IIoT.</p>
        </div>
        <StatsGrid />
      </Section>

      <ServicesSection limit={6} />

      <ProjectsSection />

      {/* FEATURED CASE */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 flex justify-center rounded-3xl border border-neutral-200 bg-neutral-100 px-6 py-14 lg:order-1">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-grid opacity-60" />
            <div className="relative">
              <ProjectMockup id="alra" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Caso destacado</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              <span className="text-accent-text">Trazabilidad</span> en tiempo real
            </h2>
            <p className="mt-3 text-sm text-neutral-500">
              Software desarrollado para <span className="font-medium text-neutral-900">ALRA PLASTIC S.A. de C.V.</span>
            </p>
            <p className="mt-5 text-lg text-neutral-600 text-pretty">
              Escanea códigos QR para dar seguimiento a lotes y sublotes en tiempo real. Cada lote tiene un historial completo
              desde su origen hasta su destino final.
            </p>
            <ul className="mt-6 space-y-3">
              {[...alra.highlights, "Transparencia total en la cadena de valor"].map((h) => (
                <li key={h} className="flex items-start gap-3 text-neutral-700">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent-text" strokeWidth={2} />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {alra.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/contacto" arrow>
                Cotiza tu propia aplicación
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <WhyUsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
