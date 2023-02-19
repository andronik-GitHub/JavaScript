import React from "react";
import ReactDOM from "react-dom/client";

export default class Ex6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25
        }

        this.showNameAge = this.showNameAge.bind(this); // для роботи 'this' в колбеці
    }

    showNameAge() {
        ReactDOM
            .createRoot(document.getElementById("root"))
            .render(
                <div>
                    <p>Ім'я: {this.state.name} , вік: {this.state.age}</p>
                    <button onClick={this.showNameAge}>Click</button>
                </div>
            );
    }

    render() {
        return (
            <div>
                <button onClick={this.showNameAge}>Click</button>
            </div>
        );
    }
}