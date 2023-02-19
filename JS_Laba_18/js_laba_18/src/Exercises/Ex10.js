import React from "react";

export default class Ex9 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: [
                "Коля",
                "Вася",
                "Петро",
            ]
        }
    }

    render() {
        return (
            <ul>
                {this.state.name.map((item, key) => <li key={key}>{item} - {key}</li>)}
            </ul>
        );
    }
}