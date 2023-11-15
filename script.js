// alert("welcome to our page")


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


// const alpha =['a','b','c','d']

// function myAlpha(bets)
// {
//     console.log(bets)
// }

// alpha.forEach(myAlpha);



// ----------arrow function-----

// const myFun = (a,b) => a*b;

// const val = myFun(3,5);

// console.log(val);


// const fun = (a,b) => {

//     return a*b;
// }

// const mul = fun(3,5);
// console.log(mul);

// ------------clousure----------

// var objs = [

//    { name: 'I',
//     msg : 'hi...i,m sandra'
// },
// {
//     name:'About',
//     msg :'web developer'
// },
// ];

// function main()
// {
//     objs.forEach((item)=>
//     {
//         const bt = document.createElement('button');
//         bt.innerHTML =item.name;
//         bt.onclick = getCallBack(item.msg);
//         document.body.appendChild(bt);

//     });
// }

// function getCallBack(arg) {
//     return function()
//     {
//         alert(arg);
//     }
// }
// main();



// ----------------for each functuin ------------


// var obj = [
//     {
//         name:'sandra',
//         age:22
//     },
//     {
//         name:'sneha',
//         age:21,

//     },

//     {
//         name:'athulya',
//         age:'20'
//     }
// ];


// var found = obj.filter((item)=>{

//     return item.age <25;
   
// })

//  console.log(found);



// ----------------nexted destructureing----------


// var obj = {
//     name : 'sandra',
//     age  :22,
//     place : 'cherpu',

//     subject:{
//         teacher: 'bob',
//         sub:'maths'
//     }
// }

// var {
//     subject:{
//         sub
//     }
// } = obj ;


// console.log (sub);





// **********variable dclaration----------
// ********Object={*********}


// let details = {
//    nme : 'sandra',
//    age :22,

//    subject:{
//       one:'eng',
//       two:'mal'
//    }

// }

// console.log(details.subject.one)



// function sandra()
// {

//    console.log("hi...its sandra");
// }

// sandra()



// let a =5;
// let b=5;

// function add()
// {
//    console.log(a+b);
// }

// add()



// function add(name)
// {

//    document.write(name)
   
// }

// add('sandra')



// document.getElementById('name').innerHTML = "sandra";

// document.getElementsByClassName('h11').innerHTML = "sandra";



// document.getElementById('mal').innerHTML = "malayalam";

//  document.getElementsByTagName('h1')[0].innerHTML = "maliyekkal"






//  document.getElementById('name').style.color = "green";
//  document.getElementById('name').style.animationName = "fadeInUp";

// document.getElementById('img').src = "images/1.jpg"



// const details = {

//    name: 'sandra',
//    age :22
// }

// const info ={...details};
// info.name = 'steevo';

// console.log(info)


// const arr =['sandra','steevo','prinson','tessy'];

// const family =[...arr,'cherpu'];
 

//  console.log(family)


// const rwst ={

//    name:'sandra',
//    age :22,

// }

// const {age,...rest}=rwst

// console.log(rwst)


// const arr =['sandra','steevo','tessy','prinson'];

// const [first , second, thrid, forth]=arr;

// const[sandra,...rest]=arr;

// console.log(rest)

// let add =(a,b)=>
// {
//     sum= a+b;
//     console.log(sum)
// }

// add(3,5)


// const rwst ={

//    name:'sandra',
//    age :22,

// }

// console.log(rwst.name,rwst.age);



// const cars = ["Saab", "Volvo", "BMW"];

// console.log(cars[0])


// function re(a,b){

//    return a*b

   

// }

// console.log(re(5,5))




// -----spread operators----





// rest-----


// let hello ={name :'steev'
//             ,age :12,
//          }



// -----spread operator----
// let hel ={name:'san'
//             ,age:22,};


// let hello={...hel};

// hello.name='stee'


// console.log(hel)
// console.log(hello)


// let det=['sandra',22,'cherpu'];

// let deta={...det};

// deta=[...det,'maliyekkal']

// console.log(deta)




// -----rest operator=----

// -----destructureing----


// const data = ['one','two','three'];

// const[k,l,m]=data;

// console.log(k);



// const de ={
//    name:'sa',
//    age:23,
//    place:'cherpu'
// }


// const{name,age,place}=de

// const{age,...rest}=de

// console.log(age);

// console.log(rest);


// ----rest---


// const sandra =['sandra',23,'thrissur'];
// const dat=[...sandra,'hi'];
// console.log(dat);


// const steevo =['steevo',19,'thrissur']

// const[a, b, n]=steevo;
// const ste=[...steevo];
// console.log(a,...steevo);

// console.log(ste);


// ------arrow function----


// sandra=()=>10+5;

   

// console.log(sandra());

// steevo=()=>console.log('i"m steevo');

// steevo();



// let student=[
// {
   
//       id:'sandra',
//       age:22,
//       place:'thrissur'
// },
//       {
//          id:'steevo',
//          age:19,
//          place:'thrissur'
     
//       },

//       {
//          id:'prinson',
//          age:52,
//          place:'thrissur'
     
//       }


  
//    ]


   // for(let i=0; i<student.length; i++)
   // {
   //    console.log(student[i]);
   // }

   // student.forEach((value,index,Array)=>console.log(value.id));

//   let arr=['sandra','steevo','prinson','tessy'];

//   for(let i=0; i<arr.length;i++)
//   {

//    console.log(arr[i]);
//   }

// arr.forEach((value,array,index)=>console.log(value));




// ------map methode-----


// const newArray = student.map((value)=>value.place)

// console.log(newArray);


// const dete = arr.map((value)=>value);
// console.log(dete)



// -----fillter-----
// const newArray = student.filter((value)=>value.id==='sandra'&& value.age===22);

// console.log(newArray);



// -----reduce----


// const arra =[10,150,25,13,36];

// const neArray = arra.reduce((value,total)=> value+total,0);

// console.log(neArray);


// ------find-----


// const neArray = student.find((value)=>value.id ==='sandra');

// console.log(neArray);


// ------sort-----



// const sortArray=['sandra','steevo','prinson','tessy'];

// const numberSort=[15,52,23,58,96,12,25];

// numberSort.sort();
// console.log(numberSort);


// const numSort=[5,8,10,12,14,16,58,98,79,49,56]

// const sortedArray=numSort.sort((a,b)=>a-b);

// console.log(sortedArray);


// sortArray.sort();

// console.log(sortArray);



// -------------es10 syntax-----


// const  nextedArray =[15,20,[25,35],21,33];

// console.log(nextedArray.flat(Infinity));



// -------es10 chaining-----------

// const employee={

//    id:1,
//    name:'sanjay',
//    place:'thrissur',
//    company:{
//       comName:'woxro'
//    }

// }
//    if(employee?.company?.comName);
//    {
//       console.log(employee.company.comName);

//    }
//  document.querySelector(".dom").style.color="green";


// console.log('hiiiii');



// setTimeout(()=>console.log('sandra'),5000);



// ----------callbacks------


console.log("hi 1");

function getDataFromAPI(callBack){

   setTimeout(() => {

      callBack("sandra");
      
   },2000);


}

getDataFromAPI((value)=>{

   console.log(value);
})

console.log("end");