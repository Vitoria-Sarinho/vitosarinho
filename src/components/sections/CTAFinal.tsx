import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_URL =
  "https://wa.me/5581998396041?text=Ol%C3%A1%20Vit%C3%B3ria%2C%20gostaria%20de%20agendar%20uma%20consulta!";

export default function CTAFinal() {
  const wrapRef = useScrollAnimation<HTMLDivElement>(0.1);
  return (
    <section
      id="contato"
      className="vs-cta-final"
      style={{
        background: "var(--quase-preto)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(199,171,149,0.05)",
          top: "-200px",
          left: "-150px",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(199,171,149,0.03)",
          bottom: "-180px",
          right: "-100px",
          pointerEvents: "none",
        }}
      />

      <div ref={wrapRef} className="vs-container" style={{ position: "relative", textAlign: "center" }}>
        <div
          className="fade-up"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--terracota)",
            marginBottom: 20,
          }}
        >
          PRONTA PARA COMEÇAR?
        </div>
        <h2
          className="vs-cta-h2 fade-up delay-100"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: "clamp(34px, 5vw, 50px)",
            lineHeight: 1.1,
            color: "#FFFFFF",
            maxWidth: 580,
            margin: "0 auto",
          }}
        >
          Pronta para iniciar
          <br />
          sua jornada de cuidado?
        </h2>
        <p
          className="vs-cta-sub fade-up delay-200"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 300,
            fontSize: 18,
            color: "rgba(242,213,187,0.65)",
            maxWidth: 420,
            margin: "20px auto 0",
            lineHeight: 1.7,
          }}
        >
          Agende sua consulta hoje mesmo.
          <br />
          Atendimento online para todo o Brasil.
        </p>

        <div
          className="vs-cta-buttons"
          style={{
            marginTop: 44,
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
          }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com especialista pelo WhatsApp"
            style={{
              background: "var(--terracota)",
              color: "#fff",
              padding: "18px 42px",
              borderRadius: "var(--vs-radius-md)",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(198,122,99,0.35)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#B5694F";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--terracota)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Falar com especialista →
          </a>
          <a
            href="#"
            aria-label="Agendar consulta online"
            style={{
              border: "1.5px solid rgba(242,213,187,0.3)",
              color: "rgba(242,213,187,0.8)",
              padding: "18px 42px",
              borderRadius: "var(--vs-radius-md)",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              fontSize: 15,
              textDecoration: "none",
              background: "transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(242,213,187,0.06)";
              e.currentTarget.style.borderColor = "rgba(242,213,187,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(242,213,187,0.3)";
            }}
          >
            Agendar online
          </a>
        </div>

        <div
          className="vs-cta-trust"
          style={{
            marginTop: 48,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 24,
            fontFamily: "Montserrat, sans-serif",
            fontSize: 13,
            color: "rgba(242,213,187,0.45)",
          }}
        >
          {["Sem compromisso inicial", "Primeira consulta de apresentação", "Atendimento seguro e sigiloso"].map((t, i) => (
            <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6.5L4.8 9 10 3" stroke="var(--terracota)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
              {i < 2 && <span className="vs-cta-trust-sep" style={{ marginLeft: 16, color: "rgba(242,213,187,0.25)" }}>·</span>}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .vs-cta-final { padding: 72px 0 !important; }
          .vs-cta-h2 { font-size: 30px !important; }
          .vs-cta-sub { font-size: 15px !important; }
          .vs-cta-buttons { flex-direction: column !important; gap: 12px !important; align-items: stretch !important; }
          .vs-cta-buttons > a { width: 100% !important; text-align: center !important; }
          .vs-cta-trust { flex-direction: column !important; align-items: center !important; gap: 8px !important; text-align: center !important; }
          .vs-cta-trust-sep { display: none !important; }
        }
      `}</style>
    </section>
  );
}
