import './App.css';
import React, { useState } from 'react';
import List from './components/List';
import HourPlanner from './components/HourPlanner';
import Weather from './components/Weather';
import Notepad from './components/Notepad';
import RandomTask from './components/RandomTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [scheduleAM, setScheduleAM] = useState(Array(7).fill([]));
  const [schedulePM, setSchedulePM] = useState(Array(10).fill([]));
  const [draggingTask, setDraggingTask] = useState(null);


  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, { task: task, completed: false }]);
  };

  const completeTask = (taskToComplete) => {
    setTasks(prevTasks => prevTasks.map(task => 
      task.task === taskToComplete ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (indexToRemove) => {
    setTasks(prevTasks => prevTasks.filter((_, index) => index !== indexToRemove));
  };

  const resetTasks = () => {
    setTasks([]);
    setScheduleAM(Array(7).fill([]));
    setSchedulePM(Array(10).fill([]));
  }

  return (
    <div className="App">
      <div className="first-column">
        <div className="weather-container">             
          <Weather className="Weather"/>
        </div> 
        <div className="random-task-container">
          <div className="random-task">
            <RandomTask tasks={tasks}/>
          </div>
        </div>
      </div>
      <div className="second-column">
        <HourPlanner className="HourPlanner" setSchedulePM={setSchedulePM} schedulePM={schedulePM} setScheduleAM={setScheduleAM} scheduleAM={scheduleAM} draggingTask={draggingTask} onTaskRemoved={removeTask} setDraggingTask={setDraggingTask} onTaskCompleted={completeTask}  /> 
        <List className="List" tasks={tasks} onTaskCompleted={completeTask} onTaskAdded={addTask} onTasksReset={resetTasks} onTaskRemoved={removeTask} setDraggingTask={setDraggingTask}/>
        <p>Drag tasks to schedule!</p>   
      </div>     
      <div className="third-column">
        <div className="notepad-container">
          <Notepad className="Notepad"/>
          </div>
        </div>
      </div>     
  );
}

export default App;
