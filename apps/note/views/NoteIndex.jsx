import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React

export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        loadNotes()
        return () => {

        }
    }, [filterBy])


    function loadNotes() {
        noteService.query(filterBy)
            .then(setNotes)
            .catch(err => console.log('err:', err))
    }


    function onRemoveNote(noteId) {
        noteService.remove(noteId)
            .then(() => {
                setNotes(prevNotes => {
                    return prevNotes.filter(note => note.id !== noteId)
                })
                // showSuccessMsg(`Note successfully removed!`)
            })
            .catch(err => {
            console.log('err:', err)
            // showErrorMsg(`Houston we have a problem!`)
        })
    }

    if (!notes) return <div>Loading...</div>
    return (
        <section className="note-index">
        
        <div>note app</div>

        <NoteList notes={notes} onRemoveNote={onRemoveNote} />

        </section>

    )
}


