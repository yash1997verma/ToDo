//starting up express
const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/', require('./routes'))

//setting up view engine
app.set('view engine','ejs');
app.set('views', './views');

//middleware
app.use('/assets', express.static('assets'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting up DB
const mongoose = require('./config/mongoose');
const Task = require('./models/tasks');


app.listen(port, (err)=>{
  if(err){ console.log(`Error ${err}`)}
  console.log(`Server is running on port: ${port}`);
})






