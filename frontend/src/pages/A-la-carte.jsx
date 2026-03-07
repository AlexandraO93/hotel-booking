import "./MenuStyles.css";
import aLaCarteImage from "../assets/a-la-carte.png";

export default function ALaCarte() {
    return (
        <div className="menu-page-container">

            <div
                className="menu-hero-img"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${aLaCarteImage})`,
                }}
            ></div>

            <main className="menu-hero-content">
                <h2 className="menu-main-headline"> À La Carte</h2>

                <section className="menu-divider-section">
                    <div className="line"></div>
                    <p className="menu-subtext">En smakresa i kvällens magi</p>
                    <div className="line"></div>
                </section>

                <article className="menu-description-article">
                    <p className="description-title">Smaker skapade i harmoni med naturen</p>
                    <p className="description-body">
                        Välkommen till ett kök där passionen är den viktigaste ingrediensen. 
                        Under ledning av vår köksmästare Luciano Rossi skapar vi mat som talar 
                        till alla sinnen. Luciano och hans team arbetar med en sällsynt precision 
                        och kärlek till detaljerna, vilket märks i allt från den första aromen 
                        till det vackra upplägget.
                    </p>

                    <p className="description-body">
                        Vi tror på rena smaker och noggrant utvalda råvaror som får tala för sig 
                        själva. För att göra din kväll komplett hjälper vi dig mer än gärna att 
                        hitta rätt dryck. Det där lilla extra som förgyller varje tugga. <br />
                        <br />Välkommen att slå dig ner, koppla av och låt oss sköta resten. Vi lovar att 
                        du kommer trivas.
                    </p>

                    <div className="practical-info-box">
                        <p className="practical-info-title">Bordsbokning:</p>
                        <p className="practical-info-text">Gör din reservation på <strong>070-123 45 67</strong> eller via mail på 
                            <strong> info@roslagenescape.se</strong>. <br />
                            För våra boendegäster bokas middagstiden bekvämt på plats vid ankomst.</p>
                        <p className="scroll-prompt"> Se meny nedan </p>
                    </div>
                </article>

                <section className="menu-items-container">
                        <h4 className="category-headline">Förrätter</h4>

                        <div className="dish-wrapper">
                            <span className="dish-name">Rökig Oxfilétartar</span>
                            <span className="dish-price">165 kr</span>
                            <p className="dish-ingredients">Serveras med tryffelmajonnäs, picklad skogssvamp, 
                                krispig schalottenlök och riven lagrad svecia.</p>
                            <p className="dish-wine-pairing">Barbera d’Alba, Italien, 145 kr</p>
                        </div>
                        <div className="dish-wrapper">
                            <span className="dish-name">Charkbricka "Escape"</span>
                            <span className="dish-price">155 kr</span>
                            <p className="dish-ingredients">Ett urval av lokala charkuterier, oliver, fröknäcke 
                                och en sötstark fikonmarmorlad.</p>
                            <p className="dish-wine-pairing">Rioja Crianza, Spanien, 135 kr</p>
                        </div>                 
                        <div className="dish-wrapper">
                            <span className="dish-name">Sotad pilgrimsmussla</span>
                            <span className="dish-price">175 kr</span>
                            <p className="dish-ingredients">Med blomkålspuré, brynt smör-vinägrett, hasselnötter 
                                och färsk körvel.</p>
                            <p className="dish-wine-pairing">Chablis, Frankrike, 165 kr</p>
                        </div>
                        <div className="dish-wrapper">
                            <span className="dish-name">Betvariation med getost</span>
                            <span className="dish-price">145 kr</span>
                            <p className="dish-ingredients">Ugnsrostade gul- och polkarbetor, krämig getostkräm, 
                                honungsgravade valnötter och ruccola. (V)</p>
                            <p className="dish-wine-pairing">Sancerre, Frankrike, 155 kr</p>
                        </div>

                        <h4 className="category-headline">Varmrätter</h4>

                        <div className="dish-wrapper">
                            <span className="dish-name">Grillad Entrecôte</span>
                            <span className="dish-price">365 kr</span>
                            <p className="dish-ingredients">Med rödvinssås på oxmärg, örtsmör, säsongens primörer 
                                och krispig pommes frites.</p>
                            <p className="dish-wine-pairing">Cabernet Sauvignon, USA, 185 kr</p>
                        </div>
                        <div className="dish-wrapper">
                            <span className="dish-name">Långbakad Högrev</span>
                            <span className="dish-price">285 kr</span>
                            <p className="dish-ingredients">Bräserad i mörkt öl, serveras med en len potatispuré 
                                med västerbottensost, picklad lök och rårörda vinbär.</p>
                            <p className="dish-wine-pairing">Rioja Reserva, Spanien, 155 kr</p>
                        </div>
                        <div className="dish-wrapper">
                            <span className="dish-name">Roslagens Vildsvinsburgare</span>
                            <span className="dish-price">255 kr</span>
                            <p className="dish-ingredients">På briochebröd med karamelliserad lök, rökt bacon, 
                                tryffelaioli och handskuren klyftpotatis.</p>
                            <p className="dish-wine-pairing">Zinfandel, USA, 135 kr</p>
                        </div>
                        <div className="dish-wrapper">
                            <span className="dish-name">Smörstekt Rödingfilé</span>
                            <span className="dish-price">325 kr</span>
                            <p className="dish-ingredients">Från kalla vatten, serveras med sandefjordssås, 
                                sparris, forellrom och dillslungad färskpotatis.</p>
                            <p className="dish-wine-pairing">Riesling Trocken, Tyskland, 145 kr</p>
                        </div>
                        <div className="dish-wrapper">
                            <span className="dish-name">Ugnsbakad Torskrygg</span>
                            <span className="dish-price">345 kr</span>
                            <p className="dish-ingredients">Med pepparrot, brynt smör, rimmad gurka, 
                                handskalade räkor och kokt delikatesspotatis.</p>
                            <p className="dish-wine-pairing">Meursault Chardonnay, Frankrike, 185 kr</p>
                        </div>
                        <div className="dish-wrapper">
                            <span className="dish-name">Skogssvampsrisotto</span>
                            <span className="dish-price">249 kr</span>
                            <p className="dish-ingredients">Krämig arborioris med säsongens svamp, sparris, 
                                parmesanflarn och en skvätt vit tryffelolja. (V)</p>
                            <p className="dish-wine-pairing">Barolo Nebbiolo, Italien, 175 kr</p>
                        </div>
                        <div className="dish-wrapper">
                            <span className="dish-name">Rostad Blomkålssteak</span>
                            <span className="dish-price">235 kr</span>
                            <p className="dish-ingredients">Serveras med en nötig romescosås, belugalinser, 
                                hyvlad fänkål och rostade mandlar. (VG)</p>
                            <p className="dish-wine-pairing">Chenin Blanc, Sydafrika, 125 kr</p>
                        </div>

                        <h4 className="category-headline">Efterrätter</h4>

                        <div className="dish-wrapper">
                            <span className="dish-name">Chokladfondant</span>
                            <span className="dish-price">125 kr</span>
                            <p className="dish-ingredients">Med rinnande kärna, serveras med rårörda hallon och 
                                en kula krämig vaniljgelato.</p>
                            <p className="dish-wine-pairing">Recioto della Valpolicella, Italien, 115 kr (8cl)</p>
                        </div>
                        <div className="dish-wrapper">
                            <span className="dish-name">Klassisk Crème Brûlée</span>
                            <span className="dish-price">115 kr</span>
                            <p className="dish-ingredients">Smaksatt med äkta tahitivanilj och toppad med ett 
                                knäckigt sockerlager.</p>
                            <p className="dish-wine-pairing">Sauternes, Frankrike, 105 kr (8cl)</p>
                        </div>
                        <div className="dish-wrapper">
                            <span className="dish-name">Hjortronparfait</span>
                            <span className="dish-price">135 kr</span>
                            <p className="dish-ingredients">"Norrlands guld" serveras med havreflarn, 
                                brynt smör-smulor och färsk mynta.</p>
                            <p className="dish-wine-pairing">Tokaji Aszú, Ungern, 125 kr (8cl)</p>
                        </div>
                </section>
            </main>
        </div>
    );
}