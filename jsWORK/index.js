// console.log("hello world!");
// function fun(a,b){
//     return a+b;
// }
// console.log(fun(8,4));

// const output = document.getElementById("output");
// console.dir(output);

// const button = document.getElementById("btn");
// console.dir(button);

// const select=document.getElementById("select");
// console.dir(select);
// console.log(select.value);

// function selectlang(lang){
//     console.log("hi");
//     output.innerHTML="<h2>welcome to home page</h2>"
//     let data;
//     if(lang=="c"){
//         function ccompliler(){
//             return "C Complier";
//             }
//  data = ccompliler();
//  return data;
//         }
//         else{
//             function javacompliler(){
//                 return "Java Complier";
//             }
//             data = javacompliler();
//             return data;
//         }
// }
// button.addEventListener("click",()=>{
//     const comp=selectlang(select.value);
//     output.innerHTML=`<h2 style=color:red>${comp}</h2>`;
//     console.log(comp);
// });//only use click of onclick and every other things

// //console.log(selectlang("java"));
// const mypromise=new Promise(
//     (resovle,reject)=>{
//         let a = 40;
//         if(a>20)
//         {
//             resovle({name:"HARSHIT SRIASTAVA",branch:"IT"});

//         }
//         else{
//             reject("Data is rejected");
//         }
            
        
//     }
// );
// mypromise.then(msg=>console.log(msg.name))
// .catch(error=>console.log(error))
// .finally(()=>console.log("finally executed"));
const output=document.getElementById('output');
const data=fetch("https://dummyjson.com/recipes");
data.then(
    (res)=>{
        console.log(res);
        res.json().then(
            (response)=>{
                console.log(response.recipes[0]);
                const st=response.recipes[0].id+" "+response.

            }
        )
    }
)