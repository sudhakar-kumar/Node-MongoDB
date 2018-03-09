// Demo of fs (File System) Module. Reading JSON file.  
   
    const fs = require('fs'); 

    fs.readFile("./storedDataType1.json","UTF-8",function(err,data){

    if(err) throw err;

    var parsedData=JSON.parse(data); //Parsing JSON data, inorder to make it an object 
    console.log(parsedData.empName); // parsedData["empName"] - Another way of accessing 'empName'
//  console.log(parsedData[1].empName); //Accessing Array elements
    
});



