import React,{useEffect} from 'react'
import MainSvg from "../image/dev.png"
import  "./Layout/Main.css"
import AOS from "aos";
import "aos/dist/aos.css"
import Nav from './Nav';
const Main = () => {
    
    useEffect(() => {
        AOS.init({duration:800})
    }, []);
    return (
        <>
        <Nav/>
        <section id="Main">
            <div className="my"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right">
                        <div className="h1">I am Walid Bennani</div>
                        <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos necessitatibus quia consectetur non Lorem ipsum dolor sit amet consectetur adipisicing elit. At, in.</div>
                        <i className="fa fa-github f-v fa-1x" id="git" aria-hidden="true"></i>
                        <i className="fa fa-twitter f-v fa-1x" id="twitter" aria-hidden="true"></i>
                        <i className="fa fa-linkedin f-v fa-1x" id="linkedin" aria-hidden="true"></i>
                        <i className="fa fa-instagram f-v fa-1x" id="instagram" aria-hidden="true"></i>
                        <br/>
                        <button type="button" className="btn main-btn">my portfolio</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="img h-100 w-100 d-flex justify-content-center align-items-center"><img data-aos="fade-right"  className="img-fluid banner-img" src={MainSvg} alt="main"/></div>
                    </div>
                </div>
            </div>
            <div className="spacing"></div>
        </section>
        </>
    )
}

export default Main;
