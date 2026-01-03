/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import "./Header.css";

function Header() {
    return(
        <header className="header">
        <div className="header-container">
            <div className="logo">
                <h1>NewsHub.</h1>
            </div>
            <div className="icon-container">
                <a href="https://github.com/RiyaGupta89">
                        <i class="fab fa-2x fa-github"></i>
                </a>
            </div>
            </div>
        </header>
    );
}

export default Header;