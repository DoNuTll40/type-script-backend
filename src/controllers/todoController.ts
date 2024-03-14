
import { NextFunction, Request, Response } from "express";
import createError from "../utils/createError";
import * as todoService from "../services/todoService";

export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const todos = await todoService.getAllTodos();
        res.json({ todos, message: "Get all todos" })
    }catch(err){
        next(err)
    }
}

export const createTodoList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { todo_title } = req.body;

        if (!todo_title || typeof todo_title !== "string"){
            return createError("Incorrect todo title", 400)
        }

        const todos = await todoService.createTodo({ todo_title })

        res.json({ todos, message: "Create todo success!" })

    }catch(err){
        next(err)
    }
}

export const deleteTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { todoId } = req.params;

        const checkTodo = await todoService.getTodoById(todoId);

        if(!checkTodo){
            return createError("todo not found", 400)
        }

        const todos = await todoService.deleteTodo(todoId);

        res.json({ todos, message: "Delete todo success!" })
    }catch(err){
        next(err)
    }
}