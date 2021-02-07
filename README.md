###Trabalho Equipe 12 - Trabalho Realizado para Provi Hack Woman no Hackaton 2021
Desenvolvedoras: Renata Caetano e Monalisa Kairine

link do surge: http://godly-beast.surge.sh/

### Modelo exemplo para Backend


## ESTRUTURA DE DADOS  
  
* ## Usuários Profissional 
  * id
  * name
  * nickname 
  * email
  * telefone
  * endereço

  * ## Usuários Empresa 
  * id
  * name
  * atuação
  * email
  * telefone
  * endereço

    * ## Usuários Mentoria 
  * id
  * name
  * atuação
  * email
  * telefone
  * endereço

* ## Cursos
  * id
  * title
  * description

* ## Vagas 
  * id
  * title
  * description
---

## CRIAÇÃO DE TABELAS - MySql

```sql
CREATE TABLE user_professional (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    telefone
    endereco VARCHAR(64) NOT NULL
);
```
```sql
CREATE TABLE user_company (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    atuacao VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    telefone INT (10) NOT NULL,
    endereco VARCHAR(64) NOT NULL
);
```

```sql
CREATE TABLE user_mentor (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    atuacao VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    telefone INT (10) NOT NULL,
    endereco VARCHAR(64) NOT NULL
);

```

## ENDPOINTS 

* ## Criar usuário
  * Método: PUT
  * Path: `/user`
  * Body:
    * name (obrigatório)
    * nickname (obrigatório)
    * email (obrigatório)

* ## Pegar usuário pelo id
  * Método: GET
  * Path: `/user/:id`
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    * nickname


* ## Editar usuário**
  * Método: POST
  * Path: `/user/edit/:id`
  * Body:
    * name (opcional; não pode ser vazio)
    * nickname (opcional; não pode ser vazio)
    * email (opcional; não pode ser vazio)


* ## Criar Curso
  * Método: PUT
  * Path: `/curso`
  * Body:
    * title (obrigatório)
    * description (obrigatório)
   







