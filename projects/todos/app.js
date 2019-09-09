const form = document.querySelector('.add');
const inputAddTodo = form.add;
const iconDelete = document.querySelectorAll('.far.fa-trash-alt.delete');
function addTodo(e) {
  e.preventDefault();
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
  inputAddTodo.value = '';
}
function removeTodo(e){
  e.target.parentElement.remove();
}

form.addEventListener('submit', addTodo);
iconDelete.forEach((element)=>{
  element.addEventListener('click', removeTodo);
})
