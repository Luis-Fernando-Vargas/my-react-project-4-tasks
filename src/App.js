import './App.css';
import TaskList from './components/taskList';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <h1>Fernando Tasks</h1>
        <div className='tasks-container'>
          <h2>My Tasks</h2>
            <TaskList/>      
        </div>
      </div>
    </div>
  );
}

export default App;
