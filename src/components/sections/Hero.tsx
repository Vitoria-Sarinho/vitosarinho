import heroImg from "@/assets/vitoria-hero.png";

const WA_URL =
  "https://wa.me/5581998396041?text=Ol%C3%A1%20Vit%C3%B3ria%2C%20gostaria%20de%20agendar%20uma%20consulta!";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        background: "var(--marrom-escuro)",
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        marginTop: "-72px",
        paddingTop: 120,
        paddingBottom: 80,
      }}
    >
      {/* Decorative orb */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-200px",
          top: "10%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "rgba(199,171,149,0.06)",
          pointerEvents: "none",
        }}
      />
      <svg
        aria-hidden
        style={{ position: "absolute", left: 40, bottom: 40, opacity: 1, pointerEvents: "none" }}
        width="220"
        height="120"
        viewBox="0 0 220 120"
        fill="none"
      >
        <path d="M0 100 Q 60 20, 120 70 T 220 40" stroke="rgba(242,213,187,0.08)" strokeWidth="1" fill="none" />
        <path d="M0 110 Q 80 50, 140 90 T 220 70" stroke="rgba(242,213,187,0.08)" strokeWidth="1" fill="none" />
      </svg>

      <div
        className="vs-container vs-hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        {/* Photo column */}
        <div
          className="vs-hero-photo"
          style={{ position: "relative", minHeight: 420, order: 1 }}
        >
          <img
            src={heroImg}
            alt="Vitória Sarinho, psicóloga clínica e neuropsicóloga, em seu consultório"
            style={{
              width: "100%",
              height: "100%",
              minHeight: 580,
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, var(--marrom-escuro) 0%, transparent 30%)",
              pointerEvents: "none",
            }}
          />

          {/* Badge 1 */}
          <div
            className="vs-float-in"
            style={{
              position: "absolute",
              top: 32,
              right: 24,
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "var(--vs-radius-md)",
              padding: "12px 20px",
              animationDelay: "0.6s",
            }}
          >
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 22, color: "#fff" }}>
              5 anos
            </div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, fontSize: 12, color: "rgba(242,213,187,0.7)" }}>
              de experiência
            </div>
          </div>

          {/* Badge 2 */}
          <div
            className="vs-float-in"
            style={{
              position: "absolute",
              top: "45%",
              left: 16,
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "var(--vs-radius-md)",
              padding: "12px 20px",
              animationDelay: "0.9s",
            }}
          >
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 18, color: "#fff" }}>
              Atendimento
            </div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, fontSize: 12, color: "rgba(242,213,187,0.7)" }}>
              online · Todo o Brasil
            </div>
          </div>

          {/* Badge 3 */}
          <div
            className="vs-float-in"
            style={{
              position: "absolute",
              bottom: 32,
              right: 24,
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "var(--vs-radius-md)",
              padding: "12px 20px",
              animationDelay: "1.2s",
            }}
          >
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 11, color: "var(--terracota)", letterSpacing: "0.1em" }}>
              CRP
            </div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>
              02/28587
            </div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, fontSize: 11, color: "rgba(242,213,187,0.6)", marginTop: 2 }}>
              Psicóloga registrada
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="vs-hero-text" style={{ order: 2 }}>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--terracota)",
              marginBottom: 24,
            }}
          >
            PSICÓLOGA CLÍNICA · CRP 02/28587
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontSize: "clamp(38px, 6vw, 58px)",
              lineHeight: 1.1,
              color: "#FFFFFF",
              marginBottom: 28,
            }}
          >
            Sua dor acolhida,
            <br />
            ouvida
            <br />
            e tratada.
          </h1>

          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: 17,
              lineHeight: 1.8,
              color: "rgba(242,213,187,0.75)",
              maxWidth: 460,
              marginBottom: 32,
            }}
          >
            Atendimento humanizado e especializado em Neuropsicologia e Psicoterapia Clínica para
            mulheres que buscam bem-estar e autoconhecimento.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(199,171,149,0.2)",
              paddingTop: 20,
              maxWidth: 420,
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: 14,
                color: "rgba(242,213,187,0.5)",
                lineHeight: 1.7,
              }}
            >
              "Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana,
              seja apenas outra alma humana."
              <br />
              <span style={{ fontStyle: "normal", fontFamily: "Montserrat, sans-serif", fontSize: 12 }}>
                — Carl Jung
              </span>
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 40 }}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com especialista pelo WhatsApp"
              style={{
                background: "var(--terracota)",
                color: "#fff",
                padding: "16px 36px",
                borderRadius: "var(--vs-radius-md)",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#B5694F";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--terracota)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Falar com especialista <span aria-hidden>→</span>
            </a>
            <a
              href="#sobre"
              aria-label="Saiba mais sobre Vitória Sarinho"
              style={{
                border: "1.5px solid rgba(242,213,187,0.35)",
                color: "rgba(242,213,187,0.85)",
                padding: "16px 36px",
                borderRadius: "var(--vs-radius-md)",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                background: "transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(242,213,187,0.08)";
                e.currentTarget.style.borderColor = "rgba(242,213,187,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(242,213,187,0.35)";
              }}
            >
              Sobre mim
            </a>
          </div>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              alignItems: "center",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 13,
              color: "rgba(242,213,187,0.55)",
            }}
          >
            {["5 anos de experiência", "Laudo Neuropsicológico", "Todo o Brasil"].map((t, i) => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6.5L4.8 9 10 3" stroke="var(--terracota)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
                {i < 2 && <span style={{ marginLeft: 14, color: "rgba(242,213,187,0.3)" }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .vs-hero-grid { grid-template-columns: 1fr 1fr !important; gap: 64px !important; }
          .vs-hero-text { order: 1 !important; }
          .vs-hero-photo { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}
