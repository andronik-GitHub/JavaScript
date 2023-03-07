import React from "react";

class Ex8 extends React.Component {
    constructor(props) {
        super(props);

        this.changeCheckBox = this.changeCheckBox.bind(this);
    }

    changeCheckBox(event) {
        document.getElementById("checkboxID").checked = 
            event.target.value === "Checked" ? true : false;
    }

    render() {
        return(
            <div>
                <select onChange={ this.changeCheckBox }>
                    <option value="Checked">Checked</option>
                    <option value="NotChecked" selected>NotChecked</option>
                </select>
                <label>
                    <input id="checkboxID" type="checkbox" value="CheckBox" />
                    Checkbox
                </label>
            </div>
        );
    }
}

export default Ex8;