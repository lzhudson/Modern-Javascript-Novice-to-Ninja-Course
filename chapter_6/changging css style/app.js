const title = document.querySelector('h1');
// title.setAttribute('style', 'margin:50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.border = '2px solid orange';
title.style.margin = '';
title.style.textAlign = 'center';