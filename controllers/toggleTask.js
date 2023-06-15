//setting up DB
const mongoose = require('../config/mongoose');
const Task = require('../models/tasks');



module.exports.toggle = async (req, res) => {
  try {
      
    const taskId = req.params.taskId;

    // Find the task by its ID
    const task = await Task.findById(taskId);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    // toggle the task
    const isChecked = task.checked;
    task.checked = (!isChecked);

    // Save the updated task
    await task.save();

    return res.redirect('back');
  
  } catch (error) {
      console.error('Error toggling task:', error);
      return res.send(`Unable to toggle task`);
  }
};