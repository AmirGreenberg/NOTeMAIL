import { mailService } from '../services/mail.service.js'
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
            <div>
                <header className="header-container">
                    <div className="header flex space-between align-center">
                        <div className="flex space-between align-center">
                            <button>☰</button>
                            <Link to="/">
                                <img
                                    src="./assets/img/email.png"
                                    alt="logo"
                                    className="logo-header"
                                />
                            </Link>
                        </div>

                        <div className="search">
                            <i className="icon fa-solid fa-magnifying-glass"></i>
                            <datalist
                                id="keywords-list"
                                className="keywords"
                            ></datalist>
                            <input
                                list="keywords-list"
                                className="input filter-txt-input"
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Search mail..."
                            />
                        </div>

                        <div>
                            <img
                                src="./assets/icons/hamburger.svg"
                                alt="logo"
                                className="logo-header"
                            />
                            <img
                                src="./assets/img/amirpicgoogle.jpg"
                                alt="logo"
                                className="logo-header"
                            />
                        </div>
                    </div>
                </header>
            </div>

            <section className="mail-index main-layout">
                <NavBar />
                <div></div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>{mail.subject}</td>
                            </tr>
                            <tr>
                                <td>From: {mail.from}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>{mail.body}</p>
                    <button onClick={onBack}>Back</button>
                </div>
            </section>
        </div>
    )
}
