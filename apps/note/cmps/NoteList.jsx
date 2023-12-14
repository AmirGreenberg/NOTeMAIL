import { NotePreview } from "./NotePreview.jsx";

const { Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote, onTodoInputChange, onDoneToggle, onRemoveTodo, onPinNote, onContentChange}) {
    if (!notes) return <section>Loading...</section>
    return (
        <ul className="note-list">
            {notes.map(note =>
                <li className="clean-list" key={note.id}>
                    <div className="note"
                        style={{ backgroundColor: note.style.backgroundColor }}
                    >
                        <NotePreview note={note} onTodoInputChange={onTodoInputChange} onDoneToggle={onDoneToggle} onRemoveTodo={onRemoveTodo} onPinNote={onPinNote} onContentChange={onContentChange}/>
                        <section>
                            <button onClick={() => onRemoveNote(note.id)}>Remove Note</button>
                        </section>
                    </div>
                </li>
            )}
        </ul>
    )
}

