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
const username = 'shaunpsassaa';
// const pattern = /^[a-z]{6,}$/;
const pattern = /[a-z]{6,}/;


// let result = pattern.test(username);
// console.log(result);
// if(result) {
//   console.log('regex teste passed :)');
// } else {
//   console.log('regex teste failed :(');
// }
let result = username.search(pattern);
console.log(result);