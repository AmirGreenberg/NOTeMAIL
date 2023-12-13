

export function MailPreview({ mail }) {
    return (
        <article className="mail-preview">
            <h2>Mail Vendor: {mail.vendor}</h2>
            <h4>Mail Speed {mail.maxSpeed}</h4>
            <img src={`../assets/img/${mail.vendor}.png`} alt="" />
        </article>
    )
}