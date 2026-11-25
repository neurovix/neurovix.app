import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import { CTASection, StatsGrid, WhyUsSection } from "@/components/sections";
import { ButtonLink, IconBadge, PageHeader, Section, SectionHeading } from "@/components/ui";
import { VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Somos un equipo de expertos en inteligencia artificial y desarrollo de software.",
};

export default function SobreNosotrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title="Creamos soluciones de inteligencia artificial y software a la medida para tu negocio"
        description="Somos un equipo de expertos en inteligencia artificial y desarrollo de software, con base en Saltillo, Coahuila, y clientes en México y Estados Unidos."
      >
        <div className="mt-8">
          <ButtonLink href="/contacto" size="lg" arrow>
            Solicitar una demostración
          </ButtonLink>
        </div>
      </PageHeader>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
            <Image
              src="/hero_aboutus.jpg"
              alt="Equipo de Neurovix"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Nuestra misión"
              title="Software que resuelve problemas reales de negocio"
              description="Construimos cada producto como si fuera nuestro: entendemos tu operación, diseñamos la solución correcta y la acompañamos después del lanzamiento. Hemos trabajado con empresas de reciclaje, protección contra incendios, construcción, manufactura, comercio y educación; también tenemos productos propios, como la tienda Storix."
            />
          </div>
        </div>
        <StatsGrid className="mt-4" />
      </Section>

      <Section className="border-t border-neutral-200">
        <SectionHeading eyebrow="Valores" title="Nuestros valores" description="Los principios que guían cada proyecto y cada decisión." align="center" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-white p-7">
              <IconBadge>
                <Icon name={v.icon} />
              </IconBadge>
              <h3 className="mt-5 text-lg font-semibold text-neutral-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <WhyUsSection />
      <CTASection />
    </>
  );
}
