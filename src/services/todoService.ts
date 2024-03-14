
import { Prisma } from "@prisma/client";
import prisma from "../configs/prisma";
import createError from "../utils/createError";

export const getAllTodos = () => {
    return prisma.todo.findMany({
        orderBy: {
            createAt: "desc"
        }
    })
}

export const createTodo = (todo_title: Prisma.TodoCreateInput) => {
    return prisma.todo.create({
        data: todo_title
    })
}

export const deleteTodo = (todo_id: string) => {
    if(isNaN(Number(todo_id))){
        return createError("Id should be number", 400)
    }

    return prisma.todo.delete({
        where: {
            todo_id: Number(todo_id)
        }
    })
}

export const getTodoById = (todo_id: string) => {
    if(isNaN(Number(todo_id))){
        return createError("Id should be number", 400)
    }

    return prisma.todo.findFirst({
        where: {
            todo_id: Number(todo_id)
        }
    })
}