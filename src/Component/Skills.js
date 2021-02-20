import React,{useEffect} from 'react'
import { FaReact, FaJs, FaHtml5, FaCss3,FaNpm,FaGit } from "react-icons/fa";
import { SiRedux, SiWordpress, SiBootstrap, SiJquery,SiFirebase } from "react-icons/si"
import "./Layout/Skills.css"
import AOS from "aos";
import Nav from './Nav';
const Skills = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <>
        <Nav/>
        <section id="skills">
            <div className="my"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-3" data-aos="zoom-out-right">
                        <div className="h2">Competences</div>
                        <p>« La connaissance éveille vos capacités, l'expérience enrichit vos compétences. »
                        <br />
                        HTML5, CSS3, JS (Es6), création d'applications Web petites, moyennes et grandes avec ReactJS, plugins personnalisés, fonctionnalités, animations et mises en page interactives de codage.
                        <br />
                        J'ai également une expérience de développeur full-stack avec firebase .Aussi en train d'étudier des technologies comme Php et laravel.
                        <br />
                        visitez mon profil Linkedin pour plus de détails ou contactez-moi simplement.</p>
                    </div>
                    <div className="col-lg-6 p-3 d-flex justify-content-center f-wrap align-self-center" data-aos="zoom-in-down">
                        <div className="row">
                            <div className="col-2 p-1">
                                <FaHtml5 className="FaReact" />
                            </div>
                            <div className="col-2 p-1">
                                <FaCss3 className="FaReact" />
                            </div>
                            <div className="col-2 p-1">
                                <FaJs className="FaReact" />
                            </div>
                            <div className="col-2 p-1">
                                <FaReact className="FaReact" />
                            </div>
                            <div className="col-2 p-1">
                                <SiBootstrap className="FaReact" />
                            </div>
                            <div className="col-2 p-1">
                                <SiJquery className="FaReact" />
                            </div>
                            <div className="col-2 p-1">
                                <SiRedux className="FaReact" />
                            </div>
                            <div className="col-2 p-1 ">
                                <SiFirebase className="FaReact" />
                            </div>
                            <div className="col-2 p-1 ">
                                <FaNpm className="FaReact" />
                            </div>
                            <div className="col-2 p-1">
                                <FaGit className="FaReact" />
                            </div>
                            <div className="col-2 p-1 ">
                                <SiWordpress className="FaReact" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Skills
