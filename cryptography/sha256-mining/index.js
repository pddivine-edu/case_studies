// https://www.reddit.com/r/Bitcoin/comments/18q2jx/eli5_bitcoin_mining_xpost_in_eli5/
const sha256 = require('js-sha256');
let difficulty = 0; // Number of required leading zeros

let objToHash = {
  last_name: 'Divine',
  first_name: 'Patrick',
  count: 0,
}
console.log('\nObject to Hash: ', objToHash);

while (true) {
  console.log('\n New hash at difficulty: ', difficulty);
  const start = new Date();
  let foundHash;
  const leadingZeroes_Difficulty = '0'.repeat(difficulty);
  // console.log(leadingZeroes_Difficulty);
  while (!foundHash) {
    const hash = sha256(JSON.stringify(objToHash));
    // console.log('hash: ', hash);
    const leadingZeroes = hash.slice(0, difficulty);

    // console.log(leadingZeroes);
    if (leadingZeroes_Difficulty === leadingZeroes) {
      foundHash = hash;
    } else {
      objToHash.count++;
    }
  }
  const seconds = (new Date() - start)/(1000);
  console.log('Hash Found: ', foundHash);
  console.log('On Hash Attempt: ', objToHash.count + 1);
  seconds >= 60 
    ? console.log('Total time (minutes): ', seconds / 60) 
    : console.log('Total time (seconds): ', seconds);
  difficulty += 1;
}
