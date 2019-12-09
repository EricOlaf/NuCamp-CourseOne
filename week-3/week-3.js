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

//setTimeout(function(){ alert("Hello"); }, 3000)

// const num = 50;

// const myBtn = document.querySelector(".btn");
// myBtn.addEventListener('click', ()=>{
//     console.log("this button was clicked!")
// })

// switch(num){
//     case 5: 
//         console.log("num is 5")
//         break;
//     case 1: 
//         console.log("num is 1")
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
// var myBoolean = true;//false
// var myNull = null;
// var myUndefined;
// var myObject = {
//     one: 1,
//     two: 2,
//     three: 3
// };
// var myArray = ["one", {one: "aksjdhfhsd"}];//TECHNICALLY AN OBJECT
// var mySymbol = Symbol("this is a symbol")//DON'T WORRY ABOUT SYMBOL JUST KNOW IT'S THERE

//  cl(typeof(986));


//////////////////////////////
// LET, CONST, VAR

//console.log("name, ", name)
//console.log("age, ", age)
//console.log("date of birth ", dateOfBirth)

// var name = "Eric";
// let age = 30;
// const dateOfBirth = ["Dec 28, 1988"];

//  cl(name = "Jerry Sloan");
//  cl(age = 31);
//  const popValue = dateOfBirth.pop();
// cl(dateOfBirth.push("Jan 1, 1989"));
// cl(dateOfBirth);
// cl(popValue);

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

//arrConst = "new const string";

// name = "Carl";
// age += 1;
// dateOfBirth = "Jan 1, 1989";

//VAR IS FUNCTIONALLY SCOPED
// function func1(){
//     var funcVar = "hey";
//     cl(funcVar);
// }
// func1();
// cl(funcVar);

// const obj = {
//     greeting1: "hey",
//     greeting2: "hello",
//     greeting3: "howdy"
// }

// console.log(obj['greeting2']);

// const obj2 = {
//     greetingasdfasd: "hey",
//     greetingasdf: "hello",
//     greetingA: "howdy"
// }

// for(var property in obj2){
//     cl(property);
//     cl(obj2[property]);
// }
// let sentence = "";
// const newArr = ["Hey", "this", "is", "my", "array", "sentence."]
// console.log(newArr.length);
// for(let a = newArr.length - 1; a >= 0; a--){
//     sentence += " " + newArr[a];
// }

// const newArr2 = [1, 2, 4, 0]

// newArr2.forEach((e, i)=>{
//     if(i+1 < newArr2.length)
//         {console.log(e < newArr2[i+1])} 
// })
// console.log(sentence)

//LET AND CONST ARE BLOCK {} SCOPED

// function newishFunc(){
//     let name12 = "Brandon";
//     const age12 = 29;
//     var car = "Lambo"
// }

// console.log(name12);

// for(let key in obj){
//     cl(obj[key])
// }
// cl(key)

//////////////////////////////
//FUNCTION DECLARATION, FUNCTION EXPRESSION, ARROW FUNCTION

// cl(funcArrow());

//DECLARATION
function funcDeclaration(){
    let num = 0;
    num += 5;
    return num;
}

//EXPRESSION
const funcExpression = function(){
    let str = "10";
    str -= 6;
    return str;
}

//ARROW FUNCTION
const funcArrow = () => {
    let arr = [1, 2, 3];
    arr.push(4, 5)
    return arr;
}

// cl(funcExpression());