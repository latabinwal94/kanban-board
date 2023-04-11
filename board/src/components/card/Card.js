import React, { useState } from 'react'
import './card.css'

const Card = ({ cardData, onDragStart, onDrop, onDragOver }) => {
  const tasks = cardData.task
  const color = { 'Major': 'orange', 'Critical': 'red', 'Minor': '#ccc' }

  return (
    <ul className='card' 
      onDragOver = {onDragOver}
      onDrop={onDrop}
    >
      {tasks.map((task) => {
        return (
          <li className='card-detail'
            key={task.id}
          >
            <div draggable
            onDragStart={onDragStart}
            id={`detail-${task.id}`}>
              <h4 id={`title-${task.id}`}>{task.title}</h4>
              <p id={`description-${task.id}`} className='description'>{task.description}</p>
              <span
                className='tag'
                id={`tag-${task.id}`}
                style={{ backgroundColor: color[task.tag], color: '#fff' }}>
                {task.tag}
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Card
