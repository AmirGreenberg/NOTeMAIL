const { Fragment, useState } = React
const { Link } = ReactRouterDOM

import { LongTxt } from '../LongText.jsx'

export function DataTableRow({ mail, onRemoveMail }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Fragment>
            <tr>
                <td
                    onClick={() =>
                        setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                    }
                >
                    <LongTxt txt={mail.fromName} length={15} />
                </td>
                <td
                    onClick={() =>
                        setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                    }
                >
                    <LongTxt txt={mail.subject} length={30} />
                </td>
                <td
                    onClick={() =>
                        setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                    }
                >
                    <LongTxt txt={mail.body} length={50} />
                </td>
                <td>
                    <button>
                        <Link to={`/mail/${mail.id}`}>Details</Link>
                    </button>
                    <button>
                        <Link to={`/mail/edit/${mail.id}`}>Edit</Link>
                    </button>
                    <button onClick={() => onRemoveMail(mail.id)}>
                        Delete
                    </button>
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan={4}>
                        <h1>From: {mail.fromName}</h1>
                        <h2>Subject: {mail.subject}</h2>
                        <p>{mail.body}</p>
                        <button>
                            <Link to={`/mail/${mail.id}`}>Details</Link>
                        </button>
                        <button>
                            <Link to={`/mail/edit/${mail.id}`}>Edit</Link>
                        </button>
                    </td>
                </tr>
            )}
        </Fragment>
    )
}
