function quiz() {
  const input = document.getElementById('first');
  const answer = input.value;
  if (answer == 'c'||answer == 'C') {
    let para = document.getElementById('answer');
    para.textContent = 'You are correct🎉';
  } else {
    let para = document.getElementById('answer');
    para.textContent = 'You are wrong💥';
  }
}
  function quizTwo()
  {
   const inputTwo = document.getElementById('second');
  const answerTwo = inputTwo.value;
  if (answerTwo == 'b'||answerTwo=='B') {
    let paraTwo = document.getElementById('answerTwo');
    paraTwo.textContent = 'You are correct🎉';
  } 
  else {
    let paraTwo = document.getElementById('answerTwo');
    paraTwo.textContent = 'You are wrong💥';
  }
}
function quizThree()
  {
   const inputThree = document.getElementById('third');
  const answerThree = inputThree.value;
  if (answerThree == 'b'||answerThree=='B') {
    let paraThree = document.getElementById('answerThree');
    paraThree.textContent = 'You are correct🎉';
  } 
  else {
    let paraThree = document.getElementById('answerThree');
    paraThree.textContent = 'You are wrong💥';
  }
}
function quizFour()
  {
   const inputFour = document.getElementById('four');
  const answerFour = inputFour.value;
  if (answerFour == 'b'||answerFour=='B') {
    let paraFour = document.getElementById('answerFour');
    paraFour.textContent = 'You are correct🎉';
  } 
  else {
    let paraFour = document.getElementById('answerFour');
    paraFour.textContent = 'You are wrong💥';
  }
}
function quizFive()
  {
   const inputFive = document.getElementById('five');
  const answerFive = inputFive.value;
  if (answerFive == 'c'||answerFive=='C') {
    let paraFive = document.getElementById('answerFive');
    paraFive.textContent = 'You are correct🎉';
  } 
  else {
    let paraFive = document.getElementById('answerFive');
    paraFive.textContent = 'You are wrong💥';
  }
}