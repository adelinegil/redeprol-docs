---
title: Atualizar tipos
description: Manter os tipos gerados a partir do banco de dados sincronizados com o backend
---

Este projeto utiliza tipos definidos via [TypeScript](https://www.typescriptlang.org) para ajudar a prevenir erros durante o desenvolvimento e garantir maior estabilidade. Alguns desses tipos são gerados automaticamente com base nas tabelas do banco de dados. Se as tabelas forem alteradas via a dashboard do Supabase, esses tipos precisam ser gerados novamente, ou ficarão defasados.

Isso pode ser feito com utilização da CLI do Supabase, que já terá sido instalada como uma dependência de desenvolvimento no momento que `npm install` foi rodado. Mas é necessário realizar a autenticação com sua conta do Supabase antes que o comando de geração de tipos possa ser usado.

1. No terminal, rode o comando `npx supabase login` e siga as instruções para se autenticar.
2. Uma vez autenticado, rode o comando `npx supabase link` e escolha **Plataforma Redeprol** na lista de projetos.
3. Pode ser que seja necessário inserir a senha do banco de dados do projeto para realizar o link.

Após a realização desses passos, a atualização dos tipos pode ser feita com o seguinte comando:
```
npm run types
```

Com esse comando, o arquivo `src/lib/database.types.ts` será atualizado com base na configuração atual do banco do dados.
