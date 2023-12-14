const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './views/About.jsx'
import { Home } from './views/Home.jsx'
import { MailIndex } from './apps/mail/views/MailIndex.jsx'
import { MailDetails } from './apps/mail/views/MailDetails.jsx'
import { EditMail } from './apps/mail/views/EditMail.jsx'
import { NoteIndex } from './apps/note/views/NoteIndex.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { Inbox } from './apps/mail/cmps/Inbox.jsx'
import { Sent } from './apps/mail/cmps/Sent.jsx'

export function App() {
    return (
        <Router>
            <section className="app">
                <AppHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/mail" element={<MailIndex />}>
                        <Route path="/mail/:mailId" element={<MailDetails />} />

                        <Route path="/mail/inbox" element={<Inbox />}>
                            <Route
                                path="/mail/inbox/:mailId"
                                element={<Inbox />}
                            ></Route>
                        </Route>

                        <Route path="/mail/sent" element={<Sent />}>
                            <Route
                                path="/mail/sent/:mailId"
                                element={<Sent />}
                            ></Route>
                        </Route>

                        {/* <Route path="/mail/trash" element={<Trash />} /> */}
                        {/* <Route path="/mail/draft" element={<Draft />} /> */}
                    </Route>
                    <Route path="/mail/edit/:mailId" element={<EditMail />} />
                    <Route path="/mail/edit" element={<EditMail />} />
                    <Route path="/note" element={<NoteIndex />} />
                </Routes>
            </section>
            <UserMsg />
        </Router>
    )
}
