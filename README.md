# Rancho Plenitude: landing page

Site do Rancho Plenitude, centro de equoterapia em Boa Vista (RR). Página única, estática, publicada na Vercel a cada push na branch `main`.

## Estrutura
- `public/index.html`: a página (conteúdo, menu, formulário e tela de obrigado).
- `public/assets/`: logos e o CSS compilado (`styles.css`, gerado pelo build).
- `src/input.css`: estilos de base e componentes (Tailwind `@layer`).
- `tailwind.config.js`: cores, fontes (Cormorant Garamond + DM Sans) e raios.

## Editar e testar
```bash
npm install
npm run dev     # recompila o CSS a cada alteração
npm run build   # gera public/assets/styles.css minificado
```
Abra `public/index.html` no navegador para ver o resultado.

## Publicar
Faça commit e push na `main`. A Vercel roda `npm run build` e publica a pasta `public/` (ver `vercel.json`).

## Pendências antes de anunciar
- O formulário ainda **não envia dados**: falta ligar a um destino (planilha, CRM ou banco) e definir o número do WhatsApp.
- Fotos reais no lugar dos mocks e dados marcados como `A DEFINIR`.
- Página de política de privacidade (LGPD).
