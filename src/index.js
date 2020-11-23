const studentA = {
  name: "A",
  score: 100
};

//const name = studentA.name;
//const score = studentA.score;

const { name, score: myscore } = studentA;
//const { name, score } = studentA;
//const { name, score:myScore } = studentA;

console.log(`${name} : ${myscore}`);
//console.log(`${name} : ${myScore}`);
