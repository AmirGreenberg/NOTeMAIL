import { MailFilter } from '../apps/mail/cmps/MailFilter'

const { useState, useEffect } = React

const { Link, NavLink } = ReactRouterDOM

export function AppHeader({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function onSetFilterBy(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break

            case 'checkbox':
                value = target.checked
                break

            default:
                break
        }

        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }
    const { from, to, subject, body } = filterByToEdit
    if (window.location.pathname !== '/index.html') {
        return (
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
                                value={subject}
                                onChange={handleChange}
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
        )
    }
}
