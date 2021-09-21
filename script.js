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