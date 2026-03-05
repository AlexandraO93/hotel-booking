import React from "react";
import "./Footer.css";
import LogoFooter from "../assets/logo-footer.png";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="site-footer" role="contentinfo">
            <div className="footer-grid">
                
                <div className="footer-left">
                    <p className="contact-line">
                        <strong>Telefon: </strong> <br className="mobile-break"/>
                        <span className="contact-value"> 070-123 45 67</span>
                    </p>
                    <p className="contact-line">
                        <strong>E-post: </strong> <br className="mobile-break"/>
                        <span className="contact-value">info@roslagenescape.se</span>
                    </p>
                    <p className="contact-line">
                        <strong>Adress: </strong> <br className="mobile-break"/>
                        <span>Låtsasvägen 23, 123 45 Väddö</span>
                    </p>
                </div>

                <div className="footer-center" aria-hidden="false">
                    <img className="logo-footer"
                        src={LogoFooter} 
                        alt="Roslagen Escape logotyp" />
                       <p className="copyright-text"> © Roslagen Escape 2026</p>
                </div>
                
                <div className="footer-right" aria-label="Footer navigation">
                    <nav>
                        <Link id="about-us" to="/about-us">Om oss</Link>
                        <Link id="contact" to="/contact">Kontakta oss</Link>
                        <Link id="qa-link" to="/qa">Frågor och Svar</Link>
                    </nav>
                </div>

            </div>
        </footer>
    );
}