import React from "react";

export default class Ex3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25
        }

        this.showName = this.showName.bind(this); // для роботи 'this' в колбеці
    }

    showName() {
        alert("Ім'я: " + this.state.name);
    }

    render() {
        return (
            <button onClick={this.showName}>
                Click
            </button>
        );
    }
}