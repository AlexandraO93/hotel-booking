import "./Qa.css";
import qaImage from "../assets/qa.png";
import qaImageSmall from "../assets/qa-compressed.png";
import { useState } from "react";
import { useImagePreload } from "../hooks/useImagePreload";

export default function Qa() {
    const { image: heroImage, loaded: heroLoaded } = useImagePreload(qaImageSmall, qaImage);

  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "Vad gäller för av- och ombokning?",
      answer: "Avbokning upp till max 4 rum ska ske senast 2 dagar innan ankomst (senast 15.00), samma gäller vid online bokning men då uttas en avboknings avgift på 100kr. För grupper/konferenser - vänligen kontakta oss via telefon på 070-123 45 67."
    },
    {
      question: "När är in- och utcheckning?",
      answer: "Incheckning 15:00. Utcheckning senast vid 11:00"
    },
    {
      question: "Ingår wifi?",
      answer: "Trådlöst internet finns på hotellet och är fritt att nyttja för samtliga hotellgäster."
    },
    {
      question: "Har ni roomservice?",
      answer: "Hos oss kommer du/ni för att slappna av och må bra, självklart bistår vi er med roomservice om så önskas!"
    },
    {
      question: "Har ni extrasäng att boka till rummet?",
      answer: "Vi tillgodoser er med extrasäng om din rumskategori tillåter det."
    },
    {
      question: "Har ni allergirum?",
      answer: "Självklart! Men du måste kontakta receptionen om du vill boka ett allergirum. Går ej boka online."
    },
    {
      question: "Måste man förskottsbetala en bokning?",
      answer: "Samtliga bokningar som görs via vår onlinebokning måste förskottsbetalas, Bokningar som görs direkt till hotellet per telefon eller mail betalas vid ankomst direkt till hotellet."
    },
    {
      question: "Kan man komma och bara äta frukost eller middag hos er?",
      answer: "Alla är välkomna till oss, så självklart har du möjlighet att äta hos oss även fast du inte bor på hotellet."
    },
  ];

  function toggleQuestion(index) {
    setOpenIndex(prev => (prev === index ? null : index));
  }

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
          {questions.map((item,index) => (
            <div key={index} className="qa-item">
              <button
              className="qa-question"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
              >
                {item.question}
              </button>
              
              {openIndex === index && (
                <p className="qa-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
