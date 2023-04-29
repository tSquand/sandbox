import React, {useState, useCallback} from 'react';

const Item = ({name, incrementCounter, decrementCounter, checked }) => {
    const [isCompleted, setIsCompleted] = useState(checked || false);
    const handleChange = useCallback(() => {
        setIsCompleted(!isCompleted);
        if (!isCompleted) {
            incrementCounter();
        } else {
            decrementCounter();
        }
    }, [isCompleted, setIsCompleted, incrementCounter, decrementCounter]);

    const onDragStart = (event) => {
        event.dataTransfer.setData("task", JSON.stringify({ name: name, checked: isCompleted}));
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