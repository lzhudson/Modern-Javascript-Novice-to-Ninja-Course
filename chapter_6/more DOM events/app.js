const copy = document.querySelector('.copy-me');
const box = document.querySelector('.box');
copy.addEventListener('copy', () =>{
  console.log('OI! my content is copyright');
});
box.addEventListener('mousemove', (e) =>{
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});
document.addEventListener('wheel', e =>{
  console.log(e.pageX, e.pageY);
})
const p = document.querySelectorAll('p');
