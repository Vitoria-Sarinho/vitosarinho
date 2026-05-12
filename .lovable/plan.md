# Plano: Site institucional Vitória Sarinho

Site one-page premium em React + TypeScript + Tailwind sobre TanStack Start (stack do projeto), seguindo integralmente a especificação visual, de conteúdo e de compliance CFP fornecida.

## Stack e adaptações
- O template já usa **TanStack Start + Vite + Tailwind v4** (não Vite/CRA puro). Vou adaptar a estrutura mantendo 100% da spec visual:
  - Página única em `src/routes/index.tsx` compondo todas as seções.
  - Metadados SEO via `head()` do TanStack (title, description, OG, Twitter) — equivalente ao bloco `<head>` da spec.
  - Fontes Playfair Display + Montserrat carregadas via `<link>` no shell `__root.tsx`.
  - Tokens de design adicionados em `src/styles.css` (não criar `globals.css` separado para não quebrar o pipeline Tailwind v4 existente).

## Arquivos a criar
```
src/components/
  Navbar.tsx
  Footer.tsx
  WhatsAppButton.tsx
  sections/
    Hero.tsx
    SobreMim.tsx
    Especialidades.tsx
    ComoFuncionaPsicoterapia.tsx
    ComoFuncionaAvaliacao.tsx
    Depoimentos.tsx
    CTAFinal.tsx
src/assets/
  vitoria-hero.jpg          (copiada do upload)
```

## Arquivos a modificar
- `src/styles.css` — adicionar todas as variáveis CSS (paleta nude/terracota/marrom, neutros, tipografia, raios), regras globais de body/h1-h4/section/.container, mantendo o bloco shadcn existente intacto.
- `src/routes/__root.tsx` — adicionar preconnect + link de Google Fonts (Playfair Display + Montserrat); meta SEO em PT-BR.
- `src/routes/index.tsx` — substituir placeholder pela composição: Navbar + 7 seções + CTAFinal + Footer + WhatsAppButton.

## Detalhes de implementação por seção

**Navbar** — sticky, transparente no topo, vira nude com blur após scroll > 60px (listener em `useEffect`). Drawer mobile com `useState` e overlay `var(--marrom-escuro)`. CTA WhatsApp com URL pré-preenchida.

**Hero** — fundo `--marrom-escuro`, grid 2 col desktop / 1 col mobile (foto primeiro mobile). Forma orgânica decorativa em SVG/`absolute`. Foto da psicóloga (upload `foto_de_ia_no_escritorio_2_marrom.png` → copiada para `src/assets`). 3 badges glassmorphism com `backdrop-filter: blur` e animação de entrada via classes utilitárias + `@keyframes` no styles.css (delays 0.6/0.9/1.2s). Citação Jung com divisor.

**SobreMim** — id `sobre`, fundo branco, foto com bordas alternadas + quadrado decorativo terracota deslocado. Grid 2x2 de valores com SVGs inline.

**Especialidades** — id `especialidades`, fundo nude, 2 cards com hover translateY. Ícones SVG inline (cérebro estilizado, coração com pulso) — sem emojis, sem Lucide.

**ComoFuncionaPsicoterapia / ComoFuncionaAvaliacao** — Componente Timeline reutilizável (4 passos). Horizontal no desktop com conector pontilhado, vertical mobile. Avaliação tem box introdutório com border-left terracota.

**Depoimentos** — Carrossel custom com `useState` (índice ativo). Mobile mostra 1 card, desktop 3. Dots + setas chevron SVG. Sem auto-play. Nota ética CFP no rodapé. Conteúdo conforme spec (iniciais, sem diagnósticos).

**CTAFinal** — id `contato`, fundo `--quase-preto`, círculos decorativos, 2 botões (WhatsApp + placeholder Calendly `#`).

**Footer** — fundo `#1A0A04` border-top terracota. 3 colunas + linha inferior com copyright/privacidade/Next Assessoria.

**WhatsAppButton** — fixed bottom-right, círculo verde 62px, ícone WhatsApp SVG oficial, tooltip à esquerda, animação de entrada após 1.5s (setTimeout + classes).

## Compliance e acessibilidade
- CRP 02/28587 visível em Hero, SobreMim e Footer.
- Nota CFP no rodapé de Depoimentos.
- Sem preços, diagnósticos, fotos de pacientes, promessas de cura.
- `aria-label` em todos os CTAs e botões de navegação.
- `rel="noopener noreferrer"` em links externos (WhatsApp, Instagram, Next Assessoria).
- Smooth scroll nativo via `html { scroll-behavior: smooth }`.
- Sem overflow horizontal — checar via QA visual em 320px e 1440px após build.

## SEO
- `<title>`: "Vitória Sarinho — Psicóloga Clínica e Neuropsicóloga | CRP 02/28587"
- `<meta name="description">`: descrição em PT-BR sobre atendimento humanizado, psicoterapia e avaliação neuropsicológica online para todo o Brasil.
- OG/Twitter equivalentes apontando para a foto do hero.
- `lang="pt-BR"` no `<html>` (ajustar `__root.tsx`).

## Validação final
- Build verde (typecheck automático).
- Preview visual no browser para conferir hero, navbar scroll, badges, timelines responsivas, carrossel.
- Confirmar que placeholder original do `index.tsx` foi substituído.
