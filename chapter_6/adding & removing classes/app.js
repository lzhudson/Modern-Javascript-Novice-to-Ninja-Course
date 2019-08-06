let paras = document.querySelectorAll('p');
console.log(paras);
paras.forEach(element =>{
  console.log(element.textContent);
  if(element.textContent.includes('error')){
    element.classList.add('error');
  }else if(element.textContent.includes('success')){
    element.classList.add('success');
  }
})

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');