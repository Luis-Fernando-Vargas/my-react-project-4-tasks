import React, {useState} from "react";
import TaskForm from "./taskForm";
import '../styles/taskList.css';
import Task from './task';


function TaskList(){

  const [tasks, setTasks] = useState([]);

  const addTask = (task)=>{
    document.querySelector('.input-task').innerHTML ='' 
    if(task.description.trim()){    
    task.description = task.description.trim();
    const tasksUpdated = [task, ...tasks];
    setTasks(tasksUpdated);          
   }   
  };

  const deleteTask = (id)=>{
    const tasksUpdated = tasks.filter((task)=> task.id !== id);
    setTasks(tasksUpdated);
  }

  const completeTask = (id)=>{
    const tasksUpdated = tasks.map(task => {
      if(task.id === id){
       task.completed = !task.completed;       
      };
      return task;
    });
    setTasks(tasksUpdated);
  };
  return(
    <>
      <TaskForm
      onSubmit ={addTask} />

      <div className= 'task-list-container'>
        {
          tasks.map((task)=>
            <Task 
            key = {task.id} 
            id = {task.id}
            description = {task.description}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask} />
          )
        }   
      </div>
    </>
   
  )
}

export default TaskList;