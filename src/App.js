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
        <div className="instruction-pane-container">
         <div className="instruction-pane">
          something will go here eventually
         </div>
        </div>
        <div className="future-component-container">
          <div className="future-component">
            <RandomTask tasks={tasks}/>
          </div>
        </div>
        <div className="theme-selector-container">
          <div className="theme-selector">
            Theme selector component will go here
          </div>
        </div>
      </div>
      <div className="second-column">
        <HourPlanner className="HourPlanner"/> 
        <List className="List" tasks={tasks} onTaskAdded={addTask} onTasksReset={resetTasks}/>       
      </div>     
      <div className="third-column">
        <div className="weather-container">             
          <Weather className="Weather"/>
        </div> 
        <div className="notepad-container">
          <Notepad className="Notepad"/>
          </div>
        </div>
      </div>     
  );
}

export default App;
