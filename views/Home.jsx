
export function Home() {
    
    return <section className="home">
        
        <div className="hero">
      <div className="logo-box">
        <img src="../images/logo-white.png" alt="logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">e-mail and notes</span>
          <span className="heading-primary-sub">Make your life easier</span>
        </h1>
        <div></div>

        <a href="#" className="btn-hero btn-white btn-animated" onClick="onLoadGallery()"><img src="images/note.png"
            className="btn-homepage" /></a>
        <a href="#" className="btn-hero btn-white btn-animated" onClick="onLoadGallery()"><img src="images/email.png"
            className="btn-homepage" /></a>
      </div>
    </div>
        



    </section>
}