const { Outlet, Link, useSearchParams } = ReactRouterDOM

import { MailFilter } from './MailFilter.jsx'
import { DataTableSent } from './data-table/DataTableSent.jsx'
import { mailService } from '../services/mail.service.js'
import { busService } from '../../../services/event-bus.service.js'

const { useState, useEffect } = React

export function Sent() {
    const [mails, setMails] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(mailService.getSentFilter())

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
            <Outlet />

            <DataTableSent mails={mails} onRemoveMail={onRemoveMail} />
        </section>
    )
}
