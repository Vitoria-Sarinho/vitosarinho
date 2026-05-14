import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade · Vitória Sarinho | CRP 02/28587" },
      {
        name: "description",
        content:
          "Política de Privacidade do site de Vitória Sarinho, em conformidade com a LGPD, Marco Civil da Internet e o Código de Ética do Psicólogo.",
      },
      { property: "og:title", content: "Política de Privacidade · Vitória Sarinho" },
      {
        property: "og:description",
        content: "Como tratamos os dados pessoais coletados neste site, em conformidade com a LGPD.",
      },
      { property: "og:url", content: "https://vitosarinho.lovable.app/privacidade" },
    ],
    links: [{ rel: "canonical", href: "https://vitosarinho.lovable.app/privacidade" }],
  }),
  component: PrivacidadePage,
});

const fontMont = "Montserrat, sans-serif";
const fontPlay = "'Playfair Display', serif";

const h2Style: React.CSSProperties = {
  fontFamily: fontPlay,
  fontWeight: 500,
  fontSize: 22,
  color: "var(--marrom)",
  marginTop: 48,
  marginBottom: 16,
  borderBottom: "2px solid rgba(199,171,149,0.3)",
  paddingBottom: 8,
};

const h3Style: React.CSSProperties = {
  fontFamily: fontMont,
  fontWeight: 600,
  fontSize: 16,
  color: "var(--marrom-escuro)",
  marginTop: 28,
  marginBottom: 8,
};

const pStyle: React.CSSProperties = {
  fontFamily: fontMont,
  fontWeight: 400,
  fontSize: 15,
  color: "var(--texto-medio)",
  lineHeight: 1.85,
  marginBottom: 16,
};

const ulStyle: React.CSSProperties = {
  fontFamily: fontMont,
  fontWeight: 400,
  fontSize: 15,
  color: "var(--texto-medio)",
  lineHeight: 1.85,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  paddingLeft: 22,
  marginBottom: 16,
};

const hr = (
  <div
    aria-hidden
    style={{ height: 1, background: "rgba(199,171,149,0.25)", margin: "32px 0" }}
  />
);

function PrivacidadePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("vs-site");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
    return () => document.body.classList.remove("vs-site");
  }, []);

  return (
    <>
      <Navbar forceLight={true} />
      <main style={{ background: "var(--nude-fundo)", paddingTop: 120, paddingBottom: 80 }}>
        <article
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <h1
            style={{
              fontFamily: fontPlay,
              fontWeight: 600,
              fontSize: 40,
              color: "var(--marrom-escuro)",
              marginBottom: 12,
            }}
          >
            Política de Privacidade
          </h1>
          <div
            style={{
              fontFamily: fontMont,
              fontWeight: 400,
              fontSize: 13,
              color: "var(--texto-muted)",
              marginBottom: 40,
            }}
          >
            Última atualização: 13 de maio de 2026
          </div>

          <p style={pStyle}>
            Esta Política de Privacidade descreve como Vitória Sarinho (CRP 02/28587), doravante
            denominada "Psicóloga", coleta, utiliza, armazena e protege as informações fornecidas
            por visitantes e usuários deste site, em conformidade com a Lei Geral de Proteção de
            Dados Pessoais (Lei 13.709/2018 (LGPD)), o Marco Civil da Internet (Lei 12.965/2014),
            o Código de Ética Profissional do Psicólogo e as Resoluções do Conselho Federal de
            Psicologia (CFP).
          </p>

          {hr}

          <h2 style={h2Style}>1. Identificação e contato da responsável</h2>
          <h3 style={h3Style}>Responsável pelo tratamento dos dados (Controladora):</h3>
          <ul style={ulStyle}>
            <li>Nome: Vitória Sarinho</li>
            <li>Registro profissional: CRP 02/28587</li>
            <li>E-mail para contato sobre dados pessoais: consultoriovitoriasarinho@gmail.com</li>
            <li>Telefone: (81) 99839-6041</li>
            <li>Atendimento: online, para todo o Brasil</li>
          </ul>

          {hr}

          <h2 style={h2Style}>2. Dados coletados e finalidade</h2>
          <h3 style={h3Style}>2.1 Dados fornecidos voluntariamente</h3>
          <p style={pStyle}>
            Ao entrar em contato via formulário, WhatsApp ou e-mail, você pode fornecer
            voluntariamente nome, e-mail, número de telefone e uma descrição da sua demanda. Esses
            dados são usados exclusivamente para responder à sua mensagem e, se você desejar,
            iniciar o processo de agendamento de consulta.
          </p>
          <h3 style={h3Style}>2.2 Dados coletados automaticamente</h3>
          <p style={pStyle}>
            Este site pode coletar automaticamente informações técnicas como endereço IP, tipo de
            navegador, sistema operacional, páginas visitadas e tempo de acesso, por meio de
            ferramentas de análise de desempenho (como Google Analytics). Esses dados são
            anonimizados e usados unicamente para melhorar a experiência de navegação. Nenhuma
            informação de saúde é coletada automaticamente.
          </p>
          <h3 style={h3Style}>2.3 O que NÃO é coletado por este site</h3>
          <p style={pStyle}>
            Este site não coleta, armazena nem processa dados sensíveis de saúde, histórico
            clínico, diagnósticos, prontuários ou quaisquer informações relacionadas a atendimentos
            psicológicos. Essas informações, quando fornecidas no contexto de uma consulta, são
            protegidas pelo sigilo profissional previsto no art. 9º do Código de Ética do
            Psicólogo e nas Resoluções CFP 01/2009, 11/2018 e 06/2019, e não são armazenadas em
            sistemas vinculados a este site.
          </p>

          {hr}

          <h2 style={h2Style}>3. Base legal para o tratamento de dados (LGPD)</h2>
          <p style={pStyle}>
            O tratamento dos dados pessoais realizados neste site baseia-se nas seguintes
            hipóteses legais previstas na Lei 13.709/2018:
          </p>
          <ul style={ulStyle}>
            <li>
              Art. 7º, inc. V: execução de contrato ou procedimentos preliminares relacionados
              a contrato do qual seja parte o titular, a seu pedido (agendamento de consulta)
            </li>
            <li>
              Art. 7º, inc. IX: legítimo interesse da controladora (análise de desempenho do
              site, comunicação com potenciais pacientes)
            </li>
            <li>
              Art. 7º, inc. I: consentimento do titular, quando aplicável e expressamente
              solicitado
            </li>
          </ul>

          {hr}

          <h2 style={h2Style}>4. Compartilhamento de dados</h2>
          <p style={pStyle}>
            Os dados pessoais coletados por este site não são vendidos, alugados nem
            compartilhados com terceiros para fins comerciais. Podem ser compartilhados apenas nas
            seguintes situações:
          </p>
          <ul style={ulStyle}>
            <li>
              Com ferramentas de hospedagem e análise (ex: Google Analytics, Vercel) para
              funcionamento técnico do site, sob acordos de confidencialidade e em conformidade
              com a LGPD
            </li>
            <li>
              Por obrigação legal, quando exigido por autoridade judicial ou regulatória competente
            </li>
            <li>Com o consentimento expresso do titular</li>
          </ul>
          <p style={pStyle}>
            Informações relacionadas a atendimentos psicológicos são protegidas pelo sigilo
            profissional e jamais são compartilhadas, salvo nas exceções previstas no art. 10º do
            Código de Ética do Psicólogo (iminente perigo para o paciente ou terceiros) e com
            estrita observância das normas do CFP.
          </p>

          {hr}

          <h2 style={h2Style}>5. Seus direitos como titular dos dados</h2>
          <p style={pStyle}>
            Nos termos do art. 18 da Lei 13.709/2018, você tem os seguintes direitos em relação
            aos seus dados pessoais:
          </p>
          <ul style={ulStyle}>
            <li>Confirmação da existência de tratamento</li>
            <li>Acesso aos dados</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
            <li>
              Portabilidade dos dados a outro fornecedor de serviço, mediante requisição expressa
            </li>
            <li>
              Eliminação dos dados tratados com consentimento, exceto nas hipóteses legais de
              conservação
            </li>
            <li>Informação sobre as entidades com as quais os dados foram compartilhados</li>
            <li>Revogação do consentimento, a qualquer momento</li>
          </ul>
          <p style={pStyle}>
            Para exercer qualquer um desses direitos, entre em contato pelo e-mail
            consultoriovitoriasarinho@gmail.com com o assunto "Proteção de Dados (LGPD)".
            Responderemos em até 15 dias úteis.
          </p>

          {hr}

          <h2 style={h2Style}>6. Retenção e exclusão de dados</h2>
          <p style={pStyle}>
            Os dados de contato fornecidos voluntariamente (nome, e-mail, telefone) são retidos
            pelo tempo necessário para o atendimento da demanda e por até 5 anos após o último
            contato, em conformidade com os prazos de guarda de documentos aplicáveis à atividade
            profissional do psicólogo (Resolução CFP 001/2009).
          </p>
          <p style={pStyle}>
            Dados de análise de desempenho do site (anonimizados) são retidos conforme as
            políticas das ferramentas utilizadas (geralmente 26 meses para o Google Analytics).
          </p>

          {hr}

          <h2 style={h2Style}>7. Cookies e tecnologias de rastreamento</h2>
          <p style={pStyle}>
            Este site pode utilizar cookies técnicos essenciais para o funcionamento correto das
            páginas e cookies analíticos para mensurar o desempenho do site. Cookies de
            rastreamento publicitário ou de terceiros para fins comerciais não são utilizados.
          </p>
          <p style={pStyle}>
            Você pode configurar seu navegador para recusar cookies. Isso não impedirá o acesso
            ao conteúdo do site, mas pode afetar algumas funcionalidades de navegação.
          </p>

          {hr}

          <h2 style={h2Style}>8. Sigilo profissional e ética em psicologia</h2>
          <p style={pStyle}>
            Todo atendimento psicológico realizado por Vitória Sarinho é regido pelo Código de
            Ética Profissional do Psicólogo (Resolução CFP 010/2005) e pelas normas aplicáveis
            ao atendimento online (Resolução CFP 11/2018). O sigilo profissional é absoluto no
            que se refere a informações obtidas no exercício da profissão, conforme o art. 9º do
            Código de Ética, sendo levantado apenas nas exceções expressas no art. 10º do mesmo
            instrumento.
          </p>
          <p style={pStyle}>
            Este site não coleta, trata nem armazena dados de saúde dos pacientes. Toda
            comunicação clínica é realizada em plataformas seguras e específicas para atendimento
            psicológico online, separadas desta plataforma.
          </p>

          {hr}

          <h2 style={h2Style}>9. Segurança das informações</h2>
          <p style={pStyle}>
            Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados pessoais
            contra acesso não autorizado, perda ou divulgação indevida. O site utiliza protocolo
            HTTPS com certificado SSL ativo. Recomendamos que você não compartilhe informações
            sensíveis de saúde em formulários de contato públicos.
          </p>

          {hr}

          <h2 style={h2Style}>10. Links externos</h2>
          <p style={pStyle}>
            Este site pode conter links para plataformas externas como WhatsApp, Instagram e
            ferramentas de agendamento. Estas plataformas possuem suas próprias políticas de
            privacidade, pelas quais não somos responsáveis. Recomendamos a leitura das políticas
            de cada serviço externo acessado.
          </p>

          {hr}

          <h2 style={h2Style}>11. Alterações nesta política</h2>
          <p style={pStyle}>
            Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças
            legais, normativas ou operacionais. A data da última atualização é exibida no início
            do documento. O uso contínuo do site após qualquer atualização implica a aceitação
            das novas condições.
          </p>

          {hr}

          <h2 style={h2Style}>12. Foro e legislação aplicável</h2>
          <p style={pStyle}>
            Esta política é regida pela legislação brasileira. Fica eleito o foro da comarca de
            Recife (PE) para dirimir eventuais controvérsias decorrentes desta política, com
            renúncia a qualquer outro, por mais privilegiado que seja.
          </p>

          {hr}

          <h2 style={h2Style}>Dúvidas ou solicitações?</h2>
          <div
            style={{
              borderLeft: "3px solid var(--terracota)",
              background: "rgba(242,213,187,0.15)",
              padding: "20px 24px",
              borderRadius: "0 12px 12px 0",
              fontFamily: fontMont,
              fontWeight: 400,
              fontSize: 15,
              color: "var(--texto-medio)",
              lineHeight: 1.85,
              marginTop: 16,
            }}
          >
            Entre em contato pelo e-mail consultoriovitoriasarinho@gmail.com com o assunto
            "Proteção de Dados". Responderemos em até 15 dias úteis conforme previsto na LGPD.
          </div>

          <div style={{ marginTop: 56, textAlign: "center" }}>
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              style={{
                background: "var(--marrom-escuro)",
                color: "#fff",
                border: "none",
                padding: "14px 32px",
                borderRadius: "var(--vs-radius-md)",
                fontFamily: fontMont,
                fontWeight: 500,
                fontSize: 15,
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--marrom)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--marrom-escuro)")}
            >
              ← Voltar ao site
            </button>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
