"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.editTask = exports.addTask = exports.getTask = exports.getAllTasks = void 0;
const task_1 = require("../models/task");
// Get All Tasks
const getAllTasks = async (req, res, next) => {
    let taskList = await task_1.Tasks.findAll();
    res.status(200).json(taskList);
};
exports.getAllTasks = getAllTasks;
// Get One Rant
const getTask = async (req, res, next) => {
    let itemId = req.params.taskId;
    let taskItem = await task_1.Tasks.findByPk(itemId);
    res.status(200).json(taskItem);
};
exports.getTask = getTask;
// Add A Rant
const addTask = async (req, res, next) => {
    let newTask = req.body;
    if (newTask.taskTitle) {
        let created = await task_1.Tasks.create(newTask);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};
exports.addTask = addTask;
// Edit Existing Rants
const editTask = async (req, res, next) => {
    let taskId = req.params.taskId;
    let taskBody = req.body;
    let taskFound = await task_1.Tasks.findByPk(taskId);
    if (taskFound) {
        await task_1.Tasks.update(taskBody, {
            where: { taskId: taskId },
        });
    }
    else {
        res.status(404).send();
    }
};
exports.editTask = editTask;
// Delete A Rant
const deleteTask = async (req, res, next) => {
    let itemId = req.params.taskId;
    let taskFound = await task_1.Tasks.findByPk(itemId);
    if (taskFound) {
        await task_1.Tasks.destroy({ where: { taskId: itemId } }).then((response) => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
};
exports.deleteTask = deleteTask;
