/*
 Variables declared with the keyword 'var' have scope for the entire program.
 We can initialize a var variable inside a function and assign a value to it inside a conditional statement
 If you try to log the output outside the conditional statement, the program runs without an error since
 var has scope throughout the function
 However we cannot access this variable outside the function
*/

function sayHi(){
    var shouldBeTrue = true;
    if(shouldBeTrue){
      var myName = "Kiran";
    } 
    console.log("Hi "+myName);
  }

sayHi();

/*
 Variables declared with the keyword 'let' have scope only inside the brackets of a condition or inside a function scope if it is declared inside a function.
 We can initialize a let variable inside a function and assign a value to it inside a conditional statement
 If you try to log the output outside the conditional statement, the program throws an error since
 let has scope only within the brackets
 We can initialize the variable at the top of the function and assign value to it later
*/

function sayHello(){
    let shouldBeTrue = true;
    if(shouldBeTrue){
      let myName = "Kiran";
      console.log("Hi "+myName);
    } 
    
  }

sayHello();

/*
 Variables declared with the keyword 'const', just like 'let', have scope only inside the brackets of a condition or inside a function scope if it is declared inside a function.
 We can initialize a const variable inside a function and assign a value to it at the very moment of creation
 If you try to log the output outside the conditional statement, the program does not run
 const has scope only within the brackets
 We cannot initialize the variable at the top of the function and assign value to it later. 
 However we can alter the value of const objects and const arrays as shown in the below example
*/

function sayCheese(){
    const shouldBeTrue = true;
    const myArray = [1,2,3];
    const myObj = { myname : "Kiran"};
    console.log(myArray);
    console.log(myObj);
    if(shouldBeTrue){
      const myName = "Kiran";
      console.log("Hi "+myName);
      myArray.push(4);
      myObj.myname = "Paimam";
      console.log(myArray);
      console.log(myObj);
    } 
    
  }

  sayCheese();

  /*
  Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)
  Its work fine for var variables
  */
carName = "Volvo";
var carName;

/*
Using a let variable before it is declared will result in a ReferenceError.
Using a const variable before it is declared, is a syntax errror, so the code will simply not run
JavaScript only hoists declarations, not initializations.
Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
*/
