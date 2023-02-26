import React from "react";
import ReactDOM from "react-dom/client";


class Ex11 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            fatherName: ''
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeFatherName = this.handleChangeFatherName.bind(this);
        this.handleShowFullName = this.handleShowFullName.bind(this);
    }


    handleChangeFirstName(event) {
        this.setState({firstName: event.target.value});
    }
    handleChangeLastName(event) {
        this.setState({lastName: event.target.value});
    }
    handleChangeFatherName(event) {
        this.setState({fatherName: event.target.value});
    }

    handleShowFullName() {
        let fullName = 
            this.state.firstName + " " +  
            this.state.lastName + " " + 
            this.state.fatherName;

        ReactDOM
            .createRoot(document.getElementById("fullName"))
            .render(
                <span>
                    {fullName}
                </span>
            );
    }

    render() {
        return(
            <div>
                First name:
                <input 
                    type="text" 
                    placeholder="Input your first name" 
                    onChange={this.handleChangeFirstName} 
                />
                <br />Last name:
                <input 
                    type="text" 
                    placeholder="Input your last name" 
                    onChange={this.handleChangeLastName} 
                />
                <br />Father name:
                <input 
                    type="text" 
                    placeholder="Input your father name" 
                    onChange={this.handleChangeFatherName} 
                />

                <br /><p id="fullName"></p>

                <button onClick={this.handleShowFullName}>Show full name</button>
            </div>
        );
    }
}


export default Ex11;