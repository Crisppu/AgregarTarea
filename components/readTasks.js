import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
export const readTasks = () =>{
    const list = document.querySelector("[data-list]");
    //console.log(list)
const tasksList = JSON.parse(localStorage.getItem("tareas")) || [];
    //console.log(dateElement('01/10/2000'))

console.log(tasksList)
tasksList.forEach((task) => {
    list.appendChild(dateElement(task.dateFormat))
    //console.log(createTask(task))
    list.appendChild(createTask(task))
});
}