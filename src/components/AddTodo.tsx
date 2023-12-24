'use client';
import { useTodots } from '@/store/Todos';
import { Fragment, useState,FormEvent } from 'react'

const AddTodo = () => {
    const [todo, setTodo] = useState("");

    const { handleAddTodos } = useTodots();

    const  handleOnFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodos(todo) // to add the data in an array
        setTodo("");
    }
    return (
        <Fragment>
            <form onSubmit={handleOnFormSubmit} className=' flex justify-between gap-4'>
                <input type='text' className='w-full text-center text-dark-light-700 rounded-lg hover:border-0' value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Write your Todo ' />
                <button type='submit' className=' font-bold text-lg text-white bg-blue-600 px-6 py-2 rounded-lg'>Add</button>
            </form>

        </Fragment>
    )
}

export default AddTodo