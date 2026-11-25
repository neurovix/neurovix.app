import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import { CTASection, ProcessSection } from "@/components/sections";
import { ButtonLink, IconBadge, Section, SectionHeading, Tag, PageHeader } from "@/components/ui";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Desarrollo web y móvil, ERP/CRM, automatización IoT, inteligencia artificial, cloud y consultoría TI.",
};

export default function ServiciosPage() {
  const withImage = SERVICES.filter((s) => s.image);
  const extra = SERVICES.filter((s) => !s.image);

  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Soluciones tecnológicas hechas a la medida"
        description="Te ayudamos a crecer con software personalizado, automatizaciones inteligentes y tecnología de última generación."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contacto" size="lg" arrow>
            Solicitar una demostración
          </ButtonLink>
          <ButtonLink href="/proyectos" size="lg" variant="secondary">
            Ver proyectos
          </ButtonLink>
        </div>
      </PageHeader>

      <Section>
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Nuestros servicios"
          description="Cada solución es construida desde cero para adaptarse exactamente a los procesos y objetivos de tu negocio."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {withImage.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300"
            >
              <div className="relative h-44 overflow-hidden bg-neutral-100">
                <Image
                  src={s.image!}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <IconBadge className="absolute bottom-4 left-4 border-white/20 bg-black/50 text-paper backdrop-blur">
                  <Icon name={s.icon} />
                </IconBadge>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">{s.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
          {extra.map((s) => (
            <article key={s.title} className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6">
              <IconBadge>
                <Icon name={s.icon} />
              </IconBadge>
              <h3 className="mt-6 text-lg font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">{s.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <div className="border-y border-neutral-200 bg-white">
        <ProcessSection />
      </div>

      <CTASection title="¿No ves lo que necesitas?" description="Si tu proceso es único, tu software también debería serlo. Cuéntanos qué necesitas y lo diseñamos contigo." />
    </>
  );
}
