import { RequestHandler } from "express";
import { Tasks } from "../models/task";

// Get All Tasks
export const getAllTasks: RequestHandler = async (req, res, next) => {
  let taskList: Tasks[] = await Tasks.findAll();
  res.status(200).json(taskList);
};

// Get One Rant
export const getTask: RequestHandler = async (req, res, next) => {
  let itemId = req.params.taskId;
  let taskItem: Tasks | null = await Tasks.findByPk(itemId);
  res.status(200).json(taskItem);
};

// Add A Rant
export const addTask: RequestHandler = async (req, res, next) => {
  let newTask: Tasks = req.body;

  if (newTask.taskTitle) {
    let created = await Tasks.create(newTask);
    res.status(201).json(created);
  } else {
    res.status(400).send();
  }
};

// Edit Existing Rants
export const editTask: RequestHandler = async (req, res, next) => {
  let taskId = req.params.taskId;
  let taskBody: Tasks = req.body;

  let taskFound = await Tasks.findByPk(taskId);

  if (taskFound) {
    await Tasks.update(taskBody, {
      where: { taskId: taskId },
    });
  } else {
    res.status(404).send();
  }
};

// Delete A Rant
export const deleteTask: RequestHandler = async (req, res, next) => {
  let itemId = req.params.taskId;

  let taskFound = await Tasks.findByPk(itemId);

  if (taskFound) {
    await Tasks.destroy({ where: { taskId: itemId } }).then((response) => {
      res.status(200).json();
    });
  } else {
    res.status(404).send();
  }
};
