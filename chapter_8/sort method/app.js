// find method
const scores = [10, 5, 0, 40, 30, 10, 90, 70];

const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

const newNames = names.sort();

console.log(newNames);

// const newScores = scores.sort();
scores.reverse();
scores.sort((a,b)=>{
  return a - b;
});
console.log(scores);

const players = [
  {name:'mario', score: 20},
  {name:'luigi', score: 10},
  {name:'chun-li', score: 50},
  {name:'yoshi', score: 30},
  {name:'shaun', score:70}
];

players.sort((a,b)=>{
  if(a.score > b.score){
    return -1;
  } else if (b.score > a. score){
    return 1;
  } else {
    return 0;
  }
});

console.log(players);

