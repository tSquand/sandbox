import React, { useState, useCallback } from "react";
import Item from "../Item";
import TaskCounter from "../TaskCounter";

const List = ({ tasks, onTaskAdded, onTasksReset }) => {
    const [taskCount, setTaskCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const incrementCounter = useCallback(() => {
        setTaskCount(taskCount + 1)
    }, [taskCount, setTaskCount]);

    const decrementCounter = useCallback(() => {
        setTaskCount(taskCount - 1)
    }, [taskCount, setTaskCount]);

    const addItem = useCallback(() => {
       if (inputValue.trim() !== "") {
        onTaskAdded(inputValue);
        setInputValue("");
       }
    }, [inputValue, onTaskAdded]);

    const handleInputChange = useCallback((event) => {
        setInputValue(event.target.value);
    }, [setInputValue]);

    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    }, [addItem]);

    return (
        <div>
            {tasks.map((item, index) => <Item key={index} name={item} incrementCounter={incrementCounter} decrementCounter={decrementCounter}/>)}
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter task"
                />
                <button id="create-task-button" onClick={addItem}>Create a task</button>
                <button id="reset-button" onClick={onTasksReset}>Reset</button>
            </div>
            <TaskCounter count={taskCount}/>
        </div>
    );
};

export default List;