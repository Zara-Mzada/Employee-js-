// let users = {};
// createEmployee();

// function createEmployee() {
//   let countEmployee = parseInt(prompt("Enter number of employee..."));

//   for (let i = 1; i <= countEmployee; i++) {
//     var user = "user" + `${i}`;
//     let name = prompt("Enter name")
//     let lastname = prompt("Enter lastname")
//     let age = parseInt(prompt("Enter age"))
//     let gender = prompt("Enter your gender")
//     let salary = parseInt(prompt("Enter salary"))
//     let countDepartment = parseInt(prompt("Enter how many department are you working?"));
//     let department = [];
//     for(let j = 0; j < countDepartment; j++){
//       department.push(prompt("Enter name of department"));
//     }
//     users[user] = {
//       name: name,
//       lastname: lastname,
//       age: age,
//       gender: gender,
//       salary: salary,
//       department: department
//     };
//   }
// }

// console.log(users);

// Filters

// Data for testing

let users ={
  user1:{
    name: "Zahra",
    lastname: "Malikzada",
    age: 23,
    salary: 20000,
    department: ["Project manager", "IT"],
    isMale: false
  },
  user2:{
    name: "Samir",
    lastname: "Ziyadov",
    age: 38,
    salary: 24000,
    department: ["Business manager"],
    isMale: true
  },
  user3:{
    name: "Farida",
    lastname: "Aliyeva",
    age: 22,
    salary: 10000,
    department: ["Economics", "Specialist", "IT"],
    isMale: false
  },
  user4:{
    name: "Terlan",
    lastname: "Bunyadov",
    age: 32,
    salary: 15000,
    department: ["CEO", "FullStack"],
    isMale: true
  }
}

// Find older employee

var ageArr = [];
for(var user in users){
  ageArr.push(users[user].age, users[user].name, users[user].lastname);
}
function olderEmployee(){
  let max = ageArr[0];
  let employee_name, employee_lastname;
  for(var i=0; i<ageArr.length; i+=3){
    if(max < ageArr[i]){
      max = ageArr[i];
      employee_name = ageArr[i+1];
      employee_lastname = ageArr[i+2];
    }
  }
  return `Older employee: ${max} -> ${employee_name} ${employee_lastname}`;
}
console.log(olderEmployee());

// Find younger employee

function youngerEmployee(){
  let min = ageArr[0];
  let employee_name, employee_lastname;
  for(var i=0; i<ageArr.length; i+=3){
    if(min > ageArr[i]){
      min = ageArr[i];
      employee_name = ageArr[i+1];
      employee_lastname = ageArr[i+2];
    }
  }
  return `Younger employee: ${min} -> ${employee_name} ${employee_lastname}`;
}
console.log(youngerEmployee());

// Find max salary with employee

var salaryArr = [];
for(var user in users){
  salaryArr.push(users[user].salary, users[user].name, users[user].lastname, users[user].department);
}
function maxSalaryEmployee(){
  let max = salaryArr[0];
  let employee_name, employee_lastname, employee_department;
  for(var i=0; i<salaryArr.length; i+=4){
    if(max < salaryArr[i]){
      max = salaryArr[i];
      employee_name = salaryArr[i+1];
      employee_lastname = salaryArr[i+2];
      employee_department = salaryArr[i+3];
    }
  }
  return `Max salary: ${max} -> ${employee_name} ${employee_lastname}, Department(s):  ${employee_department}`;
}
console.log(maxSalaryEmployee());

// Find min salary with employee

function minSalaryEmployee(){
  let min = salaryArr[0];
  let employee_name, employee_lastname, employee_department;
  for(var i=0; i<salaryArr.length; i+=4){
    if(min > salaryArr[i]){
      min = salaryArr[i];
      employee_name = salaryArr[i+1];
      employee_lastname = salaryArr[i+2];
      employee_department = salaryArr[i+3];
    }
  }
  return `Min salary: ${min} -> ${employee_name} ${employee_lastname}, Department(s): ${employee_department} `;
}
console.log(minSalaryEmployee());

// Separate create 2 array male and female; check their gender, write with their name
for(var user in users){
  if(users[user].isMale){
    console.log(`${users[user].name} ${users[user].lastname} is male`);
  }
  else if(!users[user].isMale){
    console.log(`${users[user].name} ${users[user].lastname} is female`);
  }
}

// Show workers for searching speciality

// searchSpecialty();
var found = false;
function searchSpecialty(){
  var speciality = prompt("Search employee for speciality");
  for(var user in users){
    if(users[user].department.includes(speciality)){
      console.log(users[user].name, users[user].lastname);
      found = true;
    }
  }
}
while(!found){
  alert("Wrong specialty! Enter again...");
  searchSpecialty();
}

function calculateLifeDays(){
  let givenBirthdate = prompt("Enter your birthdate (YYYY-MM-DD)");
  let birthdate = new Date(givenBirthdate);
  person = {
    birthdate: birthdate,
    calculateDays: ()=>{
      let currentTime = new Date();
      let difference = currentTime - person.birthdate;
      let amountOfDays = Math.floor(difference / (1000 * 60 * 60 * 24))
      return amountOfDays;
    }
  }
  console.log(`You are ${person.calculateDays()} days in the world`)
}

calculateLifeDays()

