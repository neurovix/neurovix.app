import type { Metadata } from "next";
import Icon, { type IconName } from "@/components/Icon";
import { IconBadge, PageHeader, Section } from "@/components/ui";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Cuéntanos sobre tu proyecto. Te respondemos en menos de 24 horas laborales.",
};

const FIELDS: {
  name: string;
  label: string;
  type: string;
  autoComplete: string;
  half?: boolean;
}[] = [
  { name: "name", label: "Nombre", type: "text", autoComplete: "given-name", half: true },
  { name: "apellido", label: "Apellido", type: "text", autoComplete: "family-name", half: true },
  { name: "empresa", label: "Nombre de la empresa", type: "text", autoComplete: "organization", half: true },
  { name: "cargo", label: "Cargo", type: "text", autoComplete: "organization-title", half: true },
  { name: "email", label: "Correo electrónico", type: "email", autoComplete: "email", half: true },
  { name: "telefono", label: "Teléfono", type: "tel", autoComplete: "tel", half: true },
];

const inputClass =
  "w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: IconName;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5">
      <IconBadge className="shrink-0">
        <Icon name={icon} />
      </IconBadge>
      <div className="min-w-0">
        <h2 className="font-semibold text-neutral-900">{title}</h2>
        <div className="mt-1 text-sm text-neutral-500">{children}</div>
      </div>
    </div>
  );
}

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Cuéntanos sobre tu proyecto"
        description="Llena el formulario y te responderemos en menos de 24 horas laborales. Sin compromisos: solo una conversación honesta sobre cómo podemos ayudarte."
      />

      <Section className="!pt-12 md:!pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* FORM */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="rounded-3xl border border-neutral-200 bg-white p-6 md:p-10"
          >
            <input type="hidden" name="access_key" value="39bfccfa-f50e-4534-bdff-9ed17d6da6fb" />
            <input type="hidden" name="subject" value="Nuevo contacto desde neurovix.app" />

            <div className="flex items-center gap-3">
              <IconBadge>
                <Icon name="mail" />
              </IconBadge>
              <div>
                <h2 className="text-xl font-semibold text-neutral-900">Escríbenos</h2>
                <p className="text-sm text-neutral-500">Todos los campos son obligatorios.</p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {FIELDS.map((f) => (
                <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
                  <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium text-neutral-700">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required
                    className={inputClass}
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-neutral-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="¿Qué te gustaría construir?"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 font-medium text-ink transition-colors hover:bg-accent-hover sm:w-auto"
            >
              Enviar mensaje
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </button>
          </form>

          {/* CONTACT OPTIONS */}
          <aside className="flex flex-col gap-4">
            <ContactCard icon="phone" title="Llámanos">
              <a href={CONTACT.phoneHref} className="font-medium text-accent-text hover:underline">
                {CONTACT.phoneDisplay}
              </a>
              <p className="mt-1">Horario: {CONTACT.hours}.</p>
            </ContactCard>
            <ContactCard icon="chat" title="WhatsApp">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-medium text-accent-text hover:underline">
                Escríbenos ahora
              </a>
              <p className="mt-1">La forma más rápida de resolver dudas.</p>
            </ContactCard>
            <ContactCard icon="mail" title="Correo">
              <a href={`mailto:${CONTACT.email}`} className="break-all font-medium text-accent-text hover:underline">
                {CONTACT.email}
              </a>
            </ContactCard>
            <ContactCard icon="calendar" title="Agenda una reunión">
              <p>Platiquemos sobre tu proyecto en una llamada. Escríbenos y reservamos un espacio en nuestro calendario.</p>
            </ContactCard>
            <ContactCard icon="pin" title="Ubicación">
              <p>{CONTACT.location}</p>
            </ContactCard>
          </aside>
        </div>
      </Section>
    </>
  );
}
