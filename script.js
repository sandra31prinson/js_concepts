alert("welcome to our page")


// *-------array declaration ------------*
// let fruits = ['apple' , 'orange' ,'pineapple']

//  console.log(fruits);
//  for (i=0; i<fruits.length;)
//  {
//     console.log(fruits[i])
//  }



// *--------------------variable declaration--------------*


// var nme = "sandra"

// document.write(nme)


// --------------* to add more than two value in a variable*----------------

// var values = {
//    nme:' Sandra',
//    age: 22,
//    place:'cherpu'
// }

// let age = values.age

// console.log(age)



// -------------------* function *-----------------------


// function f1()
// {
//    document.write("enter your name");
// }

// f1();

// ----function with out argument ********


// ------------------function with arguments-----------

// function your_name(naam)
// {
//    document.write("my name is",naam);
// }

// your_name('sandra')


// document.getElementById('name').innerHTML = "sandra";

// document.getElementsByClassName('h11').innerHTML = "sandra";

// document.getElementById('mal').innerHTML = "malayalam";

// document.getElementsByTagName('h1')[0].innerHTML = "maliyekkal"



// -****style manipulation ----------------*


// document.getElementById('name').style.color = "green";
// document.getElementById('name').style.animationName = "fadeInUp";

// document.getElementById('img').src = "images/1.jpg"

// let myArray = ['sandra','prinson','maliyekkal'];

// document.getElementById('name').innerHTML = myArray;
// spread operators

// const details ={
//     name : "sandra",
//     l_name : "prinson",
//     age : 22
// };

// const data = {...details};
// data.name = "steevo"

// console.log(details);



// rest operation


// const place = ["cherpu","thriprayar","thrissur"];

// const[first,second,third] = place;

// console.log(third);


// rest operation  in Object


// const details ={

//     id: 0,
//     place :'cherpu',
//     name :'sandra'
    

// }

// const{name} = details 

// console.log(name);


// const{name,...rest} = details;

// console.log(name);
// console.log(rest);


// arrow functions

// const myFun = () =>{

//     console.log("run");
// }

// myFun();

// ---------------call back functions --------------


// document.getElementById('btn').onclick = callBack;

//  function callBack(arg)
//  {

//     console.log(arg);
//  }


// -------synchornous call back function-----------

// const a =['1','2','3'];

// function callBack(arg)
// {
//     console.log(arg);

// }

// a.forEach(callBack);


// ----- for each iteration----------


const nme = ['sandra','steevo','tessy','prinson']

 function myNme(name)
 {
    console.log("my name is",name)
 }

 nme.forEach(myNme)

