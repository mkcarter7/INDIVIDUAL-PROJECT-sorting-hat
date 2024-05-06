// STUDENT CARD ARRAY
const students = [{
  id: 1,
  name: 'Herimione',
  house: 'Hufflepuff',
},{
  id: 2,
  name: 'Draco',
  house: 'Griffindor',
},{
  id: 3,
  name: 'Ron',
  house: 'Slytherin',
},{
  id: 4,
  name: 'Harry',
  house: 'Ravenclaw',
}
]

// THINGS I DON'T KNOW HOW TO DO OR UNDERSTAND *******1. ON THE ENTRY FORM MAKE IT NOT APPEAR UNTIL THE 'SORT HERE' BUTTON IS CLICKED AND HOW CHANGE THIS TO DO SOMETHING INSTEAD OF SHOW UNDEFINED WHEN CLICKED **2.HOW TO GET THE HOUSE CARDS TO LINE UP HORIZONTALLY**3. HOW TO ADD A SORT AND CARD WHERE AN 'ALL STUDNETS' CARD SHOWS**4 HOW TO ADD SORT AND CARD FOR VOLDYS ARMY 

const filter = (array, house) => {
  const houseArray = [];
console.log('array', array)
console.log('house', house)
  array.forEach((item) => {
    console.log('item', item)
    if (item.house === house) {
      houseArray.push(item);
      console.log('house array', houseArray)
      studentsOnDom(houseArray, '#arm')
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
    const expelledOnDom = (expelledStudents) => {
      let domString = "";
      for (const student of expelledStudents) {
        console.log (student)
        domString += `<div class="card" style="width: 18rem;">
           <div class="card-body">
          <p class="card-text">${student.name}</p>
          <p class="card-text">${student.house}</p>
          <button class="btn btn-danger" id="expelled--${student.id}">Expelled</button>
        </div>
      </div>`;
          }
          renderToDom("#expelled", domString);
        };
    
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
bnt1.addEventListener('click', () => {
console.log('button-click')})

const griffindorBtn = document.querySelector('#griffindor');
griffindorBtn.addEventListener('click', () => {
  filter(students,'Griffindor')

console.log('button-click')})
const hufflepuffBtn = document.querySelector('#hufflepuff');
hufflepuffBtn.addEventListener('click', () => {
  filter(students,'Hufflepuff')

console.log('button-click')})
const ravenclawBtn = document.querySelector('#ravenclaw');
ravenclawBtn.addEventListener('click', () => {
  filter(students,'Ravenclaw')

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
    estudents.house = "expelled";
    expelledStudents.push(estudents);
    studentsOnDom(students);
    expelledOnDom(expelledStudents);
  }
});

const startApp = () => {
  studentsOnDom(students);
}

startApp();
