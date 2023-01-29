import React, {useState, useCallback} from 'react';

const Item = ({name}) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const handleCompletedClick = useCallback(() => setIsCompleted(true), [setIsCompleted]);
    
    return (        
        <div>
            {!isCompleted && <button onClick={handleCompletedClick}>Complete</button>}
            <span style={{textDecorationLine : isCompleted && "line-through"}}> {name} </span>
        </div>
    )
}

export default Item;