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
            <form onSubmit={handleOnFormSubmit} className=' flex justify-between gap-4 py-4'>
                <input type='text' className='w-full text-center bg-white text-dark-dark-200 font-serif shadow-sm shadow-dark-light-800' value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Write your Todo ' />
                <button type='submit' className=' animate-in text-md font-normal text-white bg-blue-600 px-6 py-1 font-sans shadow-sm'>Add</button>
            </form>

        </Fragment>
    )
}

export default AddTodo