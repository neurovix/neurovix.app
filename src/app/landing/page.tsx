import type { Metadata } from "next";
import Icon from "@/components/Icon";
import {
  CTASection,
  ClientsStrip,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  StatsGrid,
  WhyUsSection,
} from "@/components/sections";
import { Container, buttonClass } from "@/components/ui";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software a la medida",
  description: "Diseñamos y desarrollamos soluciones digitales únicas para empresas que necesitan más que una plantilla.",
};

export default function LandingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <Container className="relative pt-20 pb-20 text-center md:pt-32 md:pb-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-xs uppercase tracking-widest text-accent-text">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Software a la medida · México
          </span>
          <h1 className="mx-auto mt-8 max-w-4xl text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-balance">
            Construimos <span className="text-accent-text">software</span> que transforma
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-neutral-500 text-pretty">
            Diseñamos y desarrollamos soluciones digitales únicas para empresas que necesitan más que una plantilla.{" "}
            <span className="text-neutral-900">Tecnología precisa. Visión estratégica.</span>
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contacto" className={buttonClass("primary", "lg")}>
              Iniciar proyecto
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </a>
            <a href="#servicios" className={buttonClass("secondary", "lg")}>
              Ver servicios
            </a>
          </div>
          <StatsGrid className="mx-auto mt-16 max-w-4xl text-left" />
        </Container>
      </section>

      <ClientsStrip />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <WhyUsSection />

      <div id="contacto" className="scroll-mt-20">
        <CTASection />
        <Container className="-mt-10 pb-20 md:-mt-14">
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 text-center transition-colors hover:border-accent/50"
            >
              <Icon name="mail" className="h-5 w-5 text-accent-text" />
              <span className="mt-3 font-mono text-xs uppercase tracking-widest text-neutral-500">Email</span>
              <span className="mt-1 break-all text-sm font-medium text-neutral-900">{CONTACT.email}</span>
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 text-center transition-colors hover:border-accent/50"
            >
              <Icon name="chat" className="h-5 w-5 text-accent-text" />
              <span className="mt-3 font-mono text-xs uppercase tracking-widest text-neutral-500">WhatsApp</span>
              <span className="mt-1 text-sm font-medium text-neutral-900">Escríbenos ahora</span>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 text-center transition-colors hover:border-accent/50"
            >
              <Icon name="phone" className="h-5 w-5 text-accent-text" />
              <span className="mt-3 font-mono text-xs uppercase tracking-widest text-neutral-500">Llamada</span>
              <span className="mt-1 text-sm font-medium text-neutral-900">{CONTACT.phoneDisplay}</span>
            </a>
          </div>
          <p className="mt-8 text-center font-mono text-xs text-neutral-500">neurovix.app · {CONTACT.location}</p>
        </Container>
      </div>
    </>
  );
}
