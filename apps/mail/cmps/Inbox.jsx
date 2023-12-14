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
            busService.showSuccessMsg(`Mail successfully removed! ${mailId}`)
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
    }

    if (!mails) return <div>Loading...</div>
    return (
        <section className="mail-index main-layout full">
            <nav>
                {/* <Link to="/mail/inbox">Inbox</Link>
                <Link to="/mail/sent">Sent</Link> */}
                {/* <Link to="/mail/trash">trash</Link> */}
                {/* <Link to="/mail/draft">draft</Link> */}
            </nav>
            <Outlet />
            <DataTable mails={mails} onRemoveMail={onRemoveMail} />
        </section>
    )
}
