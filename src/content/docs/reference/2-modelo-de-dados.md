---
title: Modelo de dados
description: Modelo de dados da plataforma Redeprol
---

## Tipos customizados
---

### Enum: `supplier_type`
`Fabricante` | `Espaço` | `Fornecedor` | `Laboratório` | `Prestador de serviço`
   
### Enum: `tag_type`
`Material` | `Área de atuação` | `Tecnologia` | `Espaço` | `Categoria` | `Ferramenta` | `Prática`


## Tabelas de entidades
---

Todas as tabelas possuem as seguintes colunas:

| Nome | Tipo | Restrições |
|------|------|-------------|
| `user_id` | `uuid` | Obrigatório |
| `created_at` | `timestamptz` | Obrigatório |
| `updated_at` | `timestamptz` | Obrigatório |
| `hidden` | `bool` | Obrigatório |

A coluna `user_id` identifica o usuário que cadastrou o item.

A coluna `hidden` é utilizada para realizar operações de _soft delete_. Seu valor padrão é `FALSE`.

### `suppliers`

Tabela de fornecedores.

| Nome | Tipo | Restrições |
|------|------|-------------|
| `id` | `int8` | Chave primária |
| `name` | `text` | Obrigatório |
| `slug` | `text` |  Obrigatório, Único |
| `type` | `supplier_type[]` |  Opcional |
| `location` | `geography` |  Opcional |
| `longitude`* | `float8` |  Opcional |
| `latitude`* | `float8` |  Opcional |
| `description` | `text` |  Opcional |
| `details` | `text` |  Opcional |
| `address` | `text` |  Opcional |
| `email` | `text` |  Opcional |
| `phone` | `text` |  Opcional |
| `socialmedia` | `text[]` |  Opcional |
| `website` | `text` |  Opcional |

*As colunas de `longitude` e `latitude` são geradas automaticamente com base em `location`.

### `tags`

| Nome | Tipo | Restrições |
|------|------|-------------|
| `id` | `int8` | Chave primária |
| `name` | `text` | Obrigatório |
| `slug` | `text` |  Obrigatório, Único |
| `type` | `tag_type[]` | Obrigatório |
| `description` | `text` |  Opcional |
| `synonym` | `text[]` | Opcional |

### `projects`

| Nome | Tipo | Restrições |
|------|------|-------------|
| `id` | `int8` | Chave primária |
| `name` | `text` | Obrigatório |
| `slug` | `text` |  Obrigatório, Único |
| `author` | `text[]` |  Opcional |
| `institution` | `text[]` |  Opcional |
| `description` | `text` |  Opcional |
| `details` | `text` |  Opcional |
| `method` | `text[]` |  Opcional |
| `address` | `text` |  Opcional |
| `email` | `text` |  Opcional |
| `license` | `text` |  Opcional |
| `phone` | `text` |  Opcional |
| `socialmedia` | `text[]` |  Opcional |
| `website` | `text` |  Opcional |

### `practices`

| Nome | Tipo | Restrições |
|------|------|-------------|
| `id` | `int8` | Chave primária |
| `name` | `text` | Obrigatório |
| `slug` | `text` | Obrigatório, Único |
| `description` | `text` |  Opcional |
| `details` | `text` |  Opcional |
| `examples` | `text[]` |  Opcional |
| `items` | `jsonb` |  Opcional |

### `images`

| Nome | Tipo | Restrições |
|------|------|-------------|
| `id` | `int8` | Chave primária |
| `src` | `text` | Obrigatório |
| `alt_text` | `text` | Obrigatório |
| `legend` | `text` |  Opcional |
| `credits` | `text` |  Opcional |
| `project_id` | `int8` |  Opcional |
| `is_project_cover` | `bool` |  Opcional |
| `supplier_id` | `int8` |  Opcional |
| `is_supplier_cover` | `bool` | Opcional |
| `practice_id` | `int8` |  Opcional |
| `is_practice_cover` | `bool` | Opcional |

## Tabelas de relacionamentos
---

Todas as tabelas possuem a seguinte coluna:

| Nome | Tipo | Restrições |
|------|------|-------------|
| `user_id` | `uuid` | Obrigatório |

A coluna `user_id` identifica o usuário que cadastrou o relação.

### `supplier_tag`

| Name | Type | Constraints |
|------|------|-------------|
| `tag_id` | `int8` | Chave primária |
| `supplier_id` | `int8` | Chave primária |

### `project_tag`

| Nome | Tipo | Restrições |
|------|------|-------------|
| `tag_id` | `int8` | Chave primária |
| `project_id` | `int8` | Chave primária |

### `practice_tag`

| Nome | Tipo | Restrições |
|------|------|-------------|
| `tag_id` | `int8` | Chave primária |
| `practice_id` | `int8` | Chave primária |
