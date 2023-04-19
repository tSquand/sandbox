import React, {useState, useCallback} from 'react';

const Item = ({name, incrementCounter, decrementCounter}) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const handleChange = useCallback(() => {
        setIsCompleted(!isCompleted);
        if (!isCompleted) {
            incrementCounter();
        } else {
            decrementCounter();
        }
    }, [isCompleted, setIsCompleted, incrementCounter, decrementCounter]);

    const onDragStart = (event) => {
        event.dataTransfer.setData("task", name);
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