import React from "react";
import Item from '../Item';
import './styles.css';

const HourPlanner = ({ scheduleAM, setScheduleAM, schedulePM, setSchedulePM, draggingTask, onTaskRemoved, setDraggingTask, onTaskCompleted }) => {
    const onDrop = (event, hour, isPM) => {
        event.preventDefault();
        const task = JSON.parse(event.dataTransfer.getData("task"));
        if (task.name) {
            onTaskRemoved(draggingTask);
            setDraggingTask(null);
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
                        <Item key={index} name={task.name} completed={task.checked} onTaskCompleted={onTaskCompleted} />
                    ))}                    
                </ul>
            </div>
        ));
    };


    return (
        <div className="hour-planner">
            {(
                <>
            {renderHourSlots(scheduleAM, false)}
            {renderHourSlots(schedulePM, true)}
                </>
            )}
            
        </div>
    );
};

export default HourPlanner;