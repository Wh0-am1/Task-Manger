const Tasks = require("../model/task");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getOneTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Tasks.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `not found with id:${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  console.log(req.body);
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Tasks.deleteOne({ _id: taskID });
    if (!task.deletedCount) {
      return res.status(404).json({ msg: `not found with id:${taskID}` });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Tasks.updateOne({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(task);
    if (!task) {
      return res.status(404).json({ msg: `not found with id:${taskID}` });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createTask,
  deleteTask,
  updateTask,
  getAllTask,
  getOneTask,
};
