import './App.css';
import List from './components/List';
import HourPlanner from './components/HourPlanner';
import Weather from './components/Weather';


function App() {
  return (
    <div className="App">
      <div className="component-container">
        <List className="List"/> 
        <HourPlanner className="HourPlanner"/>
        <Weather /> 
      </div>      
    </div>
  );
}

export default App;
