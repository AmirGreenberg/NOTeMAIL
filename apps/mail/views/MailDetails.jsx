const { useParams, useNavigate, Link } = ReactRouterDOM

import { LongTxt } from '../cmps/LongText.jsx'
import { mailsService } from '../services/mails-service.js'
import { showSuccessMsg } from '../services/event-bus.service.js'

const { useState, useEffect } = React

export function MailDetails() {
    const [mail, setMail] = useState(null)
    // const [prevMailId, setPrevMailId] = useState(null)
    // const [nextMailId, setNextMailId] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, [params.mailId])

    function loadMail() {
        mailsService
            .get(params.mailId)
            .then(setMail)
            .catch((err) => {
                navigate('/')
            })
    }

    function onBack() {
        navigate('/mail')
    }

    if (mail) {
        mailsService.getNextMailId(mail.id).then(setNextMailId)

        mailsService.getPrevMailId(mail.id).then(setPrevMailId)
    }

    if (!mail) return <section>Loading...</section>
    return (
        <section className="mail-details main-layout full">
            <h1>From: {mail.from}</h1>
            <h2>Subject: {mail.subject}</h2>

            <p>{mail.body}</p>

            <nav className="mail-nav">
                {prevMailId && (
                    <Link to={`/mail/${prevMailId}`}>← Prev Mail</Link>
                )}
                {nextMailId && (
                    <Link to={`/mail/${nextMailId}`}>Next Mail →</Link>
                )}
            </nav>

            <img
                onClick={onBack}
                className="back-img"
                src="./assets/img/back.svg"
            />
        </section>
    )
}
