import React from "react";

class Ex3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            isChecked: event.target.checked
        });
    }

    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" onClick={ this.handleChange } />
                    Checkbox
                </label>
                <p id="p" style={ {
                    display: this.state.isChecked ? "block" : "none"
                } }>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium perferendis commodi asperiores dolorum quasi omnis officiis maiores animi voluptatibus voluptatem ipsa, dignissimos, voluptates dolore harum ullam. Eos ea adipisci quasi.
                </p>
            </div>
        );
    }
}

export default Ex3;