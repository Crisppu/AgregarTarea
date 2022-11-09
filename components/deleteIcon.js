//const contenido = `

import { readTasks } from "./readTasks.js";

//<i class="fas fa-trash-alt trashIcon icon"></i>`;
const deleteIcon = (id) => {
   const i = document.createElement("i");
   i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
   i.addEventListener("click",() => deleteTask(id));
   return i;
};
const deleteTask = (id) => {
   const li = document.querySelector("[data-list]");
   const tasks =JSON.parse(localStorage.getItem('tareas'));
   const index = tasks.findIndex((item) => item.id === id);
   //console.log(index)
   tasks.splice(index,1);
   li.innerHTML = "";
   localStorage.setItem('tareas', JSON.stringify(tasks));
   readTasks();
};

export default deleteIcon;
