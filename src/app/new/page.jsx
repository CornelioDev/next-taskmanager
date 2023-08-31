import React from 'react'

const NewTask = () => {
  return (
    <form>
      <input type="text" id='title'/>
      <textarea id="description" rows="10"></textarea>
      <button>Create Task</button>
    </form>
  )
}

export default NewTask