import type { ReactNode, RefObject } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function Card({
  icon,
  title,
  text,
  href,
  refProp,
  className,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  href: string;
  refProp?: RefObject<HTMLElement | null>;
  className?: string;
}) {
  return (
    <article
      ref={refProp}
      className={`vs-esp-card ${className ?? ""}`}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(188,141,123,0.25)",
        borderRadius: "var(--vs-radius-lg)",
        padding: "48px 40px",
        transition: "all 0.35s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(140,65,48,0.1)";
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.borderColor = "rgba(199,122,99,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(188,141,123,0.25)";
      }}
    >
      <div className="vs-esp-icon">{icon}</div>
      <h3
        className="vs-esp-title"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          fontSize: 22,
          color: "var(--marrom-escuro)",
          marginTop: 24,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          color: "var(--texto-medio)",
          lineHeight: 1.8,
          marginTop: 12,
        }}
      >
        {text}
      </p>
      <div style={{ height: 1, background: "rgba(199,171,149,0.3)", margin: "28px 0" }} />
      <a
        href={href}
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          color: "var(--terracota)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--marrom)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--terracota)")}
      >
        Entender o processo <span aria-hidden>→</span>
      </a>
    </article>
  );
}

const brain = (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="var(--terracota)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12c-4 0-7 3-7 7 0 1.5.5 2.8 1.3 3.8C11.5 23.7 10 25.7 10 28c0 2.5 1.7 4.6 4 5.4 0 3.6 2.9 6.6 6.5 6.6 2 0 3.7-.9 4.9-2.3" />
    <path d="M33 12c4 0 7 3 7 7 0 1.5-.5 2.8-1.3 3.8 1.8.9 3.3 2.9 3.3 5.2 0 2.5-1.7 4.6-4 5.4 0 3.6-2.9 6.6-6.5 6.6-2 0-3.7-.9-4.9-2.3" />
    <path d="M26 14v24" />
    <path d="M19 22h7M33 22h-7M19 30h7M33 30h-7" />
  </svg>
);

const heart = (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="var(--terracota)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M26 42s-14-8.5-14-19a8 8 0 0 1 14-5.3A8 8 0 0 1 40 23c0 10.5-14 19-14 19z" />
    <path d="M8 28h6l3-6 4 12 3-8 3 4h15" />
  </svg>
);

export default function Especialidades() {
  const headerRef = useScrollAnimation<HTMLDivElement>(0.15);
  const card1Ref = useScrollAnimation<HTMLElement>(0.15);
  const card2Ref = useScrollAnimation<HTMLElement>(0.15);
  return (
    <section id="especialidades" className="vs-section" style={{ background: "linear-gradient(160deg, #E8D8C8 0%, #DFCcB8 100%)" }}>
      <div className="vs-container">
        <div ref={headerRef} className="fade-up" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--terracota)",
              marginBottom: 16,
            }}
          >
            ESPECIALIDADES
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "var(--marrom-escuro)",
              marginBottom: 16,
            }}
          >
            Conheça minha área de atuação
          </h2>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: 17,
              color: "var(--texto-suave)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Cada serviço é pensado para oferecer o suporte certo para o seu momento.
          </p>
        </div>

        <div
          className="vs-esp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
            marginTop: 56,
          }}
        >
          <Card
            refProp={card1Ref}
            className="fade-left delay-100"
            icon={brain}
            title="Avaliação Neuropsicológica"
            text="Investigação detalhada das funções cognitivas, emocionais e comportamentais. Geramos um laudo completo que auxilia no diagnóstico e orienta o tratamento mais adequado para você."
            href="#avaliacao"
          />
          <Card
            refProp={card2Ref}
            className="fade-right delay-200"
            icon={heart}
            title="Psicoterapia Clínica"
            text="Acompanhamento focado no seu desenvolvimento pessoal e saúde emocional. Utilizando técnicas baseadas em evidências, trabalhamos juntas na construção de bem-estar e autoconhecimento duradouro."
            href="#psicoterapia"
          />
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .vs-esp-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 767px) {
          .vs-esp-card { padding: 32px 24px !important; }
          .vs-esp-icon svg { width: 44px !important; height: 44px !important; }
          .vs-esp-title { font-size: 20px !important; }
        }
      `}</style>
    </section>
  );
}
