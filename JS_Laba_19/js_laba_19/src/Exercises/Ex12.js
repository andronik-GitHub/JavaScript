import React, {useState} from "react";


function ListItem(props) { // for create list items
    return (
        <li>
            {props.name}
        </li>
    );
}

function Ex12(props) {
    const [items, setItems] = useState(
        ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
    );

    function addListItem(user) { // add new item in list
        setItems([...items, user]);
    }


    const [input, setInput] = useState(props?.value ?? '');

    const listItems = items.map((name, index) => // create list
        <ListItem 
            key={Math.random()}
            name={name} 
            index={index}
        />
    );

    return (
        <div>
            <ul>
                {listItems}
            </ul>
            <div>
                <input type='text' value={input} onInput={(e) => setInput(e.target.value)}/>
                <button onClick={() => addListItem(input)}>Add new user</button>
            </div>
        </div>
    );
}


export default Ex12;