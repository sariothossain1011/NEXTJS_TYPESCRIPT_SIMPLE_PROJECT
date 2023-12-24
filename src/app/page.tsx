import Image from 'next/image'
import AddTodo from '@/components/AddTodo'
import Todo from '@/components/Todo'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <main className='flex justify-center items-center min-h-screen bg-slate-400' >
      <div className=' max-w-auto bg-slate-100 text-center  py-16 px-8 rounded-md shadow-xl'>
        <h1 className=' font-extrabold font-sans text-2xl uppercase'> tood nextJS + typescript + tailwindcss </h1>
        <AddTodo />
        <Navbar />
        <Todo />
      </div>
    </main>
  )
}
