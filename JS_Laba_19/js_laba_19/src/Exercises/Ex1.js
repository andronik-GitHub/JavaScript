import React from "react";


function ListItem(props) {
    return (
        <li>
            {props.value}
        </li>
    );
}

export default class Ex1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [
                'Коля',
                'Василь',
                'Петро',
                'Іван',
                'Дмитро'
            ]
        }
    }

    render() {
        const names = this.state.names;
        const listItems = names.map((name) => 
            <ListItem value={name}/>
        );

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}