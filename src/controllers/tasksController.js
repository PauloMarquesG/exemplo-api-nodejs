const tasksService = require('../services/tasksService');

const getAll = async (_req, res) => {
    const tasks = await tasksService.getAll();
    return res.status(200).json(tasks);
}

const createTask = async (req, res) => {
    const createTask = await tasksService.createTask(req);
    return res.status(201).json(createTask);
}

const deleteTask = async (req, res) => {
    await tasksService.deleteTask(req);
    return res.status(204).json();
}

const updateTask = async (req, res) => {
    await tasksService.updateTask(req);
    return res.status(204).json();
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}