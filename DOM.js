//DOM - DOCUMENTT OBJECT MODEL
//TAKES THE HTML FILE AND CHANGES INTO A OBJECT OR A TRREE STRUCTURE

//document.body.innerText='Tanjiro'; //to print the text in the braces inside the browser
//console.log(document.body.childNodes); //gives the detailed steps and nodes 
//console.log(document.body.children);//gives only the elements
//document.body.innerText='<div>Tanjiro</div>'; //prints along with the tage
/*document.body.innerHTML='<div>Demon Slayer</div>'; //ignores the tag
document.body.style.backgroundColor='lightblue';
document.body.style.color="brown";*/


//document.body.innerText='hello'; as it is pointing the whole body tag,it will nullify the whole content in the body tag and will print only this statement
// console.log(document.body.children);
// const childd=document.body.children;
// child[0].style.color='brown';
// child[1].style.color='blue';
// child[2].style.color='pink';

/*console.log(document.body.children);
const child=document.body.children;
setTimeout(()=>{
        child[0].style.color='red';
        child[0].innerText='RED';

},3000);
setTimeout(()=>{
    child[1].style.color='orange';
    child[1].innerText='ORANGE';
    },3000);
setTimeout(()=>{
    child[2].style.color='green';
    child[2].innerText='GREEN';
},3000);*/

//using set interval

// console.log(document.body.children);
// const child=document.body.children;
// setTimeout(()=>{
//     child[0].innerText='RED';
//     child[0].style.color='blue';

// },3000)
// let value_refresh=true;
// setInterval(()=>{
//   child[0].style.color=(value_refresh ? "blue" : "pink");
//   value_refresh=!value_refresh;
// },3000);



// setTimeout(()=>{
//     child[1].innerText='YELLOW';
//     child[1].style.color='yellow';

// },3000)
// let valuee_refresh=true;

// setInterval(()=>{
//     child[1].style.color=(valuee_refresh ? "yellow" : "red");
//   valuee_refresh=!valuee_refresh;
//     },3000);


//     setTimeout(()=>{
//         child[2].innerText='GREEN';
//         child[2].style.color='green';
    
//     },3000)
//     let valueee_refresh=true;
    
//     setInterval(()=>{
//         child[2].style.color=(valueee_refresh ? "brown" : "purple");
//       valueee_refresh=!valueee_refresh;
//         },3000);

// const tag=document.getElementsByClassName('hi');
// tag[0].innerText='I am the king of the pirates';

// const tag1=document.getElementById('unique');
// tag1.innerText='I AM MONKEY D LUFFY';
    

const button=document.getElementById('login_button');
const username=document.getElementById('user');
const password=document.getElementById('pass');
const form=document.getElementById('login');

button.addEventListener('click',(event)=>{
    console.log('click');
})
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('submit',username.value,password.value);
})





