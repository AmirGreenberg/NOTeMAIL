import { mailService } from '../services/mail.service.js'
import { AppHeader } from '../../../cmps/AppHeader.jsx'
import { NavBar } from '../cmps/NavBar.jsx'

const { useParams, useNavigate, Link } = ReactRouterDOM

const { useState, useEffect } = React

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, [params.mailId])

    function loadMail() {
        mailService
            .get(params.mailId)
            .then(setMail)
            .catch((err) => {
                navigate('/')
            })
    }

    function onBack() {
        navigate('/mail')
    }
    if (!mail) return <section>Loading...</section>
    return (
        <div>
            <AppHeader />
            <NavBar />
        <section className="mail-details main-layout">
            <h1>From: {mail.from}</h1>
            <h2>Subject: {mail.subject}</h2>

            <p>{mail.body}</p>

            <button onClick={onBack}>←</button>
        </section>
        </div>
    )
}
