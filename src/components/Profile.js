import React from "react";
import ProfilePic1 from "../assets/profile-pic.JPG";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import './style.css'

const Profile = () => {
    const GithubClick = (event) => {
        event.preventDefault();
        window.location.href = "https://github.com/vaishnavigujjari";
      };
    const linkedInClick = (event) => {
        event.preventDefault();
        window.location.href = "https://www.linkedin.com/in/vaishnavigujjari/";
      };
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf'; 
        link.download = 'VaishnaviGujjari.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <>
            <section id="profile">
                <div class="section__pic-container">
                    <img src={ProfilePic1} alt="John Doe profile" />
                </div>
                <div class="section__text">
                    <p class="section__text__p1">Hello, I'm</p>
                    <h1 class="title">Vaishnavi Devi Gujjari</h1>
                    <p class="section__text__p2">Full Stack Software Engineer</p>
                    <div class="btn-container">
                        <button
                            class="btn btn-color-2"
                            onClick={downloadPDF}
                        >
                            Download CV
                        </button>
                        <button class="btn btn-color-1" onclick="location.href='./#contact'">
                            Contact Info
                        </button>
                    </div>
                    <div id="socials-container">
                        <img
                            src={LinkedIn}
                            alt="My LinkedIn profile"
                            class="icon"
                            onClick={linkedInClick}
                        />
                        <img
                            src={GitHub}
                            alt="My Github profile"
                            class="icon"
                            onClick={GithubClick}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
