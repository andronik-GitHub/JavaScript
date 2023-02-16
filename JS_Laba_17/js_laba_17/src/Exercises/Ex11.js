import React from 'react';

export default class Ex11 extends React.Component {
    getNum1() {
        return 1;
    }

    getNum2() {
        return 2;
    }

    render() {
        let info = (<h1>Ex11</h1>);

        return (
            <div>
                { info }
                Text { this.getNum1() + this.getNum2() }
            </div>
        );
    }
}