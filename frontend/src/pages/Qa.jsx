import "./Qa.css";
import qaImage from "../assets/qa.png";
import qaImageSmall from "../assets/qa-compressed.png";
import { useState, useEffect } from "react";
import { preloadImage } from "../utils/imageUtils";

export default function Qa() {
  const [heroImage, setHeroImage] = useState(qaImageSmall);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
   preloadImage(setHeroImage, setHeroLoaded, qaImage);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "Vad gäller för av- och ombokning?",
      answer: "Avbokning upp till max 4 rum ska ske senast 2 dagar innan ankomst (senast 15.00), samma gäller vid online bokning men då uttas en avboknings avgift på 100kr. För grupper/konferenser - vänligen kontakta oss via telefon på 070-123 45 67."
    },
    {
      question: " När är in- och utcheckning?",
      answer: "Incheckning 15:00. <br /> Utcheckning senast vid 11:00"
    },
    {
      question: "Ingår wifi?",
      answer: "Trådlöst internet finns på hotellet och är fritt att nyttja för samtliga hotellgäster."
    },
    {
      question: "Vad gäller för av- och ombokning?",
      answer: "Avbokning upp till max 4 rum ska ske senast 2 dagar innan ankomst (senast 15.00), samma gäller vid online bokning men då uttas en avboknings avgift på 100kr. För grupper/konferenser - vänligen kontakta oss via telefon på 070-123 45 67."
    },{
      question: "Vad gäller för av- och ombokning?",
      answer: "Avbokning upp till max 4 rum ska ske senast 2 dagar innan ankomst (senast 15.00), samma gäller vid online bokning men då uttas en avboknings avgift på 100kr. För grupper/konferenser - vänligen kontakta oss via telefon på 070-123 45 67."
    },{
      question: "Vad gäller för av- och ombokning?",
      answer: "Avbokning upp till max 4 rum ska ske senast 2 dagar innan ankomst (senast 15.00), samma gäller vid online bokning men då uttas en avboknings avgift på 100kr. För grupper/konferenser - vänligen kontakta oss via telefon på 070-123 45 67."
    },{
      question: "Vad gäller för av- och ombokning?",
      answer: "Avbokning upp till max 4 rum ska ske senast 2 dagar innan ankomst (senast 15.00), samma gäller vid online bokning men då uttas en avboknings avgift på 100kr. För grupper/konferenser - vänligen kontakta oss via telefon på 070-123 45 67."
    },{
      question: "Vad gäller för av- och ombokning?",
      answer: "Avbokning upp till max 4 rum ska ske senast 2 dagar innan ankomst (senast 15.00), samma gäller vid online bokning men då uttas en avboknings avgift på 100kr. För grupper/konferenser - vänligen kontakta oss via telefon på 070-123 45 67."
    },
  ];

  function toggleQuestion(index) {
    setOpenIndex(prev => (prev === index ? null : index));
    questions.map(question, index) => (
      question.
    )
  };

  return (
    <div className="qa-page">
      <div
        className="qa-img"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0005), rgba(255, 255, 255, 0.0005)), url(${heroImage})`,
        }}
      ></div>

      <main className="qa-main">
        <h2 className="qa-main-headline">Frågor och Svar</h2>

        <section className="qa-content">
          <span className="question-text">
            <button
              className="qa-question"
              onClick={toggle4}
              aria-expanded={questionOpen4}
            >
              Vad gäller för av- och ombokning?
            </button>
            {questionOpen4 && (
              <p className="qa-answer">
                Avbokning upp till max 4 rum ska ske senast 2 dagar innan
                ankomst (senast 15.00), samma gäller vid online bokning men då
                uttas en avboknings avgift på 100kr. För grupper/konferenser -
                vänligen kontakta oss via telefon på 070-123 45 67.
              </p>
            )}
          </span>
        </section>
        <section className="qa-content">
          <span className="question-text">
            <button
              className="qa-question"
              onClick={toggle1}
              aria-expanded={questionOpen1}
            >
              När är in- och utcheckning?
            </button>
            {questionOpen1 && (
              <p className="qa-answer">
                Incheckning 15:00. <br />
                Utcheckning senast vid 11:00
              </p>
            )}
          </span>
        </section>
        <section className="qa-content">
          <span className="question-text">
            <button
              className="qa-question"
              onClick={toggle2}
              aria-expanded={questionOpen2}
            >
              Ingår wifi?
            </button>
            {questionOpen2 && (
              <p className="qa-answer">
                Trådlöst internet finns på hotellet och är fritt att nyttja för
                samtliga hotellgäster.
              </p>
            )}
          </span>
        </section>
        <section className="qa-content">
          <span className="question-text">
            <button
              className="qa-question"
              onClick={toggle3}
              aria-expanded={questionOpen3}
            >
              Har ni roomservice?
            </button>
            {questionOpen3 && (
              <p className="qa-answer">
                Hos oss kommer du/ni för att slappna av och må bra, självklart
                bistår vi er med roomservice om så önskas!
              </p>
            )}
          </span>
        </section>
        <section className="qa-content">
          <span className="question-text">
            <button
              className="qa-question"
              onClick={toggle6}
              aria-expanded={questionOpen6}
            >
              Har ni extrasäng att boka till rummet?
            </button>
            {questionOpen6 && (
              <p className="qa-answer">
                Vi tillgodoser er med extrasäng om din rumskategori tillåter
                det.
              </p>
            )}
          </span>
        </section>
        <section className="qa-content">
          <span className="question-text">
            <button
              className="qa-question"
              onClick={toggle8}
              aria-expanded={questionOpen8}
            >
              Har ni allergirum?
            </button>
            {questionOpen8 && (
              <p className="qa-answer">
                Självklart! Men du måste kontakta receptionen om du vill boka
                ett allergirum. Går ej boka online.
              </p>
            )}
          </span>
        </section>
        <section className="qa-content">
          <span className="question-text">
            <button
              className="qa-question"
              onClick={toggle5}
              aria-expanded={questionOpen5}
            >
              Måste man förskottsbetala en bokning?
            </button>
            {questionOpen5 && (
              <p className="qa-answer">
                Samtliga bokningar som görs via vår onlinebokning måste
                förskottsbetalas, Bokningar som görs direkt till hotellet per
                telefon eller mail betalas vid ankomst direkt till hotellet.
              </p>
            )}
          </span>
        </section>
        <section className="qa-content">
          <span className="question-text">
            <button
              className="qa-question"
              onClick={toggle7}
              aria-expanded={questionOpen7}
            >
              Kan man komma och bara äta frukost eller middag hos er?
            </button>
            {questionOpen7 && (
              <p className="qa-answer">
                Alla är välkomna till oss, så självklart har du möjlighet att
                äta hos oss även fast du inte bor på hotellet.
              </p>
            )}
          </span>
        </section>
      </main>
    </div>
  );
}
