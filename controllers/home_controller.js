//setting up DB
const mongoose = require('../config/mongoose');
const Task = require('../models/tasks');


module.exports.home = async function(req, res){
  try{
    const tasks = await Task.find({});
   
    return res.render('home', 
    {   
      title: "ToDo",
      task_list : tasks
    });
  }catch(error){
    console.log(`Unable to add task ${error}`) ;   
  }
   
}




//****************Try this later to scale project *****************/

//create two var here where you keep count of pending and completed task, which you can pass to res.render, 
// which in turn will be available as locals in the ejs file

// const getPendingTaskCount = async () => {
//   try {
//     const count = await Task.countDocuments({ checked: false });
//     return count;
//   } catch (error) {
//     console.error('Error getting pending task count:', error);
//     return 0; // Return 0 in case of an error
//   }
// };
  
// const getCompletedTaskCount = async () => {
//   try {
//     const count = await Task.countDocuments({ checked: true });
//     return count;
//   } catch (error) {
//     console.error('Error getting completed task count:', error);
//     return 0; // Return 0 in case of an error
//   }
// };
  
  
// const updateCounts = async () => {
//   let pendingCount = await getPendingTaskCount();
//   let completedCount = await getCompletedTaskCount();

//   console.log('Pending Tasks:', pendingCount);
//   console.log('Completed Tasks:', completedCount);
// };
  
// updateCounts();

// module.exports.home = async function(req, res){
//     try{
//       const tasks = await Task.find({});
//       const pendingCount = await getPendingTaskCount();
//       const completedCount = await getCompletedTaskCount();
//       return res.render('home', 
//       {   
//           title: "ToDo",
//           task_list : tasks,
//           pending: pendingCount,
//           completed: completedCount
//       });
//     }catch(error){
//         console.log(`Unable to add task ${error}`) ;   
//     }
   
// }
