---
title: Stack
description: Tecnologias utilizadas no desenvolvimento da plataforma
---

Tecnologias utilizadas no desenvolvimento da plataforma.

## Frontend
---

### Astro
O framework [Astro](https://docs.astro.build/en/getting-started/) foi utilizado para o frontend. As páginas públicas são geradas de forma estática, enquanto que páginas da interface admin são dinâmicas, utilizando a funcionalidade de SSR com o adaptador Netlify. Como a geração de site estático está configurada como padrão, as páginas dinâmicas são definidas por esta linha incluída na _frontmatter_:

```javascript
export const prerender = false;
```

### Svelte
Astro permite a utilização de outros frameworks de JavaScript quando necessário para implementar _features_ mais interativas, com o uso da [arquitetura de _islands_](https://docs.astro.build/en/concepts/islands/). [Svelte](https://svelte.dev/docs/svelte/overview) é utilizado pontualmente nesses momentos, principalmente para renderizar o mapa interativo, e efetuar a busca e filtragem de itens.

### WebAwesome
[WebAwesome](https://webawesome.com/docs) é uma biblioteca de componentes de UI desenvolvida com a tecnologia de Web Components, que faz parte do padrão da web estabelecido pela W3C, podendo ser utilizados independentemente do framework adotado. Os componentes foram customizados para seguir o Design System da plataforma.

## Backend
---

### Supabase
O backend utiliza a plataforma [Supabase](https://supabase.com/docs), um BaaS (_Backend-as-a-Service_) construído em cima do banco de dados [Postgres](https://www.postgresql.org/docs/).

## Infraestrutura
---
### GitHub
O código-fonte é hospedado em um repositório privado na plataforma GitHub.

### Netlify
O frontend é hospedado no plano gratuito da plataforma [Netlify](https://www.netlify.com), configurada para rodar deploys automáticos sempre que forem publicadas alterações ao _main branch_ do repositório no GitHub. Há uma [Netlify Function](https://www.netlify.com/platform/functions/) configurada para permitir deploys manuais a partir da interface admin.

### Supabase Cloud
O backend é hospedado no plano gratuito da [Supabase Cloud](https://supabase.com/pricing).

### Self-hosting
Há planos futuros de realizar migração para _self-hosting_ em um servidor próprio. Para isso, uma instância própria do Supabase seria disponibilizada com deploy via [Docker](https://docs.docker.com). Já a Netlify poderia ser substituída por uma instância de algum service open source similar, como [Coolify](https://coolify.io/docs/).
