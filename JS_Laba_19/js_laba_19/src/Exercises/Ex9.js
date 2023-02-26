import React from "react";
import ReactDOM from "react-dom/client";

class Ex9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) { // change state
        this.setState({value: event.target.value});
    }
    handleSubmit(event) { // input result
        ReactDOM
            .createRoot(document.getElementById('text'))
            .render(
                <span>
                    {this.state.value}
                </span>
            );

        event.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                    <br />
                    <input type='submit' value='submit' />
                </form>
                
                <p id="text">
                </p>
            </div>
        );
    }
}

export default Ex9;