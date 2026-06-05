// var a = 10; //reinitialize & redeclare
// let b = 20; //reinitialize
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var num = 10;
// var str ="susheetha";
// var undefine;
// var Null = null;
// var boolean = true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof Null);



// var bigint = 123n;
// var symbol = Symbol('li');

// console.log(typeof bigint)
// console.log(typeof symbol)


// var arr = [10,20,30,40];
// console.log(typeof arr , arr);
// var obj = {
//     name:"susheetha",
//     dept:["AI&DS"]
// }
// console.log(typeof obj,obj)

// //Arithmetic opertor (+,-,*,%,/)
// var a =80;
// var b = "suhi";

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);
// console.log(a/b);

// logical operator(&&,||,!)
//                   &&      ||     !
//true true         true     true    false
//true false        false    true      true
//false true        false    true
//false false       false    false

// var a = "true";
// var b = "false";
// console.log (a&&b);
// console.log(a||b);
// console.log(!a);


//relational operator(<,>,<=,>=,==,!=)

// a = 10;
// b = "20";

// console.log(a>b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);
// asignment operator (=,+=,-=,%=,**=,/=)

// a = 10;
// b = 20;

// a +=b; //a=a+b;

// console.log(a);
// a-=b; //a=a-b;
// console.log(a);
// a*=b; //a=a*b;
// console.log(a);
// a%=b;  //a=a%b;
// console.log(a);
// a/=b;   //a=a/b;
// console.log(a);

// var a = 10;
// console.log(a++);
// console.log(++a);

// var a = 20;
// console.log(--a);
// console.log(a--);

// a = 1;//2 3 
// b = 1;// 0 1 2 
// c = 0;//1 2 
//               1    0       1    3       1    1     1    3
// var result = a++ + --b +  ++c - ++a + ++b + c++ + b++ + a;
// console.log(result)
// conditional statements 
// var a = 10;
// var b = 20;

// if(true){
//     console.log('${a} + ${b} = ${a+b}');
// }


// if(true){
//     a = 10;
//     console.log(a);
// }


// var a = 10; // global scope
// // let b = 20; // block scope
// const b = 20; // block scope
// if(true){
//     console.log(a);
//     // let b = 30 // block scope
//     const b = 30; // block scope
//     console.log(b);
// }

// console.log(a);
// console.log(b);

// var a = 10;
// if(a%2===0){
//     console.log(`${a} is even`);
// }
// else{
//     console.log(`${a} is odd`);
// }

// var mark = 80;
// if(mark>=90){
//     console.log("o grade");

// }
// else if (mark >= 70){
//     console.log("a grade");
// }
// else if (mark >= 35){
//     console.log("pass");
// }
// else{
//     console.log(" fail");
// }

// var a = 10;
// // condition ? true statement : false statement 
// var result = a%2===0 ? "even" : "odd" ;
// console.log(result);

// mark = 45;
// var result = (mark>=90) ?"o grade" : (mark>=70) ? "a grade" : (mark>=35) ? "pass": "fail";
// console.log(result);

// var day = 5;
// switch(day){
//     case 1:{
//         console.log("sunday");
//         break;
//     }
//     case 2:{
//         console.log("monday");
//         break;
//     }
//     case 3:{
//         console.log("tuesday");
//         break;
//     }
//     case 4:{
//         console.log("wednesday");
//         break;
//     }
//     case 5:{
//         console.log("thursday");
//         break;
//     }
//     case 6:{
//         console.log("friday");
//         break;
//     }
//     case 7:{
//         console.log("saturday");
//         break;
//     }
//     default:{
//         console.log("invalid input");
//     }
// }

//looping statements
// 1 time    11 times    10 times 
// for(var i=1; i<=10; i++){
//     console.log(i);
// }

// var val = 10246;
// var count = 0;
// while(val > 0){
//     count++;
//     val = Math.floor(val/10);
// }
// console.log(count,val);

// for(let i=1;i<=10;i++){
// if(i%2===0){
// continue;
// }
// console.log(i);
// }
// function add()
// {
//     console.log(10+15)
// }
// add()

// function add(a,b)
// {
//     console.log(a+b)
// }
// add(10,5)

// arrow function
// var demo =() => {
//     console.log(10 +20);
// }
// demo();

// var demo =(a=5,b=6) => {
//     console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);
//spread operator(...)
// var arr =[10,20,30];
// var arr2 = [ ...arr, 40,50];
// console.log(arr);
// console.log(arr2);

//destructing operator

// var[m1,m2,m3,m4,m5,m6]=[90,99,89,98,98,98]
// console.log(m1,m2,m3,m4,m5,m6);

// var {name,mobile,dept,email,isactive} = {
//     name:"suhitha",
//     mobile:786578998,
//     dept:["ct","aids"],
//     email:"suhithamaheswaren@.com",
//     isactive:true
// }
// console.log(name,mobile,dept,email,isactive)

// var arr =[10,20,30,40];
// //for..in
// for(let index in arr){
// console.log(index)
// }
// //for..of
// for(let value of arr){
//     console.log(value);
// }
// var obj = {
//     name:"suhitha",
//     dept:["ct","aids"],
//     mobile:5694785758,
// }
// for(let key in obj){
//     console.log(key,obj[key])

// }

// var arr = [1,2,3,4,5];

// var result = arr.map((val) => (val*2));
// console.log(result)
// console.log(arr);
var arr =[1,2,3,4,5]

var even = arr.filter((val)=>val%2===0);
console.log(even)

var sum = arr.reduce((add,val)=>(add+val),0);
console.log(sum);

var userNmae = {
    name:"suhitha",
    dept;["ct","aids"],
    skills:{
        programming:["java","c"]
    }
}
