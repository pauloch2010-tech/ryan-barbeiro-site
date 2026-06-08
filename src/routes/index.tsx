import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-barbershop.jpg";
import { Award, Star, MapPin, Phone, Instagram, Scissors, Clock, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5511966100717";
const INSTAGRAM = "https://instagram.com/coriolanobarbershop";
const ADDRESS = "Calçada Aldebarã 214, Santana de Parnaíba, SP";
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coriolano Barbearia — Premium em Santana de Parnaíba" },
      { name: "description", content: "Mais que barbearia, uma experiência. Premiada como melhor barbearia da região em 2017 e 2018. Agende seu horário em Santana de Parnaíba." },
      { property: "og:title", content: "Coriolano Barbearia — Premium em Santana de Parnaíba" },
      { property: "og:description", content: "Mais que barbearia, uma experiência. Cortes clássicos, degradês e barba com mestres premiados." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HairSalon",
        name: "Coriolano Barbearia",
        image: "/og.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calçada Aldebarã 214",
          addressLocality: "Santana de Parnaíba",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        telephone: "+5511966100717",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "185" },
      }),
    }],
  }),
  component: Home,
});

const services = [
  { name: "Corte Clássico", price: 45, desc: "Tesoura e máquina, acabamento impecável" },
  { name: "Degradê", price: 55, desc: "Fade preciso, transições milimétricas" },
  { name: "Barba", price: 35, desc: "Toalha quente, navalha e óleos premium" },
  { name: "Combo Cabelo + Barba", price: 85, desc: "Experiência completa, ritual masculino" },
  { name: "Sobrancelha", price: 20, desc: "Design masculino na medida certa" },
];

const testimonials = [
  { name: "Rafael M.", text: "Melhor barbearia que já frequentei. Ambiente impecável e profissionais que dominam a arte.", rating: 5 },
  { name: "Lucas P.", text: "Atendimento de outro nível. Saio sempre com o visual que pedi e mais um pouco.", rating: 5 },
  { name: "André S.", text: "O combo cabelo e barba é um ritual. Vale cada centavo, virou meu programa semanal.", rating: 5 },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Awards />
      <Services />
      <Reviews />
      <Location />
      <CTA />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-gold-soft">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Scissors className="w-5 h-5 text-gold" />
          <span className="font-display font-bold text-lg tracking-widest text-gold">CORIOLANO</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-muted-foreground">
          <a href="#servicos" className="hover:text-gold transition">Serviços</a>
          <a href="#depoimentos" className="hover:text-gold transition">Depoimentos</a>
          <a href="#localizacao" className="hover:text-gold transition">Local</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="text-xs md:text-sm uppercase tracking-wider px-4 py-2 bg-gold text-primary-foreground font-semibold hover:bg-gold-bright transition">
          Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <img src={heroImg} alt="Interior premium da Coriolano Barbearia" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold-soft text-gold text-xs uppercase tracking-[0.3em] mb-8">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Santana de Parnaíba · SP
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] uppercase">
            Coriolano
            <span className="block text-gradient-gold">Barbearia</span>
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-muted-foreground font-light max-w-xl">
            Mais que barbearia, <span className="text-gold italic">uma experiência</span>.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:bg-gold-bright transition">
              <MessageCircle className="w-4 h-4" />
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold font-semibold uppercase tracking-wider text-sm hover:bg-gold hover:text-primary-foreground transition">
              Ver Serviços
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-gold text-gold" : "fill-gold/70 text-gold"}`} />
                ))}
              </div>
              <span className="text-foreground font-semibold">4.7</span>
              <span className="text-muted-foreground">· 185 avaliações Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="border-y border-gold-soft bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {[2017, 2018].map((year) => (
          <div key={year} className="flex items-center gap-6">
            <Award className="w-12 h-12 text-gold shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Premiação</p>
              <p className="font-display text-2xl md:text-3xl font-semibold mt-1">
                Melhor Barbearia da Região <span className="text-gold">{year}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Cardápio" title="Serviços" />
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-gold-soft border border-gold-soft">
          {services.map((s) => (
            <div key={s.name} className="bg-background p-8 md:p-10 flex justify-between items-start gap-6 hover:bg-card transition group">
              <div>
                <h3 className="font-display text-2xl md:text-3xl uppercase group-hover:text-gold transition">{s.name}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs text-muted-foreground block">R$</span>
                <span className="font-display text-4xl md:text-5xl text-gold font-bold">{s.price}</span>
              </div>
            </div>
          ))}
          <div className="bg-card p-8 md:p-10 flex flex-col justify-center md:col-start-2">
            <p className="text-muted-foreground italic">"Cada corte é um ritual. Cada cliente, um cavalheiro."</p>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-4 text-gold uppercase tracking-wider text-sm font-semibold inline-flex items-center gap-2">
              Reservar horário →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-card/30 border-y border-gold-soft">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Quem passa, volta" title="Depoimentos" />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background border border-gold-soft p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{t.text}"</p>
              <p className="mt-6 text-sm text-gold uppercase tracking-wider">— {t.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-muted-foreground text-sm">
          <span className="text-gold font-semibold">4.7</span> de 5 · baseado em 185 avaliações no Google
        </p>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="localizacao" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader eyebrow="Visite-nos" title="Onde Estamos" align="left" />
          <div className="mt-10 space-y-6">
            <InfoLine icon={<MapPin className="w-5 h-5" />} label="Endereço">
              Calçada Aldebarã, 214<br />Santana de Parnaíba — SP
            </InfoLine>
            <InfoLine icon={<Clock className="w-5 h-5" />} label="Funcionamento">
              Terça a Sábado · 09h às 20h
            </InfoLine>
            <InfoLine icon={<Phone className="w-5 h-5" />} label="WhatsApp">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="hover:text-gold transition">(11) 96610-0717</a>
            </InfoLine>
            <InfoLine icon={<Instagram className="w-5 h-5" />} label="Instagram">
              <a href={INSTAGRAM} target="_blank" rel="noopener" className="hover:text-gold transition">@coriolanobarbershop</a>
            </InfoLine>
          </div>
          <a href={MAPS} target="_blank" rel="noopener" className="mt-10 inline-flex items-center gap-2 text-gold uppercase tracking-wider text-sm font-semibold border-b border-gold pb-1">
            Como chegar →
          </a>
        </div>
        <a href={MAPS} target="_blank" rel="noopener" className="aspect-square md:aspect-[4/5] block border border-gold-soft relative overflow-hidden group">
          <iframe
            title="Mapa Coriolano Barbearia"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
            className="absolute inset-0 w-full h-full grayscale contrast-125 group-hover:grayscale-0 transition duration-500"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-card/30 to-background border-t border-gold-soft">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl uppercase">
          Sua próxima visita<br />começa <span className="text-gradient-gold">agora</span>.
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          Agende em segundos pelo WhatsApp. Atendimento personalizado, sempre.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-10 inline-flex items-center gap-3 px-10 py-5 bg-gold text-primary-foreground font-semibold uppercase tracking-wider hover:bg-gold-bright transition">
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold-soft py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Scissors className="w-4 h-4 text-gold" />
          <span className="font-display tracking-widest text-gold">CORIOLANO BARBEARIA</span>
        </div>
        <p className="text-xs uppercase tracking-wider">
          Site criado por <span className="text-gold">Glec.IA — Paulo Souza</span>
        </p>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 bg-gold text-primary-foreground p-4 rounded-full shadow-2xl shadow-gold/30 hover:scale-110 transition">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

function SectionHeader({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="text-xs uppercase tracking-[0.4em] text-gold">— {eyebrow} —</p>
      <h2 className="mt-4 font-display text-4xl md:text-6xl uppercase">{title}</h2>
    </div>
  );
}

function InfoLine({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="text-gold mt-1">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-foreground">{children}</p>
      </div>
    </div>
  );
}
