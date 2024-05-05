const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const childR = require('./Routes/ChildRoutes');
const teachersR = require('./Routes/TeachersRoutes');
const classR = require('./Routes/ClassRoutes');
const server = express(); 
const mongoose=require("mongoose");


//database
mongoose
  .connect("mongodb://localhost:27017/cloudDB")
  .then(() => {
    console.log("DB Connected");
    server.listen(5001, () => {
      console.log(" Server listening on port 5001");
    });
  })
  .catch((error) => {
    console.log("DB Connection problem " + error);
  });



// Routes

server.use( childR);
server.use( teachersR);
server.use( classR);


// app-> domain/chilren/children 

// Middleware to log request URL and method using morgan
server.use(morgan('dev'));

// Middleware for handling CORS
server.use(cors());

//Server creation
server.listen(8080, () => {
  console.log(" my app");
});


server.get('/sara',(request,response) => {
    throw new Error ('erorrr');
});


//First MW logging values
server.use((request, response, next) => {
  console.log("first MW", request.url, request.method);
  next();
});


// // Not Found MW
server.use((request, response) => {
  response.status(404).json({ message: "Not Found" });
});

// // Error MW
server.use((error, request, response, next) => {
  response.status(500).json({ Error: "Error " + error });
});
