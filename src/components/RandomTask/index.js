import React, { useState } from 'react';
import './styles.css';

const RandomTask = ({ tasks }) => {
    const [selectedTask, setSelectedTask] = useState(null);

    const getRandomTask = () => {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        setSelectedTask(tasks[randomIndex]);
    };

    return (
        <div>
            <p className="center">Don't know what to do next?</p>
            <div className="task-button-container">     
                <button className="random-task-button" onClick={() => getRandomTask()}>Get a random task</button>              
            </div>
            <p className="random-task-output">{selectedTask}</p>
        </div>
    );

};

export default RandomTask;