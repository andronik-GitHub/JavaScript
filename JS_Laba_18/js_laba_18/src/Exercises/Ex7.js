import React from "react";
import ReactDOM from "react-dom/client";

export default class Ex7 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25,
            isShow: true,
        }

        this.showNameAge = this.showNameAge.bind(this); // для роботи 'this' в колбеці
    }

    showNameAge() {
        ReactDOM
            .createRoot(document.getElementById("root"))
            .render(
                <div>
                    {
                        this.state.isShow && 
                        <p>Ім'я: {this.state.name} , вік: {this.state.age}</p>
                    }
                    <button onClick={this.showNameAge}>Click</button>
                </div>
            );
            
        this.setState({isShow: !this.state.isShow});
    }

    render() {
        return (
            <div>
                <button onClick={this.showNameAge}>Click</button>
            </div>
        );
    }
}