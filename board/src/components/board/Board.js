import React, { useState }  from 'react'
import Card from '../card/Card'
import CreateTask from '../create/CreateTask'
import boardData from '../utils/data'
import './board.css'
const statusList = [
  {id: 100, name: 'To do List'},
  {id: 101, name: 'In Design'},
  {id: 102, name: 'In Development'},
  {id: 103, name: 'QA'},
  {id: 104, name: 'Closed/Done'}
]
const Board = ({showModal, setShowModal}) => {
  const [cardData, setCardData] = useState(boardData)
  const [dragInfo, setDragInfo] = useState([])

  const onDragStart = (e, fromList) => {
    const dragInfo = {
      taskId: (e.currentTarget.id).split('-')[1],
      fromList: fromList
    }
    setDragInfo(dragInfo)
    console.log(dragInfo, 'drag infor')
  }

  const onDrop = (e, listNum) => {
    let updatedData = [...cardData]
    const id = (e.target.id).split('-')[1]
    const cardsArray = updatedData.filter((data) => data.id === Number(dragInfo.fromList))[0].task
    const taskCard = cardsArray.find(card => card.id === Number(dragInfo.taskId))
    const indexOfCard = cardsArray.findIndex(card => card.id === Number(dragInfo.taskId))
    cardsArray.splice(indexOfCard, 1)
    const draggedCardsArray = updatedData.filter((data) => data.id === Number(listNum))[0].task
    const indexOfDraggedCard = draggedCardsArray.findIndex(card => card.id === Number(id))
    draggedCardsArray.splice(indexOfDraggedCard, 0, taskCard)
    setCardData(updatedData)    
  }

  const onDragOver = (e) => {
    e.preventDefault();
  }

  const handleSubmit = (e, formObj) => {
    e.preventDefault()
    const taskArray = {...cardData[0]}
    taskArray.task.push({...formObj, id: (Math.random()*1000).toFixed(0)})
    console.log(taskArray, 'taskArray')
    setShowModal()
  }

  return (
    <>
      <div className='board'>
        <div className='title-status'>
          {statusList.map((data, i) => {
            return (
              <div>
                <span key={data.id} className='main-title'>{data.name}</span>
                <div className='card-container'>
                  <Card
                    cardData={cardData[i]}
                    onDragStart={(e) => onDragStart(e, `${data.id}`)}
                    onDragOver={(e) => onDragOver(e)} 
                    onDrop={(e) => {onDrop(e, `${data.id}`)}}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {showModal && <CreateTask onClose={setShowModal}  handleSubmit={handleSubmit} />}
    </>
  )
}

export default Board
