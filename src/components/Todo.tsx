'use client'
import { useTodots } from '@/store/Todos'
import React, { Fragment } from 'react'

const Todo = () => {
    const {todos,toggleTodoAsCompleted,handleTodoDelete} = useTodots();
    console.log(todos)
    let filterTodos = todos
  return (
    <Fragment>
        <ul>
        {
            filterTodos.map((todo)=>{
                return(
                    <li key={todo.id}>
                        <input type='checkbox' name='' id={`todo-${todo.id}`} checked={todo.completed} onChange={()=>toggleTodoAsCompleted(todo.id)}/>

                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <button type='button' onClick={()=>handleTodoDelete(todo.id)}>Delete</button>
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