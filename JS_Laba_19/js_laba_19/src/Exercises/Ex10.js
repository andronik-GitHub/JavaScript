import React from "react";
import ReactDOM from "react-dom/client";


class Ex10 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNum: 0,
            secondNum: 0
        };

        this.handleChangeFirst = this.handleChangeFirst.bind(this);
        this.handleChangeSecond = this.handleChangeSecond.bind(this);
        this.handleResult = this.handleResult.bind(this);
    }


    handleChangeFirst(event) {
            this.setState({firstNum: +event.target.value})
    }
    handleChangeSecond(event) {
            this.setState({secondNum: +event.target.value});
    }
    handleResult() {
        let result = this.state.firstNum + this.state.secondNum;

        ReactDOM
            .createRoot(document.getElementById("result"))
            .render(
                <span>
                    {result}
                </span>
            );
    }


    render() {
        return(
            <div>
                <input type='number' onChange={this.handleChangeFirst} />+
                <input type='number' onChange={this.handleChangeSecond} />=
                <span id="result">

                </span>
                <br />
                <button onClick={this.handleResult}>Calculate</button>
            </div>
        );
    }
}

export default Ex10;