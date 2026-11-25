import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import Icon from "./Icon";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 scroll-mt-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-block font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-text ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <div
      className={`mb-12 md:mb-16 flex flex-col gap-6 ${
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-balance">{title}</h2>
        {description && (
          <p className={`mt-4 text-base md:text-lg text-neutral-500 text-pretty ${centered ? "mx-auto" : ""}`}>
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-accent text-ink hover:bg-accent-hover",
  secondary: "bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-100",
  ghost: "text-neutral-900 hover:text-accent-text",
};

export function buttonClass(variant: ButtonVariant = "primary", size: "md" | "lg" = "md") {
  const sizing = size === "lg" ? "h-12 px-6 text-base" : "h-10 px-4 text-sm";
  return `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors ${sizing} ${BUTTON_STYLES[variant]}`;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; size?: "md" | "lg"; arrow?: boolean }) {
  return (
    <Link className={`group ${buttonClass(variant, size)} ${className}`} {...props}>
      {children}
      {arrow && <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />}
    </Link>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-0.5 font-mono text-[11px] text-neutral-600">
      {children}
    </span>
  );
}

export function IconBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent-text ${className}`}
    >
      {children}
    </div>
  );
}

/** Top-of-page header used by every inner page. */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-neutral-200">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <Container className="relative pt-20 pb-16 md:pt-28 md:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-semibold tracking-tight text-balance">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-neutral-500 text-pretty">{description}</p>}
        {children}
      </Container>
    </header>
  );
}
