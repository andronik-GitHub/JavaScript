import React, { useState } from "react";


function ListItem(props) {
    return (
        <li>
            {props.value}
        </li>
    );
}

function Ex2(props) {
    const [items, setItems] = useState(
        ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
    );
    
    function addListItem() {
        const newItem = 'пункт';
        setItems([...items, newItem]);
    }

    const listItems = items.map((name) => 
        <ListItem key={name.toString()} value={name}/>
    );

    return (
        <div>
            <button onClick={addListItem}>Add</button>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default Ex2;