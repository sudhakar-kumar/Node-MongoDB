//This file would walk you through the path settings on NodeJS

var path=require('path');

// '__dirname' is a global object which returns path of the current app directory

/* 
Linux Style path :

 var samplePath1=__dirname+"/public/form.html" # Works fine on Linux Machine; Not recommended though;  
 console.log(samplePath1);                 --> # D:\Testnode/public/form.html <-- On Windows Machine                                              

*/

/* 
Windows Style path : 

var samplePath2=__dirname+"\public\form.html" # Does not work on Windows Machine properly,check below output; 
console.log(samplePath2);                 --> # D:\Testnodepublic♀orm.html <-- 

*/

//  Both of the above style of defining a 'path' is messed up and needs an alternative solution. 
//  Solution : NodeJS has 'path' module which can perform the exact task irrespective of platform(Linux/Windows).
//  Implementaion -1. Require 'path' module; this is an inbuilt module
//                 2. use method 'join' i.e path.join('dirname1','dirname2','filename.extension') 
//  Example :

            console.log(path.join(__dirname,'public','form.html')); 


/*  Incase if we are presented with a messed up path as like D:\Testnode/public/form.html 
    we can use path.normalize('path') method to clear it.
    Example :
*/
            var messedUpPath= "D:\Testnode/public/form.html";
            console.log(path.normalize(messedUpPath));

//We can also use path.resolve('/file.txt') to get absolute path of the file.
