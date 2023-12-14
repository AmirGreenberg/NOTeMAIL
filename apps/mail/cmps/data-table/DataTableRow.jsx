const { Fragment, useState } = React
const { Link } = ReactRouterDOM

import { LongTxt } from '../LongText.jsx'

export function DataTableRow({ mail, onRemoveMail }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Fragment>
            <tr>
                <td className='fromName'><Link to={`/mail/${mail.id}`}>{mail.fromName}</Link></td>
                <td className='subject'><Link to={`/mail/${mail.id}`}>{mail.subject}</Link></td>
                <td className='body'><Link to={`/mail/${mail.id}`}>{mail.body}</Link></td>
                <td className='buttons'>
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
    


///////////////////////////



// return (
//         <Fragment>
//             <tr>
//                 <td className='fromName'
//                     onClick={() =>
//                         setIsExpanded((prevIsExpanded) => !prevIsExpanded)
//                     }
//                 >
//                     <LongTxt txt={mail.fromName} length={15} />
//                 </td>
//                 <td className='subject'
//                     onClick={() =>
//                         setIsExpanded((prevIsExpanded) => !prevIsExpanded)
//                     }
//                 >
//                     <LongTxt txt={mail.subject} length={30} />
//                 </td>
//                 <td className='body'
//                     onClick={() =>
//                         setIsExpanded((prevIsExpanded) => !prevIsExpanded)
//                     }
//                 >
//                     <LongTxt txt={mail.body} length={50} />
//                 </td>
//                 <td className='buttons'>
//                     <button>
//                         <Link to={`/mail/${mail.id}`}>Details</Link>
//                     </button>
//                     <button>
//                         <Link to={`/mail/edit/${mail.id}`}>Edit</Link>
//                     </button>
//                     <button onClick={() => onRemoveMail(mail.id)}>
//                         Delete
//                     </button>
//                 </td>
//             </tr>
//             {isExpanded && (
//                 <tr>
//                     <td colSpan={4}>
//                         <h1>From: {mail.fromName}</h1>
//                         <h2>Subject: {mail.subject}</h2>
//                         <p>{mail.body}</p>
//                         <button>
//                             <Link to={`/mail/${mail.id}`}>Details</Link>
//                         </button>
//                         <button>
//                             <Link to={`/mail/edit/${mail.id}`}>Edit</Link>
//                         </button>
//                     </td>
//                 </tr>
//             )}
//         </Fragment>
//     )
// }
