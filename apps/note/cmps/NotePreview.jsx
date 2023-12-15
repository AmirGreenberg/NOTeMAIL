import { DynamicCmp } from "./DynamicCmp.jsx"
import { EditorPanel } from "./EditorPanel.jsx"

export function NotePreview({
    note,
    isNewNote,
    onSaveNote,
    onTypeChange,
    onSetBgColor,
    onDuplicate,
    onRemoveNote,
    onTodoInputChange,
    onDoneToggle,
    onRemoveTodo,
    onPinNote,
    onContentChange
}) 
{

    return (
        <article className="note-preview">
           <button className=" clean-btn btn" onClick={() => onPinNote(note.id)}>
            <img className="pin-img" src={(note.isPinned) ? './assets/icons/pin-full-colors.png' : './assets/icons/pin-empty.png'} alt="" className ="notes-imgs" />
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
           isNewNote={isNewNote}
           onSaveNote={onSaveNote}
           onRemoveNote={onRemoveNote}
           onSetBgColor={onSetBgColor}
           onDuplicate={onDuplicate}
           onTypeChange={onTypeChange}
           />

        </article>
    )
}