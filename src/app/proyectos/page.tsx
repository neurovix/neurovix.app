import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ProjectMockup from "@/components/ProjectMockup";
import { CTASection, ClientsStrip, StatsGrid } from "@/components/sections";
import { Container, PageHeader, Tag } from "@/components/ui";
import { PROJECTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Casos de éxito de Neurovix: PWA industriales, ERP, SaaS, e-commerce, apps móviles y sitios corporativos en producción.",
};

export default function ProyectosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyectos"
        title="Algunos de nuestros proyectos exitosos"
        description="Descubre cómo hemos ayudado a empresas a optimizar sus procesos, reducir costos y mejorar su eficiencia con soluciones innovadoras y personalizadas."
      >
        <StatsGrid className="mt-12" />
      </PageHeader>

      <section className="py-20 md:py-28">
        <Container className="space-y-6 md:space-y-8">
          {PROJECTS.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={p.id}
                id={p.id}
                className="scroll-mt-24 overflow-hidden rounded-3xl border border-neutral-200 bg-white"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Visual */}
                  <div
                    className={`relative flex min-h-[320px] items-center justify-center overflow-hidden border-neutral-200 bg-neutral-100 p-10 ${
                      reversed ? "border-b lg:order-2 lg:border-b-0 lg:border-l" : "border-b lg:border-b-0 lg:border-r"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
                    <div className="pointer-events-none absolute inset-0 bg-glow opacity-60" />
                    <div className="relative">
                      <ProjectMockup id={p.id} />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-center p-7 md:p-12">
                    <div className="flex items-center gap-3 font-mono text-xs text-neutral-500">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span className="h-px w-6 bg-neutral-300" />
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-accent-text">
                        {p.category}
                      </span>
                    </div>
                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">{p.title}</h2>
                    <p className="mt-1 text-sm text-neutral-500">{p.client}</p>
                    <p className="mt-5 leading-relaxed text-neutral-600 text-pretty">{p.description}</p>
                    <ul className="mt-6 space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-neutral-700">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" strokeWidth={2.25} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-2 border-t border-neutral-200 pt-5 text-sm text-neutral-500">
                      <Icon name="layers" className="h-4 w-4" />
                      {p.delivery}
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex shrink-0 items-center gap-1 font-medium text-accent-text hover:underline"
                        >
                          Visitar
                          <Icon name="external" className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      <ClientsStrip />

      <CTASection title="¿Tienes un proyecto en mente?" description="Cuéntanos tu idea y construiremos la solución perfecta para tu negocio." />
    </>
  );
}
