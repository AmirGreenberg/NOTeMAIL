const { Outlet, Link, useSearchParams } = ReactRouterDOM

import { DataTable } from '../cmps/data-table/DataTable.jsx'
import { DataTableSent } from '../cmps/data-table/DataTableSent.jsx'

import { mailService } from '../services/mail.service.js'
import { busService } from '../../../services/event-bus.service.js'
import { AppHeader } from '../../../cmps/AppHeader.jsx'
import { NavBar } from '../cmps/NavBar.jsx'

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

    function onSetFilterInbox(filterBy) {
        setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
        return (
            <DataTable
                mails={mails}
                onRemoveMail={onRemoveMail}
                onStarMail={onStarMail}
            />
        )
    }

    function onSetFilterSent(filterBy) {
        setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
        return (
            <DataTableSent
                mails={mails}
                onRemoveMail={onRemoveMail}
                onStarMail={onStarMail}
            />
        )
    }

    function onSetFilterTrash(filterBy) {
        setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
        return (
            <DataTable
                mails={mails}
                onRemoveMail={onRemoveMail}
                onStarMail={onStarMail}
            />
        )
    }

    function onSetFilterStar(filterBy) {
        setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
        return (
            <DataTable
                mails={mails}
                onRemoveMail={onRemoveMail}
                onStarMail={onStarMail}
            />
        )
    }

    if (!mails) return <div>Loading...</div>

    return (
        <div>
            <AppHeader />

            <section className="mail-index main-layout">
                <div>
                    <NavBar loadMails={loadMails} />
                </div>
                <div>
                    <nav>
                        <button
                            onClick={() => {
                                onSetFilterInbox(mailService.getInboxFilter())
                            }}
                        >
                            Inbox
                        </button>

                        <button
                            onClick={() => {
                                onSetFilterSent(mailService.getSentFilter())
                            }}
                        >
                            Sent
                        </button>

                        <button
                            onClick={() => {
                                onSetFilterTrash(mailService.getTrashFilter())
                            }}
                        >
                            Trash
                        </button>

                        <button
                            onClick={() => {
                                onSetFilterStar(mailService.getStarFilter())
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
                </div>
            </section>
        </div>
    )
}
