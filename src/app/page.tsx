import Image from 'next/image'
import styles from './page.module.css'
import AddTodo from '@/components/AddTodo'
import Todo from '@/components/Todo'


export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Todo App </h1>
     <AddTodo/>
     <Todo/>
    </main>
  )
}
