import React from "react";

export default class Ex2 extends React.Component {
    showMessage() {
        alert("Hello");
    }

    render() {
        return (
            <button onClick={this.showMessage}>
                Click
            </button>
        );
    }
}