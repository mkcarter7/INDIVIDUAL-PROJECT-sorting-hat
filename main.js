// STUDENT CARD ARRAY
const students = [{
  id: 1,
  student: 'Hermone',
  house: 'Slytherin',
},{
  id: 2,
  student: 'Hermone',
  house: 'Slytherin',
},{
  id: 3,
  student: 'Hermone',
  house: 'Slytherin',
},{
  id: 4,
  student: 'Hermone',
  house: 'Ravenclaw',
}
]
  

// MAIN PAGE BUTTON
document.getElementById('bnt1');
bnt1.addEventListener("click", function(){
document.querySelector('.bg-modal').style.display = 'flex';
})



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
cardText.textContent = `house: ${student.house}`;
}

const cardsOnDom = (students) => {
  let domString = "";
  for (const student of students) {
    domString += `${student.house}`;
      }
    };
