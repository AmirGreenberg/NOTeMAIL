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
        <ul className="note-list width100">
            {notes.map(note =>
                <li className="clean-list width100 " key={note.id}>
                    <div className="note note-size"
                        style={{ backgroundColor: note.style.backgroundColor }}
                    >

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
                    </div>
                </li>
            )}
        </ul>
    )
}

