import React from 'react';

export default class Ex8 extends React.Component {
    render() {
        let info = (<h1>Ex8</h1>);

        let show = true;
        let content;

        if (show) content = 'text 1'
        else content = 'text 2'

        return (
            <div>
                { info }
                { content }
            </div>
        );
    }
}