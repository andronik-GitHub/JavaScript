import React from 'react';

class Ex03 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [
                'item 1',
                'item 2',
                'item 3',
                'item 4',
                'item 5',
                'item 6',
            ]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (!event.target.checked)
            document.getElementById(event.target.name).style.display = 'none';
        else
            document.getElementById(event.target.name).style.display = 'block';
    }

    render() {
        let result = this.state.arr.map(item =>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name={ item }
                        onClick={ this.handleClick }
                        defaultChecked
                    />
                    Checkbox "{ item }"
                </label>
                <p id={ item }>
                    { item }
                </p>
            </div>
        );
        return(
            <div>
                { result }
            </div>
        );
    }
}

export default Ex03;