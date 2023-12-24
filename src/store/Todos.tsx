'use client'

import { ReactNode, createContext, useContext, useState } from "react"

export type Todo = {
    id: string,
    task: string,
    completed: boolean,
    createAt: Date,

}

export type todosContext = {
    todos: Todo[];
    handleAddTodos: (task: string) => void; // call signature
    toggleTodoAsCompleted: (id:string)=>void ;
    handleTodoDelete:(id:string)=>void ;
    

}

const todosContext = createContext<todosContext | null >(null); // union oparator

export const TodosProvider = ({children}: { children: ReactNode }) => {



    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodos = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task,
                completed: false,
                createAt: new Date()
            },
            ...prev
            ]

            return newTodos;
        })
    }

    // if the task is completed
    const toggleTodoAsCompleted =(id:string)=>{
        setTodos((prev)=>{
            const newTodos = prev.map((task)=>{
                if(task.id === id){
                    return {...task,completed:!task.completed}
                }
                return task ;
            })

            return newTodos ;
            
        })

    }
    const handleTodoDelete =(id:string)=>{

    }

    return (
        <todosContext.Provider value={{ todos, handleAddTodos,toggleTodoAsCompleted,handleTodoDelete }}>
            {children}
        </todosContext.Provider>
    )



}

// context api 

export function useTodots(){
    const todosContextValue = useContext(todosContext);
    if(!todosContextValue){
        throw new Error("UseTodos used outsite of provider")
    }
    return todosContextValue;
}