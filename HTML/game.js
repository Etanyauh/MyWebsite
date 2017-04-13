function getUserChoice() {
  var userInput = prompt('Choose your weapon');
  userInput = userInput.toLowerCase();
  switch(userInput) {
    case 'rock':
      document.write('Your choice: ');
      return userInput;
      break;
    case 'paper':
      document.write('Your choice: ');
      return userInput;
      break;
    case 'scissors':
      document.write('Your choice: ');
      return userInput;
      break;
    case 'bomb':
      document.write('Secret Unlocked... ');
      return userInput;
      break;
    default:
      console.log('Choose a valid weapon, Idiot!');
  }
}//getUserChoice

function getComputerChoice() {
  var compChoice = Math.floor(Math.random() * 2);
	switch(compChoice){
    case 0:
      return 'Computer\'s choice: rock';
      break;

    case 1:
      return 'Computer\'s choice: paper';
      break;

    case 2:
      return 'Computer\'s choice: sciccors';
      break;
  }
}//getComputerChoice

function determineWinner(userChoice, computerChoice) {
  if(userChoice == 'bomb') return 'Human Wins!';
  if(userChoice === computerChoice)
    return 'Tie!';

  if(userChoice=='rock' && computerChoice=='scissors') {
    return 'Human Wins!';
  } else {
    return 'AI Wins!';
  }

  if(userChoice=='paper' && computerChoice=='rock') {
    return 'Human Wins!';
  } else {
    return 'AI Wins!';
  }

   if(userChoice=='scissors' && computerChoice=='paper') {
    return 'Human Wins!';
  } else {
    return 'AI Wins!';
  }
}//determineWinner

  function playGame() {
    var userChoice  = getUserChoice();
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    document.write(userChoice);
    console.log(computerChoice);
    document.write(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    document.write(determineWinner(userChoice, computerChoice));
  }

  playGame();
