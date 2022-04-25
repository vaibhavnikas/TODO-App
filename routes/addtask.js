// route handler for adding a task

const express = require('express');
const router = express.Router();

const addtask_controller = require('../controllers/addtask_controller');

router.use('/',addtask_controller.addtask);

module.exports = router;