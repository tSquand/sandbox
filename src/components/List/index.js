import React, { useState, useCallback } from "react";
import Item from "../Item";
import TaskCounter from "../TaskCounter";


const List = () => {
    const [items, setItems] = useState([]);
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
        setItems((prevItems) => [...prevItems, inputValue]);
        setInputValue("");
       }
    }, [inputValue, setItems]);
    
    const resetList = useCallback(() => {
        setItems([]);
        setTaskCount(0);
    }, [setItems, setTaskCount]);

    const handleInputChange = useCallback((event) => {
        setInputValue(event.target.value);
    }, [setInputValue]);

    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    }, [addItem]);

   /* const onTaskScheduled = useCallback(
        (task) => {
            setItems((prevItems) => prevItems.filter((item) => item !== task));
        }, [setItems]
    );*/
    
    return (
        <div>
            {items.map((item) => <Item name={item} incrementCounter={incrementCounter} decrementCounter={decrementCounter}/>)}
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter task"
                />
                <button id="create-task-button" onClick={() => addItem()}>Create a task</button>
                <button onClick={resetList}>Reset</button>
                
            </div>
            <TaskCounter count={taskCount}/>
            
        </div>
    );
};

export default List;
