export function Home() {
    return (
        <section>
            <div className="hero">
                <div className="logo-box">
                    <img
                        src="./assets/img/logo-white.png"
                        alt="logo"
                        className="logo"
                    />
                </div>

                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">
                            e-mail and notes
                        </span>
                        <span className="heading-primary-sub">
                            Note your Mail!
                        </span>
                    </h1>

                    <a
                        href="/#/note/"
                        className="btn-hero btn-white btn-animated"
                    >
                        <img src="./assets/img/note.png" className="btn-homepage" />
                    </a>
                    <a
                        href="/#/mail/"
                        className="btn-hero btn-white btn-animated"
                    >
                        <img src="./assets/img/email.png" className="btn-homepage" />
                    </a>
                </div>
            </div>

            
        </section>
    )
}
