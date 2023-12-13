
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
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    const { txt, body } = filterByToEdit
    return (
        <section className="mail-filter main-layout full">
            <h2>Filter Our Mails</h2>
            <form onSubmit={onSetFilterBy} >
                <label htmlFor="txt">From: </label>
                <input value={txt} onChange={handleChange} type="text" id="txt" name="txt" />

                <label htmlFor="body">body: </label>
                <input value={body || ''} onChange={handleChange} type="number" id="body" name="body" />

                <button>Submit</button>
            </form>
        </section>
    )
}