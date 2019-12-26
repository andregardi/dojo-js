//Arrow function
const sum = (a, b) => {
  return a + b;
};

//Destructuring
const pai = {
  filho1: "eu sou o filho 1",
  filho2: {
    neto: "eu sou o neto"
  }
};
const {
  filho1,
  filho2: { neto }
} = pai;
console.log(filho1); //eu sou o filho1
console.log(neto); //eu sou o neto

//Map
const numbers = [65, 44, 12];
const doubleTheValue = number => {
  return number * 2;
};
const newArray = numbers.map(doubleTheValue);
console.log(newArray); //[ 130, 88, 24 ]

//Spread operator ...
const pessoa = { nome: "fulano", idade: 18 };
const clone = { ...pessoa, profissao: "professor" };
pessoa.idade = 19;
console.log(pessoa); // { nome: 'fulano', idade: 19 }
console.log(clone); // { nome: 'fulano', idade: 18, profissao: 'professor' }

//Sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); //[ 'Apple', 'Banana', 'Mango', 'Orange' ]
//Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {
  return a - b;
});
console.log(points); //[ 1, 5, 10, 25, 40, 100 ]
