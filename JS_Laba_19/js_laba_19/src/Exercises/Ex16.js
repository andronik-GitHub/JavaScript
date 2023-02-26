import React, { useState } from "react";


function TableItems(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
        </tr>
    );
}

function Ex16(props) {
    const [users, setUser] = useState([
        {name: 'Коля', age: 30},
        {name: 'Василь', age: 40},
        {name: 'Петро', age: 50}
    ]);

    function addListItem(user) { // add new item in list
        setUser([...users, user]);
    }



    const [name, setName] = useState(props?.value ?? '');
    const [age, setAge] = useState(props?.value ?? 0);

    const table = 
    users.map((item, index) => {
        if (index === 0)
            return <TableItems name={"Name"} age={"Age"} />
        else
            return <TableItems name={item.name} age={item.age} />
    });

    return (
        <div>
            <table border={1} width={"300"}>
                {table}
            </table>
            <div>
                <input
                    type='text'
                    placeholder="Name" 
                    value={name} 
                    onInput={(e) => setName(e.target.value)}
                />
                <input 
                    type='number' 
                    placeholder="Age" 
                    value={age} 
                    onInput={(e) => setAge(e.target.value)}
                />

                <button onClick={() => addListItem({name, age})}>
                    Add link
                </button>
            </div>
        </div>
    );
}


export default Ex16;