import React, { useState, useCallback } from "react";
import Item from "../Item";

const List = ({ tasks, onTaskAdded, onTasksReset, setDraggingTask }) => {
    const [inputValue, setInputValue] = useState("");

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
            {tasks.map((item, index) => <Item key={index} name={item} setDraggingTask={() => setDraggingTask(index)}/>)}
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
        </div>
    );
};

export default List;