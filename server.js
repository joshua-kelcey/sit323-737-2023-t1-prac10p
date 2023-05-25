'use strict';
const express = require("express");
const PORT = 3040;
const app = express();

app.get('/', (req, res) => {        
  res.send("Welcome to my docker server!");
}); 

app.listen(PORT, ()=> {
      console.log(`Running on Port:${PORT}`);
  })
  
