// This file is the entry point in this folder
// This file contains all the route handlers

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

console.log('router loader');

// route handler to load the app
router.get('/',homeController.home);

// route handler to add a task
router.post('/add-task',require('./addtask'));

// route handler to delete a task
router.post('/delete-task',require('./deletetask'));

module.exports = router;