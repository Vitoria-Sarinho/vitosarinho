import heroImg from "@/assets/vitoria-hero.png";

const WA_URL =
  "https://wa.me/5581998396041?text=Ol%C3%A1%20Vit%C3%B3ria%2C%20gostaria%20de%20agendar%20uma%20consulta!";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        background: "var(--marrom-escuro)",
        position: "relative",
        maxHeight: "88vh",
        overflow: "hidden",
        marginTop: "-72px",
        paddingTop: 110,
        paddingBottom: 40,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-150px",
          top: "5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(199,171,149,0.05)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="vs-container vs-hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
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
              marginBottom: 20,
            }}
          >
            PSICÓLOGA CLÍNICA · CRP 02/28587
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontSize: "clamp(36px, 5.5vw, 54px)",
              lineHeight: 1.1,
              color: "#FFFFFF",
              marginBottom: 22,
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
            }}
          >
            Atendimento humanizado e especializado em Neuropsicologia e Psicoterapia Clínica para
            mulheres que buscam bem-estar e autoconhecimento.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 }}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com especialista pelo WhatsApp"
              style={{
                background: "var(--terracota)",
                color: "#fff",
                padding: "15px 34px",
                borderRadius: "var(--vs-radius-md)",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
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
              Falar com especialista
            </a>
            <a
              href="#sobre"
              aria-label="Saiba mais sobre Vitória Sarinho"
              style={{
                border: "1.5px solid rgba(242,213,187,0.35)",
                color: "rgba(242,213,187,0.85)",
                padding: "15px 34px",
                borderRadius: "var(--vs-radius-md)",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                background: "transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(242,213,187,0.07)";
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
              marginTop: 28,
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
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
                {i < 2 && <span style={{ marginLeft: 8, color: "rgba(242,213,187,0.3)" }}>·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Photo column */}
        <div
          className="vs-hero-photo"
          style={{ position: "relative", order: 1, height: 480 }}
        >
          <img
            src={heroImg}
            alt="Vitória Sarinho, psicóloga clínica e neuropsicóloga, em seu consultório"
            style={{
              width: "100%",
              height: 480,
              objectFit: "cover",
              objectPosition: "center 20%",
              display: "block",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "30%",
              background: "linear-gradient(to right, var(--marrom-escuro) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

        </div>
      </div>

      {/* Jung quote — full width below */}
      <div style={{
        position: "relative",
        zIndex: 2,
        width: '100%',
        padding: '40px 24px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0',
      }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '72px',
          lineHeight: '0.6',
          color: 'rgba(199, 122, 99, 0.5)',
          marginBottom: '20px',
          userSelect: 'none',
        }}>
          "
        </div>

        <blockquote style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(16px, 2vw, 20px)',
          lineHeight: '1.7',
          color: 'rgba(242, 213, 187, 0.85)',
          textAlign: 'center',
          maxWidth: '680px',
          margin: '0',
          padding: '0',
          border: 'none',
        }}>
          Conheça todas as teorias, domine todas as técnicas, mas ao tocar
          uma alma humana, seja apenas outra alma humana.
        </blockquote>

        <div style={{
          width: '48px',
          height: '1px',
          background: 'rgba(198, 122, 99, 0.4)',
          margin: '20px auto',
        }} />

        <cite style={{
          fontFamily: "'Montserrat', sans-serif",
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '13px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--terracota)',
        }}>
          Carl Jung
        </cite>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .vs-hero-grid { grid-template-columns: 52% 48% !important; gap: 48px !important; }
          .vs-hero-text { order: 1 !important; }
          .vs-hero-photo { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}
