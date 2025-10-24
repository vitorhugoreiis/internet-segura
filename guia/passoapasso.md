Plano passo-a-passo (alto nível)

Criar projeto no VSCode (HTML/CSS/JS).

Estrutura de pastas e arquivos.

Conteúdo: seções e textos (Home, Dicas, Evite Golpes, Aprenda Mais, Contato).

Layout responsivo e acessibilidade.

Recursos: imagens, QR code, PDF para download.

Testes locais.

Preparar evidências (prints, fotos).

Publicar no GitHub Pages.

(Opcional) Métricas básicas / formulário de contato.

Abaixo está cada passo detalhado com comandos, arquivos e sugestões tecnológicas.

1) Iniciar projeto no VSCode

Tecnologia: Node (opcional), VSCode, Live Server (extensão)

Abra VSCode.

Crie pasta do projeto, por exemplo internet-segura/.

(Opcional) abra terminal e inicialize git:

cd path/to/internet-segura
git init


Instale a extensão Live Server (vai facilitar teste local).

2) Estrutura de pastas e arquivos recomendada
internet-segura/
├─ index.html
├─ README.md
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  └─ main.js
│  ├─ img/
│  │  └─ qr-code.png    (gerado depois)
│  └─ pdf/
│     └─ guia-resumido.pdf (opcional)
└─ .gitignore


Por que SPA (index.html)?: mais simples de manter e de publicar no GitHub Pages; tudo acessível via ancoras (ex: #dicas).

3) Conteúdo / seções e o que inserir em cada uma (detalhado)

Vou listar cada seção com elementos HTML sugeridos, texto que você pode copiar e recursos (imagens, botões, PDF).

A) Header / Navbar

Elementos: <header> com título, breve frase e links âncora para seções.
Inserir:

Nome do projeto: Internet Segura e Sem Mistérios

Subtítulo: Guia rápido para usar smartphone e internet com segurança — pensado para moradores do condomínio.

Botões âncora: Inicio | Dicas | Evite Golpes | Aprenda Mais | Contato

Tecnologia: HTML sem dependências; você pode usar CSS puro ou Bootstrap (se quiser).

B) Seção Home / Bem-vindo

Elementos: <section id="home"> com um parágrafo curto e botão CTA (Acessar Dicas).
Texto sugerido (copiar):

Olá! 👋 Bem-vindo ao Internet Segura e Sem Mistérios.
Aqui você encontra dicas rápidas e práticas para proteger seu celular, identificar golpes e usar a internet para facilitar o dia a dia.

Recursos: imagem ilustrativa (assets/img/welcome.png) — opcional.

C) Seção Dicas de Segurança (#dicas)

Elementos: Título, lista de dicas com ícones, mini-tutoriais em "cards".
Itens a inserir (cada item = um card com título + explicação + passo a passo curto):

Senhas seguras

Texto curto: usar 8+ caracteres, misturar maiúsculas, minúsculas, números e símbolos.

Exemplo prático: transforme “Maria2025” em “M@r!a_2O25”.

Autenticação em 2 passos (quando possível)

Diga como ativar (ex: WhatsApp → Configurações → Conta → Verificação em duas etapas).

Não compartilhe códigos SMS / OTP

Atualize seu aparelho

Mostrar onde checar (Configurações → Sistema → Atualização).

Evite Wi-Fi desconhecido

Preferir redes confiáveis; usar dados móveis para transações sensíveis.

Tecnologia: HTML + CSS. Se quiser, coloque um pequeno botão “Ver passo a passo” que abre um modal (JS simples).

D) Seção Evite Golpes (#golpes)

Elementos: Lista dos golpes mais comuns com instruções de como agir.
Conteúdo sugerido (cards):

WhatsApp clonado — nunca informe códigos; ao suspeitar, faça logout de sessões web e contate suporte do WhatsApp.

Boleto falso / Falso pagamento — sempre confirme via app do banco ou site oficial antes de pagar.

Entrega / rastreio falso — não clique em links de tracking desconhecidos; preferir sites oficiais.

Golpes por telefone (se passando por bancos) — bancos não ligam pedindo senhas.

Ação prática (call-to-action): “Se desconfiar, bloqueie o número e procure ajuda”.

E) Seção Aprenda Mais (#mais)

Elementos: Links úteis, PDFs e vídeos explicativos curtos (embeds YouTube).
Inserir:

Link para cartilha do CERT ou página oficial (pode ser apenas texto com URL).

Botão para baixar PDF resumo (assets/pdf/guia-resumido.pdf).

Tecnologia: iframe embed do YouTube (opcional) ou link externo.

F) Seção Contato e Feedback (#contato)

Elementos: Formulário simples (nome, e-mail, mensagem) que envia para seu e-mail via mailto: ou via serviço externo (Formspree).
Opções de implementação:

Simples: botão mailto:seuemail@exemplo.com?subject=Feedback%20Internet%20Segura — sem backend.

Melhor (se quiser coletar respostas): usar Formspree (gratuito para poucos envios) ou Netlify Forms.
Campos recomendados: nome, apartamento/condomínio, dúvida/feedback, checkbox Autorizo uso do depoimento (sim/não).

Tecnologia: HTML form + (opcional) Formspree integration.

G) Footer / Evidências

Elementos: Incluir autor (seu nome + RGM), curso, data, link para relatório PDF e pequenas instruções “Como usar este site”.
Texto sugerido:

Projeto extensionista: Internet Segura e Sem Mistérios — Autor: Vitor Hugo Reis, Sistemas de Informação. Entrega: 05/11/2025.

4) Design, layout e acessibilidade (detalhes)

Tecnologias / abordagens:

CSS puro ou Bootstrap 5 (rápido para layout responsivo).

Preferência: usar Flexbox / CSS Grid para responsividade.

Fonte legível (ex: Inter, Roboto) — use Google Fonts.

Contraste: textos escuros sobre fundo claro; tamanho >= 16px para corpo.

Alt text para todas as imagens.

Botões grandes e espaçamento para idosos tocarem facilmente.

A11y extras: lang="pt-BR", aria-label em nav e botões, tabindex lógico.

5) QR Code e material impresso (folha A4)

O que gerar e como:

Gere um QR Code apontando para a URL do site (ex.: https://vitorhugoreis.github.io/internet-segura/).

Ferramentas: https://www.qr-code-generator.com
 (ou gerar via npm: npx qrcode-cli -o assets/img/qr-code.png "URL").

Folha A4 (Word/Google Docs) com: título, 1 frase de chamada (“Aprenda a usar celular e evitar golpes — acesse →”), QR code, instruções rápidas e horário de apoio (se quiser).

Imprima e cole em elevador, área de correspondência, salão de festas.

6) Testes locais (passo a passo)

Inicie Live Server (extensão) ou abra index.html no navegador.

Teste o fluxo: clicar QR (simular), baixar PDF, enviar formulário (se configurado).

Teste em celular: clique com câmera no QR (antes de imprimir, teste a imagem do QR no próprio celular).

7) Preparar evidências para o Relatório

Fotos das folhas A4 afixadas.

Screenshots da home do site e das seções (em desktop e mobile).

Print do contador de acessos (ver próximo item sobre métricas).

Depoimentos curtos (pode pedir aos vizinhos um pequeno texto) — peça autorização para publicar.

Arquivo PDF com relatório final (modelos do manual).

8) Publicação no GitHub Pages (passos rápidos)

Tecnologia: Git + GitHub

Crie repo no GitHub: internet-segura.

No terminal:

git add .
git commit -m "Initial site"
git branch -M main
git remote add origin git@github.com:SEU_USUARIO/internet-segura.git
git push -u origin main


No GitHub → Settings → Pages → Source: main branch / (root) → Save.

Após alguns minutos, o site estará disponível em https://SEU_USUARIO.github.io/internet-segura/.

(Se preferir usar GitHub Desktop, tudo bem — mesmo fluxo.)

9) Métricas simples (opcional)

Google Analytics (GA4): adicione o script (precisa conta Google). Bom para mostrar número de acessos como evidência.

Alternativa leve: usar um contador JS simples (não confiável) ou registrar manualmente visitas pedindo aos moradores que deixem feedback no formulário.

Recomendação simples: use Google Analytics se souber criar conta; se não, colete evidências manuais + prints do GitHub Pages (deploy) e impressões do número de downloads do PDF (se usar hospedagem).

10) Boas práticas e riscos

Privacidade: se coletar depoimentos, peça autorização escrita.

Dados pessoais: evite pedir dados sensíveis no formulário.

Segurança do site: não coloque senhas ou dados do condomínio.

Backup: mantenha o projeto commitado no Git.

11) Checklist final (o que deve ter no repositório e no site)

 index.html com todas as seções.

 assets/css/styles.css com estilo responsivo.

 assets/js/main.js (scripts mínimos: menu mobile, modal, validação de formulário).

 assets/img/qr-code.png e outras imagens otimizadas.

 assets/pdf/guia-resumido.pdf (opcional).

 README.md com instruções de deployment.

 Folha A4 impressa com QR e colocada no condomínio (fotos registradas).

Exemplos rápidos (snippet útil)

Meta tag e idioma (no <head>):

<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="Guia rápido para usar a internet com segurança — projeto extensionista" />
  <title>Internet Segura e Sem Mistérios</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>


Botão QR / Download (exemplo):

<section id="mais">
  <h2>Aprenda Mais</h2>
  <p>Baixe o guia rápido:</p>
  <a href="assets/pdf/guia-resumido.pdf" download>Baixar guia (PDF)</a>
  <img src="assets/img/qr-code.png" alt="QR Code para acessar o site">
</section>
