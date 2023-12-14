export function NoteImg({cmpType, info}) {

    return(
       <section className="note-img">
        <h2>{info.title}</h2>
        <img src={info.url} alt=""  />
       </section>
    )
}