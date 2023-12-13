import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
_initMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getDefaultFilter,
    getFilterFromQueryString,
}

function query(filterBy) {
    return storageService.query(MAIL_KEY).then((mails) => {
        if (filterBy.txt) {
            const regExp = new RegExp(filterBy.txt, 'i')
            mails = mails.filter((mail) => regExp.test(mail.from))
        }
        if (filterBy.body) {
            mails = mails.filter((mail) => mail.body >= filterBy.body)
        }
        return mails
    })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail(from = '', to = '', subject = '', body = '') {
    return { from, to, subject, body }
}

function getDefaultFilter() {
    return { from: '', to: '', subject: '', body: '' }
}

function getFilterFromQueryString(searchParams) {
    const from = searchParams.get('from') || ''
    const to = searchParams.get('to') || ''
    const subject = searchParams.get('subject') || ''
    const body = searchParams.get('body') || ''
    return {
        from,
        to,
        subject,
        body,
    }
}

function _createMails() {
    return [
        {
            id: 'OXeMG8wNskc1',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc2',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc3',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc4',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc5',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc6',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc7',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc8',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc9',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc10',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc11',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc12',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc13',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc14',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc15',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc16',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc17',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc18',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc19',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
        {
            id: 'OXeMG8wNskc20',
            subject: utilService.makeLorem(
                utilService.getRandomIntInclusive(2, 20)
            ),
            body: utilService.makeLorem(
                utilService.getRandomIntInclusive(0, 200)
            ),
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
            fromName: `${utilService.makeLorem(1).trimEnd()}`,
            to: `${utilService.makeLorem(1).trimEnd()}@${utilService
                .makeLorem(1)
                .trimEnd()}.com`,
        },
    ]
}

function _initMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        utilService.saveToStorage(MAIL_KEY, _createMails())
    }
}
