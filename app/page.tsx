import React from "react";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import ScrollTop from "@/components/layout/ScrollTop";

const HomePage = () => {
  return (
    <div>
      <ScrollTop />

      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
