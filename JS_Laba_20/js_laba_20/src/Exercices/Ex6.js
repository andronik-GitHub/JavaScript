import React from "react";

class Ex6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arrString: [  ]
        };

        this.addNewString = this.addNewString.bind(this);
    }

    addNewString(event) {
        let newStr = document.getElementById("textareaId").value;

        this.setState({
            arrString: [...this.state.arrString, newStr]
        });
        
        document.getElementById("textareaId").value = '';
    }

    render() {
        return(
            <div>
                <textarea id="textareaId" rows="5" cols="40" placeholder="Input your text">
                </textarea><br />
                <button onClick={ this.addNewString }>Add new text</button>
                <div id="result">
                    {
                        this.state.arrString.map(element => 
                            document.getElementById("result").value = <p>{ element }</p>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Ex6;