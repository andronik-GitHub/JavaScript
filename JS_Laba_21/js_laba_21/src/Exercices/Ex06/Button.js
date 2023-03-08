import React from "react";

function Button(props) {

    return (
        <button
            style={{
                margin: "0px 10px"
            }}
            onClick={ props.onClick }
        >
            { props.content }
        </button>
    );
}

export default Button;