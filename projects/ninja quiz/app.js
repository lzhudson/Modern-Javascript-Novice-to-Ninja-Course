const answersTrue =  ['B', 'A','B', 'B'];

const answersUser = [];

const answersRadio = document.querySelectorAll("input[type='radio']:checked");

const btnSend = document.querySelector("input[type='submit']");

const yourScoreContent = document.querySelector('.your-score');

function setUserAnswers(){
  answersRadio.forEach(element =>{
    answersUser.push(element.value);
  });
}
function calculatePercentage() {
  let percentage = 0;
  let respostasCertas = 0;
  for(var i = 0; i < answersTrue.length; i++){
    if(answersUser[i] === answersTrue[i]){
      respostasCertas++;
    }
  }
  percentage = (respostasCertas * 100) / answersTrue.length;
  return percentage;
}
function showPercentage(e) {
  e.preventDefault();
  setUserAnswers();
  scrollTo(0,0);
  yourScoreContent.style.display = 'block';
 
  let output = 0;
  const timer = setInterval(()=>{
    yourScoreContent.children[1].innerHTML = `${output} %`;
    if(output === calculatePercentage()) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 30);
}
btnSend.addEventListener('click', showPercentage);
let i = 0;

// const timer = setInterval(() =>{
//    console.log('hello');
//   i++;
//   if(i === 5) {
//     clearInterval(timer);
//   }
// },1000)

