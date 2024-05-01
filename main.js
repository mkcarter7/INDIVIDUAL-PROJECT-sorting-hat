// STUDENT CARD ARRAY
const students = [{
  id: 1,
  name: 'Hermone',
  house: 'Slytherin',
},{
  id: 2,
  name: 'Hermone',
  house: 'Slytherin',
},{
  id: 3,
  name: 'Hermone',
  house: 'Slytherin',
},{
  id: 4,
  name: 'Hermone',
  house: 'Ravenclaw',
}
]
  

// MAIN PAGE BUTTON
document.querySelector('bnt1');
bnt1.addEventListener('click', function(){
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

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (students) => {
  let domString = "";
  for (const student of students) {
    domString += `<div class="card" style="width: 18rem;">
       <div class="card-body">
      <p class="card-text">${student.name}</p>
      <p class="card-text">${student.house}</p>
      <button class="btn btn-danger" id="delete--${student.id}">Delete</button>
    </div>
  </div>`;
      }
      renderToDom("#army", domString);
    };
    const startApp = () => {
      cardsOnDom(students);
      // events(); // ALWAYS LAST
    }
    
    
    startApp();
