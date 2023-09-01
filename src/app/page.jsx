import React from 'react'

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
        <div key={task.id} className='bg-slate-600 hover:bg-slate-700 p-3 flex flex-col hover:cursor-pointer place-content-between'>
          <div>
            <h1 className='font-bold text-xl'>{task.title}</h1>
            <p>{task.description ? task.description : <span className='font-light text-gray-400'>No description</span>}</p>
          </div>
          <p className='text-sm font-light text-gray-400 place-self-end'>{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  )
}

export default HomePage