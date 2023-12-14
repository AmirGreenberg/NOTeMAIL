import { DynamicCmp } from "./DynamicCmp.jsx"
import { EditorPanel } from "./EditorPanel.jsx"

export function NotePreview({note, onRemoveNote, onTodoInputChange, onDoneToggle, onRemoveTodo, onPinNote, onContentChange}) {

    return (
        <article className="note-preview">
           <button className="pin-img clean-btn btn" onClick={() => onPinNote(note.id)}>
            <img src={(note.isPinned) ? './assets/icons/pin-full-colors.png' : './assets/icons/pin-empty.png'} alt="" />
            </button>

           <DynamicCmp 
           cmpType={note.type}
           info={note.info}
           noteId={note.id}
           onContentChange={onContentChange}
           onTodoInputChange={onTodoInputChange}
           onDoneToggle={onDoneToggle} 
           onRemoveTodo={onRemoveTodo} />

           <EditorPanel
           noteId = {note.id}
           onRemoveNote={onRemoveNote}
           />

        </article>
    )
}