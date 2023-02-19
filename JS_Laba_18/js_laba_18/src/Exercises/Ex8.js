import React from "react";
import ReactDOM from "react-dom/client";

export default class Ex8 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Іван',
            age: 25,
            isShow: true,
            btnText: "Показати"
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
                    <button onClick={this.showNameAge}>
                        {this.state.btnText}
                    </button>
                </div>
            );
            
        this.setState({
            isShow: !this.state.isShow,
            btnText: this.state.isShow ? "Показати" : "Приховати"
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.showNameAge}>Показати</button>
            </div>
        );
    }
}