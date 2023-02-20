import React, { useState, useCallback } from "react";
import Item from "../Item";
import SpaghettiCount from "../SpaghettiCount";

const List = () => {
    const [items, setItems] = useState([]);
    const [spaghettiCount, setSpaghettiCount] = useState(0);

    const incrementCounter = useCallback(() => {
        setSpaghettiCount(spaghettiCount + 1)
    }, [spaghettiCount, setSpaghettiCount]);
    

    const addItem = useCallback((newItemName) => {
        let newItems = [...items]; //this was the problem! ...
        newItems.push(newItemName);
        setItems(newItems);
    }, [items, setItems]);
    
    return (
        <div>
            {items.map((item) => <Item name={item} incrementCounter={incrementCounter}/>)}
            <div>
                <button onClick={() => addItem("spagetto")}> Add some spageti on it</button>
            </div>
            <SpaghettiCount count={spaghettiCount}/>
        </div>
    )
}

export default List;
