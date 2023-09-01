import React from 'react'
import Task from './components/Task'

async function loadTasks() {
  const response = await fetch('http://localhost:3000/api/tasks')
  const data = await response.json()
  return data
}

const HomePage = async () => {
  const tasks = await loadTasks()
  return (
    <div className='container mx-auto grid grid-cols-3 mt-5 gap-3 text-slate-100'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

export default HomePage