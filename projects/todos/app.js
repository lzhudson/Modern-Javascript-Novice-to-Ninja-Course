const formAdd = document.querySelector('.add');
const formSearch = document.querySelector('.search');
const inputSearch = formSearch.search;
const inputAddTodo = formAdd.add;
const iconDelete = document.querySelectorAll('.delete');
const todos = document.querySelectorAll('.todos li');
const messsageError = document.querySelector('.invalid-feedback');

function addTodo(e) { 
  e.preventDefault();
  var regex = /^\w+$/gmi;
  if(regex.test(inputAddTodo.value)){
    messsageError.style.display = '';
    const ul = document.querySelector('.todos');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const icon = document.createElement('i');
    span.innerText = inputAddTodo.value;
    li.classList.add('list-group-item','d-flex', 'justify-content-between', 'align-items-center');
    icon.classList.add('far', 'fa-trash-alt','delete');
    li.appendChild(span);
    li.appendChild(icon);
    ul.appendChild(li);
    formAdd.reset();
  } else {
    messsageError.style.display = 'block';
    inputAddTodo.classList.add('.input-error'); 
  }
}
function removeTodo(e){
  e.target.parentElement.remove();
}
formAdd.addEventListener('submit', addTodo);
iconDelete.forEach((element)=>{
  element.addEventListener('click', removeTodo);
});
const filterTodos = (term)=>{
  Array.from(todos).filter((todo) => {
    return !todo.textContent.toLowerCase().includes(term);
  }).forEach((todo)=>{
    todo.classList.add('filtered');
  })
  
  Array.from(todos).filter((todo) => {
    return todo.textContent.toLowerCase().includes(term);
  }).forEach((todo)=>{
    todo.classList.remove('filtered');
  });
}
inputSearch.addEventListener('keyup', () =>{
  const term = inputSearch.value.trim().toLowerCase();
  filterTodos(term);
})
