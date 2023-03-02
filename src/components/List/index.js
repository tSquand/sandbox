import React, { useState, useCallback } from "react";
import Item from "../Item";
import SpaghettiCount from "../SpaghettiCount";

const List = () => {
    const [items, setItems] = useState([]);
    const [spaghettiCount, setSpaghettiCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const incrementCounter = useCallback(() => {
        setSpaghettiCount(spaghettiCount + 1)
    }, [spaghettiCount, setSpaghettiCount]);
    

    const addItem = useCallback(() => {
       if (inputValue.trim() !== "") {
        setItems((prevItems) => [...prevItems, inputValue]);
        setInputValue("");
       }
    }, [inputValue, setItems]);
    
    const resetList = useCallback(() => {
        setItems([]);
        setSpaghettiCount(0);
    }, [setItems, setSpaghettiCount]);

    const handleInputChange = useCallback((event) => {
        setInputValue(event.target.value);
    }, []);

    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    }, [addItem]);
    
    return (
        <div>
            {items.map((item) => <Item name={item} incrementCounter={incrementCounter}/>)}
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter task"
                />
                <button id="create-task-button" onClick={() => addItem()}> Create a task</button>
                <button onClick={resetList}>Reset</button>
                
            </div>
            <SpaghettiCount count={spaghettiCount}/>
        </div>
    )
}

export default List;
