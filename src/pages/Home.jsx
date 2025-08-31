import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";

function Home() {
  const [loading, setLoading] = useState(true);



  return (
    <div className="home">
      <section className="section-container">
        <Hero />
      </section>
      <section className="section-container">
        
        <Products />
      </section>
      <section className="section-container">
        
        <About />
      </section>
      <section className="section-container">
        
        <Contact />
      </section>
    </div>
  );
}

export default Home;
