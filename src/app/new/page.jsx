'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export const metadata = {
  title: 'Create New Task'
}

const NewTask = () => {
  const redirect = useRouter()
  const createTask = async (e) => {
    e.preventDefault()

    const title = e.target.title.value
    const description = e.target.description.value

    await fetch('api/tasks', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    redirect.push('/')
  }

  return (
    <div className='h-screen flex flex-col mt-28 items-center gap-4'>
      <h1 className='text-4xl font-bold text-slate-100'>{metadata.title}</h1>
      <form className='bg-slate-600 p-10 rounded text-gray-600 text-lg' onSubmit={createTask}>
        <input type="text" id='title' className='w-full mb-4 p-2 rounded' placeholder='Title' />
        <textarea id="description" rows="3" className='w-full mb-3 rounded p-3' placeholder='Describe your task'></textarea>
        <button type='submit' className='bg-sky-600 text-slate-100 p-2 rounded-md hover:bg-sky-800 transition-colors'>Create Task</button>
      </form>
    </div>
  )
}

export default NewTask