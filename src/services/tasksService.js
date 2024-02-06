const tasksModel = require('../models/tasksModel');

const getAll = async () => {
    const tasks = await tasksModel.getAll();
    return tasks;
}

const createTask = async (task) => {
    const { title } = task.body;
    const createTask = await tasksModel.createTask(title);
    return createTask;
}

const deleteTask = async (task) => {
    const { id } = task.params;
    await tasksModel.deleteTask(id);
}

const updateTask = async (task) => {
    const { id } = task.params;
    const { title, status } = task.body;
    await tasksModel.updateTask(id, title, status);
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}