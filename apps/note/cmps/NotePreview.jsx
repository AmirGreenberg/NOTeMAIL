import { noteService } from "../services/note.service.js"
import { DynamicCmp } from "./DynamicCmp.jsx"

const { useState } = React

export function NotePreview({ note, onUpdateNote }) {

    const [updatedNote, setUpdatedNote] = useState(note)


    function onContentChange(ev) {

        const field = ev.target.id
        const value = ev.target.innerText

        onUpdateNote(note.id, field, value)
    }

    return (
        <article className="note-preview">
           
           <DynamicCmp cmpType={note.type} info={note.info} onContentChange={onContentChange} />
            {/* <h2 id="title" contentEditable="true" style={{ outline: "none" }} onBlur={onContentChange}>{note.info.title}</h2>
            <h4 id="txt" contentEditable="true" style={{ outline: "none" }} onBlur={onContentChange}>{note.info.txt}</h4> */}

        </article>
    )
}