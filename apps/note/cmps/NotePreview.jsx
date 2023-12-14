import { DynamicCmp } from "./DynamicCmp.jsx"

export function NotePreview({note, onUpdateNote, onInputChange, onDoneToggle, onRemoveTodo, onPinNote}) {

    //move to parent
    function onContentChange(ev) {
        const field = ev.target.id
        const value = ev.target.innerText
        onUpdateNote(note.id, field, value)
    }

    
        
    

    return (
        <article className="note-preview">
           <button className="pin-img clean-btn btn" onClick={() => onPinNote(note.id)}>
            <img src={(note.isPinned) ? './assets/icons/pin-full-colors.png' : './assets/icons/pin-empty.png'} alt="" />
            </button>
           <DynamicCmp cmpType={note.type} info={note.info} noteId={note.id} onContentChange={onContentChange} onInputChange={onInputChange} onDoneToggle={onDoneToggle} onRemoveTodo={onRemoveTodo}/>

        </article>
    )
}