const methods = document.querySelectorAll('.method');
const equal = document.getElementById('js-equal');

let numArray = [];
let input;

for(const method of methods){
  method.addEventListener('click', () => console.log(method.value) );
};

function storeInput(){
  input = Number(document.getElementById('js-input').value);
  numArray.push(input);
  input.innerText = ""; //Not working
  console.log(methods);
};



equal.addEventListener('click', storeInput);
