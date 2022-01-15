"use strict";
//selectors
const formEl = document.querySelector(".form");
const todoContainer = document.getElementById("todos-container");
const input = document.getElementById("input");

//functions
const addTodo = (e) => {
  e.preventDefault();

  const todo = document.createElement("li");
  todo.innerText = input.value;
  todoContainer.appendChild(todo);
  input.value = "";

  const removeTodo = (e) => {
    e.preventDefault();
    todo.remove();
  };

  const completedTodo = () => {
    todo.classList.toggle("completed");
  };

  todo.addEventListener("click", completedTodo);
  todo.addEventListener("contextmenu", removeTodo);
};

//events
formEl.addEventListener("submit", addTodo);

//local storage
const updateLS = () => {};
