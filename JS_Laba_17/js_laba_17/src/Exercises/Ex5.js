import React from 'react';

export default class Ex5 extends React.Component {
    render() {
        let info = (<h1>Ex5</h1>);

        let attr = 'block';
        return (
            <div id={ attr }>
                { info }
                Text
            </div>
        );
    }
}