import React,{useEffect} from 'react'
import { FaReact, FaJs, FaHtml5, FaCss3,FaGit, FaLinux } from "react-icons/fa";
import { SiRedux,SiFirebase,
    SiJava,SiPython, SiMysql, SiPostgresql, SiSpring } from "react-icons/si"
import "./Layout/Skills.css"
import AOS from "aos";
import Nav from './Nav';
import { GrDocker } from 'react-icons/gr';
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
                        3 ans d'expertise en développement de logiciels dans la programmation orientée objet, le développement d'applications d'entreprise multi-niveaux distribuées utilisant les technologies Java et J2EE avec le cycle de vie du développement logiciel.
                        visitez mon profil 
                        <a id='linkLinkedin' href='https://www.linkedin.com/in/walid-bennani-496b72197/' target="_blank" rel="noopener noreferrer">
                        Linkedin
                        </a>
                         pour plus de détails ou contactez-moi simplement.</p>
                    </div>
                    <div className="col-lg-6 p-3 d-flex justify-content-center f-wrap align-self-center" data-aos="zoom-in-down">
                        <div className="row">
                            <div className="col-2 p-1">
                                <FaHtml5 className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                                <FaCss3 className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                                <SiJava className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                                <FaJs className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                                <SiPython className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                            </div>
                            <div className="col-2 p-1">
                                <SiSpring className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                                <FaReact className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                                <SiRedux className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                                <SiPostgresql className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                                <SiMysql className="FaLogo" />
                            </div>
                            <div className="col-2 p-1 ">
                            </div>
                            <div className="col-2 p-1">
                                <FaGit className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                                <GrDocker className="FaLogo" />
                            </div>
                            <div className="col-2 p-1">
                                <FaLinux className="FaLogo" />
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
