import React from 'react';

class Ex01 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
                'Item 5'
            ]
        };

        this.changeStyle = this.changeStyle.bind(this);
    }

    changeStyle(event) {
        event.currentTarget.style.textDecoration = 'underline';
    }

    render() {
        let list = this.state.arr.map(item =>
                <li key={ Math.random() }>
                    <label onClick={ this.changeStyle }>
                        <input type="checkbox"/>
                        { item }
                    </label>
                </li>
            );

        return(
            <div>
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}

export default Ex01;