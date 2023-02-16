import React from 'react';

export default class Ex6 extends React.Component {
    render() {
        let info = (<h1>Ex6</h1>);

        let str = 'block';
        return (
            <div className={ str }>
                { info }
                Text
            </div>
        );
    }
}