import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const HAND = [0, 1, 2, 3, 4, 5];
const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
const OUTCOME = ['Alice wins', 'DRAW', 'Bob wins'];

const Player = (Who) => ({
  ...stdlib.hasRandom,
  getHand: async () => {
    const hand = Math.floor(Math.random() * 6);
    console.log(`${Who} played ${HAND[hand]}`);
    if (Math.random() <= 0.00){
      for (let i = 0; i < 10; i++){
        console.log(`${Who} takes his sweet time...`);
        await stdlib.wait(1);
      }
    }
    return HAND[hand];
  },
  getGuess: async (hand) => {
    const guess= Math.floor(Math.random() * 6) + HAND[hand];
    if (Math.random() <= 0.00){
      for (let i = 0; i < 10; i++){
        console.log(`${Who} takes his sweet time...`);
        await stdlib.wait(1);
      }
    }
    console.log(`${Who} guessed ${GUESS[guess]}`);
    return GUESS[guess];
  },
  seeScore: (scoreAlice, scoreBob) => {
    console.log(`${Who} saw the score Alice:Bob = ${scoreAlice}:${scoreBob}`);
  },
  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
  },
  informTimeout: () => {
    console.log(`${Who} observed a timeout`);
  }
});

await Promise.all([
  ctcAlice.p.Alice({
    ...Player('Alice'),
    wager: stdlib.parseCurrency(5),
    deadline: 10,
  }),
  ctcBob.p.Bob({
    ...Player('Bob'),
    acceptWager:  (amt) => {
      console.log(`Bob accepts the wager of ${fmt(amt)}.`);
    },
  }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);