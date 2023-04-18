import React from 'react';


const TaskCounter = ({count}) => {
return(
    <div className="task-counter">
       You have completed {count} task(s)
    </div>
)
}

export default TaskCounter;