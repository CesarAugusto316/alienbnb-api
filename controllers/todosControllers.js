import { Todo } from '../models/todoModel.js';

/**
 *
 * @type {import("express").RequestHandler}
 */
export const getAllTodos = async (__, res) => {
  try {
    const allTodos = await Todo.find();
    res.status(200).json({
      status: 'success',
      size: allTodos.length,
      allTodos,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

/**
 *
 * @type {import("express").RequestHandler}
 */
export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json({
      status: 'success',
      todo,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

/**
 *
 * @type {import("express").RequestHandler}
 */
export const checkBody = (req, res, next) => {
  if ('todo' in req.body) {
    next();
  } else {
    res.status(409).json({
      status: 'fail',
      message: 'You must provide a todo',
    });
  }
};

/**
 *
 * @type {import("express").RequestHandler}
 */
export const createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    const allTodos = await Todo.find();

    res.status(201).json({
      status: 'success',
      size: allTodos.length,
      allTodos,
      todo: newTodo,
    });
  } catch (error) {
    res.status(409).json({
      status: 'fail',
      message: error.message,
    });
  }
};

/**
 *
 * @type {import("express").RequestHandler}
 */
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo
      .findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    res.status(201).json({
      status: 'success',
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(409).json({
      status: 'fail',
      message: error.message,
    });
  }
};

/**
 *
 * @type {import("express").RequestHandler}
 */
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    const allTodos = await Todo.find();

    res.status(200).json({
      status: 'success',
      size: allTodos.length,
      allTodos,
      todo: null,
    });
  } catch (error) {
    res.status(409).json({
      status: 'fail',
      message: error.message,
    });
  }
};
