// STUDENT CARD ARRAY
// const students = [
  // id: 1,
  // student: ,
  // house: ,
// ]

// MAIN PAGE BUTTON AND MODAL
const bnt1 = document.getElementById('bnt1');
bnt1.addEventListener('click'),
function() {
document.querySelector('.bg-modal').style.display = 'flex';
};
document.queerySelector('close').addEventListener('click'),
function() {
  document.querySelector('bg-modal').style.dispay = 'none';
};

// HOUSE
function assignHouse() {
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw','Slytherin'];
  return houses[Math.floor(Math.random() * houses.length)];
}

//  ADD STUDENT CARD

function createStudentCard(student) {
  const card = document.createElement('div');
  card.classList.add('form', 'mb-3');
const cardText = document.createElement('p');
cardText.classList.add('card-text');
cardText.textContent = 'house: ${student.house}';
}
card.appendChild(cardText);


// CARDS ON DOM

const cardsOnDom = (students) => {
  let domString = "";
  for (const student of students) {
    domString += '${student.house}';
  }
  




//RE-RENDER


// EVENTS
