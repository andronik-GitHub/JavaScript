import React from 'react';

export default class Ex7 extends React.Component {
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