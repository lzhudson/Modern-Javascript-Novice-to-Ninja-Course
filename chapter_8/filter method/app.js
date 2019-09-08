const scores = [10, 30, 15, 50, 40, 5];

const filteredScores = scores.filter((score) => {
  return score > 20;
})

console.log(scores);
console.log(filteredScores);

const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true}
];

const usersPremium = users.filter( user =>  user.premium);
console.log(usersPremium);