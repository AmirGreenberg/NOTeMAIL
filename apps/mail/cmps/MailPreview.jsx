

export function MailPreview({ mail }) {
    return (
        <article className="mail-preview">
            <h2>Mail From: {mail.from}</h2>
            <h4>Mail Body {mail.body}</h4>
            <img src={`../assets/img/${mail.from}.png`} alt="" />
        </article>
    )
}