import express from 'express';
import { handleLogin, profile, signup } from '../controller/authController.js';
import {
  createTodo,deleteTodo,getAllTodos,updateTodo} from '../controller/todoController.js';
import checkAuth from '../middleware/checkAuth.js';
import { logout } from '../controller/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', handleLogin);
router.put('/profile/:id', checkAuth, profile);
router.post('/logout', logout);


router.post('/todos', checkAuth, createTodo);
router.get('/todos', checkAuth, getAllTodos);
router.put('/todos/:id', checkAuth, updateTodo);
router.delete('/todos/:id', checkAuth, deleteTodo);

router.use((req, res) => {
  res.status(404).send('404- page not found');
});

export default router;