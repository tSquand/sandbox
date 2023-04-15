import React, { useState } from "react";

const HourPlanner = ({ onTaskScheduled }) => {
    const [schedule, setSchedule] = useState(Array(24).fill([]));

    const onDrop = (event, hour) => {
        event.preventDefault();
        const task = event.dataTransfer.getData("task");
        if (task) {
            setSchedule((prevSchedule) => {
                const newSchedule = [...prevSchedule];
                newSchedule[hour] = [...newSchedule[hour], task];
                return newSchedule;
            });
            onTaskScheduled(task);
        }
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="hour-planner">
            {schedule.map((tasks, hour) => (
                <div
                    key={hour}
                    className="hour-slot"
                    onDrop={(event) => onDrop(event, hour)}
                    onDragOver={onDragOver}
                    >
                        <div className="hour-label">{hour}:00</div>
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>
            ))}
        </div>
    );
};

export default HourPlanner;