import React from "react";

class Ex7 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'white'
        };

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(event) {
        this.setState({
            color: event.target.value
        });
    }

    render() {
        return(
            <div>
                <select onChange={ this.changeColor }>
                    <option disabled selected>Select background-color</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Gray">Gray</option>
                </select>
                <p style={{
                    backgroundColor: this.state.color
                }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium perferendis commodi asperiores dolorum quasi omnis officiis maiores animi voluptatibus voluptatem ipsa, dignissimos, voluptates dolore harum ullam. Eos ea adipisci quasi.
                </p>
            </div>
        );
    }
}

export default Ex7;