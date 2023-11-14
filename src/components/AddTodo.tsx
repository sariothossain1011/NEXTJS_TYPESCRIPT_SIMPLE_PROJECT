 'use client';
import { useTodots } from '@/store/Todos';
import { Fragment, useState } from 'react'

const AddTodo = () => {
    const [todo ,setTodo] = useState("");
    // const handleOnFormSubmit =(e:FormEvent<HTMLFormElement>)=>{
        const {handleAddTodos} = useTodots()
        function handleOnFormSubmit (e:FormEvent<HTMLFormElement>){
            e.preventDefault();
            handleAddTodos(todo) // to add the data in an array
            setTodo("");
           }
  return (
    <Fragment>
        <form onSubmit={handleOnFormSubmit}>
            <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Write your Todo '/>
            <button type='submit'>Add</button>
        </form>

    </Fragment>
  )
}

export default AddTodo