// variables & block scope

let age = 30;


if(true){
  const age = 40;
  let name = 'shaun';
  console.log('inside 1st code block: ', age, name);
  if(true){
    const age = 50;
    console.log('inside 2nd code bloc:', age);
    var test = 'hello';
  }
}

console.log('outside code block: ', age, name, test);