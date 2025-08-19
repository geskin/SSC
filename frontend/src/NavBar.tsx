import { useState } from "react";
import "./NavBar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav id="nav">
            {/* Logo (always visible, mobile: left; desktop: centered by CSS) */}
            <a id="nav-logo" className="mobile" href="#header">SSC</a>

            {/* Hamburger icon */}
            <span
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                &#9776;
            </span>

            {/* Nav Links (excluding logo) */}
            <ul id="nav-links" className={menuOpen ? "active" : ""}>
                <li><a href="#merch">Merch</a></li>
                <li><a href="#events">Events</a></li>
                <li className="desktop"><a id="nav-logo" href="#header">SSC</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
            </ul>
        </nav>
    );
}
