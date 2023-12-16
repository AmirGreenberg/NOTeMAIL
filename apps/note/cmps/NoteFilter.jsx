
const { useState, useEffect } = React


export function NoteFilter({ filterBy, onSetFilter }) {

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


    const { txt, type } = filterByToEdit
    return (
        <section className="search-note ">
            <i className="icon-note fa-solid fa-magnifying-glass"></i>
            
                <input
                    className="input-note filter-txt-input"
                    value={txt}
                    onChange={handleChange}
                    type="text"
                    id="txt"
                    name="txt"
                    placeholder="Search"
                />

                <select className="header-select-note" name="type" id="type" onChange={handleChange} >
                    <option value="">All</option>
                    <option value="NoteTxt">Text Notes</option>
                    <option value="NoteImg">Img Notes</option>
                    <option value="NoteTodos">Todo Notes</option>
                </select>

            
        </section>
    )
}