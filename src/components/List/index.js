import React, { useState, useCallback } from "react";
import Item from "../Item";

const List = () => {
    const [items, setItems] = useState([]);
    const addItem = useCallback((newItemName) => {
        let newItems = [...items]; //this was the problem! ...
        newItems.push(newItemName);
        setItems(newItems);
    }, [items, setItems]);
    
    return (
        <div>
            {items.map((item) => <Item name={item}/>)}
            <div>
                <button onClick={() => addItem("spagetto")}> Add some spageti on it</button>
            </div>
        </div>
    )
}

export default List;
