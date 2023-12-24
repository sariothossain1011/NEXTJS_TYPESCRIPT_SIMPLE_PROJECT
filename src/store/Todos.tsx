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
    toggleTodoAsCompleted: (id: string) => void;
    handleTodoDelete: (id: string) => void;


}

const todosContext = createContext<todosContext | null>(null); // union oparator

export const TodosProvider = ({ children }: { children: ReactNode }) => {



    const [todos, setTodos] = useState<Todo[]>(() => {
        try {
            const newTodos = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodos) as Todo[];
        } catch (error) {
            return [];
        }


    });

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

            localStorage.setItem("todos", JSON.stringify(todos));
            return newTodos;
        })
    }

    // if the task is completed
    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed }
                }
                return task;
            })
            localStorage.setItem("todos", JSON.stringify(todos));
            return newTodos;

        })

    }
    // if the task is deleted
    const handleTodoDelete = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.filter((task) => task.id !== id);
            return newTodos;

        })
        localStorage.setItem("todos", JSON.stringify(todos));

    }

    return (
        <todosContext.Provider value={{ todos, handleAddTodos, toggleTodoAsCompleted, handleTodoDelete }}>
            {children}
        </todosContext.Provider>
    )



}

// context api 

export function useTodots() {
    const todosContextValue = useContext(todosContext);
    if (!todosContextValue) {
        throw new Error("UseTodos used outsite of provider")
    }
    return todosContextValue;
}