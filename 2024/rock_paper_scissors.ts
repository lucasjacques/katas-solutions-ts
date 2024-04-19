export function rps(p1: string, p2: string): string{
  
  if (p1 === 'rock'){
    switch (p2) {
      case 'scissors':
        return "Player 1 won!";
      case 'rock':
        return "Draw!";
      case 'paper':
        return "Player 2 won!";
      default:
        throw new Error('Player 2 has Invalid move,please review it and try again!');
    }
  }

  if (p1 === 'paper'){
    switch (p2) {
      case 'rock':
        return "Player 1 won!";
      case 'paper':
        return "Draw!";
      case 'scissors':
        return "Player 2 won!";
      default:
        throw new Error('Player 2 has Invalid move,please review it and try again!');
    }
  }

  if (p1 === 'scissors'){
    switch (p2) {
      case 'paper':
        return "Player 1 won!";
      case 'scissors':
        return "Draw!";
      case 'rock':
        return "Player 2 won!";
      default:
        throw new Error('Player 2 has Invalid move,please review it and try again!');
    }
  }

  throw new Error('Player 1 has Invalid move,please review it and try again!');
}

export function rpsWithMath(p1: string, p2: string): string{
  const ROCK = 2;
  const PAPER = 1;
  const SCISSORS = 0;
  const INVALID_MOVE = 'invalid';

  const p1Move = p1 === 'rock' ? ROCK : p1 === 'paper' ? PAPER : p1 === 'scissors' ? SCISSORS : INVALID_MOVE;
  const p2Move = p2 === 'rock' ? ROCK : p2 === 'paper' ? PAPER : p2 === 'scissors' ? SCISSORS : INVALID_MOVE;
  
  if (p1Move === INVALID_MOVE || p2Move == INVALID_MOVE ) {
    throw new Error (`Invalid move, please review players' moves and try again!`);
  }
  
  if (p1Move === p2Move){
      return "Draw!";
  }

  if ( (p1Move + p2Move) % 2 === 0){
    if (p1Move > p2Move) {
      return "Player 1 won!";
    }
    return "Player 2 won!";
  }
  
  if ( (p1Move + p2Move) % 2 === 1) {
    if (p1Move < p2Move){
        return "Player 1 won!";
    }
    return "Player 2 won!";
  }
  
  throw new Error (`Unexpected error, please review players' moves and try again!`);
}

export function rpsBetter(p1: string, p2: string): string{
  const beats: {[index: string] : string} = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper',
  }

  const INVALID_MOVE = 'invalid';

  const p1MoveValidation = p1 !== 'rock' && p1 !== 'paper' && p1 !== 'scissors' && INVALID_MOVE;
  const p2MoveValidation = p2 !== 'rock' && p2 !== 'paper' && p2 !== 'scissors' && INVALID_MOVE;
  
  if (p1MoveValidation === INVALID_MOVE || p2MoveValidation == INVALID_MOVE ) {
    throw new Error (`Invalid move, please review players' moves and try again!`);
  }
  
  if (p1 === p2){
      return "Draw!";
  }

  if ( beats[p1] === p2){
      return "Player 1 won!";
  }
  
  return "Player 2 won!";
}

const tests = [
  ['rock', 'rock', 'Draw!'],
  ['rock', 'paper', 'Player 2 won!'],
  ['rock', 'scissors', 'Player 1 won!'],
  ['paper', 'rock', 'Player 1 won!'],
  ['paper', 'paper', 'Draw!'],
  ['paper', 'scissors', 'Player 2 won!'],
  ['scissors', 'rock', 'Player 2 won!'],
  ['scissors', 'paper', 'Player 1 won!'],
  ['scissors', 'scissors', 'Draw!'],
];

console.log(`rps: ${tests.map((test) => test[2] === rps(test[0], test[1]))}`);
console.log(`rpsWithMath: ${tests.map((test) => test[2] === rpsWithMath(test[0], test[1]))}`);
console.log(`rpsBetter: ${tests.map((test) => test[2] === rpsBetter(test[0], test[1]))}`);