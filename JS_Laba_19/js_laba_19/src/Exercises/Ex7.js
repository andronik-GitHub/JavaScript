import React from "react";


class Ex7 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: new Date().getFullYear()};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let date = new Date().getFullYear();
        this.setState({value: date - (event.target.value)});
    }

    render() {
        return (
            <div>
                Age: <input type="number" placeholder="Input your age" onChange={this.handleChange} />
                <p>
                    Your birth year:
                    <strong>
                        {this.state.value}
                    </strong>
                </p>
            </div>
        );
    }
}


export default Ex7;