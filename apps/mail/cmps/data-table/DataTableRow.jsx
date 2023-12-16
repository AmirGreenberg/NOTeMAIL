const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function DataTableRow({ mail, onRemoveMail, onStarMail }) {

    return (
        <Fragment>
            <tr>
                <td className='fromName'><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/mail/${mail.id}`}>{mail.fromName}</Link></td>
                <td className='subject'><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/mail/${mail.id}`}>{mail.subject}</Link></td>
                <td className='body'><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/mail/${mail.id}`}>{mail.body}</Link></td>
                <td className='buttons'>
                    <button>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/mail/edit/${mail.id}`}>Edit</Link>
                    </button>
                    <button style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => onStarMail(mail)}>
                        Star
                    </button>
                    <button style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => onRemoveMail(mail.id)}>
                        Delete
                    </button>
                </td>
            </tr>
        </Fragment>
    )
}
    

