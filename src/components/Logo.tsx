import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-10 w-10" : "h-8 w-8";
  const text = size === "lg" ? "text-2xl" : "text-lg";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Neurovix, inicio">
      <Image
        src="/icons/neurovix_n.png"
        alt=""
        width={80}
        height={80}
        className={`${box} rounded-lg ring-1 ring-neutral-200`}
      />
      <span className={`${text} font-semibold tracking-tight text-neutral-900`}>Neurovix</span>
    </Link>
  );
}
