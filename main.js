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
const filter = (array, house) => {
  const houseArray = [];

  array.forEach((item) => {
    if (item.favoriteHouse === house) {
      houseArray.push(item);
    }
  });

  return houseArray;
}



// TODO delete students-remove from array and add to voldys army
// TODO card with students name and random house assignment after sort
// TODO get buttons to work
// TODO make forms and cards only appear when needed per directions


// BUTTONS
const bnt1 = document.querySelector('#bnt1');
bnt1.addEventListener('click', function(){
console.log('button-click')})
const griffindorBtn =document.querySelector('#griffindor');
griffindorBtn.addEventListener('click', function(){
console.log('button-click')})
const hufflepuffBtn =document.querySelector('#hufflepuff');
hufflepuffBtn.addEventListener('click', function(){
console.log('button-click')})
const ravenclawBtn =document.querySelector('#ravenclaw');
ravenclawBtn.addEventListener('click', function(){
console.log('button-click')})
const slytherinBtn =document.querySelector('#slytherin');
slytherinBtn.addEventListener('click', function(){
console.log('button-click')})



// FUNCTION TO ASSIGN HOUSE TO STUDENTS
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
          }
    
    
    startApp();

    // DELETE STUDENT
// 1. Target the app div
const app = document.querySelector("#app");
app.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = team.findIndex(e => e.id === Number(id));
    team.splice(index, 1);
    cardsOnDom(team);
  }
});
const startApp = () => {
  cardsOnDom(team);
 }


startApp();
