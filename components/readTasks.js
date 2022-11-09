import { uniqueDates, orderDates } from "../services/date.js";
import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
export const readTasks = () => {// se le cambio de nombre readTasks a displayTasks
    //console.log(uuid.v4())
    const list = document.querySelector("[data-list]");
    const tasksList = JSON.parse(localStorage.getItem("tareas")) || [];
    const dates = uniqueDates(tasksList);
    orderDates(dates)

    dates.forEach((date) => {
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);// sacamos la diferencias con el metodo diff
            //console.log(diff)
            if(diff === 0){
                list.appendChild(createTask(task));
            }
        });
    });
};
