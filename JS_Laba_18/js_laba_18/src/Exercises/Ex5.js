import React from "react";

export default class Ex5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            name: "Іван",
            text: "Привіт"
        };

        this.greeting = this.greeting.bind(this); // для роботи 'this' в колбеці
    }

    greeting() {
        if (this.state.show)
            this.setState({text: "Пока"});
        else
            this.setState({text: "Привіт"});

        this.setState({show: !this.state.show});
    }

    render() {
        return (
            <div>
                <p>{this.state.text}, {this.state.name}</p>
                <button onClick={this.greeting}>
                    Click
                </button>
            </div>
        );
    }
}