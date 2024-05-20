import React from "react";
import Checkmark from "../assets/checkmark.png";
import './style.css'

const Experience = () => {
    const myInlineStyles = {
        // height: "90vh",
      };
      
    return (
        <>
            <section id="experience" style={myInlineStyles}>
                <p class="section__text__p1">Explore My</p>
                <h1 class="title">Experience</h1>
                <div class="experience-details-container">
                    <div class="about-containers">
                        <div class="details-container">
                            <h2 class="experience-sub-title">Front-End</h2>
                            <div class="article-container">
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>CSS</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>JavaScript</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>TypeScript</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>Material UI</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>Express JS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="details-container">
                            <h2 class="experience-sub-title">Back-End</h2>
                            <div class="article-container">
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>PostgreSQL</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>MongoDB</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>Node JS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>RESTful APIs</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>Flask</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>Git</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="details-container">
                            <h2 class="experience-sub-title">Data Analytics</h2>
                            <div class="article-container">
                            <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>Python</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>R</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>SQL</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>Excel</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>Tableau</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={Checkmark}
                                        alt="Experience icon"
                                        class="icon"
                                    />
                                    <div>
                                        <h3>Power BI</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;
