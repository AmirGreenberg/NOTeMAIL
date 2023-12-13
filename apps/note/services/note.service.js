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
}

function query(filterBy) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regex.test(note.title))
            }
            if (filterBy.price) {
                notes = notes.filter(note => note.listPrice.amount <= filterBy.price)
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
        return storageService.post(NOTE_KEY, note)
    }
}

function getDefaultFilter() {
    return { txt: '', price: '' }
}

function getEmptyNote(title = '') {
    return {
        id: utilService.makeId(5),
        createdAt: Date.now(),
        type: 'NoteTxt',
        isPinned: Math.random() > 0.7,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            txt: utilService.makeLorem(4)
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
                isPinned: Math.random() > 0.7,
                style: {
                    backgroundColor: '#00d'
                },
                info: {
                    txt: utilService.makeLorem(4)
                }
            },
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteImg',
                isPinned: Math.random() > 0.7,
                style: {
                    backgroundColor: '#00d'
                },
                info: {
                    url: 'http://some-img/me',
                    title: 'Bobi and Me'
                }
            },
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteTodos',
                isPinned: Math.random() > 0.7,
                style: {
                    backgroundColor: '#00d'
                },
                info: {
                    title: 'Get my stuff together',
                    todos: [
                        { txt: 'Driving license', doneAt: null },
                        { txt: 'Coding power', doneAt: 187111111 },
                    ]
                }
            },
        ]
    }


    console.log('notes', notes)
    utilService.saveToStorage(NOTE_KEY, notes)
}





