import React from 'react';

export default class Ex3 extends React.Component {
    render() {
        let info = (<h1>Ex3</h1>);

        let text = (<p>Text</p>);
        return (
            <div>
                { info }
                { text }
            </div>
        );
    }
}