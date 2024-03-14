
import express from 'express';
import * as todoController from '../controllers/todoController';

const router = express.Router();

router.get('/', todoController.getTodos)
router.post('/', todoController.createTodoList)
router.delete('/:todoId', todoController.deleteTodos)

export default router;