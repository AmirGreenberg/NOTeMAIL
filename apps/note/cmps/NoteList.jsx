import { NotePreview } from "./NotePreview.jsx";

export function NoteList({
    notes,
    isNewNote,
    onSaveNote,
    onTypeChange,
    onDuplicate,
    onSetBgColor,
    onRemoveNote,
    onTodoInputChange,
    onDoneToggle,
    onRemoveTodo,
    onPinNote,
    onContentChange
}) {
    if (!notes) return <section>Loading...</section>
    return (
        <ul className={isNewNote ? 'note-list width100' : 'main-columns-note note-list width100'} >
            {notes.map(note =>
                <li className="note-container clean-list width100" key={note.id} style={{ backgroundColor: note.style.backgroundColor }}>
                    <NotePreview
                        note={note}
                        isNewNote={isNewNote}
                        onSaveNote={onSaveNote}
                        onRemoveNote={onRemoveNote}
                        onTodoInputChange={onTodoInputChange}
                        onDoneToggle={onDoneToggle}
                        onRemoveTodo={onRemoveTodo}
                        onPinNote={onPinNote}
                        onContentChange={onContentChange}
                        onSetBgColor={onSetBgColor}
                        onDuplicate={onDuplicate}
                        onTypeChange={onTypeChange}
                    />

                </li>
            )}
        </ul>
    )
}

