import React, { useState} from 'react';

const Item = ({name, completed, setDraggingTask, onTaskCompleted }) => {
    const [isChecked, setIsChecked] = useState(completed);
    const handleChange = () => {
        setIsChecked(!isChecked);
        onTaskCompleted(name);
    };

    const onDragStart = (event) => {
        event.dataTransfer.setData("task", JSON.stringify({ name: name, completed: completed }));
        setDraggingTask();
    };
    
    return (
        <div className="item" draggable onDragStart={onDragStart}>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleChange} 
                />
                <span style={{textDecorationLine : isChecked ? "line-through" : "none"}}> {name} </span>
        </div>
        


    )
}

export default Item;