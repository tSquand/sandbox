import './App.css';
import React, { useState } from 'react';
import List from './components/List';
import HourPlanner from './components/HourPlanner';
import Weather from './components/Weather';
import Notepad from './components/Notepad';
import RandomTask from './components/RandomTask';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const resetTasks = () => {
    setTasks([]);
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
        <HourPlanner className="HourPlanner"/> 
        <List className="List" tasks={tasks} onTaskAdded={addTask} onTasksReset={resetTasks}/>       
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
