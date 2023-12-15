import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"
import { utilService } from "../../../services/util.service.js"
import { NoteAdd } from "../cmps/NoteAdd.jsx"
import { NoteList } from "../cmps/NoteList.jsx"
import { NotePreview } from "../cmps/NotePreview.jsx"
import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React

export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    const [newNote, setNewNote] = useState(noteService.getEmptyNote())

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
                loadNotes()
                showSuccessMsg(`Note successfully removed!`)
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg(`Houston we have a problem!`)
            })
    }

    function onSaveNote() {
            noteService.save(newNote)
            .then(newNote => {
                setNotes((prevNotes) => [newNote, ...prevNotes])
                onTypeChange('NoteTxt')

            })
            .catch(err => console.log('err:', err))
    }

    function onPinNote(noteId) {

        if (!noteId) {
            const reNewNote = ({ ...newNote })
            
            reNewNote.isPinned = !reNewNote.isPinned
            setNewNote(reNewNote)
        } else {
            const noteIdx = _getNoteIdx(noteId)
            notes[noteIdx].isPinned = !notes[noteIdx].isPinned

            _updateNote(noteIdx)
        }
    }

    function onDoneToggle(noteId, todoId) {
        const noteIdx = _getNoteIdx(noteId)
        const todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId)
        notes[noteIdx].info.todos[todoIdx].isDone = !notes[noteIdx].info.todos[todoIdx].isDone

        _updateNote(noteIdx)
    }

    function onRemoveTodo(noteId, todoId) {
        const noteIdx = _getNoteIdx(noteId)
        const todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId)
        notes[noteIdx].info.todos.splice(todoIdx, 1)

        _updateNote(noteIdx)
    }

    function onTodoInputChange(newTodoTxt, noteId) {
        if (!newTodoTxt) return
        const noteIdx = _getNoteIdx(noteId)
        const newTodo = { id: utilService.makeId(), txt: newTodoTxt, isDone: false }
        notes[noteIdx].info.todos.push(newTodo)

        _updateNote(noteIdx)
    }

    function onContentChange(ev, noteId) {
        const field = ev.target.id
        const value = ev.target.innerText
        const noteIdx = _getNoteIdx(noteId)
        notes[noteIdx].info[field] = value

        _updateNote(noteIdx)
    }

    function onSetBgColor(selectedColor, noteId) {
        if (!noteId) {
            setNewNote((prevNote) => ({ ...prevNote, style: { backgroundColor: selectedColor } }))
        } else {
            const noteIdx = _getNoteIdx(noteId)
            notes[noteIdx].style.backgroundColor = selectedColor
            _updateNote(noteIdx)
        }
    }

    function onDuplicate(noteId) {
        const noteIdx = _getNoteIdx(noteId)
        const duplicateNote = { ...notes[noteIdx] }
        duplicateNote.id = ''

        onSaveNote(duplicateNote)
    }

    function onTypeChange(type, noteId) {


        if (!noteId) {
            const reNewNote = ({ ...newNote })
            reNewNote.type = type
            setNewNote(reNewNote)
        } else {
            const noteIdx = _getNoteIdx(noteId)
            notes[noteIdx].type = type
            _updateNote(noteIdx)
        }
    }
    function _updateNote(noteIdx) {
        noteService.save(notes[noteIdx])
            .then(() => loadNotes())
            .catch(err => console.error(err))
    }

    function _getNoteIdx(noteId) {
        return notes.findIndex(note => note.id === noteId)
    }

    if (!notes) return <div>Loading...</div>
    return (

        <section className="note-index">

<NoteList
                        notes={[newNote]}
                        isNewNote={true}
                        onSaveNote={onSaveNote}
                        onRemoveNote={onRemoveNote}
                        onTodoInputChange={onTodoInputChange}
                        onDoneToggle={onDoneToggle}
                        onRemoveTodo={onRemoveTodo}
                        onPinNote={onPinNote}
                        onContentChange={onContentChange}
                        onSetBgColor={onSetBgColor}
                        onDuplicate={onDuplicate}
                        onTypeChange={onTypeChange} />


            {/* <NoteAdd onSaveNote={onSaveNote} /> */}
            {notes.filter(note => note.isPinned).length > 0 && (
                <section>
                    <hr />
                    <h2>Pinned</h2>
                    <NoteList
                        notes={notes.filter(note => note.isPinned)}
                        isNewNote={false}
                        onRemoveNote={onRemoveNote}
                        onTodoInputChange={onTodoInputChange}
                        onDoneToggle={onDoneToggle}
                        onRemoveTodo={onRemoveTodo}
                        onPinNote={onPinNote}
                        onContentChange={onContentChange}
                        onSetBgColor={onSetBgColor}
                        onDuplicate={onDuplicate}
                        onTypeChange={onTypeChange} />
                </section>
            )}
            {notes.filter(note => !note.isPinned).length > 0 && (
                <section>
                    <hr />
                    <h2>Others</h2>
                    <NoteList
                        notes={notes.filter(note => !note.isPinned)}
                        isNewNote={false}
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
                </section>

            )}

        </section>

    )
}


