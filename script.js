//ternary operator 
// condition ? expr1 : expr2;
function isUserValid(bool) {
    return bool;
}
var answer = isUserValid(true) ? "You may enter" : "Access Denied";


function condition(){
    if(isUserValid(true)){
        return "You may enter";

    }
    else{
        return "Access denied";
    }
}
var answer2 = condition();

function moveCommand(direction){
    var whatHappens;
    switch(direction){
        case "forward":
         whatHappens = "you encounter a monster";
         break;

         case "back":
            whatHappens = "you arrived home";
            break;
         
            case "right":
                whatHappens = "you found a river";
                break;

                case "left":
                    whatHappens = "you run into a troll ";
                    break;
                    default:
                        whatHappens = "please enter a valid direction";
                    
                

    }
    return whatHappens;
}


const player = 'bobby';//can't chage value  as using assign
let experience = 100;
let wizardLevel = false;

if (experience = 90){
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}
console.log('outside', wizardLevel);


//can change in obj
const obj = {
    player: 'bobby',
    experience:100,
    wizardLevel:false
}

const player = obj.player;
const experience = obj.experience;
const wizardLevel = obj.wizardLevel;

const { player, experience, } = obj;


//template strings
const name = "Sally";
const age = 38;
const pet = "horse";

const greeting = "Hello" + name + " you seem to be doing " + greeting + "!";
const greetingBest = "Hello ${name} you seem to be ${age=15}. What a lovely ${pet} you have";


//default arguments

function greet(name='', age=23, pet='cat')
{
    return    "Hello ${name} you seem to be ${age=15}. What a lovely ${pet} you have";

}

//symbol

var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');

//arrow function

function add(a,b){
    return a + b;
}

const add = (a, b) => a + b;
 or 


 const add = (a, b) => {
   return  a + b;
 }


 //Currying
//  const myltiply = (a, b) => a * b;
//  const curriedMultiply = (a) => (b) => a * b;
//  const myltiplyBy5 = curriedMyltiply(5);


// compose
// const compose = (f,g) => (a) => f(g(a));



//Avoiding Side Effects, functional purity.
// var a =1;
// function b(){
//     a=2;
// }


//Advanced Arrays

const array = [1, 2, 3, 4];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log(double);



//map, filter, reduce
const mapArray = array.map((num)=>{
    return num * 2;
})
console.log(mapArray);

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]



//array filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



//array.includes()
const array1 = [1, 2, 3];
console.log(array1.includes(2));//true

const pets = ['cat', 'dog', 'bat']
console.log(pets.includes('cat'));//true


//array.keys()
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2