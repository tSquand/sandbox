import './App.css';
import List from './components/List';
import HourPlanner from './components/HourPlanner';
import Weather from './components/Weather';
import Notepad from './components/Notepad';


function App() {
  return (
    <div className="App">
      <div className="component-container">
        <List className="List"/> 
        <HourPlanner className="HourPlanner"/>
      </div> 
      <div className="weather-container">
        <Weather className="Weather"/>
      </div>
      <div className="notepad-container">
        <Notepad />
      </div>     
    </div>
  );
}

export default App;
