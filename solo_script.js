// ! ! !
// Three Bugs

var objAtticus = {
  name: "Atticus", 
  id: "2405", 
  pay: "47000", 
  score: 3
};

var objJem = {
  name: "Jem", 
  id: "62347", 
  pay: "63500",
  score: 4
  };

var objBoo = {
  name: "Boo", 
  id: "11435", 
  pay: "54000", 
  score: 3
};

var objScout = {
  name: "Scout", 
  id: "6243", 
  pay: "74750", 
  score: 5
};

var array = [objAtticus, objJem, objBoo, objScout];

console.log(array[0]);

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]); //not specifying i for the argument makes it not run through all the array items, never gets to Jem, Boo, Scout
 	newEl = document.createElement('li');
  console.log(array[i]);
  //var property;
  /*for(property in array[i]) {
    property = array[i].property;
  }*/
	newText = document.createTextNode(array[i].name + " " + array[i].bonus + " " + array[i].newSalary + " " + array[i].bonusDollars); //doesnt just take the obj, without concat it is [object Object]
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newObj = {};

  newObj.name = array.name;

  var employeeNumber = array.id;
  var baseSalary = array.pay;
  var reviewScore = array.score;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObj.bonus = bonus;
  newObj.newSalary = Math.round(baseSalary * (1.0 + bonus));
  newObj.bonusDollars = baseSalary * bonus;
  console.log(newObj.name + " " + newObj.bonus + " " + newObj.newSalary + " " + newObj.bonusDollars);
  return newObj;
}
 
function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;// - 1 makes this really backwards
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}