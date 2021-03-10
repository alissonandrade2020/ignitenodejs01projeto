const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
 // Complete aqui
  const { username } = request.headers;

  const user = users.find(user => user.username === username);

  if (!user) {
    return response.status(404).json({ error: `User doesn't exists!` })
  }

  request.user = user;

  return next();
}

function checksExistsTodo(request, response, next) {
  // Complete aqui
  const { user } = request;
  const { id } = request.params;

  const todoIndex = user.todos.findIndex(todo => todo.id === id);

  if (todoIndex < 0) {
    return response.status(404).json({ error: 'Todo not found!' });
  }

  request.todo = user.todos[todoIndex];

  return next();
}

app.post('/users', (request, response) => {
  // Complete aqui
  const { name, username } = request.body;

  const userExists = users.some(user => user.username === username);

  if (userExists) {
    return response.status(400).json({ error: 'User already exists!' });
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: []
  };

  users.push(user);

  return response.status(201).json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { user } = request;

  const todos = user.todos;

  return response.status(200).json(todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { user } = request;
  const { title, deadline } = request.body;

  const todo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  user.todos.push(todo);

  return response.status(201).json(todo);
});

app.put('/todos/:id', checksExistsUserAccount, checksExistsTodo, (request, response) => {
 // Complete aqui
  const { todo } = request;
  const { title, deadline } = request.body;

  todo.title = title;
  todo.deadline = deadline;

  return response.status(200).json(todo);
});

app.patch('/todos/:id/done', checksExistsUserAccount, checksExistsTodo, (request, response) => {
 // Complete aqui
  const { todo } = request;

  todo.done = true;

  return response.status(200).json(todo);
});

app.delete('/todos/:id', checksExistsUserAccount, checksExistsTodo, (request, response) => {
  // Complete aqui
  const { user, todo } = request;

  const todoIndexDelete = user.todos.findIndex(_todo => _todo === todo);

  user.todos.splice(todoIndexDelete, 1);

  return response.status(204).json();
});

module.exports = app;