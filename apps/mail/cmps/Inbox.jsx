const { Outlet, Link, useSearchParams } = ReactRouterDOM

import { MailFilter } from '../cmps/MailFilter.jsx'
import { DataTable } from '../cmps/data-table/DataTable.jsx'
import { mailService } from '../services/mail.service.js'
import { busService } from '../../../services/event-bus.service.js'

const { useState, useEffect } = React

export function Inbox() {
    const [mails, setMails] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(mailService.getInboxFilter())

    useEffect(() => {
        loadMails()
        setSearchParams(filterBy)
        return () => {}
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy).then((mails) => setMails(mails))
    }

    function onRemoveMail(mailId) {
        mailService.remove(mailId).then(() => {
            setMails((prevMails) => {
                return prevMails.filter((mail) => mail.id !== mailId)
            })
            busService.showSuccessMsg(`Conversation moved to Trash.`)
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
    }

    if (!mails) return <div>Loading...</div>
    return (
        <section className="mail-index main-layout">
            <DataTable mails={mails} onRemoveMail={onRemoveMail} />
        </section>
    )
}
