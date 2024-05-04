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
console.log('array', array)
console.log('house', house)
  array.forEach((item) => {
    console.log('item', item)
    if (item.house === house) {
      houseArray.push(item);
      console.log('house array', houseArray)
      studentsOnDom(houseArray, '#army')
    }
  });

  return houseArray;
}

// CARDS ON DOM
const renderToDom = (filter, htmlToRender) => {
  const selectedDiv = document.querySelector(filter);
  selectedDiv.innerHTML = htmlToRender;
};
const studentsOnDom = (students) => {
  let domString = "";
  for (const student of students) {
    console.log (student)
    domString += `<div class="card" style="width: 18rem;">
       <div class="card-body">
      <p class="card-text">${student.name}</p>
      <p class="card-text">${student.house}</p>
      <button class="btn btn-danger" id="expelled--${student.id}">Expelled</button>
    </div>
  </div>`;
      }
      renderToDom("#army", domString);
    };
   

// TODO delete students-remove from array and add to voldys moldys army
// TODO card with students name and random house assignment after sort
// TODO get buttons to work
// TODO make forms and cards only appear when needed per directions
// TODO show house cards with listed students and show boldy moldys army





// STUDENT CARD FORM ON THE DOM
const form = document.querySelector('form');

// FORM FUNCTION PUSHING STUDENT TO NEW ARRAY AND ADDING TO DOM
const createStudent = (e) => {
  e.preventDefault(); 
  const createStudent = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
       house: houses[assignHouse]
  }

  students.push(createStudent);
  studentsOnDom(students);
  form.reset();
  
}

// EVENT LISTENER FOR STUDENT
form.addEventListener('submit', createStudent);



// HOUSE BUTTONS
const bnt1 = document.querySelector('#bnt1');
bnt1.addEventListener('click', () =>{
console.log('button-click')})
const griffindorBtn = document.querySelector('#griffindor');
griffindorBtn.addEventListener('click', () =>{
  filter(students, 'Griffindor')

console.log('button-click')})
const hufflepuffBtn = document.querySelector('#hufflepuff');
hufflepuffBtn.addEventListener('click', () =>{
  filter(students, 'Hufflepuff')

console.log('button-click')})
const ravenclawBtn = document.querySelector('#ravenclaw');
ravenclawBtn.addEventListener('click', () => {
  filter(students, 'Ravenclaw')

console.log('button-click')})
const slytherinBtn = document.querySelector('#slytherin');
slytherinBtn.addEventListener('click', () =>{
  filter(students,'Slytherin')

console.log('button-click')})



// FUNCTION TO ASSIGN HOUSE TO STUDENTS

  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw','Slytherin'];
  const assignHouse = Math.floor(Math.random() * houses.length)

const filterHouse = (array, houseString) => {
  const houseArray = [];

  array.forEach((item) => {
  if (item.house === houseString) {
  houseArray.push(item);
  }
  });

  for (const student of array) {
    if (student.house === houseString) {
      houseArray.push(student);
    }
  }

  return houseArray;
};

const showHouses = document.querySelector("#bnt1");


showHouses.addEventListener("click", () => {
  const showHouses = filter(students, "house");
  studentsOnDom(houses);
});

    // EXPELLED STUDENT
const app = document.querySelector("#army");


app.addEventListener('click', (e) => {
  console.log("click")

  if (e.target.id.includes("expelled")) {
    const [, id] = e.target.id.split("--");

    const index = students.findIndex(e => e.id === Number(id));
const expelledStudents = [];
    let estudents = students.splice(index, 1)[0];
    expelledStudents.house = "expelled";
    expelledStudents.push(estudents);
    studentsOnDom(students);
  }
});

const startApp = () => {
  studentsOnDom(students);
}
// const filtered = someArray.filter(obj => obj.name !== "Kristian")
// const newArray = someArray.map(obj => obj.name === "Kristian")

startApp();
