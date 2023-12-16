import { DataTableSentRow } from './DataTableSentRow.jsx'

export function DataTableSent({ mails, onRemoveMail, onStarMail, onReadMail }) {
    return (
        <table border="1">
            <tbody>
                {mails.map((mail) => (
                    <DataTableSentRow
                        key={mail.id}
                        mail={mail}
                        onRemoveMail={onRemoveMail}
                        onStarMail={onStarMail}
                        onReadMail={onReadMail}
                    />
                ))}
            </tbody>
        </table>
    )
}
