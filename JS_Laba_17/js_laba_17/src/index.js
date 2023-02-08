import React from 'react';
import ReactDOM from 'react-dom/client';

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


class Ex1 extends React.Component {
    render() {
        let info = (<h1>Ex1</h1>);
        return (
            <div>
                { info }
                Text
            </div>
        );
    }
}

class Ex2 extends React.Component {
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

class Ex3 extends React.Component {
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

class Ex4 extends React.Component {
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

class Ex5 extends React.Component {
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

class Ex6 extends React.Component {
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

class Ex7 extends React.Component {
    render() {
        let info = (<h1>Ex7</h1>);

        return (
            <div style={ { 
                        background: 'green' ,
                        border: '10px solid red',
                        borderRadius: '30px',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '20px'
                    } }>
                { info }
            </div>
        );
    }
}

class Ex8 extends React.Component {
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

class Ex9 extends React.Component {
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

class Ex10 extends React.Component {
    getText() {
        return <p>Text</p>
    }

    render() {
        let info = (<h1>Ex10</h1>);

        return (
            <div>
                { info }
                { this.getText() }
            </div>
        );
    }
}

class Ex11 extends React.Component {
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


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <div>
            <Ex1 />
            <Ex2 />
            <Ex3 />
            <Ex4 />
            <Ex5 />
            <Ex6 />
            <Ex7 />
            <Ex8 />
            <Ex9 />
            <Ex10 />
            <Ex11 />
        </div>
    );

