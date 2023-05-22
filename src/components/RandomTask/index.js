import React, { useState } from 'react';

const RandomTask = ({ tasks }) => {
    const [selectedTask, setSelectedTask] = useState(null);

    const getRandomTask = () => {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        setSelectedTask(tasks[randomIndex]);
    };

    return (
        <div>
            <h2> Random Task </h2>
            {selectedTask && <p>{selectedTask}</p>}
            <button id="random-task-button" onClick={() => getRandomTask()}>Get a random task</button>
        </div>
    );

};

export default RandomTask;