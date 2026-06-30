import { createFileRoute } from "@tanstack/react-router";
import logoImg from "@/assets/Logo 2 image.png_202606300837.jpeg";
import heroImg from "@/assets/Barber_with_styled_haircut_beard_202606291653.jpeg";
import photo1 from "@/assets/Barber_portfolio_photo_nudred_tw…_202606291651.jpeg";
import photo2 from "@/assets/Barber_portfolio_photo_curly_hair_202606291652.jpeg";
import photo3 from "@/assets/Barber_portfolio_photo_close-up_202606291652.jpeg";
import photo4 from "@/assets/Child_with_star_shaved_design_202606291653.jpeg";
import photo5 from "@/assets/Barber_portfolio_photo_hair_202606291653.jpeg";
import {
  Star, MapPin, Phone, Instagram, Clock, MessageCircle,
  Home, CalendarDays, Mail, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ryan Barbeiro R&B — Barbearia em Barueri/SP" },
      { name: "description", content: "Ryan Barbeiro R&B — barbearia premium em Barueri, SP. Cortes, degradês, platinados e barba. Atendimento por agendamento e a domicílio." },
      { property: "og:title", content: "Ryan Barbeiro R&B — Barbearia em Barueri/SP" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: HomePage,
});

const WHATSAPP = "https://wa.me/5511959797071";
const INSTAGRAM = "https://instagram.com/ryanbarbeirooo";
const EMAIL = "ryanbarbeirooo10@gmail.com";
const ADDRESS = "Rua Atenas 189, Jardim Califórnia, Barueri, SP";
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const services = [
  { name: "Corte Clássico",            price: "20", desc: "Tesoura e máquina, acabamento impecável" },
  { name: "Platinado",                 price: "30", desc: "Descoloração com técnica e precisão" },
  { name: "Design de Risco",           price: "40", desc: "Riscos e detalhes artísticos no fade" },
  { name: "Design de Risco Elaborado", price: "80", desc: "Criações complexas, arte no cabelo" },
  { name: "Barba",                     price: "20", desc: "Toalha quente, navalha e finalização premium" },
  { name: "Barba Cinto",               price: "30", desc: "Delineamento preciso com acabamento impecável" },
];

const gallery = [
  { src: heroImg, alt: "Degradê + Barba — Ryan Barbeiro",    label: "Degradê com Barba" },
  { src: photo1,  alt: "Twists com Fade — Ryan Barbeiro",    label: "Twists · Fade" },
  { src: photo2,  alt: "Cachos com Risco — Ryan Barbeiro",   label: "Cachos · Risco" },
  { src: photo3,  alt: "Fade Navalhado — Ryan Barbeiro",     label: "Fade Navalhado" },
  { src: photo4,  alt: "Infantil · Estrela — Ryan Barbeiro", label: "Infantil · Estrela" },
  { src: photo5,  alt: "Infantil — Ryan Barbeiro",           label: "Infantil · Platinado" },
];

const testimonials = [
  { text: "Profissional atencioso e caprichoso. Saio sempre satisfeito com o resultado.", rating: 5 },
  { text: "Atende em casa com toda a estrutura. Praticidade e qualidade no mesmo lugar.", rating: 5 },
  { text: "Degradê impecável, no horário marcado. Nunca mais fui em outra barbearia.", rating: 5 },
];

/* ─── tokens ─────────────────────────────────────────────────────────── */
const BG   = "oklch(0.06 0 0)";
const GOLD = "var(--gold)";
const LINE = "1px solid rgba(201,169,110,0.15)";

/* ─── Logo components ────────────────────────────────────────────────── */
function Logo({ size = 48 }: { size?: number }) {
  return (
    <img
      src={logoImg}
      alt="Ryan Barbeiro R&B"
      style={{
        width: size,
        height: size,
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "50%",
        display: "block",
      }}
    />
  );
}

function LogoRing({ size = 100 }: { size?: number }) {
  return (
    <div
      style={{
        display: "inline-block",
        borderRadius: "50%",
        border: "1.5px solid rgba(201,169,110,0.8)",
        padding: 3,
        background: "rgba(255,255,255,0.04)",
        boxShadow: "0 0 0 3px rgba(201,169,110,0.08), 0 4px 24px rgba(0,0,0,0.6)",
        flexShrink: 0,
      }}
    >
      <Logo size={size} />
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */
function HomePage() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Differentials />
      <Gallery />
      <Services />
      <Reviews />
      <Location />
      <CTA />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

/* ─── Nav ────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      backdropFilter: "blur(16px)",
      backgroundColor: "oklch(0.06 0 0 / 0.90)",
      borderBottom: LINE,
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <LogoRing size={42} />
          <div style={{ lineHeight: 1 }} className="hidden sm:block">
            <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.18em", color: "white", margin: 0 }}>Ryan Barbeiro</p>
            <p style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: GOLD, margin: "4px 0 0" }}>Barbearia · Barueri</p>
          </div>
        </a>

        <nav className="hidden md:flex" style={{ gap: 40, display: "flex" }}>
          {[["#galeria", "Portfólio"], ["#servicos", "Serviços"], ["#localizacao", "Contato"]].map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(180,180,180,0.8)", textDecoration: "none" }}>{label}</a>
          ))}
        </nav>

        <a href={WHATSAPP} target="_blank" rel="noopener" style={{
          fontSize: 11, textTransform: "uppercase", letterSpacing: "0.22em",
          padding: "0.6rem 1.4rem", background: GOLD, color: BG,
          fontWeight: 600, textDecoration: "none", fontFamily: "Oswald, sans-serif",
        }}>Agendar</a>
      </div>
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" style={{ position: "relative", minHeight: "100dvh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 64 }}>
      {/* Photo at 85% opacity */}
      <img
        src={heroImg}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", opacity: 0.85 }}
      />
      {/* Left-heavy gradient — dark left, transparent right */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,6,6,0.97) 32%, rgba(6,6,6,0.80) 52%, rgba(6,6,6,0.45) 70%, rgba(6,6,6,0.15) 100%)" }} />
      {/* Bottom fade */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,6,6,1) 0%, transparent 35%)" }} />

      {/* Content — left aligned */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem", width: "100%" }}>
        <div style={{ maxWidth: "54rem" }}>
          {/* Logo + eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 36 }}>
            <LogoRing size={72} />
            <div>
              <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.5em", color: "rgba(201,169,110,0.85)", margin: 0 }}>— Barbearia Premium —</p>
              <p style={{ fontSize: 10, color: "rgba(201,169,110,0.5)", textTransform: "uppercase", letterSpacing: "0.28em", margin: "5px 0 0" }}>Barueri · SP · Agendamento & Domicílio</p>
            </div>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, textTransform: "uppercase", lineHeight: 0.88, margin: 0 }}>
            <span style={{ display: "block", fontSize: "clamp(5rem, 17vw, 14rem)", letterSpacing: "-0.02em", color: "white" }}>RYAN</span>
            <span className="text-gradient-gold" style={{ display: "block", fontSize: "clamp(2rem, 6.5vw, 5.5rem)", letterSpacing: "0.26em", marginTop: "0.18em" }}>BARBEIRO</span>
          </h1>

          <p style={{ marginTop: 28, color: "rgba(200,200,200,0.65)", fontSize: "1rem", fontWeight: 300, letterSpacing: "0.04em", lineHeight: 1.65, maxWidth: 330 }}>
            Arte, precisão e estilo —<br />no salão ou a domicílio.
          </p>

          {/* CTAs */}
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href={WHATSAPP} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: GOLD, color: BG, padding: "1rem 2.4rem", fontSize: 11, fontFamily: "Oswald, sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.22em", textDecoration: "none" }}>
              <MessageCircle style={{ width: 15, height: 15 }} />
              Agendar agora
            </a>
            <a href="#galeria" style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1px solid rgba(201,169,110,0.55)", color: GOLD, padding: "1rem 2.4rem", fontSize: 11, fontFamily: "Oswald, sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.22em", textDecoration: "none" }}>
              Ver portfólio <ArrowRight style={{ width: 13, height: 13 }} />
            </a>
          </div>

          {/* Social */}
          <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 24, color: "rgba(140,140,140,0.7)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.25em" }}>
            <a href={INSTAGRAM} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: 6, color: "inherit", textDecoration: "none" }}>
              <Instagram style={{ width: 13, height: 13 }} />@ryanbarbeirooo
            </a>
            <span style={{ color: "rgba(201,169,110,0.2)" }}>·</span>
            <a href={WHATSAPP} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: 6, color: "inherit", textDecoration: "none" }}>
              <Phone style={{ width: 13, height: 13 }} />(11) 95979-7071
            </a>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div style={{ position: "absolute", bottom: 28, right: "8%", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ width: 1, height: 52, background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.55))" }} />
      </div>
    </section>
  );
}

/* ─── Differentials ──────────────────────────────────────────────────── */
function Differentials() {
  const items = [
    { Icon: Home,         title: "Atende a Domicílio", desc: "Levo toda a estrutura até você." },
    { Icon: CalendarDays, title: "Por Agendamento",    desc: "Horário reservado, sem espera." },
    { Icon: Clock,        title: "Seg – Sáb · 09–18h", desc: "Horário flexível para você." },
  ];
  return (
    <section style={{ borderTop: LINE, borderBottom: LINE }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))" }}>
        {items.map(({ Icon, title, desc }, i) => (
          <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "2.2rem 1.8rem", borderLeft: i > 0 ? LINE : undefined }}>
            <Icon style={{ width: 20, height: 20, color: GOLD, flexShrink: 0, marginTop: 2 }} strokeWidth={1.5} />
            <div>
              <p style={{ fontFamily: "Oswald, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: 14, fontWeight: 500, color: "white", margin: 0 }}>{title}</p>
              <p style={{ color: "rgba(150,150,150,0.8)", fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Gallery ────────────────────────────────────────────────────────── */
function Gallery() {
  return (
    <section id="galeria" style={{ padding: "5rem 0", background: "oklch(0.075 0 0)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionLabel n="01" label="Portfólio" title="Trabalhos" />

        {/* Zero-gap editorial grid */}
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 0 }}>
          {/* Large left photo */}
          <div style={{ gridColumn: "span 8", position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
            <GPhoto item={gallery[0]} />
          </div>
          {/* Right column — 2 stacked */}
          <div style={{ gridColumn: "span 4", display: "grid", gridTemplateRows: "1fr 1fr" }}>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <GPhoto item={gallery[1]} />
            </div>
            <div style={{ position: "relative", overflow: "hidden", borderTop: "1px solid rgba(6,6,6,0.8)" }}>
              <GPhoto item={gallery[2]} />
            </div>
          </div>
          {/* Bottom row — 3 equal */}
          {gallery.slice(3).map((g, i) => (
            <div key={i} style={{ gridColumn: "span 4", position: "relative", overflow: "hidden", aspectRatio: "1/1", borderTop: "1px solid rgba(6,6,6,0.8)" }}>
              <GPhoto item={g} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, textAlign: "center" }}>
          <a href={INSTAGRAM} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(140,140,140,0.7)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", textDecoration: "none" }}>
            <Instagram style={{ width: 12, height: 12 }} />
            Mais trabalhos · @ryanbarbeirooo
          </a>
        </div>
      </div>
    </section>
  );
}

function GPhoto({ item }: { item: { src: string; alt: string; label: string } }) {
  return (
    <>
      <img src={item.src} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,6,6,0.7) 0%, transparent 50%)" }} />
      <span style={{ position: "absolute", bottom: 10, left: 12, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.3em", color: GOLD }}>{item.label}</span>
    </>
  );
}

/* ─── Services ───────────────────────────────────────────────────────── */
function Services() {
  return (
    <section id="servicos" style={{ padding: "5rem 0", borderTop: LINE }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionLabel n="02" label="Cardápio" title="Serviços & Preços" />

        <div style={{ marginTop: 44 }}>
          {services.map((s, i) => (
            <div key={s.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 0", borderTop: LINE }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <span style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(201,169,110,0.3)", marginTop: 5, minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(1.1rem, 2.8vw, 1.65rem)", textTransform: "uppercase", fontWeight: 500, letterSpacing: "0.06em", color: "white", margin: 0 }}>{s.name}</h3>
                  <p style={{ color: "rgba(140,140,140,0.8)", fontSize: 12, marginTop: 4 }}>{s.desc}</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, marginLeft: 20, textAlign: "right" }}>
                <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, color: GOLD, fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1 }}>R${s.price}</span>
              </div>
            </div>
          ))}
          <div style={{ borderTop: LINE }} />
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a href={WHATSAPP} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: GOLD, color: BG, padding: "1rem 2.8rem", fontSize: 11, fontFamily: "Oswald, sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.22em", textDecoration: "none" }}>
            <MessageCircle style={{ width: 15, height: 15 }} />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ────────────────────────────────────────────────────────── */
function Reviews() {
  return (
    <section style={{ padding: "5rem 0", background: "oklch(0.075 0 0)", borderTop: LINE }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionLabel n="03" label="Depoimentos" title="O que dizem" />
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "2.5rem 4rem" }}>
          {testimonials.map((t, i) => (
            <div key={i}>
              <div style={{ fontSize: 44, lineHeight: 1, color: "rgba(201,169,110,0.15)", marginBottom: 10 }}>&ldquo;</div>
              <p style={{ color: "rgba(200,200,200,0.75)", lineHeight: 1.7, fontStyle: "italic", fontSize: 14 }}>{t.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 18 }}>
                <div style={{ width: 20, height: 1, background: "rgba(201,169,110,0.5)" }} />
                <div>
                  <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>
                    {Array.from({ length: t.rating }).map((_, j) => <Star key={j} style={{ width: 10, height: 10, fill: GOLD, color: GOLD }} />)}
                  </div>
                  <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.35em", color: GOLD, margin: 0 }}>Cliente R&B</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Location ───────────────────────────────────────────────────────── */
function Location() {
  return (
    <section id="localizacao" style={{ padding: "5rem 0", borderTop: LINE }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "3.5rem", alignItems: "start" }}>
        <div>
          <SectionLabel n="04" label="Localização" title="Onde estamos" align="left" />
          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { icon: <MapPin style={{ width: 14, height: 14 }} />, text: "Rua Atenas, 189 — Jardim Califórnia · Barueri, SP" },
              { icon: <Clock style={{ width: 14, height: 14 }} />, text: "Segunda a Sábado · 09h às 18h" },
              { icon: <Phone style={{ width: 14, height: 14 }} />, text: "(11) 95979-7071", href: WHATSAPP },
              { icon: <Instagram style={{ width: 14, height: 14 }} />, text: "@ryanbarbeirooo", href: INSTAGRAM },
              { icon: <Mail style={{ width: 14, height: 14 }} />, text: EMAIL, href: `mailto:${EMAIL}` },
            ].map(({ icon, text, href }, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ color: GOLD, flexShrink: 0, marginTop: 1 }}>{icon}</div>
                {href
                  ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" style={{ fontSize: 13, color: "rgba(190,190,190,0.8)", textDecoration: "none", lineHeight: 1.5 }}>{text}</a>
                  : <span style={{ fontSize: 13, color: "rgba(190,190,190,0.8)", lineHeight: 1.5 }}>{text}</span>
                }
              </div>
            ))}
          </div>
          <a href={MAPS} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, color: GOLD, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", textDecoration: "none" }}>
            Abrir no Google Maps <ArrowRight style={{ width: 11, height: 11 }} />
          </a>
        </div>

        <div style={{ aspectRatio: "4/3", border: LINE, overflow: "hidden" }}>
          <iframe title="Localização Ryan Barbeiro" src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`} style={{ width: "100%", height: "100%", border: "none", filter: "grayscale(1) contrast(1.1) brightness(0.75)" }} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ position: "relative", padding: "8rem 1.5rem", textAlign: "center", overflow: "hidden", borderTop: LINE }}>
      <img src={heroImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.08 }} />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${BG} 0%, transparent 40%, ${BG} 100%)` }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <LogoRing size={96} />

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 28, width: "100%", maxWidth: 240 }}>
          <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, transparent, rgba(201,169,110,0.55))" }} />
          <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.5em", color: GOLD }}>R&B</span>
          <div style={{ height: 1, flex: 1, background: "linear-gradient(to left, transparent, rgba(201,169,110,0.55))" }} />
        </div>

        <h2 style={{ marginTop: 28, fontFamily: "Oswald, sans-serif", fontWeight: 700, textTransform: "uppercase", fontSize: "clamp(2.8rem, 9vw, 6.5rem)", lineHeight: 1.05 }}>
          Seu estilo,<br /><span className="text-gradient-gold">seu jeito</span>.
        </h2>

        <p style={{ marginTop: 18, color: "rgba(150,150,150,0.8)", fontSize: 14, lineHeight: 1.7, maxWidth: 300 }}>
          Agende em segundos. No salão ou a domicílio, em Barueri e região.
        </p>

        <a href={WHATSAPP} target="_blank" rel="noopener" style={{ marginTop: 36, display: "inline-flex", alignItems: "center", gap: 12, background: GOLD, color: BG, padding: "1.1rem 3.5rem", fontSize: 11, fontFamily: "Oswald, sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.25em", textDecoration: "none" }}>
          <MessageCircle style={{ width: 16, height: 16 }} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: LINE }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "2.2rem 1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LogoRing size={40} />
          <div style={{ width: 1, height: 28, background: "rgba(201,169,110,0.18)" }} />
          <div>
            <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "white", margin: 0 }}>Ryan Barbeiro</p>
            <p style={{ fontSize: 9, color: "rgba(130,130,130,0.7)", marginTop: 3, letterSpacing: "0.15em" }}>Barueri · SP</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {[
            { href: INSTAGRAM, Icon: Instagram, label: "Instagram" },
            { href: WHATSAPP,  Icon: MessageCircle, label: "WhatsApp" },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(130,130,130,0.7)", textDecoration: "none" }}>
              <Icon style={{ width: 12, height: 12 }} />{label}
            </a>
          ))}
        </div>

        <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(80,80,80,0.8)" }}>
          Site por <span style={{ color: "rgba(110,110,110,0.9)" }}>Glec.IA</span>
        </p>
      </div>
    </footer>
  );
}

/* ─── Floating WhatsApp ──────────────────────────────────────────────── */
function FloatingWhats() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp" style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50, width: 52, height: 52, background: GOLD, color: BG, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", boxShadow: "0 4px 20px rgba(201,169,110,0.45)", textDecoration: "none" }}>
      <MessageCircle style={{ width: 20, height: 20 }} />
    </a>
  );
}

/* ─── Section label ──────────────────────────────────────────────────── */
function SectionLabel({ n, label, title, align = "center" }: { n: string; label: string; title: string; align?: "center" | "left" }) {
  return (
    <div style={{ textAlign: align === "center" ? "center" : "left" }}>
      <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.55em", color: "rgba(201,169,110,0.4)", margin: 0 }}>{n} — {label}</p>
      <h2 style={{ marginTop: 10, fontFamily: "Oswald, sans-serif", fontWeight: 600, textTransform: "uppercase", fontSize: "clamp(2rem, 5.5vw, 4rem)", letterSpacing: "0.04em", lineHeight: 1, color: "white" }}>{title}</h2>
      <div style={{ marginTop: 12, height: 1, width: 48, background: "linear-gradient(to right, rgba(201,169,110,0.7), transparent)", marginLeft: align === "center" ? "auto" : undefined, marginRight: align === "center" ? "auto" : undefined }} />
    </div>
  );
}
