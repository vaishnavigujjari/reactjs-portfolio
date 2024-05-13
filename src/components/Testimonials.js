import React from "react";
import Arrow from "../assets/arrow.png";
import Checkmark from "../assets/checkmark.png";
import Test1 from "../assets/test1.jpeg";
import Test2 from "../assets/test2.jpeg";
import Test3 from "../assets/test3.jpeg";
import './style.css'

const Testimonials = () => {
  const myInlineStyles = {
    height: "120vh",
  };

  return (
    <>
      <section id="testimonials" style={myInlineStyles}>
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Testimonials</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container">
            <div class="article-container">
                <img
                  src={Test1}
                  alt="Testimonial 1"
                  class="project-img"
                />
              </div>
              <br />
              <h2>Sairam Utukuru</h2>
              <p><b>Assistant Professor, CBIT</b></p>
              <br />
              <p>
                Few students have the capacity and motivation to present a unique perspective
                while also valuing their thirst for knowledge and the intricacies of their
                program, Vaishnavi is undeniably one of these students. I recall her being a
                member of IEEE in January 2020, She took on the role of teaching
                the fundamentals of Programming Languages and Data Structures to Non-Computer
                Science sections and she did an outstanding job of explaining the concepts and
                answering all of the students' queries. Several of her questions made me think,
                which aided my study. Curious and punctual, she has a good sense of
                responsibility and motivation.
              </p>
            </div>
            <div class="details-container">
            <div class="article-container">
                <img
                  src={Test2}
                  alt="Testimonial 2"
                  class="project-img"
                />
              </div>
              <br />
              <h2>Sirisha Alamanda</h2>
              <p><b>Assistant Professor, CBIT</b></p>
              <br />
              <p>
                Vaishnavi is a multitasker and a voracious student. She was crucial in shaping the
                research and the final substance of the research paper. The article
                was uploaded to the IJRASET (International Journal for Research in
                Applied Science and Engineering Technology) after being written and
                approved. She rose to the occasion and completed the paper while working
                on her final year major project, internship, and artistic work.
                She performed an excellent job of handling numerous things at once,
                as I had expected, and I saw her dedication and commitment to her work.
              </p>
            </div>
            <div class="details-container">
              <div class="article-container">
                <img
                  src={Test3}
                  alt="Project 2"
                  class="project-img"
                />
              </div>
              <br />
              <h2>Dr. Swathi Sowmya Bavirthi</h2>
              <p><b>Assistant Professor, CBIT</b></p>
              <br />
              <p>
                Vaishnavi is a fantastic leader and multi-talented team player. She is a truthful,
                direct, and sincere student who feels that she can overcome her faults by
                being honest with herself. I recall her initial apprehension when dealing
                with strangers or any unknown individuals. But, over time, working on projects
                with people from all backgrounds helped her better understand how to deal with
                different personalities and mindsets. She is, without a question, a determined and
                committed individual. She never shied away from seeking help and expanding her
                knowledge curve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
