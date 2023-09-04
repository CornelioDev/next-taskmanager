'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const metadata = {
  title: 'Create New Task'
}

const TaskForm = ({ params }) => {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((task) => {
          setTitle(task.title),
            setDescription(task.description)
        })
    }
  }, [])


  const processTask = async (e) => {
    e.preventDefault()

    await fetch(params.id ? `/api/tasks/${params.id}` : '/api/tasks', {
      method: params.id ? 'PUT' : 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    router.refresh()
    router.push('/')
  }

  return (
    <div className='h-screen flex flex-col items-center gap-4 px-2'>
      <h1 className='text-4xl font-bold text-slate-100'>{params.id ? 'Edit Task' : metadata.title}</h1>
      <form className='bg-slate-600 p-10 rounded text-gray-600 text-lg' onSubmit={processTask}>
        <input
          type="text"
          id='title'
          className='w-full mb-4 p-2 rounded'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />

        <textarea
          id="description"
          rows="3"
          className='w-full mb-3 rounded p-3'
          placeholder='Describe your task'
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>

        <div className="flex justify-between">
          <button type='submit' className='bg-sky-600 text-slate-100 p-2 rounded-md hover:bg-sky-800 transition-colors'>Create Task</button>
          <button type='buton' className='bg-red-700 text-slate-100 p-2 rounded-md hover:bg-red-900 transition-colors' onClick={
            async function () {
              await fetch(`/api/tasks/${params.id}`, {
                method: 'DELETE'
              })
            }
          }>Delete</button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm