"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const Navbar = () => {
    const searchParams = useSearchParams();

    const todosFilter = searchParams.get("todos");

  return (

    
    <nav className=' flex justify-between'>
      <Link href='/' className={todosFilter === null ? " text-blue-400 border-b-4 border-y-green-500 text-lg font-blod": " text-lg font-blod"}> All</Link>
      <Link href='/?todos=active' className={todosFilter === "active" ? " text-red-500 border-b-4 border-y-green-500 text-lg font-blod": "text-lg font-blod"}> Active</Link>
      <Link href='/?todos=completed' className={todosFilter === "completed" ? " text-blue-600 border-b-4 border-y-green-500 text-lg font-blod": " text-lg font-blod"}> Completed</Link>
    </nav>
  )
}

export default Navbar
