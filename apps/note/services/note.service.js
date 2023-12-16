import { storageService } from "./../services/async-storage.service.js"
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
            backgroundColor: 'var(--clrBase)'
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
                    url: 'https://i.pinimg.com/474x/51/f1/03/51f1036576e587bce282a05e9584ab19.jpg',
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
                    backgroundColor: `var(--clrSecondery3)`
                },
                info: {
                    title: 'Ima-le ve Aba-le be-yachad',
                    txt: 'Child is not allowed to change the parent',
                    url: 'https://images.brickset.com/sets/images/8683-8.jpg',
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
                type: 'NoteImg',
                isPinned: false,
                style: {
                    backgroundColor: `var(--clrSecondery3)`
                },
                info: {
                    title: 'Bugs Life',
                    txt: 'A stroy about QA',
                    url: 'https://cdn.geektime.co.il/wp-content/uploads/2022/04/Asi-And-Guri-1649742937-768x477.png',
                    todos: [
                        { id: utilService.makeId(), txt: 'Don\'t mark me!', isDone: false },
                        { id: utilService.makeId(), txt: 'Don\t check me!', isDone: true },
                        
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
                    url: './assets/img/OMG.jpg',
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
                    url: 'https://static.wikia.nocookie.net/pokemonpets/images/4/43/Bulbasaur.png',
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
                    backgroundColor: `var(--clrSecondery4)`
                },
                info: {
                    title: 'closers',
                    txt: 'Child is not allowed to change the parent',
                    url: 'https://www.francetvinfo.fr/pictures/LA5AQgp7JD7NlM4f-yEAge_g_nQ/0x47:500x375/2656x1494/filters:format(avif):quality(50)/2014/02/24/ohwFeHS_1.gif',
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
                type: 'NoteImg',
                isPinned: true,
                style: {
                    backgroundColor: `var(--clrSecondery2)`
                },
                info: {
                    title: 'the only one that like DEBOUNCE!!',
                    txt: 'A stroy about QA',
                    url: 'https://i.pinimg.com/originals/66/8f/da/668fda297fab8383e139ff145426057c.jpg',
                    todos: [
                        { id: utilService.makeId(), txt: 'eat', isDone: false },
                        { id: utilService.makeId(), txt: 'code', isDone: true },
                        { id: utilService.makeId(), txt: 'repeat', isDone: true },
                        
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
                    url: 'https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif',
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
                    url: 'https://i.pinimg.com/736x/c6/de/4f/c6de4fbc92c32c25dd90c41884968d63.jpg',
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
                isPinned: false,
                style: {
                    backgroundColor: `var(--clrSecondery1)`
                },
                info: {
                    title: 'Shut up and take my money',
                    txt: 'Child is not allowed to change the parent',
                    url: 'https://img.pixers.pics/pho(s3:700/PI/62/8/700_PI628_0a52c36a534004114ce074067697190e_5b7abc84a0477_.,700,653,jpg)/stickers-minion-kevin.jpg.jpg',
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
                    url: 'https://cdn.vox-cdn.com/thumbor/Yt1avchDkHqEqJuhYZ3YjKF3kFc=/0x0:1700x960/1200x675/filters:focal(714x344:986x616)/cdn.vox-cdn.com/uploads/chorus_image/image/57514059/mario.0.jpg',
                    todos: [
                        { id: utilService.makeId(), txt: 'WTF ', isDone: false },
                        { id: utilService.makeId(), txt: 'OMG', isDone: true },
                        { id: utilService.makeId(), txt: 'LOL', isDone: true },
                        
                    ]
                }
            },
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteTodos',
                isPinned: true,
                style: {
                    backgroundColor: `var(--clrBase)`
                },
                info: {
                    title: 'Things I Hate:',
                    txt: 'wanna see? turn me into a list!',
                    url: './assets/img/OMG.jpg',
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
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: `var(--clrSecondery2)`
                },
                info: {
                    title: 'Wow it\'s working!!!',
                    txt: 'I supprised myself',
                    url: 'https://i.redd.it/a0nj9mpeod2a1.jpg',
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
                    title: 'There are only 2 options:',
                    txt: 'Child is not allowed to change the parent',
                    url: './assets/img/puki.png',
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
                    url: 'https://www.theminifigurestore.uk/wp-content/uploads/2020/03/Peapod-Costume-Girl-Series-20-LEGO-Minifigures-71027-510x510.png.jpg',
                    todos: [
                        { id: utilService.makeId(), txt: 'Zebra', isDone: false },
                        { id: utilService.makeId(), txt: 'it\'s', isDone: true },
                        { id: utilService.makeId(), txt: 'a horse', isDone: true },
                        { id: utilService.makeId(), txt: 'that', isDone: true },
                        { id: utilService.makeId(), txt: 'was', isDone: true },
                        { id: utilService.makeId(), txt: 'strikethrough to many times', isDone: true },
                        
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
                    url: 'https://www.theminifigurestore.uk/wp-content/uploads/2022/06/Ferry-Captain-LEGO-Minifigures-Series-23-71034-510x287.jpg',
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
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: `var(--clrBase)`
                },
                info: {
                    title: 'Wow it\'s working!!!',
                    txt: 'I supprised myself',
                    url: 'https://www.theminifigurestore.uk/wp-content/uploads/imported/Lego-Series-13-Minifigures-71008-Lego-Series-13-Disco-Diva-B00R84T9TY-510x510.webp',
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
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: `var(--clrSecondery2)`
                },
                info: {
                    title: 'I\'m not lazy, I\'m just on energy-saving mode',
                    txt: 'I surprised myself',
                    url: 'https://brickmarkt.com/1711-large_default/giraffe-guy-the-lego-movie-2-minifigure-coltlm2-4-coltlm2-4-catalogue.jpg',
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
                    backgroundColor: `var(--clrSecondery6)`
                },
                info: {
                    title: 'Itchy nose giraffe',
                    txt: 'Fancy feline',
                    url: 'https://cdn.dribbble.com/users/4521/screenshots/1146340/media/5920de25e31f8e9de0ab996cd7fa1ed8.jpg',
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
                isPinned: true,
                style: {
                    backgroundColor: `var(--clrSecondery6)`
                },
                info: {
                    title: 'To-do list for world domination',
                    txt: 'One step at a time',
                    url: 'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
                    todos: [
                        { id: utilService.makeId(), txt: 'Build a robot army', isDone: false },
                        { id: utilService.makeId(), txt: 'Conquer the moon', isDone: false },
                        { id: utilService.makeId(), txt: 'Create a doomsday device', isDone: false },
                    ]
                },
            },
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: false,
                style: {
                    backgroundColor: `var(--clrBase)`
                },
                info: {
                    title: 'I\'m not arguing, I\'m just explaining why I\'m right',
                    txt: 'Debating champion',
                    url: 'https://ssb.wiki.gallery/images/thumb/a/a0/Pikachu_SSB4.png/250px-Pikachu_SSB4.png',
                    todos: [
                        { id: utilService.makeId(), txt: 'Win every argument', isDone: false },
                        { id: utilService.makeId(), txt: 'Prove everyone wrong', isDone: false },
                        { id: utilService.makeId(), txt: 'Become a master debater', isDone: false },
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
                    title: 'EVAAAAAAAAAAAAAA............',
                    txt: 'Cool canine',
                    url: 'https://ideascdn.lego.com/media/generate/lego_ci/4dfc2bf8-d47a-4de3-8494-f8d13409a732/resize:950:633/webp',
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
                    title: 'you better not forget',
                    txt: 'With great power comes great responsibility',
                    url: 'https://www.theminifigurestore.uk/wp-content/uploads/2022/06/Popcorn-Costume-LEGO-Minifigures-Series-23-71034-510x287.jpg',
                    todos: [
                        { id: utilService.makeId(), txt: 'your wife always right', isDone: false },
                        { id: utilService.makeId(), txt: 'happy wife is happy life', isDone: false },
                    ]
                },
            },

        ]
    }

    utilService.saveToStorage(NOTE_KEY, notes)
}





