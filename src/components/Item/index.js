import React, {useState, useCallback} from 'react';

const Item = ({name, incrementCounter}) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const handleCompletedClick = useCallback(() => {
        setIsCompleted(true);
        incrementCounter();
    }, [setIsCompleted, incrementCounter]);

    const onDragStart = (event) => {
        event.dataTransfer.setData("task", name);
    };
    
    return (
        <div className="item" draggable onDragStart={onDragStart}>
                {!isCompleted && <button onClick={handleCompletedClick}>Complete</button>}
                <span style={{textDecorationLine : isCompleted && "line-through"}}> {name} </span>
        </div>
        


    )
}

export default Item;