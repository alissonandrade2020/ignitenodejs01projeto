const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find(user => user.username === username);

  if (!user) {
    return response.status(404).json({ error: "User Not Found!" });
  }

  request.user = user;

  return next();
}

function checksExistsTodo(request, response, next) {
  const { user } = request;
  const { id } = request.params;

  const todo = user.todos.find(todo => todo.id === id);
  if (!todo) {
    return response.status(404).json({ error: "To Do Not Found!" });
  }

  request.todo = todo;

  return next();
}

app.get("/", (request, response) => {
    const query = request.query;
    return response.json([
        " ------- API -------",
        "Nome: Alisson de Andrade Araújo",
        "Formação: Análise e Desenvolvimento de Sistemas",
        "Descrição: Desenvolvedor Back-end, Front-end e Mobile",
        "Site: http://alissondeandradearaujo.000webhostapp.com/",
        "CV: https://alissonandradesistema.000webhostapp.com/curriculo/",
        "Currículo Lattes: http://lattes.cnpq.br/7594653859194302/",
        "Github: https://github.com/alissonandrade2020", 
        "Rocketseat: https://app.rocketseat.com.br/me/alissondeandradearaujo", 
        "Linkedin: https://www.linkedin.com/in/alisson-de-andrade-ara%C3%BAjo-160224190/"])
});

app.post("/users", (request, response) => {
  const { name, username } = request.body;

  const usernameAlreadyExist = users.some(user => user.username === username);
  if (usernameAlreadyExist) {
    return response.status(400).json({ error: "Username Already Exists!" });
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  };

  users.push(user);

  return response.status(201).json(user);
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  const { user } = request;
  return response.json(user.todos);
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { title, deadline } = request.body;

  const todo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  };

  user.todos.push(todo);

  return response.status(201).json(todo);
});

app.put("/todos/:id", checksExistsUserAccount, checksExistsTodo, (request, response) => {
  const { todo } = request;
  const { title, deadline } = request.body;

  todo.title = title;
  todo.deadline = new Date(deadline);

  return response.json(todo);
});

app.patch("/todos/:id/done", checksExistsUserAccount, checksExistsTodo, (request, response) => {
  const { todo } = request;
  todo.done = true;

  return response.json(todo);
});

app.delete("/todos/:id", checksExistsUserAccount, checksExistsTodo, (request, response) => {
  const { todo, user } = request;
  const index = user.todos.indexOf(todo);
  user.todos.splice(index, 1);

  return response.status(204).send();
});

module.exports = app;
