import React from "react";

class Ex1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <textarea rows="10" cols="40" onChange={this.handleChange}></textarea>
                <p>{ this.state.value }</p>
            </div>
        );
    }
}

export default Ex1;