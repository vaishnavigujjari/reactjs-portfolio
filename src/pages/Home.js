import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
// import Footer from "../components/Footer";
import About from "../components/About";
// import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
      <>
        <Header />
        <Profile />
        <About />
        <Experience />
        {/* <Projects /> */}
        <Testimonials />
        <Contact />
        {/* <Footer /> */}
      </>
    );
  }
  
  export default Home;
  