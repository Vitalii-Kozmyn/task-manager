import Task from '../models/taskModel.js';

export const createTask = async (req, res) => {
    try {
        const {description} = req.body;
        const userId = req.user._id;

        const taskObj = {
            description,
            createBy: userId,
        };

        const task = await Task.create(taskObj);

        return res.status(201).json(task);
    } catch(err) {
        res.starus(400).json({message: 'Failed to create the task'});
    }
}

export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;

        const task = await Task.findOneAndUpdate({_id: taskId, createBy: userId}, req.body, {
            new: true,
            runValidators: true,
        });

        if(!task) {
            return res.starus(404).json({message: 'Task not found'});
        }

        return res.status(201).json(task);
    } catch(err) {
        return res.starus(400).json({message: 'Failed to update the task'});
    }
}

export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;

        const task = await Task.findByIdAndDelete({_id: taskId, createBy: userId});

        if(!task) {
            return res.starus(404).json({message: 'Task not found'});
        }

        return res.status(201).json({message: 'Task deleted successfully'});
    } catch(err) {
        return res.starus(400).json({message: 'Failed to delete the task'});
    }
}

export const getTasksByUserId = async (req, res) => {
    try {
        const userId = req.user._id;

        const tasks = await Task.find({createBy: userId});

        return res.status(201).json(tasks);
    } catch(err) {
        return res.starus(400).json({message: 'Failed to get the task'});
    }
}

export const getTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;

        const task = await Task.findOne({_id: taskId, createBy: userId});

        if(!task) {
            return res.starus(404).json({message: 'Task not found'});
        }

        return res.status(201).json(task);
    } catch(err) {
        return res.starus(400).json({message: 'Failed to get the task'});
    }
}

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({createBy: userId});

        return res.status(201).json(tasks);
    } catch(err) {
        return res.starus(400).json({message: 'Failed to get the task'});
    }
}