import Todo from '../models/todoModel.js';

export const createTodo = async (req, res) => {
  try {
    const { task,category,dueDate,completed } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'title is required',
      });
    }

    const todo = await Todo.create({ task,category,dueDate,completed });

    return res.status(201).json({
      success: true,
      message: 'todo created successfully',
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'internal server error',
      error: error.message,
    });
  }
};

export const getAllTodos = async (req, res) => {

  try {
    const todos = await Todo.find();

    return res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'internal server error',
      error: error.message,
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { task,category,dueDate,completed } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { task,category,dueDate,completed }
    );

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'todo not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'todo updated successfully',
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'internal server error',
      error: error.message,
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'todo not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'todo deleted successfully',
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'internal server error',
      error: error.message,
    });
  }
};
