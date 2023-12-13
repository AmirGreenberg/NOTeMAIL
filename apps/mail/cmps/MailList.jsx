import { MailPreview } from "./MailPreview.jsx";
const { Link } = ReactRouterDOM
export function MailList({ mails, onRemoveMail }) {

    const ulProps = {
        className: "mail-list",
        title:'MAILLISTTTTTTTTTTTT'
    }
    return (
        <ul {...ulProps} >
            {mails.map(mail =>
                <li key={mail.id}>
                    <MailPreview mail={mail} />
                    <section>
                        <button onClick={() => onRemoveMail(mail.id)}>Remove Mail</button>
                        <button><Link to={`/mail/${mail.id}`}>Details</Link></button>
                        <button><Link to={`/mail/edit/${mail.id}`}>Edit</Link></button>
                    </section>
                </li>
            )}
        </ul>
    )
}