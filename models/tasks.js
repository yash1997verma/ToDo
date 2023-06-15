const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema(    
    {
        description: String,
        taskType: String,
        date: String,
        checked: Boolean
    }
  
);
const task = mongoose.model('Task', taskSchema);


module.exports = task;