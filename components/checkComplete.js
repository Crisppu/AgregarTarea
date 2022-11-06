/*01 */
/*<i class="far fa-check-square icon"> */
const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener('click', completeTask);
  return i
}
const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle('fas');//toggle nos permite saber cuando el usuario marca y desmarca el check osea me dice si esta activo o desactivo
  element.classList.toggle('completeIcon');//traemos esta propiedad desde el css
  element.classList.toggle('far'); //quitamos esta propiedad del icono anterior
};

export default checkComplete