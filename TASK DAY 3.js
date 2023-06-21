//TASK 1
const details={
    /*address:{
        street: 'second street',
        city:'coimbatore',
    }*/
    city:'coimbatore',
};
console.log(details.address.city);
console.log(details.name);
//OPTIONAL CHAINING
const task={
    city:'Salem'
};
console.log(task.add?.city);


//TASK 2
function taskk(num1,num2){
    if(typeof num1 && typeof num2=='number'){
        console.log(num1+num2);
    }   
    else{
        console.log("invalid number");
    }
}
taskk(5,9);



//TASK 3
function taskkk(num1,num2){
    if(typeof num1 !='number' || typeof num2!='number'){
        return 'Invalid Number';
    }   
        return console.log(num1+num2);
}
console.log(taskkk('jhnd',7));


//TASK 4
let names=['tharun','ashwin','kanishkar','akilan','anirudh'];
names.splice(names.length,0,'balasurya','harish');
console.log(names);
console.log(names[6].slice(1,names[6].length));




//TASK 5 TO PRINT ARISH
let na='Harish';
console.log(na.slice(1,na.length));



//TASK 6
let names2="madhi akshaya priya ishwarya saranya";
//Task: "Madhu Akshaya Priya Ishwarya Saranya"
let res=names2.split(' ');
for(key in res){
    res[key]=res[key].charAt(0).toUpperCase()+res[key].slice(1);
}
console.log(res.join(" "));



