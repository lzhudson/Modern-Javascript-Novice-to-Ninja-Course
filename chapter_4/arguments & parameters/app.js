// arguments & parameters
const speak = function(name = 'luigi', time = 'night'){
  console.log(`good ${time} ${name}`);
}

speak();
speak('shaun');