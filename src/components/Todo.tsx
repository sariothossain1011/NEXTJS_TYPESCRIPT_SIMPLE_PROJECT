'use client'
import { useTodots } from '@/store/Todos'
import React, { Fragment } from 'react'

const Todo = () => {
    const {todos} = useTodots();
    console.log(todos)
    let filterTodos = todos
  return (
    <Fragment>
        <ul>
        {
            filterTodos.map((todo)=>{
                return(
                    <li key={todo.id}>{todo.task}</li>
                )
            })
        }
        </ul>
    </Fragment>
  )
}

export default Todo