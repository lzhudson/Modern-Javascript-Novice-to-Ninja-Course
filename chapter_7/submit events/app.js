const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
form.addEventListener('submit', (e)=>{
  if(form.username.value === '' || form.username.value === undefined){
    alert('Preencha o campo abaixo');
  } else {
  // Previnir comportamento padrão do evento submit
  e.preventDefault();
  // console.log(username.value);
  console.log('submited');
  console.log(form.username);
  console.log(form.username.value);
  }
})