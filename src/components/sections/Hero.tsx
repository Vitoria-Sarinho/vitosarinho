import heroImg from "@/assets/vitoria-hero.png";

const WA_URL =
  "https://wa.me/5581998396041?text=Ol%C3%A1%20Vit%C3%B3ria%2C%20gostaria%20de%20agendar%20uma%20consulta!";

const BADGES = ["5 anos de experiência", "Laudo Neuropsicológico", "Atendimento online · Todo o Brasil"];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2 6.5L4.8 9 10 3" stroke="var(--terracota)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        background: "var(--marrom-escuro)",
        position: "relative",
        overflow: "hidden",
        marginTop: "-72px",
        paddingTop: 110,
        paddingBottom: 40,
      }}
    >
      <div
        aria-hidden
        className="vs-hero-blob"
        style={{
          position: "absolute",
          top: -60,
          right: -80,
          width: 420,
          height: 420,
          borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
          background:
            "radial-gradient(circle at center, rgba(198,122,99,0.12) 0%, rgba(140,65,48,0.06) 50%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        className="vs-hero-blob"
        style={{
          position: "absolute",
          top: 40,
          right: 60,
          width: 200,
          height: 200,
          borderRadius: "45% 55% 60% 40% / 55% 45% 50% 50%",
          background:
            "radial-gradient(circle at center, rgba(242,213,187,0.10) 0%, transparent 65%)",
          filter: "blur(24px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        className="vs-hero-blob"
        style={{
          position: "absolute",
          top: 180,
          right: 20,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(198,122,99,0.08)",
          filter: "blur(16px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="vs-hero-grid vs-container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {/* 1. Eyebrow */}
        <div
          className="vs-hero-eyebrow"
          style={{
            order: 1,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--terracota)",
            marginBottom: 20,
            opacity: 0,
            animation: "heroFadeUp 0.7s ease forwards",
            animationDelay: "0.1s",
          }}
        >
          PSICÓLOGA CLÍNICA · CRP 02/28587
        </div>

        {/* 2. H1 */}
        <h1
          className="vs-hero-h1"
          style={{
            order: 2,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: "clamp(36px, 5.5vw, 54px)",
            lineHeight: 1.1,
            color: "#FFFFFF",
            marginBottom: 22,
            opacity: 0,
            animation: "heroFadeUp 0.7s ease forwards",
            animationDelay: "0.25s",
          }}
        >
          Sua dor acolhida,
          <br />
          ouvida
          <br />
          e tratada.
        </h1>

        {/* 3. Subtitle */}
        <p
          className="vs-hero-subtitle"
          style={{
            order: 3,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 300,
            fontSize: 17,
            lineHeight: 1.8,
            color: "rgba(242,213,187,0.75)",
            maxWidth: 460,
            opacity: 0,
            animation: "heroFadeUp 0.7s ease forwards",
            animationDelay: "0.4s",
          }}
        >
          Atendimento humanizado e especializado em Neuropsicologia e Psicoterapia Clínica para
          mulheres que buscam bem-estar e autoconhecimento.
        </p>

        {/* 4. Photo */}
        <div
          className="vs-hero-photo"
          style={{
            order: 4,
            position: "relative",
            overflow: "visible",
            opacity: 0,
            animation: "heroFadeRight 0.9s ease forwards",
            animationDelay: "0.2s",
          }}
        >
          {/* Decorative halos — desktop only */}
          <div
            aria-hidden
            className="vs-hero-photo-deco vs-hero-photo-deco-blob"
            style={{
              position: "absolute",
              top: "50%",
              right: -40,
              transform: "translateY(-50%)",
              width: 520,
              height: 520,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 40% 40%, rgba(198, 122, 99, 0.18) 0%, rgba(140, 65, 48, 0.10) 45%, transparent 70%)",
              filter: "blur(2px)",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />
          <div
            aria-hidden
            className="vs-hero-photo-deco vs-hero-photo-deco-ring"
            style={{
              position: "absolute",
              top: "50%",
              right: -70,
              transform: "translateY(-50%)",
              width: 580,
              height: 580,
              borderRadius: "50%",
              background: "transparent",
              border: "1.5px solid rgba(198, 122, 99, 0.14)",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />
          <div
            aria-hidden
            className="vs-hero-photo-deco vs-hero-photo-deco-accent"
            style={{
              position: "absolute",
              bottom: -40,
              right: -30,
              width: 180,
              height: 180,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at center, rgba(242, 213, 187, 0.14) 0%, transparent 70%)",
              filter: "blur(8px)",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />
          <img
            className="vs-hero-img"
            src={heroImg}
            alt="Vitória Sarinho, psicóloga clínica e neuropsicóloga, em seu consultório"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: 480,
              objectFit: "cover",
              objectPosition: "center 20%",
              display: "block",
              borderRadius: "0 var(--radius-xl) var(--radius-xl) 0",
            }}
          />
          <div
            aria-hidden
            className="vs-hero-photo-vignette-left"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "30%",
              background: "linear-gradient(to right, var(--marrom-escuro) 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
          <div
            aria-hidden
            className="vs-hero-photo-vignette-right"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: 80,
              background: "linear-gradient(to left, rgba(64,15,15,0.35) 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
          <div
            aria-hidden
            className="vs-hero-photo-vignette-top"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              background: "linear-gradient(to bottom, rgba(64,15,15,0.25) 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        </div>

        {/* 5. CTA buttons */}
        <div
          className="vs-hero-cta"
          style={{
            order: 5,
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            marginTop: 36,
            opacity: 0,
            animation: "heroFadeUp 0.7s ease forwards",
            animationDelay: "0.55s",
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

        {/* 6. Trust badges */}
        <div
          className="vs-hero-badges"
          style={{
            order: 6,
            marginTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "flex-start",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            color: "rgba(242,213,187,0.75)",
            opacity: 0,
            animation: "heroFadeUp 0.7s ease forwards",
            animationDelay: "0.7s",
          }}
        >
          {BADGES.map((t) => (
            <span
              key={t}
              className="vs-hero-badge"
              style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <CheckIcon />
              {t}
            </span>
          ))}
        </div>

        {/* 7. Jung quote */}
        <div
          className="vs-hero-jung"
          style={{
            order: 7,
            width: "100%",
            padding: "40px 24px 48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          <div
            className="vs-hero-jung-quote"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 72,
              lineHeight: 0.6,
              color: "rgba(199, 122, 99, 0.5)",
              marginBottom: 20,
              userSelect: "none",
            }}
          >
            "
          </div>
          <blockquote
            className="vs-hero-jung-text"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(20px, 2.4vw, 26px)",
              letterSpacing: "0.02em",
              lineHeight: 1.6,
              color: "rgba(242, 213, 187, 0.90)",
              textAlign: "center",
              maxWidth: 680,
              margin: 0,
              padding: 0,
              border: "none",
            }}
          >
            Conheça todas as teorias, domine todas as técnicas, mas ao tocar
            uma alma humana, seja apenas outra alma humana.
          </blockquote>
          <div
            style={{
              width: 48,
              height: 1,
              background: "rgba(198, 122, 99, 0.4)",
              margin: "20px auto",
            }}
          />
          <cite
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--terracota)",
            }}
          >
            Carl Jung
          </cite>
        </div>
      </div>

      <style>{`
        /* Mobile (<= 768px) */
        @media (max-width: 768px) {
          .vs-hero-blob,
          .vs-hero-photo-vignette-left,
          .vs-hero-photo-vignette-right,
          .vs-hero-photo-vignette-top {
            display: none !important;
          }
          .vs-hero-photo {
            margin: 24px 0 !important;
            position: relative !important;
            overflow: visible !important;
          }
          #inicio {
            overflow-x: hidden !important;
          }
          .vs-hero-photo-deco-blob {
            display: block !important;
            width: 300px !important;
            height: 300px !important;
            top: -30px !important;
            right: -20px !important;
            transform: none !important;
          }
          .vs-hero-photo-deco-ring {
            display: block !important;
            width: 340px !important;
            height: 340px !important;
            top: -50px !important;
            right: -40px !important;
            transform: none !important;
          }
          .vs-hero-photo-deco-accent {
            display: block !important;
            width: 120px !important;
            height: 120px !important;
            bottom: -20px !important;
            right: -10px !important;
            top: auto !important;
          }
          .vs-hero-img {
            width: 100% !important;
            height: 280px !important;
            object-fit: cover !important;
            object-position: center 20% !important;
            border-radius: var(--radius-lg) !important;
          }
          .vs-hero-cta {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: stretch !important;
            margin-top: 0 !important;
          }
          .vs-hero-cta > a {
            width: 100% !important;
            text-align: center !important;
            padding: 16px 24px !important;
          }
          .vs-hero-badges {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
            margin-top: 20px !important;
            font-size: 14px !important;
            color: rgba(242,213,187,0.75) !important;
          }
          .vs-hero-badge {
            gap: 10px !important;
            font-weight: 500 !important;
          }
          .vs-hero-badge-sep {
            display: none !important;
          }
          .vs-hero-jung {
            padding: 32px 0 40px !important;
          }
          .vs-hero-jung-quote {
            font-size: 52px !important;
          }
          .vs-hero-jung-text {
            font-size: 17px !important;
            line-height: 1.65 !important;
          }
        }

        /* Desktop (>= 1024px): two-column grid via grid-template-areas */
        @media (min-width: 1024px) {
          .vs-hero-grid {
            display: grid !important;
            grid-template-columns: 52% 48% !important;
            column-gap: 48px !important;
            row-gap: 0 !important;
            align-items: center !important;
            grid-template-areas:
              "eyebrow  photo"
              "h1       photo"
              "subtitle photo"
              "cta      photo"
              "badges   photo"
              "jung     jung";
          }
          .vs-hero-eyebrow  { grid-area: eyebrow; }
          .vs-hero-h1       { grid-area: h1; }
          .vs-hero-subtitle { grid-area: subtitle; }
          .vs-hero-photo    { grid-area: photo; height: 480px; border-radius: 0 var(--radius-xl) var(--radius-xl) 0; }
          .vs-hero-cta      { grid-area: cta; }
          .vs-hero-badges   { grid-area: badges; }
          .vs-hero-jung     { grid-area: jung; }
        }
      `}</style>
    </section>
  );
}
