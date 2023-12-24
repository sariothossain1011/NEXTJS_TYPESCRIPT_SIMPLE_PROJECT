'use client'
import { useTodots } from '@/store/Todos'
import { useSearchParams } from 'next/navigation';
import React, { Fragment } from 'react'

const Todo = () => {
    const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodots();
    console.log(todos)
    let filterTodos = todos;
    const localStorageTodo = localStorage.getItem("todos");
    console.log("localStorageTodo", localStorageTodo)

    const searchParams = useSearchParams();

    const todosFilter = searchParams.get("todos");
    if (todosFilter === "active") {
        filterTodos = filterTodos.filter((todo) => !todo.completed)
    } else if (todosFilter === "completed") {
        filterTodos = filterTodos.filter((todo) => todo.completed)
    }
    return (
        <Fragment>
            <ul>
                {
                    filterTodos.map((todo) => {
                        return (
                            <li key={todo.id} className=' max-w-full shadow-md rounded-md flex bg-dark-light-900 justify-between text-center py-2 my-4 px-10'>
                                    <input className=' align-middle ' type='checkbox' name='' id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)} />
                                    <label className=' text-lg font-spaceGrotesk' htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                   
                                {
                                    todo.completed && (
                                        <button className=' bg-red-600 text-white  px-3  font-serif rounded-sm' type='button' onClick={() => handleTodoDelete(todo.id)}>Delete</button>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
}

export default Todo