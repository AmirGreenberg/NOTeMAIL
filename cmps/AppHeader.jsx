const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    console.log(window.location)

    if (window.location.pathname !== '/index.html') {
        return (
            <header className="header-container">
                <div className="header flex space-between align-center">
                    <div className="flex space-between align-center">
                        <button>☰</button>
                        <Link to="/">
                            <img
                                src="images/email.png"
                                alt="logo"
                                className="logo-header"
                            />
                        </Link>
                    </div>
                    <div className="search">
                        <i className="icon fa-solid fa-magnifying-glass"></i>
                        <datalist
                            id="keywords-list"
                            className="keywords"
                        ></datalist>
                        <input
                            list="keywords-list"
                            className="input filter-txt-input"
                            type="text"
                            name="filter-txt"
                            placeholder="Search mail..."
                            onInput={() => onSetFilterText(this.value)}
                        />
                    </div>
                    <div>
                        <img
                            src="icons/hamburger.svg"
                            alt="logo"
                            className="logo-header"
                        />
                        <img
                            src="/images/amirpicgoogle.jpg"
                            alt="logo"
                            className="logo-header"
                        />
                    </div>
                </div>
            </header>

            // <header classNameName="app-header">
            // <Link to="/">
            //     <img classNameName="logo" src="./assets/img/logo.png" alt="" />
            // </Link>
            //     <nav>
            //         <NavLink to="/">Home</NavLink>
            //         <NavLink to="/about">About</NavLink>
            //         <NavLink to="/mail/">Mail</NavLink>
            //         <NavLink to="/note">Note</NavLink>
            //     </nav>
            // </header>
        )
    }
}
