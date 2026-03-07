import "./MenuStyles.css";
import kidsMenuImage from "../assets/kids-menu.png";


export default function KidsMenu() {
    return (
        <div className="menu-page-container">

            <div
                className="menu-hero-img"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${kidsMenuImage})`,
                }}
            ></div>

            <main className="menu-hero-content">
                <h2 className="menu-main-headline">Barnmeny</h2>
                
                <section className="menu-divider-section">
                    <div className="line"></div>
                    <p className="menu-subtext">För våra små finsmakare</p>
                    <div className="line"></div>
                </section>

                <article className="menu-description-article">
                    <p className="description-title">Små äventyr för små upptäckare</p>
                    <p className="description-body">
                        På Roslagen Escape är hela familjen huvudpersoner. Vi vet att 
                        stora äventyr kräver ordentligt med energi, och därför har vårt 
                        köksteam skapat en meny med barnens absoluta favoriter. Självklart 
                        tillagade med samma kärlek och noggrant utvalda råvaror som resten 
                        av husets mat.
                    </p>

                    <p className="description-body">
                        Här får de minsta njuta av välkända smaker i en varm och lekfull miljö, 
                        där varje rätt är komponerad för att ge både matglädje och ork till 
                        morgondagens upptåg i naturen.
                    </p>

                    <p className="scroll-prompt"> Se meny nedan </p>
                </article>

                <section className="menu-items-container">
                    <h4 className="category-headline">Varmrätter</h4>

                    <div className="dish-wrapper">
                        <span className="dish-name">Pannkakstorn</span>
                        <span className="dish-price">95 kr</span>
                        <p className="dish-ingredients">Tre fluffiga pannkakor som serveras med 
                            vispad grädde och husets hemkokta jordgubbssylt.</p>
                    </div>
                    <div className="dish-wrapper">
                        <span className="dish-name">Mammas Köttbullar</span>
                        <span className="dish-price">115 kr</span>
                        <p className="dish-ingredients">Klassiska köttbullar som serveras med en 
                            len potatispuré, rårörda lingon och en mild gräddsås.</p>
                    </div>
                    <div className="dish-wrapper">
                        <span className="dish-name">Fisken i Paketet</span>
                        <span className="dish-price">125 kr</span>
                        <p className="dish-ingredients">Smörstekt torskrygg som serveras med kokt 
                            potatis, gröna ärtor och en klick kall citronsås.</p>
                    </div>
                    <div className="dish-wrapper">
                        <span className="dish-name">Lilla Burgaren</span>
                        <span className="dish-price">135 kr</span>
                        <p className="dish-ingredients">En saftig hamburgare (90g) på briochebröd 
                            med krispiga pommes frites och mild ketchup på sidan.</p>
                    </div>

                    <h4 className="category-headline">Efterrätter</h4>
                    
                    <div className="dish-wrapper">
                        <span className="dish-name">Vaniljglass med chokladsås</span>
                        <span className="dish-price">65 kr</span>
                        <p className="dish-ingredients">Två kulor krämig vaniljglass toppad med varm 
                            chokladsås och ett krispigt rån.</p>
                    </div>
                    <div className="dish-wrapper">
                        <span className="dish-name">Bärfrossa</span>
                        <span className="dish-price">55 kr</span>
                        <p className="dish-ingredients">Säsongens färska bär som serveras med en 
                            liten klick lättvispad grädde.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}