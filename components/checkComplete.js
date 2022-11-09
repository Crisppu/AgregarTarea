/*01 */
/*<i class="far fa-check-square icon"> */
const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener('click',(event) => completeTask(event,id));
  return i
};
const completeTask = (event,id) => {
  const element = event.target;
  element.classList.toggle('fas');//toggle nos permite saber cuando el usuario marca y desmarca el check osea me dice si esta activo o desactivo
  element.classList.toggle('completeIcon');//traemos esta propiedad desde el css
  element.classList.toggle('far'); //quitamos esta propiedad del icono anterior
  //console.log("check id", id)
  const tasks = JSON.parse(localStorage.getItem('tareas'));
  //console.log(tasks)
  const index = tasks.findIndex((item) => item.id === id)
  tasks[index]["complete"] = !tasks[index]["complete"]
  localStorage.setItem('tareas', JSON.stringify(tasks))
  //console.log(tasks)
};

export default checkComplete