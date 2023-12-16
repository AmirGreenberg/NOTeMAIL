const { Outlet, Link, useSearchParams } = ReactRouterDOM

import { MailModal } from './../../mail/cmps/MailModal.jsx'

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
            busService.showSuccessMsg(`Conversation moved to Trash.`)
        })
    }

    function onStarMail(mail) {
        mail.isStar = !mail.isStar
        var msg = mail.isStar
            ? 'Conversation Starred.'
            : 'Conversation Un-Starred.'
        mailService
            .save(mail)
            .then(() => loadMails())
            .catch((err) => console.error(err))
        busService.showSuccessMsg(msg)
    }

    function onReadMail(mail) {
        if(!mail.isRead) mail.isRead=!mail.isRead
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
                onReadMail={onReadMail}
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
                onReadMail={onReadMail}
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
                onReadMail={onReadMail}
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
                onReadMail={onReadMail}
            />
        )
    }

    if (!mails) return <div>Loading...</div>

    return (
        <div>
            <AppHeader />

            <section className="mail-index main-layout">
                <div>
                    return (
                    <nav className="main-menu">
                        <div>
                            <a className="logo"></a>
                        </div>
                        <div className="settings"></div>
                        <div className="scrollbar" id="style-1">
                            <ul>
                                <li className="compose">
                                    <MailModal />

                                    {/* <Link to="/mail/edit">
                                        <span>
                                            <i className="fa fa-pen fa-lg"></i>
                                        </span>
                                        <span className="nav-text">
                                            Compose
                                        </span>
                                    </Link> */}
                                </li>

                                <li>
                                    <a
                                        onClick={() => {
                                            onSetFilterInbox(
                                                mailService.getInboxFilter()
                                            )
                                        }}
                                    >
                                        <i className="fa fa-inbox fa-lg"></i>
                                        <span className="nav-text">Inbox</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        onClick={() => {
                                            onSetFilterStar(
                                                mailService.getStarFilter()
                                            )
                                        }}
                                    >
                                        <i className="fa fa-star-o fa-lg"></i>
                                        <span className="nav-text">
                                            Starred
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        onClick={() => {
                                            onSetFilterSent(
                                                mailService.getSentFilter()
                                            )
                                        }}
                                    >
                                        <i className="fa fa-paper-plane fa-lg"></i>{' '}
                                        <span className="nav-text">Sent</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        onClick={() => {
                                            onSetFilterTrash(
                                                mailService.getTrashFilter()
                                            )
                                        }}
                                    >
                                        <i className="fa fa-trash-can fa-lg"></i>
                                        <span className="nav-text">Trash</span>
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        <i className="fa fa-plane fa-lg"></i>
                                        <span className="nav-text">
                                            Travel
                                            <span className="coming-soon">
                                                Coming soon...
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        <i className="fa fa-shopping-cart"></i>
                                        <span className="nav-text">
                                            Shopping
                                            <span className="coming-soon">
                                                Coming soon...
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        <i className="fa fa-microphone fa-lg"></i>
                                        <span className="nav-text">
                                            Film & Music
                                            <span className="coming-soon">
                                                Coming soon...
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        <i className="fa fa-flask fa-lg"></i>
                                        <span className="nav-text">
                                            Web Tools
                                            <span className="coming-soon">
                                                Coming soon...
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        <i className="fa fa-picture-o fa-lg"></i>
                                        <span className="nav-text">
                                            Art & Design
                                            <span className="coming-soon">
                                                Coming soon...
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        <i className="fa fa-align-left fa-lg"></i>
                                        <span className="nav-text">
                                            Magazines
                                            <span className="coming-soon">
                                                Coming soon...
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        <i className="fa fa-gamepad fa-lg"></i>
                                        <span className="nav-text">
                                            Games
                                            <span className="coming-soon">
                                                Coming soon...
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        <i className="fa fa-glass fa-lg"></i>
                                        <span className="nav-text">
                                            Life & Style
                                            <span className="coming-soon">
                                                Coming soon...
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li className="darkerlishadowdown">
                                    <a>
                                        <i className="fa fa-rocket fa-lg"></i>
                                        <span className="nav-text">
                                            Fun
                                            <span className="coming-soon">
                                                Coming soon...
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            </ul>

                            <li>
                                <a>
                                    <i className="fa fa-question-circle fa-lg"></i>
                                    <span className="nav-text">
                                        Help
                                        <span className="coming-soon">
                                            Coming soon...
                                        </span>
                                    </span>
                                </a>
                            </li>

                            <ul className="logout">
                                <li>
                                    <a>
                                        <i className="fa fa-lightbulb-o fa-lg"></i>
                                        <span className="nav-text">
                                            BLOG
                                            <span className="coming-soon">
                                                Coming soon...
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    )
                </div>

                <div>
                    <DataTable
                        mails={mails}
                        onRemoveMail={onRemoveMail}
                        onStarMail={onStarMail}
                        onReadMail={onReadMail}
                    />
                </div>
            </section>
        </div>
    )
}
