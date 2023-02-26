import React from "react";


class Ex8 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            fatherName: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let str = (event.target.value + "").split(' ');
        this.setState({
            firstName: str[0],
            lastName: str[1],
            fatherName: str[2]
        });
    }

    render() {
        let style = { marginLeft: "10px" };
        return (
            <div>
                Full name: 
                <input 
                    type="text" 
                    placeholder="Input your full name" 
                    onChange={this.handleChange} 
                />
                <p>
                    First name:
                    <span style={style}>
                        <strong>
                            {this.state.firstName}
                        </strong>
                    </span>
                </p>
                <p>
                    Last name:
                    <span style={style}>
                        <strong>
                            {this.state.lastName}
                        </strong>
                    </span>
                </p>
                <p>
                    Father name:
                    <span style={style}>
                        <strong>
                            {this.state.fatherName}
                        </strong>
                    </span>
                </p>
            </div>
        );
    }
}


export default Ex8;