// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html = ``;
people.forEach(item =>{
  html += `<li> style="color: purple">${person}</li>`;
});
ul.innerHTML = html;