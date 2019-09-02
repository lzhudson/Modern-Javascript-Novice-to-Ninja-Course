const form = document.querySelector('.signup-form');

form.addEventListener('submit', (e)=>{

  e.preventDefault();
  
});
form.username.addEventListener('keyup', (e)=> {
  console.log(e);
  // console.log(e.target.value, form.username.value);
  if(e.target.value.includes('@')){
    form.username.style.borderColor = 'green';
  } else {
    form.username.style.borderColor = 'red';
  }
})