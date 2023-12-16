import { EditMail } from '../views/EditMail.jsx'

export function MailModal() {
    return (
        <nav role="navigation">
            <div id="menuToggle">
                <a>
                    <i className="fa fa-pen fa-lg"></i>
                </a>
                <input type="checkbox" />
                <ul id="menu">
                    <EditMail />
                </ul>
            </div>
        </nav>
    )
}
