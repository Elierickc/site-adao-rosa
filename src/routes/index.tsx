import { createFileRoute } from "@tanstack/react-router";
import { Music, Calendar, Phone, Mail, MapPin, Instagram, Youtube, Facebook, Star, Users, Piano, Music2, Heart, Briefcase, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import heroPianistAsset from "@/assets/hero-pianist-real.jpg.asset.json";
import repClassica from "@/assets/rep-classica.jpg";
import repGospel from "@/assets/rep-gospel.jpg";
import repInstrumental from "@/assets/rep-instrumental.jpg";
import repMpb from "@/assets/rep-mpb.jpg";
import repCasamentos from "@/assets/rep-casamentos.jpg";
import repCorp from "@/assets/rep-corp.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import v1 from "@/assets/video-1.jpg";
import v2 from "@/assets/video-2.jpg";
import v3 from "@/assets/video-3.jpg";
import contactPiano from "@/assets/contact-piano.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adão Rosa Monteiro — Pianista | 40 Anos ao Piano" },
      { name: "description", content: "Pianista profissional com mais de 40 anos de carreira. Apresentações para casamentos, eventos corporativos, cerimônias e concertos." },
      { property: "og:title", content: "Adão Rosa Monteiro — Pianista" },
      { property: "og:description", content: "Uma vida dedicada à arte de emocionar. Música clássica, gospel, MPB e mais." },
    ],
  }),
  component: Index,
});

const nav = ["INÍCIO", "SOBRE", "REPERTÓRIO", "GALERIA", "VÍDEOS", "AGENDA", "DEPOIMENTOS", "CONTATO"];

const repertorio = [
  { img: repClassica, icon: Star, label: "MÚSICA\nCLÁSSICA" },
  { img: repGospel, icon: Music2, label: "GOSPEL" },
  { img: repInstrumental, icon: Piano, label: "INSTRUMENTAL" },
  { img: repMpb, icon: Music, label: "MPB" },
  { img: repCasamentos, icon: Heart, label: "CASAMENTOS" },
  { img: repCorp, icon: Briefcase, label: "EVENTOS\nCORPORATIVOS" },
];

const gallery = [g1, g2, g3, g4, g5];
const videos = [
  { img: v1, title: "APRESENTAÇÃO AO VIVO" },
  { img: v2, title: "HOMENAGENS" },
  { img: v3, title: "CONCERTOS ESPECIAIS" },
];

const agenda = [
  { day: "25", month: "MAIO", title: "CONCERTO ESPECIAL", venue: "Teatro Municipal", city: "São Paulo - SP", time: "20:00" },
  { day: "08", month: "JUN", title: "EVENTO CORPORATIVO", venue: "Hotel Fazenda", city: "Campinas - SP", time: "19:30" },
  { day: "21", month: "JUN", title: "CERIMÔNIA DE CASAMENTO", venue: "Espaço Villa", city: "Jundiaí - SP", time: "17:00" },
];

const depoimentos = [
  { text: "Uma apresentação inesquecível. Seu piano toca a alma!", author: "Maria L." },
  { text: "Excelência musical em cada nota. Emociona do início ao fim.", author: "João P." },
  { text: "Profissional talentoso, dedicado e que faz toda a diferença em qualquer evento.", author: "Ana C." },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="font-display text-3xl text-gold leading-none tracking-widest">ARM</div>
      <div className="border-l border-gold/40 pl-3">
        <div className="font-display text-xs text-gold tracking-[0.25em]">ADÃO ROSA MONTEIRO</div>
        <div className="text-[10px] text-gold/70 tracking-[0.4em] mt-0.5">P I A N I S T A</div>
      </div>
    </div>
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-gold/70 text-xs">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
      <span>❦</span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-display text-3xl md:text-4xl text-gold tracking-[0.3em] mb-3">{children}</h2>
      <Ornament />
    </div>
  );
}

function GoldButton({ children, variant = "solid", icon: Icon }: { children: React.ReactNode; variant?: "solid" | "outline"; icon?: any }) {
  const base = "inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.2em] font-medium transition-all duration-300";
  if (variant === "outline") {
    return (
      <button className={`${base} border border-gold/60 text-gold hover:bg-gold/10`}>
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </button>
    );
  }
  return (
    <button className={`${base} bg-gradient-to-b from-[oklch(0.78_0.15_80)] to-[oklch(0.55_0.13_70)] text-background hover:brightness-110 shadow-[0_8px_30px_-8px_oklch(0.72_0.14_75/0.6)]`}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO — layout como na referência */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        <img src={heroPianistAsset.url} alt="Adão Rosa Monteiro — 40 Anos ao Piano" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

        {/* NAV */}
        <nav className="relative z-20 flex items-center justify-between px-8 lg:px-16 py-6">
          <Logo />
          <ul className="hidden lg:flex items-center gap-6 text-[10px] tracking-[0.2em]">
            {nav.map((item, i) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={`hover:text-gold transition-colors ${i === 0 ? "text-gold" : "text-foreground/70"}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA buttons na base esquerda como na referência */}
        <div className="relative z-10 mt-auto px-8 lg:px-16 pb-10 lg:pb-14">
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-b from-[oklch(0.78_0.15_80)] to-[oklch(0.55_0.13_70)] text-background text-[10px] tracking-[0.15em] font-medium hover:brightness-110 shadow-[0_8px_30px_-8px_oklch(0.72_0.14_75/0.6)] transition-all">
              <Music className="w-3.5 h-3.5" />
              OUVIR MÚSICA
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold/60 text-gold text-[10px] tracking-[0.15em] font-medium hover:bg-gold/10 transition-all">
              <Calendar className="w-3.5 h-3.5" />
              AGENDAR APRESENTAÇÃO
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold/60 text-gold text-[10px] tracking-[0.15em] font-medium hover:bg-gold/10 transition-all">
              <Phone className="w-3.5 h-3.5" />
              ENTRAR EM CONTATO
            </button>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-8 lg:px-16 py-20 border-t border-gold/15">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-gold mb-4">SOBRE O ARTISTA</p>
            <h2 className="font-display text-3xl md:text-4xl text-gold mb-6 leading-tight">UMA HISTÓRIA ESCRITA<br />EM NOTAS MUSICAIS</h2>
            <p className="text-foreground/80 leading-relaxed mb-3 font-sans text-sm">
              Há mais de quatro décadas, Adão Rosa Monteiro transforma melodias em memórias inesquecíveis.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8 font-sans text-sm">
              Seu talento ao piano atravessa gerações, emocionando públicos em eventos, concertos e celebrações especiais.
            </p>
            <GoldButton>SAIBA MAIS</GoldButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 content-center">
            {[
              { icon: Piano, n: "40 ANOS", l: "DE EXPERIÊNCIA" },
              { icon: Music, n: "REPERTÓRIO", l: "VARIADO" },
              { icon: Star, n: "APRESENTAÇÕES", l: "EXCLUSIVAS" },
              { icon: Users, n: "MÚSICA PARA", l: "EVENTOS" },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <s.icon className="w-12 h-12 text-gold mx-auto mb-3 stroke-[1.2]" />
                <div className="text-[11px] tracking-[0.2em] text-gold font-semibold">{s.n}</div>
                <div className="text-[10px] tracking-[0.2em] text-gold/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPERTORIO */}
      <section id="repertório" className="px-8 lg:px-16 py-20 border-t border-gold/15">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>REPERTÓRIO</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {repertorio.map((r) => (
              <div key={r.label} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden gold-border">
                  <img src={r.img} alt={r.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                    <r.icon className="w-9 h-9 text-gold mx-auto mb-2 stroke-[1.2]" />
                    <div className="text-[10px] tracking-[0.2em] text-gold whitespace-pre-line leading-tight">{r.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <GoldButton variant="outline">VER TODOS OS REPERTÓRIOS</GoldButton>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="px-8 lg:px-16 py-20 border-t border-gold/15">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>GALERIA</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden gold-border group cursor-pointer">
                <img src={src} alt={`Galeria ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <GoldButton variant="outline">VER MAIS FOTOS</GoldButton>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section id="vídeos" className="px-8 lg:px-16 py-20 border-t border-gold/15">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>VÍDEOS</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.title} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden gold-border">
                  <img src={v.img} alt={v.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center bg-background/40 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-gold fill-gold ml-1" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-[11px] tracking-[0.25em] text-gold mt-4">{v.title}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <GoldButton variant="outline">VER MAIS VÍDEOS</GoldButton>
          </div>
        </div>
      </section>

      {/* AGENDA + DEPOIMENTOS */}
      <section className="px-8 lg:px-16 py-20 border-t border-gold/15">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* AGENDA */}
          <div id="agenda">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Calendar className="w-5 h-5 text-gold" />
              <h2 className="font-display text-2xl text-gold tracking-[0.3em]">AGENDA</h2>
              <span className="text-gold/60">❦</span>
            </div>
            <div className="space-y-4">
              {agenda.map((a) => (
                <div key={a.day + a.month} className="gold-border bg-card/50 p-5 flex items-center gap-6">
                  <div className="text-center min-w-[60px] border-r border-gold/30 pr-5">
                    <div className="font-display text-3xl text-gold leading-none">{a.day}</div>
                    <div className="text-[10px] tracking-[0.2em] text-gold/70 mt-1">{a.month}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] tracking-[0.25em] text-gold mb-1">{a.title}</div>
                    <div className="text-xs text-foreground/70">{a.venue}</div>
                    <div className="text-xs text-foreground/60">{a.city}</div>
                  </div>
                  <div className="text-sm text-gold tracking-wider">{a.time}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <GoldButton variant="outline">VER AGENDA COMPLETA</GoldButton>
            </div>
          </div>

          {/* DEPOIMENTOS */}
          <div id="depoimentos">
            <SectionTitle>DEPOIMENTOS</SectionTitle>
            <div className="relative">
              <div className="grid md:grid-cols-3 gap-4">
                {depoimentos.map((d) => (
                  <div key={d.author} className="gold-border bg-card/40 p-6 text-center">
                    <Quote className="w-6 h-6 text-gold mx-auto mb-4" />
                    <p className="font-display italic text-foreground/90 text-sm leading-relaxed mb-4">{d.text}</p>
                    <p className="text-[11px] tracking-[0.2em] text-gold">— {d.author}</p>
                  </div>
                ))}
              </div>
              <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-gold/60 flex items-center justify-center text-gold hover:bg-gold/10">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-gold/60 flex items-center justify-center text-gold hover:bg-gold/10">
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex justify-center gap-2 mt-6">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="w-2 h-2 rounded-full bg-gold/30" />
                <span className="w-2 h-2 rounded-full bg-gold/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative border-t border-gold/15">
        <img src={contactPiano} alt="Piano" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="relative px-8 lg:px-16 py-20 max-w-7xl mx-auto">
          <h2 className="font-display text-3xl text-gold tracking-[0.3em] text-center mb-3">ENTRE EM CONTATO</h2>
          <Ornament />
          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            <form className="space-y-4">
              <input className="w-full bg-transparent gold-border px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold" placeholder="Nome completo" />
              <div className="grid grid-cols-2 gap-4">
                <input className="w-full bg-transparent gold-border px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold" placeholder="Telefone / WhatsApp" />
                <input className="w-full bg-transparent gold-border px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold" placeholder="E-mail" />
              </div>
              <textarea rows={5} className="w-full bg-transparent gold-border px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold resize-none" placeholder="Mensagem" />
              <GoldButton>SOLICITAR ORÇAMENTO</GoldButton>
            </form>

            <div className="space-y-5 text-sm">
              <ContactItem icon={Phone} label="WHATSAPP" value="(11) 99999-9999" />
              <ContactItem icon={Mail} label="E-MAIL" value="contato@adaorosamonteiro.com.br" />
              <ContactItem icon={MapPin} label="LOCALIZAÇÃO" value="São Paulo - SP" />
              <div>
                <div className="flex items-center gap-3 text-gold mb-3">
                  <div className="w-9 h-9 gold-border flex items-center justify-center"><Users className="w-4 h-4" /></div>
                  <span className="text-[11px] tracking-[0.2em]">REDES SOCIAIS</span>
                </div>
                <div className="flex gap-3 pl-12">
                  {[Instagram, Youtube, Facebook].map((I, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/30 transition">
                      <I className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <p className="font-display italic text-3xl text-gold/90 text-center leading-relaxed">
                Música que<br />fica para<br />sempre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/15 px-8 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-[11px] text-foreground/60 text-center">
          © 2024 Adão Rosa Monteiro. Todos os direitos reservados.<br />
          Desenvolvido com <span className="text-gold">♥</span> para a música.
        </p>
      </footer>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 gold-border flex items-center justify-center text-gold shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div className="text-[10px] tracking-[0.25em] text-gold mb-1">{label}</div>
        <div className="text-foreground/85 text-sm">{value}</div>
      </div>
    </div>
  );
}
