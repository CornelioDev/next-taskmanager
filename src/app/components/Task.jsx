import Link from 'next/link'
import React from 'react'

const TaskCard = ({ task }) => {
    return (
        <Link href={`/tasks/edit/${task.id}`}>
            <div className='bg-slate-600 hover:bg-slate-700 p-3 flex flex-col hover:cursor-pointer place-content-between'>
                <div>
                    <h1 className='font-bold text-xl'>{task.title}</h1>
                    <p>{task.description ? task.description : <span className='font-light text-gray-400'>No description</span>}</p>
                </div>
                <p className='text-sm font-light text-gray-400 place-self-end'>{new Date(task.createdAt).toLocaleDateString()}</p>
            </div>
        </Link>
    )
}

export default TaskCard