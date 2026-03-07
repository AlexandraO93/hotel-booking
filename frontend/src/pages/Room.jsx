import "./Room.css";
import standardRoomImage from "../assets/standard-room.png";
import superiorRoomImage from "../assets/superior-room.png";
import suiteRoomImage from "../assets/suite-room.png";
import familyRoomImage from "../assets/family-room.png";

export default function Room() {
    return (
        <div className="room-page-container">
            <header className="room-header">
                <h1 className="room-headline">Våra Rum</h1>
                <p className="room-subtext">Där modern arkitektur möter Roslagens orörda natur</p>
            </header>

            <section className="room-grid">
                <article className="room-card">
                    <img src={standardRoomImage} alt="Standardrum" className="room-card-image" />
                    <div className="room-card-content">
                        <h2 className="description-title-room">Standardrum</h2>
                        <p className="description-body-room">
                            Våra Standardrum är designade för att maximera din närvaro i nuet. Med väggar i natursten och 
                            varmt trä skapas en omfamnande atmosfär som kontrasterar vackert mot den vidsträckta utsikten 
                            över Roslagens vatten. <br /><br />Här vaknar du i en exklusiv dubbelsäng, vänd direkt mot soluppgången 
                            bakom de avlägsna bergen.
                        </p>
                        <div className="amenities-list" style={{marginTop: '2rem'}}>
                            <p className="practical-info-title">I RUMMET INGÅR:</p>
                            <ul className="practical-info-text" style={{listStyleType: 'none', padding: 0}}>
                                <li>Panoramafönster med ostörd vy över sjön och tallskogen.</li>
                                <li>Minimalistisk design med fokus på naturliga material som trä och sten.</li>
                                <li>Dubbelsäng med premiumlakan för maximal vila.</li>
                                <li>Smidig arbetsyta och bekväm sittmöbel.</li>
                                <li>Modernt badrum med regndusch och exklusiva detaljer.</li>
                            </ul>
                            <p className="size-info">Storlek: Ca 17 - 21m²</p>
                        </div>
                    </div>
                </article>

                <article className="room-card">
                    <img src={superiorRoomImage} alt="Superiorrum" className="room-card-image" />
                    <div className="room-card-content">
                        <h2 className="description-title-room">Superiorrum</h2>
                        <p className="description-body-room">
                            Våra Superiorrum är skapade för livsnjutaren som vill maximera sin vistelse. Med en yta 
                            på ca 24m² får du ett rum där ljuset flödar in genom de stora panoramafönstren och 
                            möter en inredning av mörkt trä och natursten. <br /><br />Rummet kröns av ett elegant, fristående badkar 
                            placerat så att du kan sjunka ner i det varma vattnet samtidigt som du blickar ut över fjorden 
                            och tallskogen.
                        </p>
                        <div className="amenities-list" style={{marginTop: '2rem'}}>
                            <p className="practical-info-title">DETTA GÖR RUMMET SPECIELLT:</p>
                            <ul className="practical-info-text" style={{listStyleType: 'none', padding: 0}}>
                                <li>Fristående badkar med fri sikt över Roslagens natur.</li>
                                <li>Rymlig lounge-del med designfåtöljer för maximal avkoppling.</li>
                                <li>King size-säng med exklusiva linnesängkläder.</li>
                                <li>Stora fönsterpartier från golv till tak som släpper in naturens skiftningar.</li>
                                <li>Badrockar och tofflor av högsta kvalitet ingår under hela vistelsen.</li>
                            </ul>
                            <p className="size-info">Storlek: Ca 24m²</p>
                        </div>
                    </div>
                </article>    

                <article className="room-card">
                    <img src={suiteRoomImage} alt="Svit" className="room-card-image" />
                    <div className="room-card-content">
                        <h2 className="description-title-room">Svit</h2>    
                        <p className="description-body-room">
                            För dig som söker det extraordinära. Vår svit erbjuder en rymd och komfort utöver det vanliga, komplett 
                            med en sprakande öppen spis och ett fristående badkar för total avkoppling. <br /><br />Den stora glasväggen öppnar 
                            upp mot din privata terrass, där du kan njuta av kvällssolen i bekväma loungemöbler medan mörkret sänker 
                            sig över sjön.
                        </p>
                        <div className="amenities-list" style={{marginTop: '2rem'}}>
                            <p className="practical-info-title">EXKLUSIVA DETALJER:</p>
                            <ul className="practical-info-text" style={{listStyleType: 'none', padding: 0}}>
                                <li>Öppen spis i vardagsrumsdelen för högsta mysfaktor.</li>
                                <li>Fristående badkar med panoramavy över det turkosa vattnet.</li>
                                <li>Privat terrass med solsängar och sömlös övergång till naturen.</li>
                                <li>Generös sällskapsyta för middagar eller sena samtal vid vinkylaren.</li>
                            </ul>
                            <p className="size-info">Storlek: Ca 27 m²</p>
                        </div>
                    </div>
                </article>

                <article className="room-card">
                    <img src={familyRoomImage} alt="Familjerum" className="room-card-image" />
                    <div className="room-card-content">
                        <h2 className="description-title-room">Familjerum</h2>
                        <p className="description-body-room">
                            Våra Familjerum på ca 30 m² är skapade för familjen som inte vill kompromissa med stil eller naturkontakt. 
                            Här bor ni rymligt i en modern miljö där hela familjen får plats att umgås, inspirerat av den omgivande 
                            tallskogen och det turkosa vattnet. <br /><br />Rummet är smart disponerat med en generös dubbelsäng och en stilren, 
                            platsbyggd våningssäng som smälter in i den arkitektoniska helheten av sten och mörkt trä. En fantasifull 
                            sovalkov med ett tipi-tält och mjuka puffar bjuder in till lek och kreativitet för barnen.
                        </p>
                        <div className="amenities-list" style={{marginTop: '2rem'}}>
                            <p className="practical-info-title">DETTA INGÅR FÖR FAMILJEN:</p>
                            <ul className="practical-info-text" style={{listStyleType: 'none', padding: 0}}>
                                <li>Fantasifull lek- och sovalkov för barnen.</li>
                                <li>Flexibla sovplatser för upp till 4 personer utan att tumma på rymden.</li>
                                <li>Inredning i tåliga och vackra naturmaterial som ek och skiffer.</li>
                                <li>Rymligt badrum med regndusch, anpassat för hela familjens behov.</li>
                                <li>En mysig sällskapsyta för spelkvällar eller gemensam planering av morgondagens utflykt.</li>
                            </ul>
                            <p className="size-info">Storlek: Ca 27 m²</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}