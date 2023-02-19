import React from "react";

export default class Ex1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25
        }
    }

    render() {
        return (
            <div>
                Ім'я: {this.state.name} , вік: {this.state.age}
            </div>
        );
    }
}