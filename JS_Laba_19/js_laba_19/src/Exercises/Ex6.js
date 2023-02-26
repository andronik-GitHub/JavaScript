import React from "react";


class Ex6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: (event.target.value + "").toUpperCase()});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <p>
                    {this.state.value}
                </p>
            </div>
        );
    }
}


export default Ex6;