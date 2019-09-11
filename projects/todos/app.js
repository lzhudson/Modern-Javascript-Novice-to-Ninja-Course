const formAdd = document.querySelector('.add');
const formSearch = document.querySelector('.search');
const inputSearch = formSearch.search;
const inputAddTodo = formAdd.add;
const iconDelete = document.querySelectorAll('.delete');
const todos = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li');
const messsageError = document.querySelector('.invalid-feedback');
function createElementTodo(textTodo){
  const ul = document.querySelector('.todos');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const icon = document.createElement('i');
  span.innerText = textTodo;
  li.classList.add('list-group-item','d-flex', 'justify-content-between', 'align-items-center');
    icon.classList.add('far', 'fa-trash-alt','delete');
    li.appendChild(span);
    li.appendChild(icon);
    ul.appendChild(li);
}
function addTodo(e) { 
  e.preventDefault();
  var regex = /\w+/gmi;
  if(regex.test(inputAddTodo.value)){
    createElementTodo(inputAddTodo.value);
    formAdd.reset();
  } else {
   showMessageError();
  }
}
function showMessageError(){
  messsageError.style.display = 'block';
  inputAddTodo.classList.add('input-error');
  setTimeout(()=>{
    messsageError.style.display = 'none';
    inputAddTodo.classList.remove('input-error');
  }, 5000)
}
formAdd.addEventListener('submit', addTodo);

const filterTodos = (term)=>{
  Array.from(list).filter((todo) => {
    return !todo.textContent.toLowerCase().includes(term);
  }).forEach((todo)=>{
    todo.classList.add('filtered');
  })
  
  Array.from(list).filter((todo) => {
    return todo.textContent.toLowerCase().includes(term);
  }).forEach((todo)=>{
    todo.classList.remove('filtered');
  });
}
inputSearch.addEventListener('keyup', () =>{
  const term = inputSearch.value.trim().toLowerCase();
  filterTodos(term);
});
todos.addEventListener('click', (e) =>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
})