import React, { useEffect, useState } from 'react'
import './createTask.css'

const CreateTask = ({onClose, handleSubmit}) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'initial'
    }
  },[])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tag, setTag] = useState('')
  console.log(title, 'title')
  return (
    <>
      <div className='modal-wrapper' onClick={()=>{onClose()}}/>
      <div className='modal-container'>
        <span className='close'>X</span>
        <form onSubmit={(e)=>{handleSubmit(e, {title, description, tag})}}>
          <div className='form-container'>
            <h3>Create New Task</h3>
            <div className='form-field'>
              <label htmlFor='title'><b>Title</b></label>
              <input type='text' value={title} name='title' onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className='form-field'>
              <label htmlFor='description'><b>Description</b></label>
              <textarea rows={6} value={description} name='description' onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <div className='form-field'>
              <label htmlFor='tag'><b>Tag</b></label>
              <input type='text' value={tag} name='tag' onChange={(e)=>setTag(e.target.value)} />
            </div>
            <button type='submit' className='create-btn'>Create</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateTask
