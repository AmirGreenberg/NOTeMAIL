const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function DataTableRow({ mail }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Fragment>
            <tr onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>
                <td>{mail.fromName}</td>
                <td>{mail.subject}</td>
                <td>{mail.body}</td>
                <td>
                    <Link to={`/mail/${mail.id}`}>Details</Link> |
                    <Link to={`/mail/edit/${mail.id}`}>Edit</Link>
                </td>
            </tr>
            {
                isExpanded && (
                    <tr>
                        <td colSpan="3">
                            <img src={`../assets/img/${mail.from}.png`} style={{ maxWidth: '100px' }} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid, voluptate odio eius quam sapiente. Odit quibusdam soluta ducimus doloribus fuga? Dolores magnam nulla placeat libero exercitationem quisquam unde suscipit?</p>
                        </td>
                    </tr>
                )
            }
        </Fragment >
    )

}
