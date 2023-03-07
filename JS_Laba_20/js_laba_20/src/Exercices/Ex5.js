import React from "react";

class Ex5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };

        this.ChangeValue = this.ChangeValue.bind(this);
    }

    ChangeValue(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return(
            <div>
                <div>
                    <label onClick={ this.ChangeValue }>
                        <input type="radio" name="radio" value="1" />Radio-1
                    </label><br/>
                    <label onClick={ this.ChangeValue }>
                        <input type="radio" name="radio" value="2"/>Radio-2
                    </label><br/>
                    <label onClick={ this.ChangeValue }>
                        <input type="radio" name="radio" value="3" />Radio-3
                    </label><br/>
                </div>
                <p>
                    <span style={{
                        margin: "0px 5px"
                    }}>
                        { this.state.value }
                    </span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium perferendis commodi asperiores dolorum quasi omnis officiis maiores animi voluptatibus voluptatem ipsa, dignissimos, voluptates dolore harum ullam. Eos ea adipisci quasi.
                </p>
            </div>
        );
    }
}

export default Ex5;