import React from "react";
import AboutPic from "../assets/about-pic.JPG";
import EducationIcon from "../assets/education.png";
import Experience from "../assets/experience.png";
import './style.css';

const About = () => {
  return (
    <>
      <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
          <div class="section__pic-container">
            <img
              src={AboutPic}
              alt="Profile "
              class="about-pic"
            />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src={Experience}
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Experience</h3>
                <p>2+ years <br />Full Stack Software Engineer</p>
              </div>
              <div class="details-container">
                <img
                  src={EducationIcon}
                  alt="Education icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>Bachelors in Information Technology<br />Masters in Computer Science</p>
              </div>
            </div>
            <div class="text-container">
              <p>
              Are you seeking a versatile Software Engineer and Data Analyst with a 
              knack for turning complex data into actionable insights and elegant 
              solutions? 
              <br/>
              Look no further! 
              <br/>
              With a robust skill set spanning React JS, 
              Node JS, Express JS, MongoDB, HTML, CSS, JavaScript, Material UI, SQL, 
              and more, I bring a unique blend of technical expertise and analytical 
              prowess to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
