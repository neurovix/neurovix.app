import Link from "next/link";
import { CONTACT, NAV_LINKS, SERVICES, STORE } from "@/lib/site";
import Icon, { FacebookIcon, InstagramIcon, LinkedInIcon } from "./Icon";
import Logo from "./Logo";
import { Container } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-neutral-500">
              Desarrollo de software a la medida, automatización de procesos e inteligencia artificial para empresas que
              necesitan más que una plantilla.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:text-neutral-900"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:text-neutral-900"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:text-neutral-900"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-medium text-neutral-900">Empresa</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-500 transition-colors hover:text-neutral-900">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={STORE.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  {STORE.label}
                  <Icon name="external" className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-medium text-neutral-900">Servicios</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link href="/servicios" className="text-neutral-500 transition-colors hover:text-neutral-900">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-medium text-neutral-900">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-500">
              <li>
                <a href={CONTACT.phoneHref} className="flex items-center gap-2 transition-colors hover:text-neutral-900">
                  <Icon name="phone" className="h-4 w-4" /> {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 break-all transition-colors hover:text-neutral-900">
                  <Icon name="mail" className="h-4 w-4 shrink-0" /> {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4" /> {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <p>© {year} Neurovix. Todos los derechos reservados.</p>
          <p className="font-mono">neurovix.app</p>
        </div>
      </Container>
    </footer>
  );
}
