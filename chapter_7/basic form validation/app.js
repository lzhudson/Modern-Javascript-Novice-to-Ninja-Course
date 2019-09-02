const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  // validation
  const useraname = form.username.value;
  const usernamePattern = /^[a-zA-z]{6,12}$/;

  if(usernamePattern.test(useraname)){
    // feedback good info
    feedback.textContent = 'that username is valid';
    feedback.style.backgroundColor = 'green';
  } else {
    //feedbackgood info
    feedback.textContent = 'username must contain letters onlu & be between 6 & 12 caracters long';
    feedback.style.backgroundColor = 'red';
  }
    
})
