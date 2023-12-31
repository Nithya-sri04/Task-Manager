const express = require('express');
const { getAllTasks,Createtasks, getTask,updateTask,deleteTask } = require('../controllers/tasks');

const router = express.Router();

router.route('/').get(getAllTasks).post(Createtasks)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router