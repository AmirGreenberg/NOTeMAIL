const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function DataTableRow({ mail, onRemoveMail, onStarMail, onReadMail }) {
    return (
        <Fragment>
            <tr onClick={() => onReadMail(mail)} className={`read-${mail.isRead}`}>
                <td
                    className=" clean-btn btn"
                    onClick={() => onStarMail(mail)}
                >
                    <img
                        className="star-img"
                        src={
                            mail.isStar
                                ? './assets/icons/star-full-yellow.png'
                                : './assets/icons/star.png'
                        }
                        alt=""
                    />
                </td>

                <td className="fromName">
                    <Link
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                        to={`/mail/${mail.id}`}
                    >
                        {mail.fromName}
                    </Link>
                </td>
                <td className="subject">
                    <Link
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                        to={`/mail/${mail.id}`}
                    >
                        {mail.subject}
                    </Link>
                </td>
                <td className="body">
                    <Link
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                        to={`/mail/${mail.id}`}
                    >
                        {mail.body}
                    </Link>
                </td>
                <td className="">
                    <button
                        className=" clean-btn btn"
                        onClick={() => onRemoveMail(mail.id)}
                    >
                        <img
                            className="star-img"
                            src={'./assets/icons/71.svg'}
                            alt=""
                        />
                    </button>
                </td>
            </tr>
        </Fragment>
    )
}
