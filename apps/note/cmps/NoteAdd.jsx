import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React

export function NoteAdd({ onSaveNote }) {

    const [newNote, setNewNote] = useState(noteService.getEmptyNote())
    const [isOpen, setIsOpen] = useState(false)


    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {

            case 'text':
                value = value
                break;

            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }

        setNewNote(prevNote => ({ ...prevNote, info: { ...prevNote.info, [field]: value }, createdAt: Date.now() }))
    }
    function onSubmit(ev) {
        ev.preventDefault()
        onSaveNote(newNote)
        setNewNote(noteService.getEmptyNote())


    }

    const { title, txt } = newNote.info

    return (
        <section className="note-add">
            <h1>Add Note</h1>
            <form style={{border: 1+'px solid black' , padding: 10 + 'px'}} onClick={() => setIsOpen(isOpen => !isOpen)} onSubmit={onSubmit}>
                <section  >
                    <input onChange={handleChange} value={title} type="text" name="title" placeholder="Title..." />
                    <button type="submit">Add</button>
                </section>
                {isOpen && <input onChange={handleChange} value={txt} type="text" name="txt" placeholder="Take a note..." />}
                
            </form>

        </section>
    )
}
