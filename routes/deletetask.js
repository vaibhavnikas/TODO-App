// route handler for deleting a task

const express = require('express');
const router = express.Router();

const deletetask_controller = require('../controllers/deletetask_controller');

router.use('/',deletetask_controller.deletetask);

module.exports = router;