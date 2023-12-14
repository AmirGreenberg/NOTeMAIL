import { DynamicCmp } from "./DynamicCmp.jsx"

export function NotePreview({ note, onUpdateNote, onInputChange, onDoneToggle, onRemoveTodo }) {

    function onContentChange(ev) {

        const field = ev.target.id
        const value = ev.target.innerText

        onUpdateNote(note.id, field, value)
    }

    return (
        <article className="note-preview">
           <button></button>
           <DynamicCmp cmpType={note.type} info={note.info} noteId={note.id} onContentChange={onContentChange} onInputChange={onInputChange} onDoneToggle={onDoneToggle} onRemoveTodo={onRemoveTodo}/>
            {/* <h2 id="title" contentEditable="true" style={{ outline: "none" }} onBlur={onContentChange}>{note.info.title}</h2>
            <h4 id="txt" contentEditable="true" style={{ outline: "none" }} onBlur={onContentChange}>{note.info.txt}</h4> */}

        </article>
    )
}