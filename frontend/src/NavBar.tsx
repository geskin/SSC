import { useState } from "react";
import "./NavBar.css"; // Your original CSS file

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav id="nav">
            {/* Hamburger icon for mobile */}
            <div
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                &#9776;
            </div>

            {/* Nav Links */}
            <ul id="nav-links" className={menuOpen ? "active" : ""}>
                <li><a href="#merch">Merch</a></li>
                <li><a href="#events">Events</a></li>
                <li id="nav-logo"><a href="#header">SSC</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
            </ul>
        </nav>
    );
}
