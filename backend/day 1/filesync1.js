const fs=require("node:fs");
function myReadFile(){
    try{
        const data =fs.readFileSync("dummy.txt","utf-8");
        console.log("file data:",data);// data.toString() or using utf-8
    }
    catch(err){
        console.log("file reading error:",err.message);
    }
}
myReadFile();
const myWriteFile=(data)=>{
    try{
        fs.writeFileSync("dummy.txt",data);
        console.log("Succesfully written in file");
    }
    catch(err){
        console.log("file writing error:",err.message);
    }


}
const myAppendFile=()=>{
    try{
        fs.appendFileSync("dummy.txt",data);
        console.log("file appended succesfully");
    }
    catch(err){
        console.log("file cannot be modified",err.message);
    }
}
const myDeleteFile=(filename)=>{
    try{
        fs.unlinkSync(filename);
        console.log("file delete succesfully",filename);
    }
    catch(err){
        console.log("file not deleted",err.message);
    }
}
const data="how are you"
//myWriteFile(data);
//myAppendFile(data);
//myDeleteFile("dummy.txt");
//myReadFile();
module.exports={
    myReadFile:myReadFile,
    myWriteFile:myWriteFile,
    myAppendFile:myAppendFile,
    myDeleteFile:myDeleteFile,
    username:"harshit",
}




