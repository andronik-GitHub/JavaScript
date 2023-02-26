import React, {useState} from "react";


function ListItem(props) { // for create list items
    return (
        <li>
            {props.name}
            <button onClick={props.func}>
                Delete
            </button>
        </li>
    );
}

function Ex13(props) {
    const [items, setItems] = useState(
        ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
    );

    function addListItem(user) { // add new item in list
        setItems([...items, user]);
    }
    function deleteListItem(index) { // delete last item from list
        // creating a new array with all items except for the one at the specified index
        const updateList = items.filter((item, i) => i !== index);
        setItems(updateList);
    }


    const [input, setInput] = useState(props?.value ?? '');

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
            <ul>
                {listItems}
            </ul>
            <div>
                <input 
                    type='text' 
                    value={input} 
                    onInput={(e) => setInput(e.target.value)}
                />
                <button onClick={() => addListItem(input)}>Add new user</button>
            </div>
        </div>
    );
}


export default Ex13;