//export const dateElement = (date) =>{
// dateElement.classList.add('date');
// }
export default (date) =>{
 const dateElement = document.createElement('li');
 dateElement.classList.add("date");
 dateElement.innerHTML = date;
 return dateElement;
}
