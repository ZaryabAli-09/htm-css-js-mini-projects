"use strict";
// constants and variables
const todoInput = document.querySelector(".input");
const todoAddBtn = document.querySelector(".todo-add");
const todoRemoveBtn = document.getElementsByClassName("todo-remove-btn");
const todoWrapper = document.querySelector(".todo-listing");

// some styling funcs

// function
const onRemoveBtn = (event) => {
  event.target.parentElement.remove();
};
let todoText;
// todoText = todoInput.value; this will not work you sould define it in function because it doesnt store input value directly y
const onAddBtn = () => {
  todoText = todoInput.value;
  const listWrap = document.createElement("div");
  listWrap.className = "list";
  listWrap.innerHTML = ` <p class="para">
  ${todoText}</p><img src="./images/crossed.png" class="todo-remove-btn" onclick="onRemoveBtn(event)" alt="image" /> `;
  todoWrapper.append(listWrap);
  todoInput.value = "";
};
// events
todoAddBtn.addEventListener("click", onAddBtn);
