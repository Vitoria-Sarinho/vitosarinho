import { useEffect, useState } from "react";

const WA_URL =
  "https://wa.me/5581998396041?text=Ol%C3%A1%20Vit%C3%B3ria%2C%20gostaria%20de%20agendar%20uma%20consulta!";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      className="vs-pop-in"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      {hover && (
        <div
          className="vs-wa-tooltip"
          style={{
            background: "var(--marrom-escuro)",
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            padding: "8px 14px",
            borderRadius: "var(--vs-radius-sm)",
            position: "relative",
            whiteSpace: "nowrap",
          }}
        >
          Falar com Vitória
          <span
            style={{
              position: "absolute",
              right: -6,
              top: "50%",
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "6px solid var(--marrom-escuro)",
            }}
          />
        </div>
      )}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Vitória Sarinho pelo WhatsApp"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: 62,
          height: 62,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: hover
            ? "0 8px 36px rgba(37,211,102,0.55)"
            : "0 4px 24px rgba(37,211,102,0.4)",
          transform: hover ? "scale(1.1)" : "scale(1)",
          transition: "all 0.2s ease",
        }}
      >
        <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff">
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.387.706 4.61 1.918 6.49L4 29l7.7-2.018A11.95 11.95 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm0 21.6c-1.94 0-3.74-.566-5.255-1.54l-.376-.236-4.572 1.198 1.22-4.456-.245-.385A9.55 9.55 0 0 1 6.4 15c0-5.293 4.307-9.6 9.6-9.6 5.294 0 9.6 4.307 9.6 9.6 0 5.293-4.306 9.6-9.6 9.6zm5.49-7.18c-.3-.15-1.776-.876-2.05-.976-.275-.1-.475-.15-.675.15-.2.3-.776.976-.95 1.176-.176.2-.35.225-.65.075-.3-.15-1.265-.466-2.41-1.486-.89-.794-1.49-1.774-1.665-2.074-.175-.3-.018-.46.13-.61.134-.135.3-.35.45-.526.15-.175.2-.3.3-.5.1-.2.05-.376-.025-.526-.075-.15-.675-1.626-.926-2.226-.244-.586-.49-.506-.675-.515l-.575-.01c-.2 0-.526.075-.8.376-.276.3-1.05 1.026-1.05 2.5 0 1.476 1.075 2.9 1.225 3.1.15.2 2.116 3.232 5.13 4.532.717.31 1.276.495 1.713.633.72.23 1.374.198 1.892.12.578-.087 1.776-.726 2.026-1.426.25-.7.25-1.3.176-1.426-.075-.125-.275-.2-.575-.35z" />
        </svg>
      </a>
    </div>
  );
}
