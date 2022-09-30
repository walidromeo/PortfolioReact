import React,{useEffect} from 'react'
import AboutImage from "../image/dev1.png"
import "./Layout/About.css"
import AOS from "aos";
import "aos/dist/aos.css"
import Nav from "./Nav"
const About = () => {
    useEffect(() => {
        AOS.init({duration:1500})
    }, []);
    return (
        <>
        <Nav/>
        <section id="about">
        <div className="my"></div>
            <div className="container">
                <div className="row">
                    <div data-aos="fade-down-right" className="col-lg-6 col-md-6 col-sm-12 col-12 align-self-center p-3">
                    <div className="h1">à propos de moi</div>
                        <p>
                       Walid Bennani, développeur full-stack à Casablanca. En tant que développeur web, je crée toutes sortes d'applications web et mobiles . Passionné par les technologies web et utilisant 
                       mes compétences pour répondre aux besoins des clients dans divers domaines
                       </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3 hid">
                        <div data-aos="fade-up-left" className=" h-100 w-100 d-flex justify-content-center align-items-center">
                        <img src={AboutImage} className="img-fluid" alt="About_image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About
