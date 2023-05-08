import './App.css';
import List from './components/List';
import HourPlanner from './components/HourPlanner';
import Weather from './components/Weather';
import Notepad from './components/Notepad';


function App() {
  return (
    <div className="App">
      <div className="first-column">

      </div>
      <div className="second-column">
        <HourPlanner className="HourPlanner"/> 
        <List className="List"/>       
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
