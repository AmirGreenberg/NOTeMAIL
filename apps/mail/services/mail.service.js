import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getDefaultFilter,
    getFilterFromQueryString
}

function query(filterBy) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regExp.test(mail.vendor))
            }
            if (filterBy.minSpeed) {
                mails = mails.filter(mail => mail.maxSpeed >= filterBy.minSpeed)
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

function getEmptyMail(vendor = '', maxSpeed = '') {
    return { vendor, maxSpeed }
}

function getDefaultFilter() {
    return { txt: '', minSpeed: '', maxPrice: '' }
}

function getFilterFromQueryString(searchParams) {
    const txt = searchParams.get('txt') || ''
    const minSpeed = searchParams.get('minSpeed') || ''
    const maxPrice = searchParams.get('maxPrice') || ''
    return {
        txt,
        minSpeed,
        maxPrice
    }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = []
        mails.push(_createMail('audu', 300))
        mails.push(_createMail('fiak', 120))
        mails.push(_createMail('subali', 50))
        mails.push(_createMail('mitsu', 150))
        utilService.saveToStorage(MAIL_KEY, mails)
    }
}

function _createMail(vendor, maxSpeed = 250) {
    const mail = getEmptyMail(vendor, maxSpeed)
    mail.id = utilService.makeId()
    return mail
}