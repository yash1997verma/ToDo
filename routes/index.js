// we will use express router to divide the routes and Controllers
const express = require('express');
const  router  = express.Router();


//middleware
router.use(express.urlencoded({ extended: true }));

//contollers
const homeController= require('../controllers/home_controller');
const tasksController = require('../controllers/tasksController');
const toggleTask = require('../controllers/toggleTask');

//routes
router.get('/', homeController.home);
router.post('/tasks', tasksController.tasks);
router.post('/tasks/toggle/:taskId', toggleTask.toggle);






module.exports = router;