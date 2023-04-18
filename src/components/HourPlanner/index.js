import React, { useState } from "react";

const HourPlanner = ({ onTaskScheduled }) => {
    const [scheduleAM, setScheduleAM] = useState(Array(7).fill([]));
    const [schedulePM, setSchedulePM] = useState(Array(10).fill([]));

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
                    {isPM ? hour + 1 : hour + 6}:00 {isPM ? "PM" : "AM"}
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div className="hour-planner">
            {renderHourSlots(scheduleAM, false)}
            {renderHourSlots(schedulePM, true)}
        </div>
    );
};

export default HourPlanner;