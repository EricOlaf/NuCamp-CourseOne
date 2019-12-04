/*
learn about:
arrays,

*/

const cl = (input) =>{
    console.log(input);
}

//////////////////////////////
//WHAT CAN JS DO????

//CHANGE THE DOM(Document Object Model),
//GIVE FEEDBACK TO THE CONSOLE,
//SHOW ALERTS,
//HANDLE EVENTS(something happens on the webpage)
//PERFORM LOGIC


// console.log("hello this is Eric")

// const h1El = document.querySelector('h1');
// console.log(h1El);

// setTimeout(()=> h1El.textContent = "I'm the new H1", 2000);

// setTimeout(function(){ alert("Hello"); }, 3000)

// const num = 10;

// const myBtn = document.querySelector(".btn");
// myBtn.addEventListener('click', ()=>{
//     console.log("this button was clicked!")
// })

// switch(num){
//     case 5: 
//         console.log("num is 5")
//         break;
//     case 1: 
//         console.log("num is 5")
//         break;
//     case 10: 
//         console.log("num is 10")
//         break;
//     default: 
//         console.log("That is a great number!")
// };

//////////////////////////////
//DATA TYPES

// var myNumber = 12;
// var myString = "this is a string";
// var myBoolean = true;
// var myNull = null;
// var myUndefined;
// var myObject = {
//     one: 1,
//     two: 2,
//     three: 3
// };
// var myArray = ["one", "two", "three"];//TECHNICALLY AN OBJECT
// var mySymbol = Symbol("this is a symbol")//DON'T WORRY ABOUT SYMBOL JUST KNOW IT'S THERE

// cl(typeof(myNull));

//////////////////////////////
//LET, CONST, VAR

// cl("name, ", name)
// cl("age, ", age)
// cl("date of birth ", dateOfBirth)

// var name = "Eric";
// let age = 30;
// const dateOfBirth = "Dec 28, 1988";

// cl(name = "Jerry Sloan");
// cl(age = 31);
// cl(dateOfBirth = "Jan 1, 1989");

// var arrVar = [1, 2, 3];
// let arrLet = [1, 2, 3];
// const arrConst = [1, 2, 3];

// arrVar.push(4);
// arrLet.unshift(0);
// arrConst.pop();
// arrVar.shift();

// cl(arrVar)
// cl(arrLet)
// cl(arrConst)

// arrConst = "new const string";

// name = "Carl";
// age += 1;
// dateOfBirth = "Jan 1, 1989";

//VAR IS FUNCTIONALLY SCOPED
// function func1(){
//     var funcVar = "hey";
//     cl(funcVar);
// }
// cl(funcVar);

// const obj = {
//     greeting1: "hey",
//     greeting2: "hello",
//     greeting3: "howdy"
// }

// for(var key in obj){
//     cl(obj[key]);
// }
// cl(key)

//LET AND CONST ARE BLOCK {} SCOPED

// for(let key in obj){
//     cl(obj[key])
// }
// cl(key)

//////////////////////////////
//FUNCTION DECLARATION, FUNCTION EXPRESSION, ARROW FUNCTION

// cl(funcDeclaration());

//DECLARATION
function funcDeclaration(){
    let num = 0;
    num += 5;
    return num;
}

//EXPRESSION
const funcExpression = function(){
    let str = "howdy";
    str += " partner!";
    return str;
}

//ARROW FUNCTION
const funcArrow = () => {
    let arr = [1, 2, 3];
    arr.push(4, 5)
    return arr;
}

// cl(funcArrow());