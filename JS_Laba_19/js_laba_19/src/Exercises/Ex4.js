import React, { useState } from "react";


function ListItem(props) { // for create list items
    return (
        <li>
            {props.name}
            <button onClick={props.func}>
                Delete {props.name}
            </button>
        </li>
    );
}

function Ex4(props) {
    const [items, setItems] = useState( // create hook
        ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
    );
    
    function addListItem() { // add new item in list
        const newItem = 'пункт';
        setItems([...items, newItem]);
    }
    function deleteListItem(index) { // delete last item from list
        // creating a new array with all items except for the one at the specified index
        const updateList = items.filter((item, i) => i !== index);
        setItems(updateList);
    }

    const listItems = items.map((name, index) => // create list
            <ListItem 
                key={Math.random()}
                name={name} 
                index={index} 
                func={() => deleteListItem(index)}
            />
    );

    return (
        <div>
            <button onClick={addListItem}>
                Add
            </button>
            <button onClick={() => deleteListItem(listItems.length - 1)}>
                Delete
            </button>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default Ex4;