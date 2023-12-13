import { NotePreview } from "./NotePreview.jsx";

const { Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote }) {
    return (
        <ul className="note-list">
            {notes.map(note =>
                <li className="clean-list" key={note.id}>
                    <div className="note"
                        style={{backgroundColor: note.style.backgroundColor}}
                    >
                        <NotePreview note={note} />
                        <section>
                            <button onClick={() => onRemoveNote(note.id)}>Remove Note</button>
                        </section>
                    </div>
                </li>
            )}
        </ul>
    )
}

function DynamicCmp(props) {
    switch (props.cmpType) {
        case 'color':
            return <ColorInput {...props} />
        case 'fontSize':
            return <FontsizeInput {...props} />
    }
}