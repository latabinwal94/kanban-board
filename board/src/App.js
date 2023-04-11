import { useState } from 'react';
import './App.css';
import Board from './components/board/Board';

function App() {
  const[showModal, setShowModal] = useState(false)
  return (
    <div className="container">
      <div className='task-title'>
        <h1>
          Kanban Board
        </h1>
        <button className='create-btn' onClick={() => {setShowModal(!showModal)}}>Create Task</button>
      </div>
      <Board
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default App;
