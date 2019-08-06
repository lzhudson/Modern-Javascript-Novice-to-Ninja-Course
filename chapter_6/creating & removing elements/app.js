// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you click');
// })

const liItems = document.querySelectorAll('li');

liItems.forEach((element)=>{
  element.addEventListener('click', (e)=>{
    // console.log('item clicked');
    // console.log(e.target);
    e.target.style.textDecoration = 'line-through';
  })
});