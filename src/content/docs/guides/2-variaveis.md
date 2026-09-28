---
title: Variáveis de ambiente
description: Como configurar as variáveis do ambiente de desenvolvimento local
---

Algumas variáveis de ambiente são necessárias para que as integrações com Supabase e Netlify funcionem corretamente no ambiente local. Crie um arquivo `.env` dentro da pasta do projeto se ele não já existir, para inserir nele as variáveis.

## Supabase

Essas variáveis de ambiente são necessárias para que o ambiente local de desenvolvimento consiga se conectar com o banco de dados.

1. Faça login na dashboard do [Supabase](https://www.supabase.com/), entre na organização **Redeprol**, e então no projeto **Plataforma Redeprol**.
2. Procure e acione o botão "_Connect_" no cabeçalho da dashboard.
3. No painel "_Connect to your project_", no dropdown chamado "_Framework_", escolha a opção "_Astro_".
4. No passo 2 das instruções, encontre os valores das variáveis com o formato abaixo:
   ```
   SUPABASE_URL=[valor aqui]
   SUPABASE_KEY=[valor aqui]
   ```
5. Copie as variáveis e adicione ao seu arquivo `.env`.

## Netlify

Essa variável de ambiente é necessária para que a funcionalidade de rodar um _deploy_ via a interface de admin funcione no ambiente local de desenvolvimento, mas não é necessária em nenhum outro contexto.

1. Faça login na dashboard do [Netlify](https://www.netlify.com/) e entre no projeto **Redeprol**.
2. Na sidebar da dashboard, entre em "_Project configuration_", e então na aba "_Developer settings_".
3. Na sidebar da aba, entre em "_Build hooks_".
4. Copie o código do build hook que vem ao fim da URL exibida:
   ```
   deploy-via-admin-ui: https://api.netlify.com/build_hooks/[código aqui]
   ```
5. Adicione-o ao seu arquivo `.env` da seguinte forma:
   ```
   NETLIFY_BUILD_HOOK=[código do build hook aqui]
   ```
