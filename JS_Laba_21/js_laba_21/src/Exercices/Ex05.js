import React, { useState } from 'react';

function Ex05() {
    const [items, setItems] = useState([
        { id: 1, value: 'Item 1'},
        { id: 2, value: 'Item 2'},
        { id: 3, value: 'Item 3'},
        { id: 4, value: 'Item 4'},
        { id: 5, value: 'Item 5'},
        { id: 6, value: 'Item 6'},
        { id: 7, value: 'Item 7'},
        { id: 8, value: 'Item 8'},
        { id: 9, value: 'Item 9'},
    ]);


    // при втраті фокусу з input
    const handleEdit = (id, target) => {
        const updateItems = items.map(item => {
            const newItem = {
                id: id, 
                value: (target.value === '' ? item.value : target.value)
            };

            if (item.id === id) return { ...item, ...newItem };
            else return item;
        });
        
        setItems(updateItems);

        target.style.display = "none";
        target.value = '';
    };

    // при натисканні на li
    const showInput = (target) => {
        target.style.display = "inline";
        target.focus();
    }


    let list = items.map(item => (
        <li
            key={ item.id }
            onClick={ () => showInput(document.getElementById(item.id)) }
            style={{ margin: "5px 0px" }}
        >
            <span style={{ marginRight: "10px" }} >{ item.value }</span>
            <input 
                type="text"
                id={ item.id }
                placeholder="Input your change"
                style={{ display: "none" }}
                onBlur={ (event) => handleEdit(item.id, event.target) }
            />
        </li>
    ));

    return(
        <div>
            <ul>
                { list }
            </ul>
        </div>
    );
}

export default Ex05;