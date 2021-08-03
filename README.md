<h1 align="center">
  <img alt="" src=".github/cover-node.js.png">

<h4 align="center"> 
	🚧  Nodejs 🚀 Projeto 01...  🚧
</h4>

[<img src="https://avatars3.githubusercontent.com/u/39311340?s=400&u=f8570819489cb64bb45dfbfb85f2a82f1b56d11f&v=4" width=115 > <br> <sub> Alisson de Andrade Araújo</sub>](http://alissondeandradearaujo.000webhostapp.com/) | 
| :---: |  


### Participante: 
|name|email|course|
| -------- | -------- | -------- |
|Alisson de Andrade|alisson2d@hotmail.com|Bootcamp Ignite - Node.js|

# Aula 1 :checkered_flag:

## Desafio 01 - Conceitos do Node.js

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no Node.js!

Essa será uma aplicação para gerenciar tarefas (em inglês *todos*). Será permitida a criação de um usuário com `name` e `username`, bem como fazer o CRUD de *todos*:

- Criar um novo *todo*
- Listar todos os *todos*
- Alterar o `title` e `deadline` de um *todo* existente
- Marcar um *todo* como feito
- Excluir um *todo*

## Especificação dos testes

### Testes de usuário

- **Should be able to create a new user**

Para que esse teste passe, você deve permitir que um usuário seja criado e retorne um json com o usuário criado. Você pode ver o formato de um usuário abaixo:

```javascript
{ 
  id: 'uuid', // precisa ser um uuid
  name: 'Danilo Vieira', 
  username: 'danilo', 
  todos: []
}
```

Também é necessário que você retorne a resposta com o código `201`.

<br>

- **Should not be able to create a new user when username already exists**

Para que esse teste passe, antes de criar um usuário você deve validar se outro usuário com o mesmo `username` já existe. Caso exista, retorne uma resposta com status `400` e um json no seguinte formato:

```javascript
{
  error: 'Mensagem do erro'
}
```

A mensagem pode ser de sua escolha, desde que a propriedade seja `error`.

<br>

### Testes de TODO's

- **Should be able to list all user's todos**

Para que esse teste passe, na rota GET `/todos` é necessário pegar o usuário que foi repassado para o `request` no middleware `checkExistsUserAccount` e então retornar a lista `todos` que está no objeto do usuário conforme foi criado para satisfazer o [primeiro teste](#testes-de-usuário).

<br>

- **Should be able to create a new todo**

Para que esse teste passe, na rota POST `/todos` é necessário pegar o usuário que foi repassado para o `request` no middleware `checkExistsUserAccount`, pegar também o `title` e o `deadline` do corpo da requisição e adicionar um novo *todo* na lista `todos` que está no objeto do usuário.

Lembre-se de seguir a estrutura padrão de um *todo*:

```javascript
{ 
  id: 'uuid', // precisa ser um uuid
  title: 'Nome da tarefa',
  done: false, 
  deadline: new Date(deadline), 
  created_at: new Date()
}
```

<br>

- **Should be able to update a todo**

Para que esse teste passe, na rota PUT `/todos/:id` é necessário atualizar um *todo* existente, recebendo o `title` e o `deadline` pelo corpo da requisição e o `id` presente nos parâmetros da rota.

<br>

- **Should not be able to update a non existing todo**

Para que esse teste passe, você não deve permitir a atualização de um *todo* que não existe e retornar uma resposta contendo um status `404` e um json no seguinte formato: 

```javascript
{
  error: 'Mensagem do erro'
}
```

<br>

- **Should be able to mark a todo as done**

Para que esse teste passe, na rota PATCH `/todos/:id/done` você deve mudar a propriedade `done`de um *todo* de `false` para `true`, recebendo o `id` presente nos parâmetros da rota.

<br>

- **Should not be able to mark a non existing todo as done**

Para que esse teste passe, você não deve permitir a mudança da propriedade `done` de um *todo* que não existe e retornar uma resposta contendo um status `404` e um json no seguinte formato: 

```javascript
{
	error: 'Mensagem do erro'
}
```

<br>

- **Should be able to delete a todo**

Para que esse teste passe, DELETE `/todos/:id` você deve permitir que um *todo* seja excluído usando o `id` passado na rota. O retorno deve ser apenas um status `204` que representa uma resposta sem conteúdo.


<br>

- **Should not be able to delete a non existing todo**

Para que esse teste passe, você não deve permitir excluir um *todo* que não exista e retornar uma resposta contendo um status `404` e um json no seguinte formato:

```javascript
{
	error: 'Mensagem do erro'
}
```

## Apresentação:

-- [Currículo Lattes](http://lattes.cnpq.br/7594653859194302)

 - [Linkedin](https://www.linkedin.com/in/alisson-de-andrade-ara%C3%BAjo-160224190)

- [Instagram](https://www.instagram.com/alissonandradercc)

- [Github](https://github.com/alissonandrade2020/)

- [Rocketseat](https://app.rocketseat.com.br/me/alissondeandradearaujo)

## CONHEÇA MAIS SOBRE O TRABALHO E CONHECIMENTO DO DEV(Alisson de Andrade Araújo):

 - [Curriculum - Alisson de Andrade Araújo](https://alissonandradesistema.000webhostapp.com/curriculo/)

- [Site de Apresentação de Alisson de Andrade Araújo](http://alissondeandradearaujo.000webhostapp.com/)

- [Site Light e Dark](https://sistemalightdark-iota.vercel.app/)
 
- [Site de Exercícios - Moveit](https://nlw04reactmoveit.vercel.app/)

 - [Site de Listagem - Ignite desafio 01](https://iignite01desafio.vercel.app/)

- [Site DtMoney - Ignite 2](https://dtmoneyignite.vercel.app/)

- [Site Dashgo - Ignite 3](https://dashgoalisson.vercel.app/)

- [Site WatchMe Trilha Extra - Ignite 2](https://ignitewatchmeextra.vercel.app/)

- [Site IgNews - Ignite Chapter 3](ignewsalisson.vercel.app/)
 
-  [Site de Repositorios - Alisson de Andrade Araújo (Github)](https://igniterepositorios.vercel.app/)
 
- [Site de Cadastro feito com PHP - Alisson de Andrade Araújo](https://alissonandradesistema.000webhostapp.com/silex/)
 
 - [Sistema de Cadastros de Alunos e Cursos](https://alissonandradesistema.000webhostapp.com/)
 
 - [Ecoleta](https://alisssonecoleta.herokuapp.com/)

 - [Nlw 06 Rocketq](https://nlw06rocketqalissonandrade.herokuapp.com/)

 - [Credit Card](https://creditcardalissonandrade.vercel.app/)
  
 - [HTML + CSS - Responsivo](https://alissonhtmlcss.netlify.app/)
 
  - [PODCASTR - Tudo sobre audio - NLW5](https://podcastralisson.vercel.app)
 
  - [PROFFY - Encontre seu Professor ou tenha aula online](https://proffyalissonandrade.netlify.app)
  
  - [HAPPY - Encontre um orfanato, Muitas crianças estão esperando a sua visita :)](https://alissonandradehappynlw3.netlify.app)
  
 - [Covid-19 - Salgado de São Félix - PB](https://salgadodesaofelixcovid19.netlify.app/)
 
 - [Covid-19](https://alissonandradesistema.000webhostapp.com/covid-19/)
 
  - [Féliz Aniversário](https://alissonandradesistema.000webhostapp.com/felizaniversario/)
  
  - [Féliz Dia das Mães](https://alissonandradesistema.000webhostapp.com/felizdiadasmaes/)

 - [Féliz Páscoa](https://alissonandradesistema.000webhostapp.com/felizpascoa)
 
  - [Clone do Netflix](https://alissonandradesistema.000webhostapp.com/netflixclone/)
    
  - [Clone do Discord](https://alissondiscord.netlify.app/)

- [Sitestema de Cadastro de Empresas - Node.js, React, React Native, Expo](https://alissonandradesistema.000webhostapp.com/react/)

 - [Sistema de Achar Dev's pelo GitHub - Node.js, React, React Native, Expo](https://alissonandradesistema.000webhostapp.com/reactnative)

- [Sistema de Achar TINDev's pelo GitHub - Node.js, React, React Native, Expo](https://alissonandradesistema.000webhostapp.com/reactnativetindev)

- [Simulação de Loja Virtual](https://alissonandradesistema.000webhostapp.com/temadark)
 
- [Site e sistema de loja virtual - Node.js, React, React Native, Expo](https://alissonandradesistema.000webhostapp.com/lojavirtual)

- [Site e sistema - Node.js, React, React Native, Expo](https://alissonandradesistema.000webhostapp.com/sistemas/)

- [Sistema de Cadastro de Sala para alugar espaço para reuniões de empresas - Node.js, React, React Native, Expo](https://alissonandradesistema.000webhostapp.com/reactnativeaircnc)

- [Sitestema de Apresentação do Trabalho ESAT/ESPEP - cadastro de alunos](https://alissondeaaraujo.000webhostapp.com/index.html)

- [Site de Apresentação 2 de Alisson de Andrade Araújo](https://alissodeaaraujo.000webhostapp.com/index.html)

:vulcan_salute::vulcan_salute: ***OBRIGADO PELO CARINHO E ATENÇÃO !!***  :vulcan_salute::vulcan_salute:
