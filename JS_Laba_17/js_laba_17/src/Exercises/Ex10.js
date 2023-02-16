import React from 'react';

export default class Ex10 extends React.Component {
    getText() {
        return <p>Text</p>
    }

    render() {
        let info = (<h1>Ex10</h1>);

        return (
            <div>
                { info }
                { this.getText() }
            </div>
        );
    }
}