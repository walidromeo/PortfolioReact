import React, { useState } from 'react';
import "./Layout/Nav.css";
import {FiMenu} from "react-icons/fi"
import {GrClose} from "react-icons/gr"
import {Link} from "react-router-dom";
const Nav = () => {
    const [navbarRes, setNavbarRes] = useState(false)
    const [brand,setBrand] = useState("WalidRomeo")
    const showNavBar = ()=>setNavbarRes(!navbarRes)
    console.log(navbarRes)
    return (
        <header>
            <nav className="d-flex justify-content-between nav">
                    <Link className="brand-font"  to="/">
                        {"<"+brand+"/>"}
                    </Link>
                    <div className="Toggle">
                        <FiMenu onClick={showNavBar} cursor="pointer" className="FiMenu"/>
                    </div>
                     <ul className={navbarRes?"listActive":"list"}>
                            <div>
                                <GrClose onClick={showNavBar} cursor="pointer" color="White" className="iconClose"/>
                            </div>
                            <li className="p-3">
                                <Link to="/">Acceuil</Link>
                            </li>
                            <li className="p-3">
                                <Link to="/about">À Propos</Link>
                            </li>
                            <li className="p-3">
                                <Link to="/skills">Compétences</Link>
                            </li>
                            <li className="p-3">
                                <Link to="#">Projets</Link>
                            </li>
                            <li className="p-3">
                                <Link to="#">Contact</Link>
                            </li>
                        </ul>  
            </nav>
        </header>
    )
}
export default Nav
