const{ myReadFile,myWriteFile,myAppendFile,myDeleteFile,username}=require("./filesync1");
myReadFile();
const data ="my fsd class";
myWriteFile(data);
myReadFile();
myAppendFile(data);
myReadFile();
myDeleteFile("dummy.txt");
console.log("username=",username);


