//TASK PALINDROME
let str="hello";
let str1="radar";
function pal(str){
    if(str.split("").reverse().join("")==str){
        console.log("The given string is a palindrome");
    }
    else{
        console.log("The given string is not a palindrome");
    }
}
pal(str);
pal(str1);

//TASK PLAINDROME WITHOUT BUILTIN
let str3="helloworld";
let stringg=str3.split("");
let ans=[];
for(i in stringg){
    var char=stringg.pop();
    ans.push(char);
}
ans=ans.join("");
if(ans==str){
    console.log("It is a palindrome");
}
else{
    console.log("It is not a palindrome");
}

//FOR IN LOOP for objects
let obj={
    a:1,
    b:2,
    c:3,
    d:4
}
for(i in obj){
    console.log(obj[i]); 
}

//FOR OF LOOP FOR ARRAYS
let arr=[15,65,541,95,65];
for(val of arr){
        console.log(val);
}

//ARRAY CALLBACK METHODS(forEach)
//FOrEach loop takes callback function as argument
let names=['tara','ved','jared','mick','zeke'];
names.forEach((ele)=>{
    console.log(ele);
})

let names1=['tara','ved','jared','mick','zeke'];
names.forEach((ele)=>{
    console.log(ele.repeat(2));
})

let arrayy=[1,2,3,4,5];
arrayy.forEach((elem)=>{
    console.log(elem*elem);
})

//ony one argument then brackets are optional 
let arrayyy=[978,556,875,6521,52];
arrayyy.forEach( eleem =>{
    console.log(eleem);
})

//WITHOUT CURLY BRACES
let arrrayyy=[0,0,0,0,0,0];
arrrayyy.forEach(eleem =>console.log(eleem));

//MAP() RETURNS THE ANSWERS AS AN ARRAY
let arr4=names1.map(ele=>{return ele.repeat(2)});
console.log(arr4);

//ARROW FUNCTION SINGLE STATEMENT RETURN STATEMENT OPTIONAL
let arr5=names.map(ele=> ele.repeat(5));
console.log(arr5);

//FILTER() EVALUATES WHETHER THE ANSWER IS TRUE OR FALSE AND ONLY THE TRUE ANSWERS WILL BE PUSHED INTO AN ARRAY
let numarr=[1,2,3,4,5,6,7,8,9];
let answer=numarr.filter(ele=>ele%2); //0 is false and 1 is true
console.log(answer);

//PRINTING EVEN NUMBERS
let num_arr=[1,2,3,4,5,6,7,8,9];
let an=numarr.filter(ele=>!(ele%2)); //0 is false and 1 is true
console.log(an);

let numrr=[1,2,3,4,5,6,7,8,9];
let anss=numrr.filter(ele=>{return 100}); //because its a true value
console.log(anss);

//EMPTY STRING,NULL,UNDEFINED,0 ARE ALL FALSE VALUES


//ARRAY OF OBJECTS IT IS HETEROGENEOUS
//TASK
let names_obj=[
    {
        name:'mahesan',
        dob:2002
    },
    {
        name:'ajay',
        dob:2003
    },
    {
        name:'bala',
        dob:2004,
    },
    {
        name:'surya',
        dob:2004,
    }
]; //OUTPUT:[ajay,bala,surya]

//SOLUTION USING MAP
let ress_names=names_obj.map(ele=>{
    if((ele.dob)>=2003){
       return ele.name;
    }
});
console.log(ress_names);

//SOLUTION USING FILTER
let res_names=names_obj.filter(ele=> ele.dob>=2003);
let namess=res_names.map(ele=>ele.name);
console.log(namess);

//SHORTER METHOD
let resS_names=names_obj.filter(ele=> ele.dob>=2003).map(ele=>ele.name);;
console.log(resS_names);

 
//SHALLOW COPY

const array=[1,2,3,4,5]; //we do not change the reference we only change the values
array[3]=500;
console.log(array);

const ar=[1,2,3,4,5,6,7,8,9];
const array4=ar;
ar[2]=400;
console.log(array4,ar);

//USING SPREAD OPERATOR DEEP COPY
const aar=[1,2,3,4,5,6,7,8,9];
const rr9=[...aar];
aar[2]=200;
console.log(aar,rr9);


//DEEP COPY
const obj_cp={
    name:'sece',
    year:2003,
}
const obj_cp2={...obj_cp};

obj_cp.year=2024;
console.log(obj_cp,obj_cp2);

//OVERRIDE OF FIELDS
object_cp3={
    name:'sece',
    year:'2003',
    name:'sri eshwar'

};
console.log(object_cp3);


//TASK: employee name age salary phoneno
//return an array of objects whose salary is >=25000 with the fields name and age only
let empp=[{
    name:'Ved',
    age:25,
    salary:40000,
    phoneno:9875643258
},
{
    name:'Mick',
    age:23,
    salary:24000,
    phoneno:8965472658
},
{
    name:'Jared',
    age:24,
    salary:27000,
    phoneno:8965152658
},
{
    name:'Katherine',
    age:22,
    salary:35000,
    phoneno:9654286347
},
{
    name:'Hayley',
    age:28,
    salary:20000,
    phoneno:8564235741
}];
let emp_res=empp.filter(ele=>ele.salary>=25000).map(ele=>{
    return {name:ele.name,age:ele.age}
});
console.log(emp_res);


//De-structuring array elements(unpacking values)
let arr_nums=[10,20,30,40,50];
let[a,b,c,d,e]=arr_nums;
console.log(a,b,c,d,e);

//extra elements
let arrr_nums=[10,20,30,40,50,60,70,]; 
let[a1,b1,c1,d1,e1]=arr_nums;
console.log(a1,b1,c1,d1,e1); //the remaining elements will not be unpacked

//REST OPERATOR
let arra_nums=[10,20,30,40,50,60,70,]; 
let[n1,n2,n3,n4,...n5]=arra_nums;
console.log(n1,n2,n3,n4,n5);

//SKIPPING 
let nums=[10,20,60,80,40];
let [m1,m2, ,m3,m4]=nums;
console.log(m1,m2,m3,m4);

//TASK
let number=[10,20,30,40,50,60,70,80,90,100];
let [k1,k2, ,k3,k4,...k5]=number;
console.log(k1,k2,k3,k4,k5);

//in de-structuring the rest operator should be present in the last orelse an error occurs

/*let numbers=[10,20,30,40,50,60,70,80,90,100];
let [g1,g2,g3,...g4,g15]=numbers;
console.log(k1,k2,k3,k4,k5);*/ 


//DE-STRUCTURING IN OBJECTS
let obj1={
    clg_name:'sece',
    year:2024,
    city:'cbe'
};
let {clg_name,year,city}=obj1;
console.log(clg_name,year,city); //feild names and variable names must match to unpack

let obj2={
    clgname:'sece',
    yearof:2024,
    cityy:'cbe',
    dept:'cse',
    lpa:'20lpa'
};
let {clgname,yearof,cityy,...rest}=obj2;
console.log(clgname,yearof,cityy,rest);

//changing field names

let obj3={
    clgname:'sece',
    yearr:2024,
    citty:'cbe',
    dept:'cse',
    lpa:'20lpa'
};
let {clgname:college,yearr,citty,...rem}=obj3; //re-name operator:
console.log(college,yearr,citty,rem);

//when the field is not in the object and the user needs it as default we use = operator
let obj4={
    colllege:'hindustan',
    grad:2025,
    place:'cbe',
};
let {colllege,grad,place,color="green"}=obj4;
console.log(colllege,grad,place,color);

//when the field is already inside the object and the user assigns the field again, then the value of the field inside the object gets printed
let obj5={
    col:'hindustan',
    gradd:2025,
    plac:'cbe',
    colour:'yellow'
};
let{col,gradd,plac,colour='green'}=obj5;
console.log(col,gradd,plac,colour);

//TASK
//setTimeout(()=> console.log("hello everyone"),3000);
//syntax:(function,milliseconds)

//Every three seconds the string must be printed
//setInterval(()=> console.log("hello everyone"),100);

console.log("iswariya");
setTimeout(()=> console.log("hello everyone"),0); //asynchronous call
console.log('Gunasekaran');

//PROMISE (to convert asynchronous to synchronous)
//three states:pending,resolve,reject


/*const abc=fetch('https://jsonplaceholder.typicode.com/todos') //fetch returns a promise
abc.then((resolve)=>console.log(resolve.json())); //without json it gives a readable stream format which can only be read by the computer.*/

//using functions
const promisex=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve('resolved');
   },4000)
})
promisex
.then((ele)=>console.log(ele))
.catch(()=>console.log("error"));

//async and await
const apiCall=async()=>{
    try{
    const promise_from_api=await fetch('https://jsonplaceholder.typicode.com/todos');
    const data=await promise_from_api.json();
    console.log(data);
}catch(error){ //argument is mandatory
    console.log(error);
   }
}
apiCall();