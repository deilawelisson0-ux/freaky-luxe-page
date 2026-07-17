import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import mateusAsset from "@/assets/mateus.asset.json";
import monteLesteAsset from "@/assets/monte-leste.asset.json";
import darkLabAsset from "@/assets/dark-lab.asset.json";
import formulaAsset from "@/assets/formula-expressa.asset.json";
import consultoriaAsset from "@/assets/consultoria.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const LINKS = {
  consultoria:
    "https://api.whatsapp.com/send/?phone=551151991683&text=Oi!%20Vim%20do%20stories%20do%20Instagram%20do%20Mateus%20e%20quero%20saber%20mais%20sobre%20o%20Esquadr%C3%A3o%20%C3%81guia%20%EF%BF%BD&type=phone_number&app_absent=0&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  monteLeste:
    "https://www.monteleste.com.br/?utm_source=influenciador&utm_medium=social&utm_campaign=mateus&utm_content=link_in_bio",
  darkLab:
    "https://darklabsuplementos.com.br/?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  formula:
    "https://www.formulaexpressa.com.br/?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  tiktok:
    "https://www.tiktok.com/@mateusfreaky?_r=1&_t=zs-945k1qggqks&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  youtube:
    "https://m.youtube.com/@mateusfreaky?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  instagram:
    "https://www.instagram.com/mateusfreaky?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
};

const PARTNERS = [
  {
    name: "Monte Leste",
    logo: monteLesteAsset.url,
    href: LINKS.monteLeste,
    description: "Streetwear premium para quem vive o lifestyle fitness.",
  },
  {
    name: "Dark Lab",
    logo: darkLabAsset.url,
    href: LINKS.darkLab,
    description: "Suplementação de alta performance para maximizar seus resultados.",
  },
  {
    name: "Fórmula Expressa",
    logo: formulaAsset.url,
    href: LINKS.formula,
    description: "Manipulados personalizados para potencializar sua evolução.",
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Particles() {
  const items = Array.from({ length: 22 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const dx = (Math.random() - 0.5) * 120;
        const dy = -(Math.random() * 200 + 80);
        const duration = Math.random() * 10 + 12;
        const delay = Math.random() * 8;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/60"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              // @ts-expect-error css vars
              "--dx": `${dx}px`,
              "--dy": `${dy}px`,
              animation: `particle-drift ${duration}s linear ${delay}s infinite`,
              boxShadow: "0 0 6px rgba(255,255,255,0.5)",
            }}
          />
        );
      })}
    </div>
  );
}

function BokehParticles() {
  // Few, large, blurred bokeh particles — studio dust
  const items = [
    { left: 12, top: 28, size: 10, dx: 30, dy: -80, dur: 22, delay: 0, o: 0.55 },
    { left: 82, top: 22, size: 14, dx: -40, dy: -60, dur: 26, delay: 3, o: 0.5 },
    { left: 68, top: 68, size: 8, dx: 20, dy: -100, dur: 20, delay: 6, o: 0.6 },
    { left: 22, top: 74, size: 12, dx: -25, dy: -90, dur: 24, delay: 1.5, o: 0.55 },
    { left: 48, top: 18, size: 6, dx: 10, dy: -70, dur: 18, delay: 4, o: 0.5 },
    { left: 90, top: 55, size: 9, dx: -35, dy: -80, dur: 23, delay: 8, o: 0.45 },
    { left: 8, top: 55, size: 11, dx: 25, dy: -90, dur: 25, delay: 2, o: 0.5 },
    { left: 55, top: 85, size: 7, dx: -15, dy: -110, dur: 21, delay: 5, o: 0.55 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="hero-bokeh"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            // @ts-expect-error css vars
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            "--dur": `${p.dur}s`,
            "--delay": `${p.delay}s`,
            "--o": p.o,
          }}
        />
      ))}
    </div>
  );
}


function HeroPortrait() {
  const wrap = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0, rx: 0, ry: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const nx = (e.clientX - cx) / (r.width / 2);
    const ny = (e.clientY - cy) / (r.height / 2);
    setT({
      x: nx * 6,
      y: ny * 6,
      ry: nx * 2,
      rx: -ny * 2,
    });
  };
  const onLeave = () => setT({ x: 0, y: 0, rx: 0, ry: 0 });

  // Orbiting particles config
  const orbits = [
    { r: 44, dur: 18, delay: 0, dir: "cw" as const, size: 3 },
    { r: 44, dur: 18, delay: -9, dir: "cw" as const, size: 2 },
    { r: 52, dur: 26, delay: -4, dir: "ccw" as const, size: 2 },
    { r: 52, dur: 26, delay: -18, dir: "ccw" as const, size: 3 },
    { r: 48, dur: 22, delay: -12, dir: "cw" as const, size: 2 },
  ];

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto flex h-[300px] w-[300px] items-center justify-center sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px]"
      style={{
        transform: `translate3d(${t.x}px, ${t.y}px, 0) perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
        transition: "transform 500ms cubic-bezier(0.2,0.7,0.2,1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* Cinematic spotlight ~500px */}
      <div className="hero-spotlight" />

      {/* Outer translucent depth veil */}
      <div className="hero-outer-veil" />

      {/* Deep red radial halo */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle at center, rgba(217,4,41,0.32) 0%, rgba(217,4,41,0.10) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute inset-[-10%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 60%)",
          filter: "blur(22px)",
        }}
      />

      {/* HUD ticks — slow rotation (60s) */}
      <div className="hero-hud" />

      {/* Rotating conic accent (kept, softer) */}
      <div
        className="absolute inset-[-6%] rounded-full animate-spin-slow opacity-40"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(217,4,41,0.8) 40deg, transparent 90deg, transparent 180deg, rgba(255,255,255,0.5) 220deg, transparent 260deg, transparent 360deg)",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
        }}
      />

      {/* Orbiting particles */}
      <div className="hero-orbit">
        {orbits.map((o, idx) => (
          <span
            key={idx}
            className="hero-orbit-dot"
            style={{
              width: o.size,
              height: o.size,
              margin: `-${o.size / 2}px 0 0 -${o.size / 2}px`,
              // @ts-expect-error css var
              "--r": `${o.r}%`,
              animation: `${o.dir === "cw" ? "orbit-cw" : "orbit-ccw"} ${o.dur}s linear ${o.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Photo — entrance zoom + soft float */}
      <div className="relative h-[86%] w-[86%] animate-portrait-in">
        <div className="relative h-full w-full animate-float-soft">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow:
                "0 40px 80px -20px rgba(0,0,0,0.95), 0 0 70px -10px rgba(217,4,41,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          />
          <img
            src={mateusAsset.url}
            alt="Mateus Moraes"
            width={440}
            height={440}
            fetchPriority="high"
            decoding="async"
            className="relative h-full w-full rounded-full object-cover"
            draggable={false}
          />

          {/* Inner red rim */}
          <div className="hero-inner-rim" />
          {/* Brushed metallic signature ring */}
          <div className="hero-brushed-ring" />
          {/* Thin metallic ring */}
          <div className="hero-metallic-ring" />
          {/* One-time studio reflex */}
          <div className="hero-reflex" />
        </div>
      </div>
    </div>
  );
}


function CouponCard() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText("MATEUS");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  return (
    <div className="relative mx-auto mt-12 max-w-md animate-blur-reveal">
      <div className="coupon-card">
        <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">Use o cupom</p>
        <div className="mt-4 flex items-center justify-center">
          <span
            className="font-display text-4xl sm:text-5xl tracking-[0.25em]"
            style={{ color: "#fff", textShadow: "0 0 24px rgba(217,4,41,0.55)" }}
          >
            MATEUS
          </span>
        </div>
        <p className="mt-3 text-sm text-white/60">
          para garantir desconto nas compras.
        </p>
        <button
          onClick={copy}
          className={`btn-copy mt-6 ${copied ? "is-copied" : ""}`}
          aria-live="polite"
        >
          {copied ? "✓ Cupom copiado com sucesso!" : "Copiar cupom"}
        </button>
      </div>
    </div>
  );
}

function PartnerCard({ p, i }: { p: (typeof PARTNERS)[number]; i: number }) {
  return (
    <div
      className="partner-card group animate-fade-up"
      style={{ animationDelay: `${i * 140}ms` }}
    >
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={p.name}
        className="partner-orb block"
      >
        <span className="partner-orb-inner">
          <img src={p.logo} alt={p.name} width={160} height={160} loading="lazy" decoding="async" draggable={false} />
        </span>

      </a>
      <h3 className="partner-name mt-8 font-display text-xl tracking-[0.2em] sm:text-2xl">
        {p.name}
      </h3>
      <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-white/55">
        {p.description}
      </p>
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-access mt-8"
      >
        Acessar
      </a>
    </div>
  );
}




function LinkTile({
  href,
  label,
  sub,
  icon,
}: {
  href: string;
  label: string;
  sub?: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 overflow-hidden rounded-xl glass px-5 py-4 transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "0 10px 30px -15px rgba(0,0,0,0.8)" }}
    >
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(180deg, #D90429, transparent)" }}
      />
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 text-white/80 transition group-hover:bg-white/10">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-display text-lg tracking-widest">{label}</span>
        {sub ? <span className="block truncate text-xs text-white/50">{sub}</span> : null}
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-white/40 transition group-hover:translate-x-1 group-hover:text-white">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function Landing() {
  const partnersRef = useReveal<HTMLDivElement>();
  const consultRef = useReveal<HTMLDivElement>();
  const linksRef = useReveal<HTMLDivElement>();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Global vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(217,4,41,0.10), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.03), transparent 60%)",
        }}
      />

      {/* HERO */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
        <div className="hero-bg-cinema" />
        <div className="hero-bg-volumetric" />
        <div className="hero-bg-studio-glow" />
        <div className="hero-bg-carbon" />
        <div className="hero-fog" />
        <div className="hero-dust" />
        <BokehParticles />


        <div className="relative z-10 flex flex-col items-center text-center">

          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D90429] shadow-[0_0_10px_#D90429]" />
              @mateusfreaky
            </span>
          </div>

          <div className="mt-8 animate-scale-in">
            <HeroPortrait />
          </div>

          <h1
            className="mt-10 font-display text-[3.6rem] leading-none tracking-[0.11em] sm:text-[5.2rem] lg:text-[6.6rem] animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            <span className="name-sheen-wrap">
              <span className="name-brushed title-glow">MATEUS MORAES</span>
            </span>
          </h1>

          <p
            className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.35em] text-white/60 animate-fade-up sm:text-sm"
            style={{ animationDelay: "300ms" }}
          >
            <span>Treino</span>
            <span className="text-[#D90429]">•</span>
            <span>Dieta</span>
            <span className="text-[#D90429]">•</span>
            <span>Lifestyle</span>
            <span className="text-[#D90429]">•</span>
            <span>Meio-Maratonista</span>
          </p>

          <p
            className="mt-6 max-w-md text-balance text-sm text-white/60 animate-fade-up sm:text-base"
            style={{ animationDelay: "420ms" }}
          >
            Disciplina transforma pessoas comuns em extraordinárias.
          </p>

          <button
            onClick={() => scrollTo("evolucao")}
            className="btn-primary mt-10 animate-fade-up"
            style={{ animationDelay: "540ms" }}
          >
            Começar minha evolução
          </button>

          <button
            onClick={() => scrollTo("evolucao")}
            aria-label="Rolar para baixo"
            className="mt-14 text-white/40 transition hover:text-white animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            <svg width="22" height="34" viewBox="0 0 22 34" fill="none" className="animate-float-y">
              <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="11" cy="10" r="2" fill="currentColor" />
            </svg>
          </button>
        </div>
      </section>

      {/* CONSULTORIA */}
      <section id="evolucao" className="relative z-10 px-6 py-24 sm:py-32">
        <div ref={consultRef} className="reveal mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D90429]">Consultoria</span>
            <h2 className="mt-3 font-display text-4xl tracking-widest sm:text-6xl">
              CONSULTORIA <span className="text-[#D90429]">INDIVIDUALIZADA</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 sm:text-base">
              Treino, dieta e acompanhamento montados sob medida para transformar sua rotina em resultado real.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
            <div className="glass-strong relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
                <img src={consultoriaAsset.url} alt="Transformação real" width={1200} height={900} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Resultado real</p>
                  <p className="font-display text-2xl tracking-wider">Antes • Depois</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 sm:p-10">
              <ul className="space-y-4 text-sm sm:text-base">
                {[
                  "Plano de treino 100% personalizado",
                  "Estratégia de dieta com objetivo claro",
                  "Acompanhamento próximo via WhatsApp",
                  "Ajustes semanais baseados em performance",
                  "Mentalidade, disciplina e evolução contínua",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#D90429]/20 text-[#D90429]">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              <a href={LINKS.consultoria} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full">
                Quero minha consultoria
              </a>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.3em] text-white/40">
                Vagas limitadas — Esquadrão Águia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="relative z-10 px-6 py-24">
        <div ref={partnersRef} className="reveal mx-auto max-w-4xl text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#D90429]">Parceiros</span>
          <h2 className="mt-3 font-display text-3xl tracking-widest sm:text-5xl">MARCAS PARCEIRAS</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/60 sm:text-base">
            Utilizo e recomendo apenas marcas que fazem parte da minha rotina e entregam qualidade de verdade.
          </p>

          <div className="mx-auto mt-16 grid gap-16 sm:mt-20 md:grid-cols-3 md:gap-10 lg:gap-14">
            {PARTNERS.map((p, i) => (
              <PartnerCard key={p.name} p={p} i={i} />
            ))}
          </div>

          <CouponCard />

          {/* Parcerias / contato */}
          <div className="mx-auto mt-10 max-w-md animate-blur-reveal" style={{ animationDelay: "200ms" }}>
            <div className="glass flex flex-col items-center gap-3 rounded-xl px-6 py-5 sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5 text-white/70">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">Parcerias</p>
                  <p className="truncate text-sm text-white/80">contatosmateusmoraes@gmail.com</p>
                </div>
              </div>
              <a
                href="mailto:contatosmateusmoraes@gmail.com"
                className="btn-ghost text-[11px] sm:text-xs"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* LINKS */}
      <section className="relative z-10 px-6 py-20">
        <div ref={linksRef} className="reveal mx-auto max-w-xl">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D90429]">Redes</span>
            <h2 className="mt-3 font-display text-3xl tracking-widest sm:text-5xl">ME SIGA</h2>
          </div>
          <div className="mt-8 grid gap-3">
            <LinkTile
              href={LINKS.instagram}
              label="Instagram"
              sub="@mateusfreaky"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              }
            />
            <LinkTile
              href={LINKS.tiktok}
              label="TikTok"
              sub="@mateusfreaky"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 3v3.2A5.3 5.3 0 0 0 21 11v3a8.3 8.3 0 0 1-5-1.7V17a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z" />
                </svg>
              }
            />
            <LinkTile
              href={LINKS.youtube}
              label="YouTube"
              sub="@mateusfreaky"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 12s0-3.3-.4-4.8a2.6 2.6 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.4A2.6 2.6 0 0 0 1.4 7.2C1 8.7 1 12 1 12s0 3.3.4 4.8a2.6 2.6 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.5.4-4.8.4-4.8zM10 15V9l5 3-5 3z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-14">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-display text-2xl tracking-[0.3em] sm:text-3xl">
            PERFORMANCE. <span className="text-[#D90429]">DISCIPLINA.</span> RESULTADOS.
          </p>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-white/60 transition hover:text-white"
          >
            @mateusfreaky
          </a>
          <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-white/30">
            © 2026 Mateus Moraes
          </p>
        </div>
      </footer>
    </main>
  );
}
