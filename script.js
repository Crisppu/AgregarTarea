
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
(() => {

  const btn = document.querySelector("[data-form-btn]");
  const createTask = (evento) => {
    evento.preventDefault(); //evita que recargue la pagina
    const input = document.querySelector("[data-form-input]");
    const value = input.value; //obtiene el contenido dentro del intup
    const list = document.querySelector("[data-list]")// estamos ubicados en la etiqueta ul
    const task = document.createElement('li'); //hacemos que se cree un elemento li en html
    task.classList.add("card"); //agregamos los estilos del css class="card"
    input.value = ""; // nos limpia el input

    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    //console.log(contenido)
  };

  btn.addEventListener("click", createTask);

})() //immediately invoked function expression IIFE