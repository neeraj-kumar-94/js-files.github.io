// section 1 start values and variable *******************************

        // Note :iska prayog jo bhi ham likhte hai uso display karne ke liye karte hai


// console.log("Hello world");

// var myName = 'Neeraj kumar';
// var myAge = '20';

// console.log(myAge);
// console.log(myName);




// section 4 start Data types in javascript ************************

            // double port ke andar yadi ham english mein likhte hai to use string boltein hai 

// var myName = "Neeraj kumar";
// console.log(myName);



// typeof operator######
//         // typeof operator ka prayog model type dekhne ke liye kartein hai
//         // () isko parenthesis bolte hai 
//         // {} aur isko curli brushes bolte hai

// console.log(typeof(myName));



// **********Challange time ***********Data type practice
        
// console.log(10 + "20");
// console.log(40-"30");
// console.log("java "+"script");
// console.log(""+"");
// console.log(""+"0");
// console.log("Neerj"-"kumar");
// console.log(true+true);
// console.log(true-false);
// console.log(false-true);


// solution 1**************************************
// isko  /Ecponentiation operator(**) bolte hai
// is formule ka use power nikalne ke liye hota hai
// console.log(3**3);


// solution 2
// + mein theek dikhayega lekin - mein NaN dikhayega 
// console.log( 5 + " Neeraj");
// console.log(5 - "Neeraj");

// // solution 3
 
// var a = 5;
// var b = 10;

// // // question:- output b=5 and a=10 
// var c = b;  c = 10
// b = a;     b = 5
// a = c;

// // console.log("The value of a is " + a);
// // console.log("The value of b is " + b);

// // solution 4
// //  var a = 5;
// //  var b = 10;
   
// //  output a=10 and b=5
// // without third vairable ke

// // a = a + b; a=15;
// // b = a - b;  b=5;
// // a = a - b;  a=10;

// // console.log("The value of a is " + a);
// // console.log("The value of b is " + b);



// // ******************Interview question 1*******************
// Diffrence between null vs undefined

    //  data type check isse karte hai
    //  console.log(typeof());


// var uselessCar = null;
// console.log(uselessCar);
// console.log(typeof(uselessCar));
// 2bug in java script

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));





// // *****************Interview question 2*********************
//         //     what is NaN?

// // var myPhoneNumber = 9540494104;
// // var myName = "Neeraj kumar";

// // console.log(myPhoneNumber);
// // console.log(myName);

// // console.log(isNaN(myPhoneNumber));
// // console.log(isNaN(myName));




// // *****************Interview question 3*********************

// // What is diffrence between = =  vs   = = =?

// // solution

// // var num1 = 5;
// // var num2 = '5';

// // console.log(typeof(num1));
// // console.log(typeof(num2));

// // console.log(num1 == num2);


// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 === num2);



// // Section 5 Airthmetic operators in Javascript ################

// // console.log(5 + 10);
// // console.log(10/2);
// // console.log(10*3);
// // console.log(20-10);

// // console.log("Remainder operator " +27%4);




// // increment and dcreement operator ***********************
 
// // postfix operator (num++)
// var num = 15;
// var newNum = num++;

// console.log(num);
// console.log(newNum);



// // prefix operator(++num)
// var num = 15;
// var newNum = ++num;

// console.log(num);
// console.log(newNum);



// // comperasion operator ********************************

var a = 30;
var b = 20;

// Equal(==)
// console.log(a == b);

// // Not equa(!=)
// console.log(a != b);

// // Greater than
// console.log(a > b);

// // Greater than or equal(>=)
// console.log(a >= b)




// // Logical operators********************
//    // Logicaly operators are typically used with boolean 
//    // When they are , they return boolean value

//    var a = 30;
//    var b = -20;

// // logical and (&&)
//    // if ek bhi operato galat hai to answer false aayega 
// //    console.log( a > b && b > -30 && a > 25);



// // Logical OR (||)
//   // ye sign Enter button ke upar waale button se aayga 
//   // iske andar ek baar mein ek se jyada value likha sakein hai agar ek bhi value true hai to answer true aayega
// //   console.log((a > b) || (b > -50) || (b > a));



// //   Logical Not (!)
//   // logical not true ko false aur false ko true batata hai
// //    console.log(!((a > b) || (b < 0)));
//   //  console.log(!false);




// // string concatenation (opereators)**********************
// // string concatenation opereators (+) do value ko inclue karta hai

// console.log("Hellow world");

// // hellow ke baad space dene ke baad  display par bhi space aayegaa hello world ke beech
// console.log("Hello " + "world");

// var myName = "Avul";

// console.log(myName + "Pakir");
// console.log(myName + "Jainulabdeen");
// console.log(myName + "Abdul");
// console.log(myName + "Kalam");

// console.log(myName + " pakir Jainulabdeen Abdul Kalam");





// // section 6 controle statement#####################
 
// // 1 If ...Else*/ important formula

// var tomr = "rain";

// if(tomr == "rain"){
//         console.log("to take a rain coat");
// }else{
//         console.log("no need to take a rain coat");
// }



// // var tomr = "sunny";

// // if(tomr == "rain"){
// //         console.log("to take a rain coat");
// // }else{
// //         console.log("no need to take a rain coat");
// // }





// // chalane time*****************
// // write a program that works out whether if a given year is a leaf year or not ?

// var year = 2020;

// if(year % 4 === 0){
//         if(year % 100 === 0){
//                 if(year % 400 === 0){
//                     debugger;
//                         console.log("the year " + year + " is a leap year");

//                 }else{
//                         console.log("the year " + year + "is not a leap year");
//                 }

//         }else{
//                 console.log("the year " + year + " is a leap year");
//         }

// }else{
//         console.log("the year" + year + "is not a leap year");
// }





// // Truthy and falsy values in Javascript*******************
// // We have total 5 falsy value in javascript 
// // 0 , "" , undefined , null , NaN , false 

// if(score = 0){
//         console.log("Yay , we won the game");
// }else{
//         console.log("OMG, We lost the game");
// }




// // conditional (ternary) operators*********
// // ( If else ka short version hai (ternary) operators)
// // The conditional (ternary) operators is the only javascript operators 
// // that take three operands

// var age = 18 ;

// if(age = 18){
//         console.log("You can vote");
// }else{
//         console.log("you can't vote");
// }



// // isi ko ternary operator se 

// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you can't vote");



// // switch statement************************
// var area = "circle";
// var PI = 3.142, l=5 , b=4 ,r=3;

// if(area == "circle"){
//         console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//         console.log("the area of the triange is : " + (l*b)/2);
// }else if(area == "rectangle"){
//         console.log("the area of the rectangle is : " + (l*b));
// }else{
//         console.log("please enter valid data");
// }




// // switch statemet  if else lese if else if ka short method hai
// var area = "circle";
// var PI = 3.142, l=5 , b=4 ,r=3;

// switch(area){
//         case 'circle' :
//                 console.log("the area of the circle is :" + PI*r**2);
        
//         case 'triangle' :
//                 console.log("the area of the triange is :" + (l*b)/2);

//         case 'rectangel' :
//                 console.log("the area of the rectangle :" +(l*b));
        
//         default : 
//                 console.log("please enter valid data");
// }



// // switch statement ke andar hame vo hi data chahiye jo hamne likha uske liye (break;) kar use karna hoga

// var area = "circle";
// var PI = 3.142, l=5 , b=4 ,r=3;

// switch(area){
//         case 'circle' :
//                 console.log("the area of the circle is :" + PI*r**2);
//                 break;
        
//         case 'triangle' :
//                 console.log("the area of the triange is :" + (l*b)/2);
//                 break;

//         case 'rectangel' :
//                 console.log("the area of the rectangle :" +(l*b));
//                 break;
        
//         default : 
//                 console.log("please enter valid data");
// }



// // while loop statement    most important formula    #################
// // the while statement creates a loop that exceclutes spacified statement
// // as long as the test condition evaluates to true. 

// var num = 0;

// while(num <= 10){
//         console.log(num);
//         num++;
// }



// // Note :- if (num++) ko agar nahi likha jaaye to ye anant tak chalta rahega 




// // Do-while loop statement#####################

// var num = 0;

// do{
//         console.log(num);
//         num++;
// }while(num <= 10);




// // For loop ################
// // for loop 'while loop and do while loop' ka short version/good version hai?

// for(var num = 0; num <= 10; num++){
//         console.log(num);
// }



// // challange time############
// // Javascript program to print table for given number (8)?


// for(var num = 1; num <= 10; num++){
//         var tableOf = 8;
//         console.log(tableOf + "*" +  num + "=" + tableOf * num);
// }


// for( var num = 1; num <=10; num++){
//         var tableof = 10;
//         console.log(tableof + "*" + num + "=" + tableof * num);



// // ***************Functions in Javascript**************************************
//        // A javascript functions is a block of code designed to perform a particular task.





// //  (1) Funtion in javascript############
//      // function defination ko function declaration aur function statement bhi kahte hai

// //      var a = 10;
// //      var b = 20;
// //      var sum = a+b;
// //      console.log(sum);

// // isi ko function defination se 

// // function sum(){
// //         var a = 10 , b = 20;
// //         var total = a+b;
// //         console.log(total);
// // }


// // (2) calling functions#############
// // function defination aur calling function milkar hi complete function banta hai 

// // sum();


// // complete function 

// // function sum(){
// //         var a = 10 , b = 20;
// //         var total = a+b;
// //         console.log(total);
// // }

// // sum();


// // challange time?###########

// // What is the diffrence between 
// // Function parameter VS Function arguments

// function sum(a,b){
//         var total = a+b;
//         console.log(total);
// }

// sum(20,40);
// sum(30,70);
// sum(30,94);





// // 3 Function Expression############################

// // "function Expression simply means
// // create a function and put in into to the variable funExp"

// // function sum(a,b){
// //                 var total = a+b;
// //                 console.log(total);
// //         }

// //   var funExp = sum(20,40);



// //   4 Return keyword ############################


// function sum(a,b){
//         return total = a+b;
// }

// var funExp = sum(20,40);

// console.log(funExp);



// //  5 Anonymous Function####################


// // var funExp = function(a,b){
// //         return total = a+b;
// // }

// // var sum = funExp(52,70);
// // var sum1 = funExp(20,20);

// // console.log('the sum two number is ' + sum);

// // console.log(sum > sum1);





// // ********************##################************************************##################************************************##################*******************************






// //***************************** */ Now its time for modren JavaScript *******************************// //

//     // Featlures of ECMASCRIPT 2015 also non as ES6//////////////***********

// //    (1) LET VS CONST vs VAR ############

// // Note : VAR aur LET ke andar ko value rakhate hai to usko change kar saktein hai 


// // VAR####
// // var myName = "Neeraj kumar";
// // console.log(myName);

// myName = "kandela shamli";
// console.log(myName);


// // LET#####
// // let myName = "Neeraj kumar";
// // console.log(myName);

// // myName = "Kandela shamli";
// // console.log(myName);


// var myName = "Neeraj kumar";
// console.log(myName);


// // CONST######
// // const ke andar yadi koi value rakhte ki to usko change nahi kar saktein hai 


// // const myName = "Neeraj kumar";
// // console.log(myName);

// // myName = "Kandela shamli";
// // console.log(myName);



// // var => Function scope^^^^^^^^^^^^^
// // LET and CONST => block scope^^^^^^^^^^^^^^^

// // Var:-
// function biodata(){
//         var myFirstName = "Neeraj";
//         console.log(myFirstName);

//         if(true){
//                 var myLastName = "Kumar";
                
//                 console.log("inner " + myFirstName);
//                 console.log("inner " + myLastName);
//         }
        
//         console.log("innerouter " + myLastName);
// }

// biodata();


// // Let:-  keval curli brushes " {} " ke andar hi data leta hai
// function biodata(){
//         let myFirstName = "Neeraj";
//         console.log(myFirstName);

//         if(true){
//                 let myLastName = "Kumar";
                
//                 console.log("inner " + myFirstName);
//                 console.log("inner " + myLastName);
//         }
        
// }

// biodata();


// // CONST :-
// function biodata(){
//         const myFirstName = "Neeraj";
//         console.log(myFirstName);

//         if(true){
//                 const myLastName = "Kumar";
                
//                 console.log("inner " + myFirstName);
//                 console.log("inner " + myLastName);
//         }
        
        
// }

// biodata();





// // (2) Template literals (Template strings)##########
// // is fomule ke andar console.log(``) ye sign esc button ke neeche hai


// for(let num = 1; num <= 10; num++){
        // let tableof =12;
        // console.log(tableof + "*" + num + "=" + tableof * num);
        // console.log(`${tableof} * ${num} = ${tableof * num}`);
// }



// // (3) Default parameter ###########

// function mult(a,b=5){
//         return a*b;
// }

// console.log(mult(3));


// // (4) Fat arrow function################

// // Normal way of writing function 

// function sum(){
//         let a = 5 , b = 6;
//         let sum = a + b;
//         return `The sum of two number is ${sum}`
// }

// console.log(sum());


// // How to covert in Fat arrow (=>)

// const sum = ()  => `The sum of two number is ${(a=5) + (b=6)}`;

// console.log(sum());



// // (5)  Array in Javascript###########

// var friend1 = "mohan";
// var friend2 = "rohan";
// var friend3 = "saurav";
// var friend4 = "gaurav";

// console.log(friend1);
// console.log(friend2);
// console.log(friend3);
// console.log(friend4);



// // Array formele ki sahayta se 
// // Array ka index 0 se start hota aur serial wise chalta rahta hai
// // array fomule ke andar ek se jyada value ko add kar sakte aur kuch bhi value add kar saktein hai

// var myFriends = ["rohan" , "mohan" , "gaurav" , "Aman" ];

// console.log(myFriends[myFriends.length - 1]);
// console.log(myFriends);


// // Note :- Sabhi naamo mein se ek naam display karana ho tab
// // Answer type one  
// // console.log(myFriends[1]);

// // Note :- naam ki value 40 se 50 ho ya isse jyada ho tab 
// // length nikalne ke liye
// // console.log(myFriends.length);



// // we use for loop to navigate#################

// var myFriends = ["rohan" , "mohan" , "gaurav" , "Aman" ];

// for(i = 0 ; i < myFriends.length ; i++){
//         console.log(myFriends[i]);
// }



// // After Es6 We have for..in and for..of loopto##################################


// // For in loop ki sahayta se :- 
// // index number provide karata hai
// var myFriends = ["rohan" , "mohan" , "gaurav" , "Aman" ];
// for(let elements in myFriends){
//         console.log(elements);
// }


// // For of loop ki sahayta se :- 
// // hame sabhi naam provide karata hai
// var myFriends = ["rohan" , "mohan" , "gaurav" , "Aman" ];
// for(let elements of myFriends){
//         console.log(elements);
// }



// // Array prototype forEach() ############################

// var myFriends = ["rohan" , "mohan" , "gaurav" , "Aman" ];

// // Answer type one 
// myFriends.forEach(function(elements , index , array){
//         console.log(elements);
// });


// // Answer type two
// myFriends.forEach(function(elements , index ,array){
//         console.log(elements + " index : "  + index);
// });



// // Answer type two
// myFriends.forEach(function(elements , index ,array){
//         console.log(elements + " index : " + index + " " + array);
// });


// // Formula Fat arrow Function ( =>)
// // myFriends.forEach((elements , index ,array) => {
// //         console.log(elements + " index : " + index + " " + array);
// // }








// Push metod###################

// const animals = ['pigs' , 'gaots' , 'sheeps'];

// animals.push('chicken');
// console.log(animals);


// Note :- interview mein poocha jata ki 'push method ' kya return karata hai
// push metod hamein length provide karata hai 

// const animals = ['pigs ' , 'goats' , 'sheeps'];

// const count = animals.push('chicken');
// console.log(animals);
// console.log(count);



// Formula :- Push method se ham ek baar mein diffrent diffrent value add kar saktein hai


// const animals = ['pigs' , 'gaots' , 'sheeps'];

// animals.push('chicken' , 'cats' , 'cow');
// console.log(animals);



// Formula  Unshift() :- 
// unshift metod vlue ka start mein add karta hai

//  const animals = ['pigs' , 'gaots' , 'sheeps'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);


// const count = animals.unshift('chicken' , 'cats' , 'cow' , 'buffelow');
// console.log(animals);


// Exapmle :- 

// const myNumbers = [1,2,3,4,5];

// myNumbers.unshift(4,7,4);
// console.log(myNumbers);




// (1)  Pop() method ################@############
// is method ka prayog  se ham data ki last value ko remove kar saktein hai

// const plants = [ 'tomato' , 'banana' , 'apple' ,  'orange' , 'mango'];

// // main value
// console.log(plants);
// // reove value
// console.log(plants.pop());
// // new value
// console.log(plants);



// (1) shift() method ################@############
// shift pop metod ka ulta hota hai ye first vlue ko reomove karta hai

// const plants = [ 'tomato' , 'banana' , 'apple' ,  'orange' , 'mango'];

// // main value
// console.log(plants);
// // reove value
// console.log(plants.shift());
// // new value
// console.log(plants);







// ###################### challange time ######################

//  splice() method   $$$$$$$$$$$$$$$$
// Note :- splice(jo number add karna hai uska index number, jo value delete kani uska index number,"value (jo add karni hai)")


// const months = ['january' , 'feb' , 'march' , 'april' , 'may' , 'june'];


// Solution (1)
// 1st
    //  type mein index number add karna hai index value usi ki add hogi jo number add karna hai 
// const newmonth = months.splice(6,0,"dec");
// console.log(months);

// 2st
    //  type mein index number add karna hai index value usi ki add hogi jo number add karna hai 
    // const newmonth = months.splice(months.length,0,"dec");
    // console.log(months);



// Solution (2)
// const newMonth = months.splice(5,0,"december");
// console.log(newMonth);


// Solution (3) 1st part
// // type (1)
// const months = ['jan' , 'feb' , 'march' , 'april' , 'may' , 'june'];

// const updatemonth = months.splice(1,1,'February');
// console.log(months);

// type(2)
// const months = ['jan' , 'feb' , 'march' , 'april' , 'may' , 'june'];

// const updatemonth = months.splice(1,1,'February');
// console.log(months);




//  Solution (3) 2nd part
// Rule jab value bahut jyada ho
// [indexOf(method se)]

// typeof(1st)
// const months = ['jan' , 'february' , 'march' , 'june' , 'may' , 'dec'];

// const indexOfMonth = months.indexOf('june');

// if( indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'June');
//     console.log(months);

//  }else{
//     console.log('no search data found');
// }





// // typeof(2nd)
// // value ko search kar delete karna
// const months = ['jan' , 'february' , 'march' , 'june' , 'may' , 'dec'];

// const indexOfMonth = months.indexOf('june');

// if( indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,);
//     console.log(months);

//  }else{
//     console.log('no search data found');
// }

 

// typeof(3d)
// value ko search kar uske baad ki sabhi value remove karna
// const months = ['jan' , 'february' , 'march' , 'june' , 'may' , 'dec'];

// const indexOfMonth = months.indexOf('june');

// if( indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,Infinity);
//     console.log(months);

//  }else{
//     console.log('no search data found');
// }





// (5) Map() and reduce() method

// 1st map() method ka prayog kisi value se kam value ko remove karna
// const array1 = [1,2,4,6,9,12,15];

// let newArr =  array1.map((curElem,index,Arr) => {
//     return curElem > 9;
// })

// console.log(array1);
// console.log(newArr);



// 2nd rule map() method ka prayog kisi value se kam value ko remove karna
// const array1 = [1,2,4,6,9,12,15];

// let newArr =  array1.map((curElm,index,arr) => {
//     return `Index no = ${index} as the value ${curElm} belong to ${arr}`
// })

// console.log(newArr);


// forEach method
// forEach() answer 'undefined' aayega
// const array1 = [1,2,4,6,9,12,15];

// let newArr =  array1.forEach((curElm,index,arr) => {
//     return `Index no = ${index} as the value ${curElm} belong to ${arr}`
// })

// console.log(newArr);



// ###################### Challange time #######################
//  Solution (1) 
//  squre root nikalna

// let arr = [25,36,49,64,81];

// let arrSqr = arr.map((curElm) => {
//     return Math.sqrt(curElm);
// })

// console.log(arrSqr);



// solution(2)
// typeof(1)
// 10 se chhote number mein 2 se multiply
// let arr = [2,3,4,5,6,7,8,9];

// let arr2 = arr.map((curElem) => {
//     return curElem * 2;
// }).filter((curElem) => {
//     return curElem >10;
// })


// console.log(arr2);


// type(2)
// let arr = [2,3,4,5,6,7,8,9];

// let arr2 = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10);

// console.log(arr2);



// ########### Reduce method #############
// // 1st rule reduce method se sum nikalna

// let arr = [5,6,8];

// let sum = arr.reduce((accumulator , curElem , index , arr) => {
//     return accumulator += curElem;
// })

// console.log(sum);

// let arr = [5,6,8];
// let sum = arr.reduce((accumulator,curElm,index,arr) )


// 2nd rule reduce method se multiply karna  

// let arr = [5,6,8];

// let sum = arr.reduce((accumulator , curElem , index , arr) => {
//     return accumulator *= curElem;
// })

// console.log(sum);




// 2nd rule reduce method se multiply karna  
// Note:- kisi value ko baad mein add karne ke liye 

// let arr = [5,6,8];

// let sum = arr.reduce((accumulator , curElem , index , arr) => {
//     return accumulator += curElem;
// },10)

// console.log(sum);





// Converting 2d and 3d array into one dimensial array *******
//  const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8'],
//  ];

//  let flatArr = arr.reduce((accum ,currVal) =>{
//     return accum.concat(currVal);
//  } ) 

//  console.log(flatArr);



// *************************** strings in Javascript ******************************
// Rule (1) 
// strings ki length nikalna
// strings ki length nikalte samay jo space hota usko bhi nikalte hai

// var myName = "Neeraj kumar";

// console.log(myName.length);

// Rule (2) 
// double port ke andar string ko likhne ke liye backslash ka prayog karte hai

// let anySentence = "we are the so called \"vikings\" from the north";

// console.log(anySentence);


// Rule (3) 
// Single port ke andar string ko likhne ke liye backslash ka prayog kar sakte hai aur double port ka bhi

// let anySentence = 'we are the so called \"vikings\" from the north';
// console.log(anySentence);


// let anySentence = 'we are the so called "vikings" from the north';
// console.log(anySentence);


// Rule (4)
// indexOf() method case sencitive hota text jaisa likha hai usko vaisa hi likhna hai
// Sring ke andar string ko find karana[indexOf() Method se]

// const myBioData = "I am the Thapa technical";
// console.log(myBioData.indexOf("Thapa"));

// Rule (5)
// Sring ke andar string ko find karana[indexOf() Method se]

// const myBioData = "I am the thapa technical";
// console.log(myBioData.indexOf("t",6));

// Rule (5)
// Sring ke andar string ko find karana[lastIndexOf() Method se]

// const myBioData = "I am the thapa technical";
// console.log(myBioData.lastIndexOf("t",6));





// Rule (6) 
// search(method)
// Searching for a string in a string 

// const myBioData = "I am the thapa technical";
// let sData = myBioData.search("technical");
// console.log(sData);





// *******************************Extracting string parts ******************************

// Rule(1)
// var str = "Apple, Banana, Kiwi";

// let res = str.slice(0,4);
// let res = str.slice(7,-2);
// console.log(res);


// Rule(2)
// starting index number dene par vo complete word dega 

// var str = "Apple, Banana, Kiwi";

// let res = str.slice(7);
// console.log(res);



// ################# Challange time ####################

// solution (1)  display only 180 characters of a string like the only used in twitter

// let myTweets = "hello my name is Neeraj kumar . I belong to shamli.";

// // let myAcctualTweet = myTweet.slice()

// let myAcctualTweet = myTweets.slice(0,20);
// console.log(myAcctualTweet);
// console.log(myAcctualTweet.length);




// substring() method (1)**********************************
// substring () is similar slice
// substring negative index not accept

// var str = "apple ,banana,diwi";
// let res = str.substring(0,4);
// console.log(res);


// Substring() method (2)
// isme jab negative value ko add kare hai tab vo index number start se leta hai

// var str = "apple ,banana,diwi";
// let res = str.substring(7,-2);
// console.log(res);


// substr() method ka prayog *********************************
// last se value lene ke liye karte hai

// var str = "apple ,banana,kiwi";
// let res = str.substr(0,4);
// // let res = str.substr(-4);
// console.log(res);


// Replace string content()*************************
// Note - repace method keval 1st value ko hi replace karega

// var bioData = `I am vindo bahadu thap vinod`;

// let replaceData = bioData.replace('neeraj,'Vinod');
// console.log(replaceData);






// Extracting string character***************************

// 3 method of Extracting string character

// (1)charAt(position)
// (2)charCodeAt(position)
// (3)property access[]

// // (1) charAt()
// let str = "HELLOW WORLD";
// // console.log(str.charAt(0));
// console.log(str.charAt(9));


// (2)charCodeAt

// var str = "HELLOW WORLD";
// console.log(str.charCodeAt(0));


// ########################## challange time##################################

// Return the unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length-1;
// console.log(str.charCodeAt(lastChar));


// property access*****************
// property access of string

// var str = "HELLO WORLD";
// console.log(str[0]);



// // Other use ful methods
// let myName = "vinod thapa";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());



// concat()method########################
// concat method mein space dene ke liye double port aur uske baad space dena hai 

// let fName = "Neeraj";
// let lName = "kumar";

// console.log(fname.concat(lName));
// console.log(fname.concat("" ,lname));


// trim() method dono aur se white space hatata hai

// var str = "    HELLO WORLD       "
// console.log(str.trim());



// string ko array mein change karna##########################
// Rule :- split metod se
// var txt = "a,b,c,d,e";

// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));


// ****************** Date *****************

// let currDate = new Date();
// console.log(currDate);


// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());



// Date.now() method millisecond provide karta 
// (1 january 1970) se ab tak ki

// console.log(Date.now());


// new Date(year,month...  )
// 7 Number specify, year, month, day, hour ,minute ,second and millisecond(in that order)

// var d = new Date(2023,5,24,10,33,30,0);
// console.log(d.toLocaleString())


// ########  How to get indivisual date #############

// const currDate = new Date();

// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());




// ************* Set Full year method **************

// ###########  Dates Methods  ##############

// const curDate = new Date();

// console.log(curDate.setFullYear(2022));
// console.log(curDate.setFullYear(2022 ,10 ,5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());




// ************* (Time methods) **************

// ###########  Time Methods  ##############

// const curTime = new Date();

// How to get the individual time #

// console.log(curTime.getTime());
// // the getTime() methods return the number of milliseconds
// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


// ****************** Practice time **********

// new Date().toLocaleTimeString();
// // -
// new Date().toLocaleDateString();
// // -
// new Date().toLocaleString();




// **************************** Math object in javascript ************************
// Math objects in javascript mein "M" capital rahega

 
// Rule (1)
// console.log(Math.PI);

// Rule (2)
// round() method----
// let num = 10.50;
// console.log(Math.round(num));


// Rule (3)
// Math.pow() method-----
// console.log(Math.pow(2,3));
// console.log(2**3);


// Rule (4)
// Math.squrt()Methods------
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(36));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(33));
// console.log(Math.sqrt(45));


// Rule (5)
// Math.abs() method Negative value ko positive value mein convert karta hai
// console.log(Math.abs(-55));
// console.log(Math.abs(-65));
// console.log(Math.abs(-55.99));
// console.log(Math.abs(4-10));


// Rule (6)
// Math.ceil()
// Math.ceil():-ke prayos yadi point se baad ki value 5 se ka hai to +1 hoga


// console.log(Math.ceil(4.1));
// console.log(Math.round(4.1));

// console.log(Math.ceil(99.01));
// console.log(Math.round(99.01));

// console.log(Math.ceil(12.45));


// Rule (7)
// Math.floor():-
// is method mein point ke baad kaisi bhi sankhya ho usse koi fark nahi padta

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.7));
// console.log(Math.floor(10.10));
// console.log(Math.floor(100.5));


// Rule (8)
// Math.min() sabse chhoti value nikalta hai
// console.log(Math.min(0,150,90,-30,1999,-100));


// Rule (8)
// Math.max() sabse badi value nikalta hai
// console.log(Math.max(0,150,90,-30,1999,-100));


// Rule (9)
// Math.random():- 
// mein yadi 10 se multiply kar rahe hai to 0 - 9 ki value hi aaygi 

// console.log(Math.floor(Math.random()*10));


// Rule (10)
// Math.trunc():-
// is method se desible ke baad ki value ko jyo ka tyo rakhta hai

// console.log(Math.trunc(4.7));
// console.log(Math.trunc(-99));



// ******************************************OOPS IN JAVASCRIPT****************************************

// oops = object oriented programming in JAVASCRIPT

// OOPS IN JAVASCRIPT TWO PART HOTE HIA 
// 1. what is object literals?
// 2. what is "this" object?

// 1 way 
// let bioData = {
//     myName : "Neeraj kuamr",
//     myVillage :" Shekhupura + kandela (Shamli)",
//     getData : function(){
//         console.log(`my name is ${bioData.myName} and my village is ${bioData.myVillage}`); 
//     }

// }

// console.log(bioData.myName);

// function ko call karna object ke andar 
// bioData.getData();



// 2nd way no need to write (functions) as well after Es6 (Date - 11/june/2023) ########################

// let bioData = {
//     myName : "Neeraj kuamr",
//     myVillage :" Shekhupura + kandela (Shamli)",
//     getData () {
//         console.log(`my name is ${bioData.myName} and my village is ${bioData.myVillage}`); 
//     }

// }

// console.log(bioData.myName);



// Ek object ke andar ek aur object add karna 

// let bioData = {
//     myName : {
//         realName : "Neeraj",
//         channelName : "thapa technical"
//     },
//     myVillage :" Shekhupura + kandela (Shamli)",
//     getData () {
//         console.log(`my name is ${bioData.myName} and my village is ${bioData.myVillage}`); 
//     }

// }

// console.log(bioData.myName.channelName);



// #################### this object #############################
 
// ex 1 

// console.log(this.alert('awesome'));

// ex 2

// function myName(){
//     console.log(this);
// }
// myName();

// ex 3

// var myNames = "vinod";
// function myName() {
//     console.log(this.myNames);
// }
// myName();

// ex 4

// const obj = {
//     myAge :20,
//     myName() {
//         console.log(this.myAge);
//     }
// }
// obj.myName();


// ex 5

// let bioData = {
//     myName : {
//         realName : "Neeraj kumar",
//         channelName : "developer Neeraj kumar"
//     },
//     myAge : 26 ,
//     getData () {
//         console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge}`);
//     }
// }

// bioData.getData();



// **************************** Destructuring in ES6 ***************************

// => Array Destructuring :-
// (Array Destructuring ke anusar usko aur tukdo mein baat do )
// Direct kisi bhi naam ko prapt karna index number se

// const myBioData = ['vinod' , 'thapa' ,26];

// let myName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// console.log(myAge);


// Array Destructuring :-ke anusar --
// const myBioData = ['vinod' , 'thapa' ,26];

// let[myName,myAge,myLName] = myBioData;
// console.log(myAge);


// Array Destructuring :- iske anuar hum baad mein bhi value ko add kar saktein hai 

// we can add values too 
 
// const myBioData = ['vinod' , 'thapa' ,26];

// let[myName,myAge,myLName , myDegree="b.a"] = myBioData;
// console.log(myDegree);

// => object destucturing 

// const myBioData = {
//     myFname : 'Neeraj',
//     myLname : 'kumar' ,
//     age : 26 
// }

// // let age = myBioData.age;
// // let myFname = myBioData.myFname;

// let {myFname,myLname,myDegree="b.a"} = myBioData;
// console.log(myLname);


// Rule ******************* Object Properties ********************
// Object Properties iski sahayta se hum dynamic data ko add kar saktein hai 

// let myName = "vinod";
// const myBio = {
//     [myName] : "hello how are you ?",
//     [20 + 6] : "is my age"
// }

// console.log(myBio);


// Object Properties :- iske andar jab key and value samaan ho to dono ko likhne ki need nahi hai 

// let myName ="vinod thapa";
// let myAge = 26;

// const myBio = {myName, myAge}

// 2nd method 
// const myBio = {
//     myName : myName,
//     myAge : myAge
// }

// console.log(myBio);


// Spread opertot (most important rule) ######################## 
// Rule :- ...colors (teen dot aur pahle array ka naam likhna hai) iske beech koi space nahi hoga 


// const colors = ['red','green' ,'blue' ,'white' , 'pink'];

// const myColors = ['red' , 'green' , 'blue' , 'white' , 'yellow' ,'black'];

// const myFavColors = [ ...colors, 'yellow' , 'black'];
// console.log(myFavColors);



//  *********************/// ECMAScript 2016/ ES7 //// ****************************

// 2016 mein jo features aaye 
// 1. Array.prototype.includes
// 2. Exponention operator

// ES7 features 

// 1. Array include isko hi [Array.prototype.includes] kahte hai
// iska prayog kisi data ka pata karne ke liye karte hai ki vo hai ya nahi


// const colors = ['red' , 'green', 'blue' , 'white' , 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// 2. Exponention operato isko hi double star kahtein hai 
    //  iska prayog power nikalne ke liye kiya jata hai 

    // console.log(2**3);


    // ***************************** ES8 Features **************************************
    // ES8 FEATURES KO 8 KO EK KAM KARENGE TO 7 iska arth hai 2017 mein jo features aaye 

    // 1. String padding 
    // 2. Object.values()
    // 3. Object.entries()
      
    // iska praog console par karke dekhna 

    // const myName = '(Neeraj)'.padStart(7);
    // console.log(myName);



    // 2. Object.values() *******************************
//  object.entries ki sahayta se loop chala saktein hai 

// const person = { name: 'Fred' , age: 87 };

// console.log(Object.entries(person));



// ***************************** ES2018 Features **************************************

// // three dot aur person (...person) ki sahayata se jo data upar likha hai vo hi neeche bhi aayega 


// const person = {name: 'Fred' ,age: 87};
// const sPerson = {...person};

// console.log(person);
// console.log(sPerson);




// ***************************** ES2019 Features **************************************