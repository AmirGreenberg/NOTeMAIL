import { DataTableSentRow } from './DataTableSentRow.jsx'

export function DataTableSent({ mails, onRemoveMail }) {
    return (
        <table border="1">
            <tbody>
                {mails.map((mail) => (
                    <DataTableSentRow
                        key={mail.id}
                        mail={mail}
                        onRemoveMail={onRemoveMail}
                    />
                ))}
            </tbody>
        </table>
    )
}
