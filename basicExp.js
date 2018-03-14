// Demo of ExpressJS - A framework of NodeJS
// Install the express module using 'npm install express'

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Getting Started with Express JS");
});

app.listen(4500);