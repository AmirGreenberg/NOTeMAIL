import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React

export function NoteAdd({onSaveNote}) {

    const [newNote, setNewNote] = useState(noteService.getEmptyNote())

    // useEffect(() => { 
        
    // }, [])


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

        setNewNote(prevNote => ({ ...prevNote, info:{...prevNote.info,[field]: value }, createdAt: Date.now()}))
    }
console.log('render')
    function onSubmit(ev) {
        ev.preventDefault()
        onSaveNote(newNote)
        setNewNote(noteService.getEmptyNote())
        

    }
 
    const { title,txt } = newNote.info
    
    return (
        <section className="note-add">
            <h1>Add Note</h1>
            <form onSubmit={onSubmit}>

                <input onChange={handleChange} value={title} type="text" name="title" placeholder="Title..." />
                <input onChange={handleChange} value={txt} type="text" name="txt" placeholder="Take a note..." />
                <button type="submit">Add</button>
            </form>

        </section>
    )
}
