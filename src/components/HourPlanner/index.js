import React, { useState } from "react";
import './styles.css';

const HourPlanner = ({ onTaskScheduled }) => {
    const [scheduleAM, setScheduleAM] = useState(Array(7).fill([]));
    const [schedulePM, setSchedulePM] = useState(Array(10).fill([]));
    const [isMinimized, setIsMinimized] = useState(true);

    const onDrop = (event, hour, isPM) => {
        event.preventDefault();
        const task = event.dataTransfer.getData("task");
        if (task) {
            if (isPM) {
                setSchedulePM((prevSchedule) => {
                    const newSchedule = [...prevSchedule];
                    newSchedule[hour] = [...newSchedule[hour], task];
                    return newSchedule;
                });
            } else {
                setScheduleAM((prevSchedule) => {
                    const newSchedule = [...prevSchedule];
                    newSchedule[hour] = [...newSchedule[hour], task];
                    return newSchedule;
                });
            }                     
            onTaskScheduled(task);
        }
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    const renderHourSlots = (schedule, isPM) => {
        return schedule.map((tasks, hour) => (
            <div
                key={hour}
                className="hour-slot"
                onDrop={(event) => onDrop(event, hour, isPM)}
                onDragOver={onDragOver}
            >
                <div className="hour-label">
                    {isPM ? hour + 1 : hour + 6}:00 {!isPM && (hour + 6 !== 12) ? "AM" : "PM"}
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        ));
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className="hour-planner">
            <button onClick={toggleMinimize} className="minimize-button">
                {isMinimized ? 'Hourly Planner' : '-'}
            </button>
            {!isMinimized && (
                <>
            {renderHourSlots(scheduleAM, false)}
            {renderHourSlots(schedulePM, true)}
            <button>Reset</button>
                </>
            )}
            
        </div>
    );
};

export default HourPlanner;