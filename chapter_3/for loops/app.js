// for loops
// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }
// console.log('loop finished');

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  //console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}