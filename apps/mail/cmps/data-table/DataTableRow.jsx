const { Fragment, useState } = React
const { Link } = ReactRouterDOM

import { LongTxt } from '../LongText.jsx'

export function DataTableRow({ mail, onRemoveMail }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Fragment>
            <tr>
                <span className='fromName'
                    onClick={() =>
                        setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                    }
                >
                    <LongTxt txt={mail.fromName} length={15} />
                </span>
                <span className='subject'
                    onClick={() =>
                        setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                    }
                >
                    <LongTxt txt={mail.subject} length={30} />
                </span>
                <span className='body'
                    onClick={() =>
                        setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                    }
                >
                    <LongTxt txt={mail.body} length={50} />
                </span>
                <span className='buttons'>
                    <button>
                        <Link to={`/mail/${mail.id}`}>Details</Link>
                    </button>
                    <button>
                        <Link to={`/mail/edit/${mail.id}`}>Edit</Link>
                    </button>
                    <button onClick={() => onRemoveMail(mail.id)}>
                        Delete
                    </button>
                </span>
            </tr>
            {isExpanded && (
                <tr>
                    <span colSpan={4}>
                        <h1>From: {mail.fromName}</h1>
                        <h2>Subject: {mail.subject}</h2>
                        <p>{mail.body}</p>
                        <button>
                            <Link to={`/mail/${mail.id}`}>Details</Link>
                        </button>
                        <button>
                            <Link to={`/mail/edit/${mail.id}`}>Edit</Link>
                        </button>
                    </span>
                </tr>
            )}
        </Fragment>
    )
}
