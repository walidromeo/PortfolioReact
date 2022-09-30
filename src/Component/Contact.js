
import React, { useEffect } from 'react'
import MainSvg from "../image/dev.png"
import "./Layout/Contact.css";
import "./Layout/Main.css"
import AOS from "aos";
import "aos/dist/aos.css"
import Nav from './Nav';
const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 300 })
    }, []);
    return (
        <>
            <Nav />
            <section id='contact'>
                <div className="my"></div>
                <div className="container">
                    <div className="row">
                        <div data-aos="fade-down-left" className="col-lg-12 col-md-12 col-sm-12 col-12 align-self-center text-center p-3">
                            <a href='https://github.com/walidromeo' target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github f-v fa-1x" id="git" aria-hidden="true"></i>
                            </a>
                            <a href='https://www.linkedin.com/in/walid-bennani-496b72197/' target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin f-v fa-1x" id="linkedin" aria-hidden="true"></i>
                            </a>
                            <a href='https://www.instagram.com/walid_bennani' target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram f-v fa-1x" id="instagram" aria-hidden="true"></i>
                            </a>
                            <a href='https://drive.google.com/file/d/1fCi42u-ATOjxUB0AU6ECFYSAM7xs6xIq/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-file-pdf-o f-v  fa-1x" id="linkedin" aria-hidden="true"></i>
                            </a>
                            <br />
                        </div>
                        <div data-aos="fade-down-left" className="col-lg-5 col-md-5 col-sm-12 col-12 align-self-center p-3">
                            <div id="contact-h1" className="h1">Contactez-Moi</div>
                                <input className="contactInput" type="text" placeholder="Nom*" />

                                <input className="contactInput" type="email" placeholder="Email*" />

                                <input className="contactInput" type="text" placeholder="Telephone*" />
                                <textarea id='textArea' type="text" placeholder="Message" />
                                <button className="btn btn-primary btn-contact">Envoyer</button>
                        </div>
                        <div data-aos="fade-down-up" className="col-lg-6 col-md-6 col-sm-12 col-12 align-self-center p-3">
                            <div className="img h-100 w-100 d-flex justify-content-center align-items-center">
                                <iframe data-aos="fade-up" className="img-fluid banner-img" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72692349594!2d-7.657032779023565!3d33.57226777564669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1664382928702!5m2!1sen!2sma" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="spacing"></div>
            </section>
        </>
    )
}

export default Contact;
