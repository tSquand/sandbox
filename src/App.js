import './App.css';
import List from './components/List';
import HourPlanner from './components/HourPlanner';


function App() {
  return (
    <div className="App">
      <div className="component-container">
        <List className="List"/> 
        <HourPlanner className="HourPlanner"/> 
      </div>      
    </div>
  );
}

export default App;
