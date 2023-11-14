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

}

const todosContext = createContext<todosContext | null >(null); // union oparator

export const TodosProvider = ({children}: { children: ReactNode }) => {



    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodos = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random.toString(),
                task,
                completed: false,
                createAt: new Date()
            },
            ...prev
            ]

            return newTodos;
        })



    }

    return (
        <todosContext.Provider value={{ todos, handleAddTodos }}>
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