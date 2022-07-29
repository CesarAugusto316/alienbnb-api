import { Router } from 'express';
import {
  getAllTodos, getTodo, createTodo, checkBody, updateTodo, deleteTodo,
} from '../controllers/todosControllers.js';


export const todosRoutes = Router();

todosRoutes.route('/').get(getAllTodos).post(checkBody, createTodo);
todosRoutes.route('/:id').get(getTodo).patch(updateTodo).delete(deleteTodo);
