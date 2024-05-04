// STUDENT CARD ARRAY
const students = [{
  id: 1,
  name: 'Hermione',
  house: 'Slytherin',
},{
  id: 2,
  name: 'Hermione',
  house: 'Slytherin',
},{
  id: 3,
  name: 'Hermione',
  house: 'Slytherin',
},{
  id: 4,
  name: 'Hermione',
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

// CARDS ON DOM
const renderToDom = (filter, htmlToRender) => {
  const selectedDiv = document.querySelector(filter);
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


// TODO delete students-remove from array and add to voldys moldys army
// TODO card with students name and random house assignment after sort
// TODO get buttons to work
// TODO make forms and cards only appear when needed per directions
// TODO show house cards with listed students and show boldy moldys army





// STUDENT CARD FORM ON THE DOM
const form = document.querySelector('form');

// FORM FUNCTION PUSHING TO NEW ARRAY AND ADDING TO DOM
const createMember = (e) => {
  e.preventDefault(); 

  const createStudent = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: document.querySelector("house").value
    
  }

  students.push(createStudent);
  cardsOnDom(students);
  form.reset();
}

// EVENT LISTENER
form.addEventListener('submit', createStudent);




// HOUSE BUTTONS
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
// HOW TO SHOW HOUSE CARDS WITH STUDENTS LISTED


    // DELETE STUDENT
// 1. Target the app div
const army = document.querySelector("#army");
army.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = students.findIndex(e => e.id === Number(id));
    students.splice(index, 1);
    cardsOnDom(students);
  }
});
const startArmy = () => {
  cardsOnDom(students);
 }


startArmy();
