const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function DataTableSentRow({ mail, onRemoveMail, onStarMail, onReadMail }) {
    return (
        <Fragment>
            <tr>
                <td className="fromName">
                    <Link to={`/mail/${mail.id}`}>To: {mail.toName}</Link>
                </td>
                <td className="subject">
                    <Link to={`/mail/${mail.id}`}>{mail.subject}</Link>
                </td>
                <td className="body">
                    <Link to={`/mail/${mail.id}`}>{mail.body}</Link>
                </td>
                <td className="buttons">
                    <button>
                        <Link to={`/mail/edit/${mail.id}`}>Edit</Link>
                    </button>
                    <button onClick={() => onRemoveMail(mail.id)}>
                        Delete
                    </button>
                </td>
            </tr>
        </Fragment>
    )
}
