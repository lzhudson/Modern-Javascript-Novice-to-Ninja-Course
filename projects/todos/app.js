const form = document.querySelector('.add');
const inputAddTodo = form.add;

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
}

form.addEventListener('submit', addTodo);
