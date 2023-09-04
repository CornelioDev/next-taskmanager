import React from 'react'
import TaskCard from './components/Task'
import { prisma } from '@/libs/prisma'

async function loadTasks() {
  // const response = await fetch('http://localhost:3000/api/tasks')
  // const data = await response.json()
  // return data
  return await prisma.task.findMany()
}

const HomePage = async () => {
  const tasks = await loadTasks()
  return (
    <div className='container mx-auto grid grid-cols-3 gap-3 text-slate-100'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default HomePage