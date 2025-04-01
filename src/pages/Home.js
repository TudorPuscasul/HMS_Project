import React from "react";
import Hero from "../components/Hero";
import Cliens from "../components/Cliens";
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/WhyUs";
import Skills from "../components/Skills";
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import FooterBottom from "../components/FooterBottom";
import FooterTop from "../components/FooterTop";

function Home() {
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">
            <Hero/>
            </section>
            <main id="main">
                <Cliens/>
                <AboutUs/>         
                <WhyUs/>
                <Skills/>
                <Cta/>
                <Cliens/>
                <Faq/>
            </main>
            <footer id="footer">
                <FooterTop/>
                <FooterBottom/>
            </footer>
        </div>
    );
}

export default Home;
