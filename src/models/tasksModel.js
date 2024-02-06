const connection = require('./connection')

const getAll = async () => {
    const query = 'SELECT * from tasks';

    const [tasks] = await connection.execute(query)
    return tasks;
}

const createTask = async (title) => {
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks (title, status, created_task) VALUES (?, ?, ?)';

    const [createTask] = await connection.execute(query, [title, 'pendente', dateUTC]);
    return { insertId: createTask.insertId };
}

const deleteTask = async (id) => {
    const query = 'DELETE FROM tasks WHERE id = ?';

    const [removedTask] = await connection.execute(query, [id]);
    return removedTask;
}

const updateTask = async (id, title, status) => {
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updatedTask;
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}