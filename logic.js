const methods = document.querySelectorAll('.method');
const equal = document.getElementById('js-equal');

let numArray = [];
let input;
let currentMethod;
let answer;

for(const method of methods){
  method.addEventListener('click', () => {
    storeInput();
    currentMethod = method.value;
  });
};

function storeInput(){
  input = document.getElementById('js-input');
  numArray.push(input.valueAsNumber);
  input.value = "";
};

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

equal.addEventListener('click', solve);
