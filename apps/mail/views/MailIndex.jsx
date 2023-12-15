const { Outlet, Link, useSearchParams } = ReactRouterDOM

import { MailFilter } from '../cmps/MailFilter.jsx'
import { DataTable } from '../cmps/data-table/DataTable.jsx'
import { DataTableSent } from '../cmps/data-table/DataTableSent.jsx'

import { mailService } from '../services/mail.service.js'
import { busService } from '../../../services/event-bus.service.js'

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(
        mailService.getFilterFromQueryString(searchParams)
    )

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

    function onStarMail(mail) {
        mail.isStar = !mail.isStar
        mailService
            .save(mail)
            .then(() => loadMails())
            .catch((err) => console.error(err))
    }

    function onSetFilter(filterBy) {
        setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
    }

    if (!mails) return <div>Loading...</div>
    return (
        <section className="mail-index main-layout full">
            {/* <MailFilter filterBy={filterBy} onSetFilter={onSetFilter} /> */}
            <button>
                <Link className="add-mail-btn" to="/mail/edit">
                    Compose
                </Link>
            </button>
            <nav>
                <button
                    onClick={() => {
                        setFilterBy(mailService.getInboxFilter())
                        return (
                            <DataTable
                                mails={mails}
                                onRemoveMail={onRemoveMail}
                                onStarMail={onStarMail}
                            />
                        )
                    }}
                >
                    Inbox
                </button>

                <button
                    onClick={() => {
                        setFilterBy(mailService.getSentFilter())
                        return (
                            <DataTable
                                mails={mails}
                                onRemoveMail={onRemoveMail}
                                onStarMail={onStarMail}
                            />
                        )
                    }}
                >
                    Sent
                </button>

                <button
                    onClick={() => {
                        setFilterBy(mailService.getTrashFilter())
                        return (
                            <DataTable
                                mails={mails}
                                onRemoveMail={onRemoveMail}
                                onStarMail={onStarMail}
                            />
                        )
                    }}
                >
                    Trash
                </button>

                <button
                    onClick={() => {
                        setFilterBy(mailService.getStarFilter())
                        return (
                            <DataTable
                                mails={mails}
                                onRemoveMail={onRemoveMail}
                                onStarMail={onStarMail}
                            />
                        )
                    }}
                >
                    Starred
                </button>
            </nav>
            <DataTable
                mails={mails}
                onRemoveMail={onRemoveMail}
                onStarMail={onStarMail}
            />
        </section>
    )
}
