import React from 'react';

export default class Ex2 extends React.Component {
    render() {
        let info = (<h1>Ex2</h1>);

        let text = 'Text';
        return (
            <div>
                { info }
                { text }
            </div>
        );
    }
}