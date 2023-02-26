import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function ListItem(props) { // for create list items
    return (
        <li>
            {props.name}
        </li>
    );
}

function Ex15(props) {

    const items = ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'];

    function searchItem(index) {
        if (index < items.length && index >= 0)
            ReactDOM
                .createRoot(document.getElementById("resultItem"))
                .render(
                    <ListItem 
                        key={Math.random()}
                        name={items[index]} 
                        index={index}
                    />
                );
    }

    
    const [index, setIndex] = useState(props?.value ?? 0);

    const listItems = items.map((name, index) => // create list
        <ListItem 
            key={Math.random()}
            name={name} 
            index={index}
        />
    );

    return(
        <div>
            <ul>
                {listItems}
            </ul>
            <div>
                <input 
                    type='number' 
                    value={index} 
                    onInput={(e) => setIndex(e.target.value)}
                />
                <button onClick={() => searchItem(index)}>Get item</button>
                <ul id="resultItem">

                </ul>
            </div>
        </div>
    );
}

export default Ex15;