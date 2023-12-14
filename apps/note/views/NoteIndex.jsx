import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"
import { utilService } from "../../../services/util.service.js"
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
                setNotes((prevNotes) => [...prevNotes, newNote])
            })
            .catch(err => console.log('err:', err))
    }

    function onUpdateNote(noteId, field, value) {
        const noteIdx = notes.findIndex(note => note.id === noteId)
        notes[noteIdx].info[field] = value;
        noteService.save(notes[noteIdx])
            .then()
    }

    function onInputChange(newTodoTxt, noteId) {
        const noteIdx = notes.findIndex(note => note.id === noteId)
        const newTodo = {id: utilService.makeId(), txt:newTodoTxt, isDone:false }
        notes[noteIdx].info.todos.push(newTodo)
       
        noteService.save(notes[noteIdx])
        .then(() => loadNotes())

    }

    function onDoneToggle(noteId,todoId) {
        const noteIdx = notes.findIndex(note => note.id === noteId)     
        const todoIdx =  notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId)
        notes[noteIdx].info.todos[todoIdx].isDone = !notes[noteIdx].info.todos[todoIdx].isDone

        noteService.save(notes[noteIdx])
        .then(() => loadNotes())
    }

    function onRemoveTodo(noteId,todoId) {
        const noteIdx = notes.findIndex(note => note.id === noteId)
        const todoIdx =  notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId)
        notes[noteIdx].info.todos.splice(todoIdx,1)
        
        noteService.save(notes[noteIdx])
            .then(() => loadNotes())
    }


    if (!notes) return <div>Loading...</div>
    return (

        <section className="note-index">

            <NoteAdd onSaveNote={onSaveNote} />

            <NoteList notes={notes} onRemoveNote={onRemoveNote} onUpdateNote={onUpdateNote} onInputChange={onInputChange} onDoneToggle={onDoneToggle} onRemoveTodo={onRemoveTodo} />

        </section>

    )
}


