import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"
import { NoteAdd } from "../cmps/NoteAdd.jsx"
import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React

export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        loadNotes()

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
                showSuccessMsg(`Note successfully removed!`)
            })
            .catch(err => {
            console.log('err:', err)
            showErrorMsg(`Houston we have a problem!`)
        })
    }

    function onSaveNote(newNote) {
        noteService.save(newNote)
            .then(newNote => {
                setNotes ((prevNotes) => [...prevNotes, newNote]) 
            })
            .catch(err => console.log('err:', err))
    }


    if (!notes) return <div>Loading...</div>
    return (

        <section className="note-index">
        
        <NoteAdd onSaveNote={onSaveNote}/>        

        <NoteList notes={notes} onRemoveNote={onRemoveNote} />

        </section>

    )
}


