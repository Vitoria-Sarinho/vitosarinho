import Timeline from "./Timeline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Entrevista inicial e anamnese",
    text: "Compreensão da sua história de vida, queixas atuais e objetivos da avaliação, criando um panorama completo do seu contexto.",
  },
  {
    num: "02",
    title: "Aplicação de testes e instrumentos",
    text: "Utilização de testes psicológicos padronizados e validados para investigar funções cognitivas, emocionais e comportamentais.",
  },
  {
    num: "03",
    title: "Análise e integração dos dados",
    text: "Organização e interpretação cuidadosa dos resultados, relacionando os achados clínicos com os testes aplicados.",
  },
  {
    num: "04",
    title: "Devolutiva e laudo psicológico",
    text: "Apresentação dos resultados de forma clara e acolhedora, com orientações e encaminhamentos necessários para o seu cuidado.",
  },
];

export default function ComoFuncionaAvaliacao() {
  const headerRef = useScrollAnimation<HTMLDivElement>(0.15);
  const introRef = useScrollAnimation<HTMLDivElement>(0.15);
  return (
    <section id="avaliacao" className="vs-section" style={{ background: "var(--nude-fundo)" }}>
      <div className="vs-container">
        <div ref={headerRef} className="fade-up" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
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
            AVALIAÇÃO NEUROPSICOLÓGICA
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "var(--marrom-escuro)",
              marginBottom: 32,
            }}
          >
            Entendendo o funcionamento da sua mente
          </h2>
        </div>

        <div
          ref={introRef}
          className="fade-up delay-100"
          style={{
            borderLeft: "3px solid var(--terracota)",
            background: "rgba(242,213,187,0.2)",
            borderRadius: "0 var(--vs-radius-md) var(--vs-radius-md) 0",
            padding: "24px 28px",
            maxWidth: 880,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              color: "var(--texto-medio)",
              fontStyle: "italic",
              lineHeight: 1.8,
            }}
          >
            A avaliação neuropsicológica investiga o funcionamento do cérebro e sua relação com o
            comportamento, emoções e cognição, compreendendo habilidades como atenção, memória,
            linguagem e raciocínio para um diagnóstico mais preciso e tratamento mais eficaz.
          </p>
        </div>

        <Timeline steps={steps} />
      </div>
    </section>
  );
}
