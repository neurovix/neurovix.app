import type { ReactNode } from "react";
import type { ProjectId } from "@/lib/site";

/** Illustrative UI previews of each project, drawn with theme tokens. */
export default function ProjectMockup({ id }: { id: ProjectId }) {
  switch (id) {
    case "alra":
      return <AlraMockup />;
    case "ceccin":
      return <CeccinMockup />;
    case "minuteko":
      return <MinutekoMockup />;
    case "storix":
      return <StorixMockup />;
    case "ulrex":
      return <UlrexMockup />;
    case "tindertec":
      return <TinderTecMockup />;
    case "mbs":
      return <MbsMockup />;
    case "ag":
      return <AgMockup />;
  }
}

// 7×7 QR-like pattern, 1 = filled
const QR = [
  "1110111",
  "1010101",
  "1011101",
  "1010101",
  "1110111",
  "0101010",
  "1011011",
];

function AlraMockup() {
  const stages = ["Recibido", "Molienda", "Peletizado", "Finalizado"];
  return (
    <div className="w-[230px] rounded-[30px] border border-neutral-300 bg-white p-2 shadow-2xl shadow-black/20">
      <div className="rounded-[24px] bg-neutral-50 px-4 pb-5 pt-3">
        <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-neutral-200" />
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-neutral-900">ALRA</span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> En línea
          </span>
        </div>
        <div className="mb-4 flex flex-col items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-4">
          <div className="grid grid-cols-7 gap-[3px]">
            {QR.join("")
              .split("")
              .map((c, i) => (
                <span key={i} className={`h-2.5 w-2.5 rounded-[2px] ${c === "1" ? "bg-accent" : "bg-transparent"}`} />
              ))}
          </div>
          <span className="font-mono text-[10px] tracking-wider text-neutral-500">LT-12 · PET · 840 kg</span>
        </div>
        <ol className="space-y-1.5">
          {stages.map((s, i) => (
            <li key={s} className="flex items-center gap-2 text-[11px]">
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-semibold ${
                  i < 2 ? "bg-accent text-ink" : i === 2 ? "border border-accent text-accent-text" : "border border-neutral-300 text-neutral-400"
                }`}
              >
                {i + 1}
              </span>
              <span className={i <= 2 ? "text-neutral-900" : "text-neutral-400"}>{s}</span>
              {i === 2 && <span className="ml-auto font-mono text-[9px] text-accent-text">EN CURSO</span>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function TinderTecMockup() {
  return (
    <div className="w-full max-w-[270px] rounded-2xl border border-neutral-300 bg-white p-6 text-center shadow-2xl shadow-black/20">
      <div className="mb-3 flex items-center justify-center gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-base font-semibold text-ink">JL</span>
        <span className="text-xl text-accent-text" aria-hidden="true">♥</span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-neutral-50">MR</span>
      </div>
      <p className="mb-3 text-sm font-semibold text-neutral-900">¡Es un match!</p>
      <div className="mb-4 flex flex-wrap justify-center gap-1.5">
        {["IA", "Dev", "Gaming", "Café"].map((t) => (
          <span key={t} className="rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-0.5 text-[10px] text-neutral-600">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[10px] text-neutral-500">
        <span>Afinidad</span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
          <div className="h-full w-[94%] rounded-full bg-accent" />
        </div>
        <span className="font-mono font-semibold text-accent-text">94%</span>
      </div>
    </div>
  );
}

function AgMockup() {
  return (
    <div className="w-full max-w-[380px] overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-2xl shadow-black/20">
      <div className="flex items-center gap-3 border-b border-neutral-200 bg-neutral-100 px-3.5 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
        </div>
        <span className="flex-1 rounded-md bg-white px-2.5 py-0.5 font-mono text-[10px] text-neutral-500">ag-maquinado.com</span>
      </div>
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2.5">
        <span className="text-sm font-bold text-neutral-900">A | G</span>
        <div className="flex gap-3 text-[10px] text-neutral-500">
          <span>Servicios</span>
          <span>Portafolio</span>
          <span>Contacto</span>
        </div>
      </div>
      <div className="px-4 py-5">
        <span className="font-mono text-[9px] uppercase tracking-wider text-accent-text">Maquinado industrial</span>
        <p className="mt-1 mb-3 text-lg font-semibold leading-tight text-neutral-900">
          Precisión en
          <br />
          cada pieza
        </p>
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-semibold text-ink">Cotizar</span>
      </div>
      <div className="flex gap-1.5 border-t border-neutral-200 px-4 py-2.5">
        {["CNC", "Torno", "Fresado"].map((t) => (
          <span key={t} className="rounded-md bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-600">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Shared chrome for desktop-style mockups. */
function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="w-full max-w-[380px] overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-2xl shadow-black/20">
      <div className="flex items-center gap-3 border-b border-neutral-200 bg-neutral-100 px-3.5 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
        </div>
        <span className="flex-1 rounded-md bg-white px-2.5 py-0.5 font-mono text-[10px] text-neutral-500">{url}</span>
      </div>
      {children}
    </div>
  );
}

/** Shared chrome for phone-style mockups. */
function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-[230px] rounded-[30px] border border-neutral-300 bg-white p-2 shadow-2xl shadow-black/20">
      <div className="rounded-[24px] bg-neutral-50 px-4 pb-5 pt-3">
        <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-neutral-200" />
        {children}
      </div>
    </div>
  );
}

function CeccinMockup() {
  const items = [
    { label: "Extintor PQS 6 kg · Pos. A-03", ok: true },
    { label: "Extintor CO₂ 4.5 kg · Pos. A-04", ok: true },
    { label: "Hidrante H-02 · Nave 2", ok: false },
  ];
  return (
    <PhoneFrame>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-900">Reporte #418</span>
        <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[9px] text-accent-text">EN CAMPO</span>
      </div>
      <ul className="mb-3 space-y-1.5">
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-2.5 py-2 text-[10px]">
            <span className={`h-2 w-2 shrink-0 rounded-full ${it.ok ? "bg-emerald-500" : "bg-amber-500"}`} />
            <span className="text-neutral-700">{it.label}</span>
          </li>
        ))}
      </ul>
      <div className="mb-3 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="aspect-square rounded-md border border-neutral-200 bg-neutral-200" />
        ))}
      </div>
      <div className="rounded-lg border border-dashed border-neutral-300 bg-white px-3 py-2">
        <svg viewBox="0 0 120 24" className="h-5 w-full text-neutral-900" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 18c8-14 12 4 18-4s6-8 10 2 10-6 16 0 8 6 14-2 10 2 16-4 12 6 18 0" />
        </svg>
        <p className="mt-1 flex items-center justify-between font-mono text-[9px] text-neutral-500">
          <span>Firma del cliente</span>
          <span>📍 25.42, -101.00</span>
        </p>
      </div>
    </PhoneFrame>
  );
}

function MinutekoMockup() {
  const log = [
    { name: "Entrada", time: "07:58" },
    { name: "Comida", time: "13:02" },
    { name: "Regreso", time: "13:31" },
  ];
  return (
    <PhoneFrame>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-900">Minuteko</span>
        <span className="font-mono text-[10px] text-neutral-500">Planta 2</span>
      </div>
      <div className="mb-4 flex flex-col items-center">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent">
          <span className="h-9 w-9 rounded-full bg-neutral-200" />
          <span className="absolute -bottom-1 rounded-full bg-emerald-500 px-1.5 py-0.5 font-mono text-[8px] font-semibold text-ink">98%</span>
        </div>
        <span className="mt-3 text-[11px] text-neutral-500">Rostro verificado</span>
      </div>
      <span className="mb-4 block rounded-full bg-accent py-2 text-center text-[11px] font-semibold text-ink">Checar salida</span>
      <ul className="space-y-1">
        {log.map((l) => (
          <li key={l.name} className="flex justify-between text-[10px] text-neutral-600">
            <span>{l.name}</span>
            <span className="font-mono text-neutral-900">{l.time}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 flex items-center gap-1.5 font-mono text-[9px] text-amber-500">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Sin conexión · 1 registro por sincronizar
      </p>
    </PhoneFrame>
  );
}

function StorixMockup() {
  return (
    <BrowserFrame url="neurovix.store">
      <div className="grid grid-cols-[1.1fr_1fr] gap-4 p-4">
        <div className="relative flex aspect-square items-center justify-center rounded-lg bg-neutral-200">
          <svg viewBox="0 0 100 100" className="h-full w-full text-neutral-900" aria-hidden="true">
            <path d="M30 18l-18 12 8 14 8-4v44h44V40l8 4 8-14-18-12c-4 6-10 8-20 8s-16-2-20-8z" fill="currentColor" />
          </svg>
          <span className="absolute left-1/2 top-[44%] -translate-x-1/2 rounded border border-dashed border-accent/80 px-1.5 py-0.5 font-mono text-[10px] font-bold text-accent-text">
            {"</>"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-neutral-900">Hoodie Next.js</span>
          <span className="mt-3 font-mono text-[9px] uppercase tracking-wider text-neutral-500">Color</span>
          <div className="mt-1 flex gap-1.5">
            <span className="h-3.5 w-3.5 rounded-full bg-neutral-900 ring-2 ring-accent ring-offset-1 ring-offset-white" />
            <span className="h-3.5 w-3.5 rounded-full border border-neutral-300 bg-neutral-50" />
            <span className="h-3.5 w-3.5 rounded-full bg-accent" />
          </div>
          <span className="mt-3 font-mono text-[9px] uppercase tracking-wider text-neutral-500">Tamaño</span>
          <div className="mt-1.5 h-1 rounded-full bg-neutral-200">
            <div className="h-full w-3/5 rounded-full bg-accent" />
          </div>
          <span className="mt-auto rounded-full bg-accent py-1.5 text-center text-[10px] font-semibold text-ink">Agregar al carrito</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

function UlrexMockup() {
  const pipeline = [
    { stage: "Leads", count: 24, width: "w-full" },
    { stage: "Cotización", count: 11, width: "w-[60%]" },
    { stage: "Ganadas", count: 6, width: "w-[34%]" },
  ];
  return (
    <BrowserFrame url="admin · CRM">
      <div className="flex">
        <div className="flex w-20 flex-col gap-2 border-r border-neutral-200 p-3 text-[10px] text-neutral-500">
          <span className="font-semibold text-accent-text">CRM</span>
          <span>Ventas</span>
          <span>Equipo</span>
          <span>Calendario</span>
          <span>Ajustes</span>
        </div>
        <div className="flex-1 p-4">
          <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">Oportunidades</span>
          <div className="mt-2 space-y-2">
            {pipeline.map((p) => (
              <div key={p.stage} className="text-[10px]">
                <div className="mb-0.5 flex justify-between text-neutral-600">
                  <span>{p.stage}</span>
                  <span className="font-mono text-neutral-900">{p.count}</span>
                </div>
                <div className="h-1.5 rounded-full bg-neutral-200">
                  <div className={`h-full rounded-full bg-accent ${p.width}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-1.5 text-[10px]">
            <span className="text-neutral-600">Factura F-0127</span>
            <span className="font-mono text-emerald-500">Pagada</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function MbsMockup() {
  return (
    <BrowserFrame url="mbs · inicio">
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2.5">
        <span className="text-sm font-bold text-neutral-900">MBS</span>
        <div className="flex gap-3 text-[10px] text-neutral-500">
          <span>Servicios</span>
          <span>Proyectos</span>
          <span>Nosotros</span>
          <span>Contacto</span>
        </div>
      </div>
      <div className="px-4 py-5">
        <span className="font-mono text-[9px] uppercase tracking-wider text-accent-text">Construcción</span>
        <p className="mt-1 mb-3 text-lg font-semibold leading-tight text-neutral-900">
          Obras que se
          <br />
          entregan a tiempo
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-10 rounded-md bg-neutral-200" />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-2 font-mono text-[10px] text-neutral-500">
        <span>Sitio estático</span>
        <span className="text-emerald-500">SEO técnico</span>
      </div>
    </BrowserFrame>
  );
}
