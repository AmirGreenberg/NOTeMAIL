const { Link } = ReactRouterDOM

export function AboutHeader() {
    if (window.location.pathname !== '/index.html') {
        return (
            
            <div>
                <header className="header-container">
 
                    <div className="header flex space-between align-center">
                        <div className="flex space-between align-center">
                            <button>☰</button>
                            <Link to="/">
                                <img
                                    src="./assets/img/logo.png"
                                    alt="logo"
                                    className="logo-header"
                                />
                            </Link>
                        </div>

   
                        <div>
                            <img
                                src="./assets/icons/hamburger.svg"
                                alt="logo"
                                className="logo-header"
                            />
                            
                            <Link to="/about">
                            <img
                                src="./assets/img/David.png"
                                alt="logo"
                                className="logo-header"
                            />
                            </Link>
                        </div>

                    </div>
                </header>
            </div>
        )
    }
}
