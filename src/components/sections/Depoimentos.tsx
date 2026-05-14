import { useState } from "react";

interface Depo {
  text: string;
  initial: string;
  name: string;
  info: string;
}

const items: Depo[] = [
  {
    text: "Muito boa profissional, me senti muito acolhida com ela e seu conhecimento.",
    initial: "N",
    name: "N.",
    info: "Paciente · Psicoterapia Clínica",
  },
  {
    text: "Excelente profissional! A Vitória é uma profissional humana, ética e extremamente competente. O suporte dela tem me ajudado muito na forma de encarar os meus sentimentos e a minha vida.",
    initial: "I",
    name: "I.",
    info: "Paciente · Psicoterapia Clínica",
  },
  {
    text: "Minha experiência com a avaliação neuropsicológica foi extremamente positiva. O processo uniu qualidade técnica, escuta atenta e acolhimento genuíno. A condução da anamnese considerou meu contexto de forma ampla e cuidadosa, o que trouxe muito mais profundidade e precisão à avaliação. Além do profissionalismo durante todo o processo, também recebi direcionamentos importantes após a devolutiva. Foi uma experiência muito humana e responsável. Recomendo profundamente o seu trabalho.",
    initial: "N",
    name: "N.",
    info: "Paciente · Avaliação Neuropsicológica",
  },
  {
    text: "Profissional extremamente acolhedora, me ajudou muito no meu processo de autoconhecimento e enfrentamento das minhas dificuldades utilizando estratégias, demonstrando conhecimento no que estava fazendo. Recomendo!",
    initial: "V",
    name: "V.",
    info: "Paciente · Psicoterapia Clínica",
  },
];

function Card({ d }: { d: Depo }) {
  return (
    <article
      className="vs-depo-card"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(188,141,123,0.2)",
        borderRadius: "var(--vs-radius-lg)",
        padding: "40px 36px",
        boxShadow: "0 4px 24px rgba(140,65,48,0.06)",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        maxHeight: 320,
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {/* Patient info on top */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "var(--nude-claro)",
            color: "var(--marrom)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {d.initial}
        </div>
        <div>
          <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 14, color: "var(--marrom-escuro)", marginBottom: 2 }}>
            {d.name}
          </div>
          <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, fontSize: 12, color: "var(--texto-muted)" }}>
            {d.info}
          </div>
        </div>
      </div>

      {/* Decorative quote then text */}
      <div style={{ position: "relative" }}>
        <span
          aria-hidden
          className="vs-depo-quote"
          style={{
            position: "absolute",
            top: -16,
            left: -8,
            fontFamily: "'Playfair Display', serif",
            fontSize: 96,
            color: "var(--marrom)",
            opacity: 0.08,
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          "
        </span>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            color: "var(--texto-medio)",
            lineHeight: 1.8,
            position: "relative",
            margin: 0,
          }}
        >
          {d.text}
        </p>
      </div>
    </article>
  );
}

export default function Depoimentos() {
  const [idx, setIdx] = useState(0);
  const total = items.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <section id="depoimentos" className="vs-section" style={{ background: "#FFFFFF" }}>
      <div className="vs-container">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
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
            DEPOIMENTOS
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
            Experiências que me motivam todos os dias
          </h2>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300, fontSize: 17, color: "var(--texto-suave)" }}>
            Palavras de quem viveu o processo de transformação.
          </p>
        </div>

        {/* Desktop marquee */}
        <div className="vs-depo-desktop" style={{ display: "none", marginTop: 56 }}>
          <div className="vs-depo-marquee">
            <div className="vs-depo-track">
              {[...items, ...items].map((d, i) => (
                <div key={`${d.name}-${i}`} className="vs-depo-slide">
                  <Card d={d} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile carousel: 1 card */}
        <div className="vs-depo-mobile" style={{ marginTop: 48 }}>
          <Card d={items[idx]} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 28 }}>
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid rgba(140,65,48,0.2)",
                background: "transparent",
                color: "var(--marrom)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  style={{
                    width: i === idx ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === idx ? "var(--terracota)" : "rgba(199,171,149,0.4)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid rgba(140,65,48,0.2)",
                background: "transparent",
                color: "var(--marrom)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M8 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            color: "var(--texto-muted)",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: 560,
            margin: "40px auto 0",
          }}
        >
          Os depoimentos foram compartilhados voluntariamente e com autorização, preservando o
          sigilo ético conforme as normas do CFP · Conselho Federal de Psicologia.
        </p>
      </div>
      <style>{`
        .vs-depo-card::-webkit-scrollbar { display: none; }
        @media (min-width: 1024px) {
          .vs-depo-desktop { display: grid !important; }
          .vs-depo-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .vs-depo-mobile { overflow: hidden !important; }
          .vs-depo-card { padding: 28px 24px !important; max-height: 280px !important; }
          .vs-depo-quote { font-size: 64px !important; }
        }
      `}</style>
    </section>
  );
}
