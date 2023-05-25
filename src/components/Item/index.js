import React from 'react';

const Item = ({name, completed, setDraggingTask, onTaskCompleted }) => {

    const handleChange = () => {
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
                <span style={{textDecorationLine : completed && "line-through"}}> {name} </span>
        </div>
        


    )
}

export default Item;