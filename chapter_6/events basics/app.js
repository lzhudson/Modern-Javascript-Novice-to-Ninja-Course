const ul = document.querySelector('ul');
// ul.remove();
const liItems = document.querySelectorAll('li');
const btnAdd = document.querySelector('button');
btnAdd.addEventListener('click', () => {
  // ul.innerHTML += '<li> something new</li>'
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  // ul.append(li);
  ul.prepend(li);
});

// liItems.forEach((element)=>{
//   element.addEventListener('click', (e)=>{
//     console.log('event in li');
//     e.stopPropagation();
//     // e.target.style.textDecoration = 'line-through';
//     e.target.remove();
//   })
// });

ul.addEventListener('click', e =>{
  // console.log('event in ul');
  console.log(e.target);
  if(e.target.tagName === 'LI'){    
    e.target.remove();
  }
})