import React, {useState, useCallback} from 'react';

const Item = ({name, checked, setDraggingTask }) => {
    const [isCompleted, setIsCompleted] = useState(checked || false);
    const handleChange = useCallback(() => {
        setIsCompleted(!isCompleted);
    }, [isCompleted, setIsCompleted]);

    const onDragStart = (event) => {
        event.dataTransfer.setData("task", JSON.stringify({ name: name, checked: isCompleted }));
        setDraggingTask();
    };
    
    return (
        <div className="item" draggable onDragStart={onDragStart}>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleChange} 
                />
                <span style={{textDecorationLine : isCompleted && "line-through"}}> {name} </span>
        </div>
        


    )
}

export default Item;