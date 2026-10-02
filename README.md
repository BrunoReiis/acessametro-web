# AcessaMetrô Web

Site do AcessaMetrô, desenvolvido com Next.js e React. A interface apresenta
informações sobre o projeto, sua equipe e um formulário de demonstração para
relatos de problemas de acessibilidade.

## Tecnologias

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- Componentes acessíveis com Base UI e ícones Lucide

## Requisitos

- Node.js 20.9 ou superior
- npm

## Executar localmente

Abra um terminal nesta pasta (`acessametro-web`) e instale as dependências:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador. Para parar o servidor, pressione
`Ctrl+C` no terminal.

## Páginas

| Caminho | Conteúdo |
| --- | --- |
| `/` | Página inicial do AcessaMetrô. |
| `/sobre` | Informações sobre o projeto. |
| `/equipe` | Apresentação da equipe. |
| `/denunciar` | Formulário de demonstração para relatar incidentes. |

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a build de produção do Next.js. |
| `npm start` | Inicia localmente a build de produção. Execute `npm run build` antes. |
| `npm run lint` | Analisa o código com ESLint. |
| `npm run typecheck` | Verifica os tipos TypeScript sem gerar arquivos. |
| `npm run format` | Formata arquivos `.ts` e `.tsx` com Prettier. |

## Organização do código

```text
app/                 Páginas, layout global e estilos
components/          Componentes compartilhados e componentes de interface
components/ui/       Componentes de interface reutilizáveis
hooks/               Hooks React
lib/                 Funções utilitárias
public/              Arquivos estáticos
```

## Integração com a API

A API fica em [`acessametro-api`](../acessametro-api/README.md). No estado
atual, as páginas do site são renderizadas sem buscar dados dessa API. O
formulário de `/denunciar` valida a seleção de arquivo e os campos no navegador,
mas **ainda não envia a denúncia para o backend**. A mensagem exibida após o
envio informa esse comportamento.

## Build e validação

Antes de publicar, rode os comandos a partir desta pasta:

```bash
npm run lint
npm run typecheck
npm run build
```

O projeto pode ser publicado em uma plataforma compatível com Next.js, como o
Vercel. As variáveis de ambiente da API não são necessárias para executar o
site no estado atual.
