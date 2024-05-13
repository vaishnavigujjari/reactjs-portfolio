import React from "react";
import './style.css'

const Header = () => {
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
    return (
        <>
            <nav id="desktop-nav">
                <div class="logo">Vaishnavi Gujjari</div>
                <div>
                    <ul class="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div class="logo">Vaishnavi Devi Gujjari</div>
                <div class="hamburger-menu">
                    <div class="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="menu-links">
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
