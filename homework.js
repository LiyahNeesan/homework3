// Object
let user = {
    name: "Gosya",
    age: 33,
    female: 'yes'
}

let answer1 = prompt("What is your name?", user.name);
console.log(answer1)
let answer2 = prompt("How old are you?", user.age)
console.log(answer2)
let answer3 = prompt("Are you a woman?", user.female)
console.log(answer3)


// if-else statement
const alt_rock = 10;
const kazakh = 13;
const kpop = 7;
const metal = 3;
// if statement
if(alt_rock>=11 && kpop>3 && metal>2) {
    alert("festival soon!", 'see you there!')
    console.log("let's go to the festival!")
} else if(alt_rock==10 && kpop>6){
    alert("not enough songs?", "songs haven't been choosen yet")
    console.log('maybe next time...')
} else {
    console.log("not soon")
}

// switch
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch(a) {
    case 0: 
        alert( 0 );
        break;
    case 1: 
        alert( 1 );
        break;
    case 2 || 3: 
        alert( '2,3' );
        break;
}

// loops: for
var sum = 0;
for(let i = 0; i <= 100; i+=2) {
    sum+=i;
}
console.log(sum)

// loop: while
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
  }
