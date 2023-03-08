import React, { useState } from 'react';
import Button from './Button';
import InputText from './InputText';


function Ex06(props) {
    const [users, setUsers] = useState([
        { id: 1, name: "Микола", age: 30 },
        { id: 2, name: "Василь", age: 40 },
        { id: 3, name: "Петро", age: 50 },
    ]);


    const outFocus = (id, target, type) => {

        const updateUsers = users.map(user => { 
            let newUser;
            if (type === "name")
                newUser = {
                    id: id,
                    name: target.value,
                    age: user.age
                };
            else if (type === "age")
                newUser = {
                    id: id,
                    name: user.name,
                    age: target.value
                };

            if (user.id === id) return { ...user, ...newUser };
            else return user;
        });
        
        setUsers(updateUsers);

        target.style.display = "none";
        target.value = '';
    }

    const showInput = (target) => {
        target.style.display = "inline";
        target.focus();
    }

    const table = users.map(user => {
        let rand = Math.random();

        return (
            <tr>
                <td>
                    <span>{ user.name }</span>
                    <Button
                        content={ "Change" }
                        onClick={ () => showInput(document.getElementById(user.id)) }
                    />
                    <InputText
                        id={ user.id }
                        onBlur={ (event) => outFocus(user.id, event.target, "name") }
                    />
                </td>
                <td>
                    <span>{ user.age }</span>
                    <Button
                        content={ "Change" }
                        onClick={ () => showInput(document.getElementById(rand + user.id)) }
                    />
                    <InputText
                        id={ rand + user.id }
                        onBlur={ (event) => outFocus(user.id, event.target, "age") }
                    />
                </td>
            </tr>
        );
    });

    return(
        <div>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                { table }
            </table>
        </div>
    );
}

export default Ex06;