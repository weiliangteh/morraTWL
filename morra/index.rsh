'reach 0.1';

const [ isOutcome, A_WINS, DRAW, B_WINS ] = makeEnum(3);

const scores = (handA, handB, guessA, guessB) => { 
  if ( guessA == guessB ) 
   {
    const myoutcome = DRAW; //tie
    return myoutcome;
} else {
  if ( ((handA + handB) == guessA ) ) {
    const myoutcome = A_WINS;
    return myoutcome;// player A wins
  } 
    else {
      if (  ((handA + handB) == guessB)) {
        const myoutcome = B_WINS;
        return myoutcome;// player B wins
    } 
      else {
        const myoutcome = DRAW; // tie
        return myoutcome;
      }
    
    }
  }
};

const outcome = (scoreP) => {
  if (scoreP/100 > scoreP%10){
    return 0;
  }
  else{
    return 2;
  }
}

assert(scores(0, 1, 1, 2) == A_WINS);
assert(scores(0, 1, 2, 1) == B_WINS);
assert(scores(0, 1, 2, 2) == DRAW);
assert(scores(0, 1, 1, 1) == DRAW);
assert(outcome(302) == A_WINS);
assert(outcome(203) == B_WINS);

forall(UInt, handA =>
  forall(UInt, handB =>
    forall(UInt, guessA =>
      forall(UInt, guessB =>
    assert(isOutcome(scores(handA, handB, guessA, guessB)))))));

forall(UInt, scoreP =>
  assert(isOutcome(outcome(scoreP))));

const Player = {
  ...hasRandom,
  getHand: Fun([UInt], UInt),
  getGuess: Fun([UInt], UInt),
  seeOutcome: Fun([UInt, UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });

  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const amount = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(amount, deadline)
    .pay(amount);
  commit();

  Bob.only(() => {
    interact.acceptWager(amount); 
  });
  Bob.pay(amount)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  //must be in consensus
  var scoreP = 0;
  //var outcome = DRAW;
  invariant(balance() == 2 * amount);
  while ((scoreP/100 < 3 &&  scoreP%100 < 3)) {
    commit();

    Alice.only(() =>{
      const _handAlice = interact.getHand(scoreP);
      const _guessAlice = interact.getGuess(scoreP);
      const [_commitAlice, _saltAlice] = makeCommitment(interact, [_handAlice, _guessAlice]);     
      const commitAlice = declassify(_commitAlice);
    });
    Alice.publish(commitAlice)
     .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_handAlice, _guessAlice, _saltAlice));
    Bob.only(() => {
      const handBob = declassify(interact.getHand(scoreP));
      const guessBob = declassify(interact.getGuess(scoreP));
    });
    Bob.publish(handBob, guessBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();
    
    Alice.only(() =>{
    const saltAlice = declassify(_saltAlice);
    const handAlice = declassify(_handAlice);
    const guessAlice = declassify(_guessAlice);
    });

    Alice.publish(saltAlice, handAlice, guessAlice)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    checkCommitment(commitAlice, saltAlice, [handAlice, guessAlice]);

    if(scores(handAlice, handBob, guessAlice, guessBob) == A_WINS){
      scoreP = scoreP + 100;
      continue;
    }
    else{
      if(scores(handAlice, handBob, guessAlice, guessBob) == B_WINS){
        scoreP = scoreP + 1;
        continue;
      }
    }
    continue;
  }
  transfer(2 * amount).to(outcome(scoreP)==A_WINS ? Alice : Bob);
  commit();
  
  each([Alice, Bob], () => {
    interact.seeOutcome(scoreP, outcome(scoreP));
  });
});