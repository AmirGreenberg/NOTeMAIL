const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilter }) {
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
    return (
        <section className="mail-filter main-layout full">
            <h2>Filter Our Mails</h2>
            <form onSubmit={onSetFilterBy}>
                <label htmlFor="from">From: </label>
                <input
                    value={from}
                    onChange={handleChange}
                    type="text"
                    id="from"
                    name="from"
                />

                <label htmlFor="to">To: </label>
                <input
                    value={to}
                    onChange={handleChange}
                    type="text"
                    id="to"
                    name="to"
                />

                <label htmlFor="subject">Subject: </label>
                <input
                    value={subject}
                    onChange={handleChange}
                    type="text"
                    id="subject"
                    name="subject"
                />

                <label htmlFor="body">Body: </label>
                <input
                    value={body}
                    onChange={handleChange}
                    type="text"
                    id="body"
                    name="body"
                />

                <button>Submit</button>
            </form>
        </section>
    )
}
