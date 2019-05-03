const Comedian = require('comedian');
const Singer = require('singer');
const comedian = new Comedian();
const singer = new Singer();

function walksOnStage(person) {
  return `*walks on to stage ${person}*`;
}

console.log('WELCOME TO THE SHORTEST SHOW ON EARTH!');
console.log(walksOnStage(comedian.type))
console.log(`Comedian: "${comedian.tellJoke()}"`);
console.log(`Comedian: ${comedian.endAct()}\n`);

console.log(walksOnStage(singer.name))
console.log(`Singer: "${singer.sing()}"`);
console.log(`Singer: ${singer.endAct()}\n`);

console.log('*CLOSES STAGE CURTAIN*');
