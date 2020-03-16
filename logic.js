const clearButton = document.getElementById('js-clearButton');
const displays = document.querySelectorAll('.display');
const methods = document.querySelectorAll('.method');
const equal = document.getElementById('js-equal');
let input = document.getElementById('js-input');

let numArray = [];
let tempArray = [];
let currentMethod;
let answer;

for(const display of displays){
  display.addEventListener('click', () => {
    tempArray.push(display.value);
    input.value = tempArray.join("");
  });
};

for(const method of methods){
  method.addEventListener('click', () => {
    storeInput();
    currentMethod = method.value;
    tempArray = [];
  });
};

function storeInput(){
  input = document.getElementById('js-input');
  numArray.push(input.valueAsNumber);
  input.value = "";
};

equal.addEventListener('click', solve);
function solve(){
  storeInput();
  switch(currentMethod){
    case "divide":
      answer = numArray[0] / numArray[1];
      break;
    case "multiply":
      answer = numArray[0] * numArray[1];
      break;
    case "subtract":
      answer = numArray[0] - numArray[1];
      break;
    case "add":
      answer = numArray[0] + numArray[1];
      break;
  };
  input.value = answer;
  numArray = [];
  currentMethod = null;
};

clearButton.addEventListener('click', clear);
function clear(){
  numArray = [];
  tempArray = [];
  currentMethod = null;
  answer = null;
  input.value = "";
};