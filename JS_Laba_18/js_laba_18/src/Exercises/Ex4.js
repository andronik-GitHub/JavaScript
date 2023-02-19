import React from "react";

export default class Ex4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25
        }

        this.changeObj = this.changeObj.bind(this); // для роботи 'this' в колбеці
    }

    changeObj() {
        this.setState({
            name: "Коля",
            age: 30
        });
    }

    render() {
        return (
            <div>
                <p>
                    Ім'я: {this.state.name} , вік: {this.state.age}
                </p>
                <button onClick={this.changeObj}>
                    Click
                </button>
            </div>
        );
    }
}