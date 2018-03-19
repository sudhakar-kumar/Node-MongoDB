/*
 * Working with form data using ExpressJS
 * 1.Acessing the form page with GET request 
 * 2.Inserting the form data using POST request
 * 3.Collecting / Gathering those data in chunks from form 
 * 4.Parsing data-in-chunks into JSON object 
 * 5.Accessing a property/field using json object 
 * 
 */

var express = require('express');           // ExpressJS framework
var app = express();                        // Instance of express
var path = require('path');                 // path module - to work with paths
var querystring = require('querystring');   // To convert/parse data into a json object from querystring


app.listen(3000,() =>{
    console.log("Server running at port 3000");
});

app.get('/',(req,res) => {
    res.send("Not a valid url request");
});

app.get('/form',(req,res) => {
    res.status(200);
    res.sendFile(path.join(__dirname,"public","form.html"));
});

app.post('/',(req,res) => {
    
     var data = "";
     req.on("data",(chunk) => { 
        //Collecting data in chunks 
        data += chunk; 
     });

     req.on("end",(chunk) => {
         console.log(data); // empid=111&empname=chandan+mandal&empdept=CSR
         var parsedData=querystring.parse(data); //{ empid: '111', empname: 'chandan mandal', empdept: 'CSR' }
         console.log(parsedData); //
         console.log(parsedData.empid);// 111
     });
     
});

