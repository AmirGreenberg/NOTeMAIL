export function NoteImg({cmpType, info}) {

console.log('inside img')

    return(
       <section className="note-img">
        <h2>{info.title}</h2>
        <img src={info.url} alt="" srcset="" />
       </section>
    )
}