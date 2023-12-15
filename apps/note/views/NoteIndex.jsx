import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"
import { utilService } from "../../../services/util.service.js"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteFilter } from "../cmps/NoteFilter.jsx"
import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React
const { useSearchParams } = ReactRouterDOM

export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const [newNote, setNewNote] = useState(noteService.getEmptyNote())

    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(noteService.getFilterFromQueryString(searchParams))

    useEffect(() => {
        loadNotes()
        setSearchParams(filterBy)
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

    function checkIsEmpty() {
        return (newNote.type === 'NoteTxt' && (!newNote.info.title && !newNote.info.txt)) ||
            (newNote.type === 'NoteImg' && (!newNote.info.title && !newNote.info.url)) ||
            (newNote.type === 'NoteTodos' && (!newNote.info.title && !newNote.info.todos.length))

    }

    function onSaveNote() {
        if (checkIsEmpty()) {
            console.log('empty')
            return
        }
        noteService.save(newNote)
            .then(newNote => {
                onTypeChange('NoteImg')

                const colors = [
                    'var(--clrBase)',
                    'var(--clrSecondery1)',
                    'var(--clrSecondery2)',
                    'var(--clrSecondery3)',
                    'var(--clrSecondery4)',
                    'var(--clrSecondery5)',
                    'var(--clrSecondery6)']
                console.log('setting');
                // setNewNote(null)
                const newData = noteService.getEmptyNote()
                console.log(newData);
                setNewNote(newData)
                console.log(newNote);
                console.log(newNote);
                onSetBgColor(colors[utilService.getRandomIntInclusive(1, 7)])
                // onTypeChange('NoteTxt')
                loadNotes()
            })
            .catch(err => console.log('err:', err))
    }

    function onPinNote(noteId) {

        if (!noteId) {
            const createdNewNote = ({ ...newNote })
            createdNewNote.isPinned = !createdNewNote.isPinned
            setNewNote(createdNewNote)
        } else {
            const noteIdx = _getNoteIdx(noteId)
            notes[noteIdx].isPinned = !notes[noteIdx].isPinned

            _updateNote(noteIdx)
        }
    }

    function onDoneToggle(noteId, todoId) {
        if (!noteId) {
            const createdNewNote = ({ ...newNote })
            const todoIdx = createdNewNote.info.todos.findIndex(todo => todo.id === todoId)
            createdNewNote.info.todos[todoIdx].isDone = !createdNewNote.info.todos[todoIdx].isDone
            setNewNote(createdNewNote)

        } else {

            const noteIdx = _getNoteIdx(noteId)
            const todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId)
            notes[noteIdx].info.todos[todoIdx].isDone = !notes[noteIdx].info.todos[todoIdx].isDone

            _updateNote(noteIdx)
        }
    }

    function onRemoveTodo(noteId, todoId) {
        if (!noteId) {
            const createdNewNote = ({ ...newNote })
            const todoIdx = createdNewNote.info.todos.findIndex(todo => todo.id === todoId)
            createdNewNote.info.todos.splice(todoIdx, 1)
            setNewNote(createdNewNote)

        } else {

            const noteIdx = _getNoteIdx(noteId)
            const todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId)
            notes[noteIdx].info.todos.splice(todoIdx, 1)
            _updateNote(noteIdx)
        }
    }

    function onTodoInputChange(newTodoTxt, noteId) {
        if (!noteId) {
            const createdNewNote = ({ ...newNote })
            const newTodo = { id: utilService.makeId(), txt: newTodoTxt, isDone: false }
            createdNewNote.info.todos.push(newTodo)
            setNewNote(createdNewNote)
        } else {

            const noteIdx = _getNoteIdx(noteId)
            const newTodo = { id: utilService.makeId(), txt: newTodoTxt, isDone: false }
            notes[noteIdx].info.todos.push(newTodo)

            _updateNote(noteIdx)
        }
    }

    function onContentChange(ev, noteId) {
        const field = ev.target.id
        const value = ev.target.innerText
        if (!noteId) {
            // const createdNewNote = {...newNote}
            // createdNewNote.info[field] = value
            setNewNote(prevState => ({...prevState, info: {...prevState.info,[field]: value}}))
        } else {
            const noteIdx = _getNoteIdx(noteId)
            notes[noteIdx].info[field] = value

            _updateNote(noteIdx)
        }
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
            const createdNewNote = ({ ...newNote })
            createdNewNote.type = type
            setNewNote(createdNewNote)
        } else {
            const noteIdx = _getNoteIdx(noteId)
            notes[noteIdx].type = type
            _updateNote(noteIdx)
        }
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function _updateNote(noteIdx) {
        noteService.save(notes[noteIdx])
            .then(() => loadNotes())
            .catch(err => console.error(err))
    }

    function _getNoteIdx(noteId) {
        return notes.findIndex(note => note.id === noteId)
    }

    function handleClean() {

    }





    if (!notes) return <div>Loading...</div>
    return (

        <section className="note-index">
            <NoteFilter filterBy={filterBy} onSetFilter={onSetFilter} />

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


