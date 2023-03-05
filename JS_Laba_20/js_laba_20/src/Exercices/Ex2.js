import React from "react";

class Ex2 extends React.Component {
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
                <p>
                    { this.state.isChecked ? "Checked" : "Not Checked" }
                </p>
            </div>
        );
    }
}

export default Ex2;