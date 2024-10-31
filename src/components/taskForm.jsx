import React, {useState} from "react";
import '../styles/taskForm.css'
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props){

  const [input, setInput] = useState('');

  const manageChange = e=>{
    setInput(e.target.value);      
  };

  const manageAddTask = e=>{    
      e.preventDefault();      
      const inputTag = document.querySelector('.input-task')
      inputTag.value = ''
      
      const newTask = {
      id:uuidv4(),
      description:input,
      completed: false
    };   
    props.onSubmit(newTask); 
    setInput('')                 
  };
  return(
    <form 
      className='task-form'
      onSubmit={manageAddTask} >
        <input 
          className = 'input-task'
          type='text'
          placeholder='write a task'
          name='text'
          onChange={manageChange}
        />
        
        <button className='button-form'>
          Add task
        </button>
    </form>
  )
}

export default TaskForm