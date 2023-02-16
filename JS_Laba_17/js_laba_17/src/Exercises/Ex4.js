import React from 'react';

export default class Ex4 extends React.Component {
    render() {
        let info = (<h1>Ex4</h1>);

        let text1 = (<p>Text1</p>);
        let text2 = (<p>Text2</p>);
        return (
            <div>
                { info }
                { text1 }
                <p>!!!</p>
                { text2 }
            </div>
        )
    }
}