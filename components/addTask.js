import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) => {
  evento.preventDefault(); //evita que recargue la pagina
   const list = document.querySelector("[data-list]"); // estamos ubicados en la etiqueta ul
   const input = document.querySelector("[data-form-input]");
   const calendario = document.querySelector("[data-form-date]");

   const value = input.value; //obtiene el contenido dentro del intup
   const date = calendario.value;
   const dateFormat = moment(date).format("DD/MM/YYYY");

    input.value = ""; // nos limpia el input
    calendario.value = ""; // nos limpia el calendario

  const taskObj = {
    value,
    dateFormat
  };

  const taskList = JSON.parse(localStorage.getItem("tareas")) || []; // traemos el listado de string que esta almacenado desde el navegador pero no podemos agg en el array sin antes convertirlo con JSON.parse()
   taskList.push(taskObj);
   localStorage.setItem("tareas", JSON.stringify(taskList)); //convertimos de objeto a string para que se almacene desde el navegador "application" - JSON.stringify
  const task = createTask(taskObj);
    list.appendChild(task);
};

export const createTask = ({ value, dateFormat }) => {
  const task = document.createElement("li"); //hacemos que se cree un elemento li en html
    task.classList.add("card"); //agregamos los estilos del css class="card"
  const taskContent = document.createElement("div");
  const titleTask = document.createElement("span");
   titleTask.classList.add("task");
   titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
   taskContent.appendChild(titleTask);
  const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
  return task;
};
