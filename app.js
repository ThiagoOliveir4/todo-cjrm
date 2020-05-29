const formAddTodo = document.querySelector('.form-add-todo')
const containerTodo = document.querySelector('.todos-container')
const DeleteTodoIcon = document.querySelectorAll('.delete')
const inputTodo = document.querySelector('[name="add"]')

const HandleFormSubmit = event => {

    event.preventDefault()
    const typedTodo = inputTodo.value.trim()
    const isEmpty = typedTodo === ''
    
    if(isEmpty){
        alert('Adicione a To-Do no campo !')
        return
    }
    AddTodo( typedTodo )
    ClearInputTodo()
}

const ClearInputTodo = ( ) => {
    inputTodo.value ='';
}


const AddTodo = ( value ) => {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const i = document.createElement('i')

    li.classList.add('list-group-item',
        'd-flex','justify-content-between','align-items-center')
    i.classList.add('far','fa-trash-alt','delete')
    span.innerText= value
    i.setAttribute('onclick','DeleteTodo(this)')
    li.appendChild(span)
    li.appendChild(i)

    containerTodo.appendChild(li)
}

const DeleteTodo = ( event ) =>  {
 
    const liTargetDelete = event.parentNode
   containerTodo.removeChild(liTargetDelete)
    
}
formAddTodo.addEventListener('submit',HandleFormSubmit)
