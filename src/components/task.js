import React from "react";
import '../styles/task.css'
import { AiTwotoneCloseCircle } from "react-icons/ai";

function Task({ description, completed, completeTask, deleteTask, id }){
  return(
    <div className={completed ? 'main-task-container completed' : 'main-task-container'}>
      <div 
        className='task-text'
        onClick={ () => completeTask(id) }>
        {description}
      </div>
      <div 
        className='task-icons-container'
        onClick={ () => deleteTask(id) }>
      <AiTwotoneCloseCircle className='close-icon' />
      </div>
    </div>
  );
};

export default Task;