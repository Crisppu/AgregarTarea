import { createTask } from "./addTask.js";

export const readTasks = () =>{
    const list = document.querySelector("[data-list]");
    console.log(list)
const tasksList = JSON.parse(localStorage.getItem("tareas")) || [];

console.log(tasksList)
tasksList.forEach((task) => {
    //console.log(createTask(task))
    list.appendChild(createTask(task))
});
}