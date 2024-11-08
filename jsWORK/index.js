// console.log("hello world!");
// function fun(a,b){
//     return a+b;
// }
// console.log(fun(8,4));

const button = document.getElementById("btn");
console.dir(button);

function selectlang(lang){
    console.log("hi");
    let data;
    if(lang=="c"){
        function ccompliler(){
            return "C Complier";
            }
 data = ccompliler();
 return data;
        }
        else{
            function javacompliler(){
                return "Java Complier";
            }
            data = javacompliler();
            return data;
        }
}
//console.log(selectlang("java"));