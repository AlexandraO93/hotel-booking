import "./About-us.css";
import aboutUsImage from "../assets/about-us.png";

export default function AboutUs() {
    return (
        <div className="about-us-page">

            <div
            className="about-us-img"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${aboutUsImage})`,
            }}
        ></div>
            <main>
                <div className="hero-section-about">
                <h2 className="headline-about-us"> Historien om Roslagen Escape </h2>
                    <article className="about-us-text">
                        <p>Roslagen Escape föddes 2018, egentligen av en ganska oskyldig idé. 
                            Alexandra Olsson och hennes partner, Joel Hillgren, ville bygga en liten 
                            plats där de själva kunde andas ut från vardagen. Alexandra såg framför sig 
                            en enkel stuga i skogen. Joel såg… något betydligt större. </p>

                        <p>När ritningarna började likna ett helt hotell snarare än en weekendstuga insåg 
                            de att de kanske råkat starta ett livsprojekt. Det som från början var ett “vi 
                            bygger något litet” blev snabbt ett “vi kanske ska öppna ett hotell?”. Naturen 
                            runt dem gjorde resten. Skogen, ljuset och stillheten krävde att få vara en del 
                            av upplevelsen, och designen växte fram därefter - modern, lugn och med naturen 
                            som självklar huvudperson.</p>

                        <p>Under byggtiden hände allt som brukar hända när två envisa människor bygger något 
                            tillsammans.. Felbeställningar, ommålningar, idéer som var briljanta i teorin och… 
                            mindre briljanta i praktiken. Men mitt i allt det där växte en plats fram som kändes
                            genuin, varm och full av hjärta. </p>
                            
                        <p>När Roslagen Escape öppnade sina dörrar var målet enkelt: att skapa en plats där 
                            människor kunde landa. En plats där man får sova gott, andas ut och känna att 
                            världen går lite långsammare. Det är fortfarande den känslan som driver Alexandra 
                            och Joel idag. Att få erbjuda en paus från allt, mitt i naturen, med både lugn och 
                            ett leende nära till hands.</p>
                        <p className="facts">Fakta</p>
                        <p className="facts-details">122 rum, varav 4 sviter, 45 minisviter. 250 bäddar. <br />8 mötesrum där det största tar 324 sittande.</p>
                    </article>
                </div>
            </main>
        </div>
    );
}               
