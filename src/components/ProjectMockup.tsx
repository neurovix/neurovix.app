import type { ProjectId } from "@/lib/site";

/** Illustrative UI previews of each project, drawn with theme tokens. */
export default function ProjectMockup({ id }: { id: ProjectId }) {
  switch (id) {
    case "alra":
      return <AlraMockup />;
    case "gestion":
      return <GestionMockup />;
    case "tindertec":
      return <TinderTecMockup />;
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
  const stages = ["Entrada", "Molienda", "Peletizado", "Salida"];
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
          <span className="font-mono text-[10px] tracking-wider text-neutral-500">LOTE-2024-001</span>
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

function GestionMockup() {
  const columns = [
    { title: "Por hacer", items: ["Diseño de planos", "Revisión estructural"], tone: "text-amber-500" },
    { title: "En progreso", items: ["Cimentación norte"], tone: "text-accent-text" },
    { title: "Completado", items: ["Topografía", "Permisos"], tone: "text-emerald-500" },
  ];
  const progress = [
    { name: "Torre Norte", value: 72 },
    { name: "Edificio Sur", value: 45 },
  ];
  return (
    <div className="w-full max-w-[380px] overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2.5">
        <span className="text-xs font-semibold text-neutral-900">Project Manager</span>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
        </div>
      </div>
      <div className="p-3.5">
        <div className="mb-4 grid grid-cols-3 gap-2">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-1.5">
              <span className={`font-mono text-[9px] font-semibold uppercase tracking-wider ${col.tone}`}>{col.title}</span>
              {col.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-md border px-2 py-1.5 text-[10px] ${
                    col.title === "En progreso"
                      ? "border-accent/50 bg-accent/10 text-neutral-900"
                      : col.title === "Completado"
                        ? "border-neutral-200 bg-neutral-100 text-neutral-400 line-through"
                        : "border-neutral-200 bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {progress.map((p) => (
            <div key={p.name} className="flex items-center gap-2 text-[10px] text-neutral-500">
              <span className="w-16 shrink-0">{p.name}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
                <div className="h-full rounded-full bg-accent" style={{ width: `${p.value}%` }} />
              </div>
              <span className="w-7 text-right font-mono text-neutral-900">{p.value}%</span>
            </div>
          ))}
        </div>
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
