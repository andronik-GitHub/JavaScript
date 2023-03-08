import React, { useState } from "react";
import Note from "./Note.js";

function Ex08() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            date: (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            date: (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 3,
            date: (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]);



    const createNewNote = (target) => {
        let newNote = {
            id: notes.length > 0 ? (notes[notes.length - 1].id + 1) : 1,
            date: (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()),
            content: target.value
        }

        if (target.value !== '') setNotes([...notes, newNote]);
        else alert("Input text in textarea!");

        target.value = '';
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    const updateNote = (id) => {
        let target = document.getElementById("textareaNoteID" + id);
        target.style.display = "inline";
        target.focus();
    }

    const outFocus = (id, text) => {
        const updateNotes = notes.map(note => {
            const newNote = {
                id: note.id,
                date: note.date,
                content: text
            }

            if (note.id === id && text !== "") return { ...note, ...newNote };
            else return note;
        });
        
        setNotes(updateNotes);

        let target = document.getElementById("textareaNoteID" + id);
        target.style.display = "none";
        target.value = '';
    }


    const noteList = notes.map(note => 
            <Note
                note={ note }
                onClickDelete={ () => deleteNote(note.id) }
                onClickUpdate={ () => updateNote(note.id) }
                onBlur={ (event) => outFocus(note.id, event.target.value) }
            />
        );

    return(
        <div>
            <textarea
                id="textaredID"
                rows="10"
                cols="40"
                placeholder="Your 'note'"
            >
            </textarea><br />
            <button
                onClick={ () => createNewNote(document.getElementById("textaredID")) }
            >
                Add new note
            </button>
            <div>
                { noteList }
            </div>
        </div>
    );
}

export default Ex08;