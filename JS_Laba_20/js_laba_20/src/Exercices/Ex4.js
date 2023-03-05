import React from "react";

class Ex4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: [ "Chicago" ]
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        
        this.setState({
            city: [...this.state.city, event.target.value]
        });
    }

    render() {
        return (
            <div>
                <select onChange={ this.handleChange }  defaultValue={ this.state.city[0] }>
                    <option value="New-York">New-York</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Boston">Boston</option>
                    <option value="LosAngeles">Los Angeles</option>
                    <option value="Lviv">Lviv</option>
                    <option value="Houston">Houston</option>
                    <option value="Philadelphia">Philadelphia</option>
                    <option value="Dallas">Dallas</option>
                    <option value="SanDiego">San Diego</option>
                    <option value="Kyiv">Kyiv</option>
                    <option value="Berlin">Berlin</option>
                </select>
                <p>
                    { this.state.city.join(', ') }
                </p>
            </div>
        );
    }
}

export default Ex4;