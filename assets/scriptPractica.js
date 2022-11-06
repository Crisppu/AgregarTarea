const btnAgregar = document.querySelector("[data-form-btn]");


// funcion anónima -arrow functions-
const crearTarea = (evento) =>{
    evento.preventDefault();
    const inputNombreTarea = document.querySelector("[data-form-input]");
    const value = inputNombreTarea.value;
    
    const listaUl = document.querySelector("[data-list]");
    const tareaLi = document.createElement('li');
    tareaLi.classList.add('card');

    inputNombreTarea.value = "";
    const  tareaContenedor = document.createElement('div');
    

    const tituloTarea = document.createElement('span');
    tituloTarea.classList.add('task');
    tituloTarea.innerText = value;




};

/*
<li class="card">
<div>
<i class="far fa-check-square icon"></i>

<span class="task">Hacer curso de DOM</span>
</div>
<i class="fas fa-trash-alt trashIcon icon"></i>
</li>

*/
btnAgregar.addEventListener(`click`, crearTarea);

