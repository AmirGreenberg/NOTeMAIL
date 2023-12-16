import { DataTableRow } from './DataTableRow.jsx'

export function DataTable({ mails, onRemoveMail, onStarMail, onReadMail, filterBy, onSetFilter }) {
    return (
        <table border="1">
            <tbody>
                {mails.map((mail) => (
                    <DataTableRow
                        key={mail.id}
                        mail={mail}
                        onRemoveMail={onRemoveMail}
                        onStarMail={onStarMail}
                        onReadMail={onReadMail}
                        filterBy={filterBy}
                        onSetFilter={onSetFilter}
                        
                    />
                ))}
            </tbody>
        </table>
    )
}
