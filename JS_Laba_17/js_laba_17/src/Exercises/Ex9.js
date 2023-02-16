import React from 'react';

export default class Ex9 extends React.Component {
    render() {
        let info = (<h1>Ex9</h1>);

        let arr = ['a', 'b', 'c', 'd', 'e'];
        let list = '';

        list = arr.map((value, key) => {
            return (<li key={key}>{ value }</li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}