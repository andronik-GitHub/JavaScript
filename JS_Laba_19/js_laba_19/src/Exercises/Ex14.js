import React, { useState } from "react";


function ListItem(props) { // for create list items
    return (
        <li>
            <a href={props.href}>{props.text}</a>
        </li>
    );
}

function Ex14(props) {

    const [hrefs, setHrefs] = useState(
        [
            {href: '1.html', text: 'link 1'},
            {href: '2.html', text: 'link 2'},
            {href: '3.html', text: 'link 3'},
        ]
    );

    function addListItem(href) { // add new item in list
        setHrefs([...hrefs, href]);
    }


    const [href, setHref] = useState(props?.value ?? '');
    const [text, setText] = useState(props?.value ?? '');
    
    const listItems = hrefs.map((item) => // create list
        <ListItem 
            key={Math.random()}
            href={item.href} 
            text={item.text}
        />
    );

    return(
        <div>
            <ul>
                {listItems}
            </ul>
            <div>
                <input
                    type='text'
                    placeholder="href" 
                    value={href} 
                    onInput={(e) => setHref(e.target.value)}
                />
                <input 
                    type='text' 
                    placeholder="text" 
                    value={text} 
                    onInput={(e) => setText(e.target.value)}
                />

                <button onClick={() => addListItem({href, text})}>
                    Add link
                </button>
            </div>
        </div>
    )
}


export default Ex14;