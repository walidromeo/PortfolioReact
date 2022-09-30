import React, { useEffect } from 'react'
import MainSvg from "../image/dev.png"
import "./Layout/Main.css"
import AOS from "aos";
import "aos/dist/aos.css"
import Nav from './Nav';
const Main = () => {

    useEffect(() => {
        AOS.init({ duration: 800 })
    }, []);
    return (
        <>
            <Nav />
            <section id="Main">
                <div className="my"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right">
                            <div className="h1">Je Suis Walid Bennani</div>
                            <div className="desc">
                            Prêt à relever de nouveaux défis, désireux d'apprendre, ponctuel, indépendant et curieux. Je souhaite rejoindre votre entreprise et accompagner le développement de votre projet.
                            </div>
                            <a href='https://github.com/walidromeo' target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github f-v fa-1x" id="git" aria-hidden="true"></i>
                            </a>
                            <a href='https://www.linkedin.com/in/walid-bennani-496b72197/' target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin f-v fa-1x" id="linkedin" aria-hidden="true"></i>
                            </a>
                            <a href='https://www.instagram.com/walid_bennani' target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram f-v fa-1x" id="instagram" aria-hidden="true"></i>
                            </a>
                            <br />
                            <a href='https://drive.google.com/file/d/1fCi42u-ATOjxUB0AU6ECFYSAM7xs6xIq/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                            <button type="button" className="button-Main btn main-btn">Télécharger Mon CV</button>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="img h-100 w-100 d-flex justify-content-center align-items-center"><img data-aos="fade-right" className="img-fluid banner-img" src={MainSvg} alt="main" /></div>
                        </div>
                    </div>
                </div>
                <div className="spacing"></div>
            </section>
        </>
    )
}

export default Main;
