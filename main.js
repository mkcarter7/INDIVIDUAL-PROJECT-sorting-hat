// STUDENT CARD ARRAY
const students = [
  id: 1,
  student: ,
  house: ,
]

// MAIN PAGE BUTTON
document.getElementById('bnt1');
bnt1.addEventListener("click")function(){
document.querySelector('.bg-modal').style.display = 'flex';
}


// FUNCTIONS

// HOUSE
function assignHouse() {
  const house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw','Slytherin'];
  return house[Math.floor](Math.random() * house.length)];
}

//  ADD STUDENT CARD

function createStudentCard(student) {
  const card = document.createElement('div');
  card.classList.add('form', 'mb-3');
const cardText = document.createElement('p');
cardText.classList.add('card-text');
cardText.textContent = ('house: $(student.house'});
}




const cardsOnDom = (students) => {
  let domString = "";
  for (const student of students) }
  domString +=${student.house}""




// CARDS ON THE DOM



// FUNCTION TO FILTER




//RE-RENDER


// EVENTS
