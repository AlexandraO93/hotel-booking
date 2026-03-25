import standardRoomImage from "../assets/standard-room.png";
import standardRoomImageSmall from "../assets/standard-room-compressed.png";
import superiorRoomImage from "../assets/superior-room.png";
import superiorRoomImageSmall from "../assets/superior-room-compressed.png";
import suiteRoomImage from "../assets/suite-room.png";
import suiteRoomImageSmall from "../assets/suite-room-compressed.png";
import familyRoomImage from "../assets/family-room.png";
import familyRoomImageSmall from "../assets/family-room-compressed.png";

export const roomsData = [
  {
    id: "standardrum",
    title: "Standardrum",
    imageSmall: standardRoomImageSmall,
    imageLarge: standardRoomImage,
    alt: "Standardrum",
    shortDescription:
      "Ett ljust och bekvämt rum med allt du behöver för en avkopplande vistelse.",
    maxGuests: 2,
    intro:
      "Våra Standardrum är designade för att maximera din närvaro i nuet. Med väggar i natursten och varmt trä skapas en omfamnande atmosfär som kontrasterar vackert mot den vidsträckta utsikten över Roslagens vatten.",
    highlight:
      "Här vaknar du i en exklusiv dubbelsäng, vänd direkt mot soluppgången bakom de avlägsna bergen.",
    amenities: [
      "Panoramafönster med ostörd vy över sjön och tallskogen.",
      "Minimalistisk design med fokus på naturliga material som trä och sten.",
      "Dubbelsäng med premiumlakan för maximal vila.",
      "Smidig arbetsyta och bekväm sittmöbel.",
      "Modernt badrum med regndusch och exklusiva detaljer.",
    ],
    size: "Ca 17 - 21m²",
    price: 1100,
  },
  {
    id: "superiorrum",
    title: "Superiorrum",
    imageSmall: superiorRoomImageSmall,
    imageLarge: superiorRoomImage,
    alt: "Superiorrum",
    intro:
      "Våra Superiorrum är skapade för livsnjutaren som vill maximera sin vistelse. Med en yta på ca 24m² får du ett rum där ljuset flödar in genom de stora panoramafönstren och möter en inredning av mörkt trä och natursten.",
    highlight:
      "Rummet kröns av ett elegant, fristående badkar placerat så att du kan sjunka ner i det varma vattnet samtidigt som du blickar ut över fjorden och tallskogen.",
    amenities: [
      "Fristående badkar med fri sikt över Roslagens natur.",
      "Rymlig lounge-del med designfåtöljer för maximal avkoppling.",
      "King size-säng med exklusiva linnesängkläder.",
      "Stora fönsterpartier från golv till tak som släpper in naturens skiftningar.",
      "Badrockar och tofflor av högsta kvalitet ingår under hela vistelsen.",
    ],
    size: "Ca 24m²",
    maxGuests: 2,
    price: 1500,
    shortDescription:
      "Ett rymligare rum med extra komfort och en lugn, harmonisk känsla.",
  },
  {
    id: "svit",
    title: "Svit",
    imageSmall: suiteRoomImageSmall,
    imageLarge: suiteRoomImage,
    alt: "Svit",
    intro:
      "För dig som söker det extraordinära. Vår svit erbjuder en rymd och komfort utöver det vanliga, komplett med en sprakande öppen spis och ett fristående badkar för total avkoppling.",
    highlight:
      "Den stora glasväggen öppnar upp mot din privata terrass, där du kan njuta av kvällssolen i bekväma loungemöbler medan mörkret sänker sig över sjön.",
    amenities: [
      "Öppen spis i vardagsrumsdelen för högsta mysfaktor.",
      "Fristående badkar med panoramavy över det turkosa vattnet.",
      "Privat terrass med solsängar och sömlös övergång till naturen.",
      "Generös sällskapsyta för middagar eller sena samtal vid vinkylaren.",
      "Privat minibar med noggrant utvalda lokala drycker och delikatesser för en exklusiv upplevelse.",
    ],
    size: "Ca 30m²",
    maxGuests: 3,
    price: 2200,
    shortDescription:
      "En elegant svit med generösa ytor för dig som vill bo extra bekvämt.",
  },
  {
    id: "familjerum",
    title: "Familjerum",
    imageSmall: familyRoomImageSmall,
    imageLarge: familyRoomImage,
    alt: "Familjerum",
    intro:
      "Våra Familjerum på ca 32 m² är skapade för familjen som inte vill kompromissa med stil eller naturkontakt. Här bor ni rymligt i en modern miljö där hela familjen får plats att umgås, inspirerat av den omgivande tallskogen och det turkosa vattnet.",
    highlight:
      "Rummet är smart disponerat med en generös dubbelsäng och en stilren, platsbyggd våningssäng som smälter in i den arkitektoniska helheten av sten och mörkt trä. En fantasifull sovalkov med ett tipi-tält och mjuka puffar bjuder in till lek och kreativitet för barnen.",
    amenities: [
      "Fantasifull lek- och sovalkov för barnen.",
      "Flexibla sovplatser för upp till 4 personer utan att tumma på rymden.",
      "Inredning i tåliga och vackra naturmaterial som ek och skiffer.",
      "Rymligt badrum med regndusch, anpassat för hela familjens behov.",
      "En mysig sällskapsyta för spelkvällar eller gemensam planering av morgondagens utflykt.",
    ],
    size: "Ca 32m²",
    maxGuests: 4,
    price: 1800,
    shortDescription:
      "Perfekt för familjen, med gott om plats och bekväma sovlösningar.",
  },
];
