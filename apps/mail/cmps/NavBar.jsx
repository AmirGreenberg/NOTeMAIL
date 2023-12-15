
export function NavBar() {
    return (
        
<nav className= "main-menu" >
                    <div>
                        <a className="logo"></a>
                    </div>
                    <div className="settings"></div>
                    <div className="scrollbar" id="style-1">
                        <ul>
                            <li className="compose">
                                <a>
                                    <span>
                                        <i className="fa fa-pen fa-lg"></i>
                                    </span>
                                    <span className="nav-text">Compose</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-inbox fa-lg"></i>
                                    <span className="nav-text">Inbox</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-envelope-o fa-lg"></i>
                                    <span className="nav-text">Contact</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-clock-o fa-lg"></i>
                                    <span className="nav-text">News</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-desktop fa-lg"></i>
                                    <span className="nav-text">Technology</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-plane fa-lg"></i>
                                    <span className="nav-text">Travel</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-shopping-cart"></i>
                                    <span className="nav-text">Shopping</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-microphone fa-lg"></i>
                                    <span className="nav-text">
                                        Film & Music
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-flask fa-lg"></i>
                                    <span className="nav-text">Web Tools</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-picture-o fa-lg"></i>
                                    <span className="nav-text">
                                        Art & Design
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-align-left fa-lg"></i>
                                    <span className="nav-text">Magazines</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-gamepad fa-lg"></i>
                                    <span className="nav-text">Games</span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    <i className="fa fa-glass fa-lg"></i>
                                    <span className="nav-text">
                                        Life & Style
                                    </span>
                                </a>
                            </li>

                            <li className="darkerlishadowdown">
                                <a>
                                    <i className="fa fa-rocket fa-lg"></i>
                                    <span className="nav-text">Fun</span>
                                </a>
                            </li>
                        </ul>

                        <li>
                            <a>
                                <i className="fa fa-question-circle fa-lg"></i>
                                <span className="nav-text">Help</span>
                            </a>
                        </li>

                        <ul className="logout">
                            <li>
                                <a>
                                    <i className="fa fa-lightbulb-o fa-lg"></i>
                                    <span className="nav-text">BLOG</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
    )
}

