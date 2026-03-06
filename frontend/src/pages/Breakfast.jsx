import "./Breakfast.css";
import breakfastImage from "../assets/breakfast.png";

export default function Breakfast() {
    return (
        <div className="breakfast-page">
        
            <div
                className="breakfast-img"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${breakfastImage})`,
                }}
            ></div>
            
            <main className="hero-section-breakfast">
                <h2 className="headline-breakfast"> Frukost </h2>

                <section className="subtitle-breakfast">
                    <div className="left-line"></div>
                    <p className="subtext-breakfast"> En smakstart i naturens lugn</p>
                    <div className="right-line"></div>
                </section>

                <article className="describing-breakfast">
                    <p className="describing-text">
                        Vakna till doften av nybakat bröd och nymalet kaffe. På Roslagen Escape börjar dagen precis som den ska. 
                        Med lugn, ro och en generös frukostbuffé fylld av lokala råvaror.</p> 
                    <p className="describing-text-two">
                        Njut av allt från våra frasiga tillbehör till ett brett utbud av laktos- och glutenfria alternativ, 
                        allt medan du blickar ut över skogens stillhet.</p>
                    
                    <div className="breakfast-times">
                        <p className="schedule-title">Frukosttider</p>
                        <p className="workday">Måndag - Fredag 06:30 - 10:30</p>
                        <p className="weekend">Lördag - Söndag 07:30 - 10:30</p>
                    </div>
                </article>   
            </main>
        </div>
    );
}