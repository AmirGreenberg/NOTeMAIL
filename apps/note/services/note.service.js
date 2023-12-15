import { storageService } from "../../../services/async-storage.service.js"
import { utilService } from "../../../services/util.service.js"

const NOTE_KEY = 'noteDB'
_createNotes()


export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getDefaultFilter,
    getFilterFromQueryString
}

function query(filterBy) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regex.test(note.info.title || note.info.txt))
            }
            if (filterBy.type) {
                notes = notes.filter(note => note.type === filterBy.type)
            }
            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.postUnshift(NOTE_KEY, note)
    }
}

function getDefaultFilter() {
    return { txt: '', type: '' }
}

function getFilterFromQueryString(searchParams) {
    const txt = searchParams.get('txt') || ''
    const type = searchParams.get('type') || ''
    
    return {
        txt,
        type  
    }
}

function getEmptyNote() {
    return {
        id: '',
        createdAt: '',
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: 'var(--clrSecondery3)'
        },
        info: {
            txt: '',
            title: '',
            url: './assets/img/you-can.png',
            todos: [
                { id: utilService.makeId(), txt: 'do this', isDone: false },
                { id: utilService.makeId(), txt: 'do that', isDone: false },

            ]
        }
    }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {

        notes = [
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: `var(--clrSecondery2)`
                },
                info: {
                    title: 'Wow it\'s working!!!',
                    txt: 'I supprised myself',
                    url: '../../assets/img/OMG.jpg',
                    todos: [
                        { id: utilService.makeId(), txt: 'the return of muki', isDone: false },
                        { id: utilService.makeId(), txt: 'the pooks of puki', isDone: true },
                        { id: utilService.makeId(), txt: 'the shook of shuki', isDone: true },
                    ]
                }
            },
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteImg',
                isPinned: true,
                style: {
                    backgroundColor: `var(--clrSecondery1)`
                },
                info: {
                    title: 'Ima-le ve Aba-le be-yachad',
                    txt: 'Child is not allowed to change the parent',
                    url: '../../assets/img/OMG.jpg',
                    todos: [
                        { id: utilService.makeId(), txt: '', isDone: false },
                        { id: utilService.makeId(), txt: 'Coding power', isDone: true },
                        { id: utilService.makeId(), txt: 'Coding power', isDone: true },
                    ]
                },
            },
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteTodos',
                isPinned: false,
                style: {
                    backgroundColor: `var(--clrSecondery3)`
                },
                info: {
                    title: 'Bugs Life',
                    txt: 'A stroy about QA',
                    url: '../../assets/img/OMG.jpg',
                    todos: [
                        { id: utilService.makeId(), txt: 'Tiger likes Debounce!! ', isDone: false },
                        { id: utilService.makeId(), txt: '🐜🐜', isDone: true },
                        
                    ]
                }
            },
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteTodos',
                isPinned: false,
                style: {
                    backgroundColor: `var(--clrSecondery4)`
                },
                info: {
                    title: 'Things I Hate:',
                    txt: 'wanna see? turn me into a list!',
                    url: '../../assets/img/OMG.jpg',
                    todos: [
                        { id: utilService.makeId(), txt: 'strikethroughs', isDone: true },
                        { id: utilService.makeId(), txt: 'Lists', isDone: false },
                        { id: utilService.makeId(), txt: 'Irony', isDone: false },
                        { id: utilService.makeId(), txt: 'Lists', isDone: false },
                        { id: utilService.makeId(), txt: 'Repetition', isDone: false },
                        { id: utilService.makeId(), txt: 'Inconsistency', isDone: false },
                    ]
                }
            },
        ]
    }

    utilService.saveToStorage(NOTE_KEY, notes)
}





