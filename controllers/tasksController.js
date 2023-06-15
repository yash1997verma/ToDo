//setting up DB
const mongoose = require('../config/mongoose');
const Task = require('../models/tasks');
const moment = require('moment');

//using nested try catch blocks to handle Add and Delete buttons of same form
module.exports.tasks = async function(req, res) {
  try {
    const action = req.body.action;

    if (action === 'Add Task') {
      try {
       
        const newTask = new Task({
          description: req.body.description,
          taskType: req.body.taskType, 
          date: req.body.date,
          checked: false

        })
        const savedTask = await newTask.save();
        // console.log(`Task added ${savedTask}`);
        return res.redirect('back');
        
      } catch (error) {
        console.error('Error occurred while adding task:', error);
        // Handle the error specific to adding a task
        res.status(500).send('Error occurred while adding task');
      }
    } else if (action === 'Delete Task') {
      try {
        const deleted = await Task.deleteMany({ checked: true }); //all checked doc will be removed, return count

        // console.log(`Task Deleted ${deleted}`);
        return res.redirect('back');
      } catch (error) {
        console.error('Error occurred while deleting task:', error);
        res.status(500).send('Error occurred while deleting task');
      }
    }
  } catch (error) {
    //this is for a general error
    console.error('General Error occurred:', error);
    res.status(500).send('General Error occurred');
  }
};
