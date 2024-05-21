import React from "react";
import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";
import './style.css'

const Projects = () => {

    const handleProject1Click = () => {
        window.open('https://github.com/vaishnavigujjari/resurge', '_blank');
      };
    
      const handleProject2Click = () => {
        window.open('https://github.com/vaishnavigujjari/Emotion-detector-from-text-and-twitter-hashtags', '_blank');
      };
      
      const handleProject3Click = () => {
        window.open('https://github.com/vaishnavigujjari/instasure', '_blank');
      };

    return (
        <>
            <section id="projects">
                <p class="section__text__p1">Browse My Recent</p>
                <h1 class="title">Projects</h1>
                <div class="experience-details-container">
                    <div class="about-containers">
                        <div class="details-container color-container">
                            <div class="article-container">
                                <img
                                    src={Project1}
                                    alt="Project 1"
                                    class="project-img"
                                />
                            </div>
                            <h2 class="experience-sub-title project-title">Resurge</h2>
                            <p>
                                Resurge is a platform designed to help users easily track their 
                                job applications across various companies. It offers a comprehensive 
                                list of all companies in the US, along with filters such as state, 
                                Fortune 1000, Fortune 500, and Global 500. This allows users to 
                                quickly see which companies they have applied to and manage their 
                                job search more efficiently.
                            </p>
                            <br />
                            <div class="btn-container">
                                <button
                                    class="btn btn-color-2 project-btn"
                                    onClick={handleProject1Click}                                
                                >
                                    Github
                                </button>
                                {/* <button
                                    class="btn btn-color-2 project-btn"
                                    onclick="location.href='https://github.com/'"
                                >
                                    Live Demo
                                </button> */}
                            </div>
                        </div>
                        <div class="details-container color-container">
                            <div class="article-container">
                                <img
                                    src={Project2}
                                    alt="Project 2"
                                    class="project-img"
                                />
                            </div>
                            <h2 class="experience-sub-title project-title">Emotion Detector</h2>
                            <p>
                            The project is done using machine learning techniques and natural language 
                            processing where the subjective information can be extracted and classified 
                            based on various emotions. The emotions that are involved in the texts are 
                            displayed using a bar plot. Similarly, The emotions involved in the tweets 
                            with the hashtag chosen are analysed and visualised in a bar plot.
                            </p>
                            <br />
                            <div class="btn-container">
                                <button
                                    class="btn btn-color-2 project-btn"
                                    onClick={handleProject2Click}   
                                >
                                    Github
                                </button>
                                {/* <button
                                    class="btn btn-color-2 project-btn"
                                    onclick="location.href='https://github.com/'"
                                >
                                    Live Demo
                                </button> */}
                            </div>
                        </div>
                        <div class="details-container color-container">
                            <div class="article-container">
                                <img
                                    src={Project3}
                                    alt="Project 3"
                                    class="project-img"
                                />
                            </div>
                            <h2 class="experience-sub-title project-title">InstaSure</h2>
                            <p>
                            InstaSure is a cutting-edge web application designed to revolutionize 
                            the employee onboarding process. InstaSure offers a seamless, efficient, 
                            and comprehensive solution for HR departments. By centralizing all necessary 
                            information and tasks, InstaSure ensures a smooth 
                            transition for new employees into their roles, enhancing their initial 
                            experience with the company.
                            </p>
                            <br />
                            <div class="btn-container">
                                <button
                                    class="btn btn-color-2 project-btn"
                                    onClick={handleProject3Click}
                                >
                                    Github
                                </button>
                                {/* <button
                                    class="btn btn-color-2 project-btn"
                                    onclick="location.href='https://github.com/'"
                                >
                                    Live Demo
                                </button> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;