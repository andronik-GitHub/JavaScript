import React, { useState } from "react";

function Ex10(props) {
    const [options, setOptions] = useState(['exemple option']);

    function addNewOption(newOption) {
        setOptions([...options, newOption]);
    }

    const [inputValue, setInputValue] = useState(props?.value ?? '');

    const optionsList = options.map(element =>
        <option value={ element }>{ element }</option>);

    return(
        <div>
            <input
                type="text"
                placeholder="Input new option"
                onInput={ e => setInputValue(e.target.value) }
            />
            <button
                onClick={ () => addNewOption(inputValue) }
            >
                Add new option
            </button>
            <select>
                { optionsList }
            </select>
        </div>
    );
}

export default Ex10;