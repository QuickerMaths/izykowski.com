import { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedSecond, setIsExpandedSecond] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleReadMoreSecond = () => {
    setIsExpandedSecond(!isExpandedSecond);
  };

  const shortText = `lek. med. Jan Włodzimierz Iżykowski ur.  16 stycznia 1960 r. w Koźlu
   (od 1975 r. Kędzierzyn-Koźle) w rodzinie pielęgniarki i podoficera sanitarnego repatriowanego z Wołynia. Od 1962 r.
    mieszkający i związany z Opolem.  Absolwent Przedszkola Wojskowego nr 76, Szkoły Podstawowej nr 19 im. gen.
     Świerczewskiego „Waltera” i Szkoły Podstawowej nr 3, która już później otrzymała imię Jana III Sobieskiego.`

  const fullText = `${shortText} W tym czasie zamiłowany bibliofil nękający siedem okolicznych bibliotek i posiadacz od 1970 jednego z większych zbiorów literatury fantastyczno-naukowej ocenianego 10 lat później na ok. 700 pozycji. Przymusowo, ale z rozwijającym się zamiłowaniem, uczeń i absolwent Państwowej Szkoły Muzycznej I stp. w Opolu w  klasie skrzypiec (prof. Aleksander Kekin), fortepianu (prof. Zofia Kozłowska) i altówki (prof. Ewald Glombik) oraz uzyskujący pierwsze szlify chóralne pod prof. Janem Ludwigiem. Wygoniony z chóru Szkoły Muzycznej z powodu mutacji miał wrócić jako bas, jednak dopiero na studiach rozpoczęta kariera tenora. Najpierw w chórze przy Radiu Wrocław (dyr. Trębicki), później chór Akademii Rolniczej we Wrocławiu  (dyr. Elżbieta Mayer) Chór Duszpasterstw Akademickich „Szumiący Jesion” (dyr. Prof. Zofia Urbanyi-Krasnodębska) i obecnie Schola Cantorum Opolienses „Legenda” (dyr. Elżbieta Willim). Inne zainteresowania zaowocowały udziałem w regionalnych olimpiadach wiedzy technicznej i geografii. Dalsza nauka w I Liceum Ogólnokształcącym w Opolu, w najlepszych jego czasach, w okresie dyrektorowania mgr Tadeusza Łukowskiego „Bambusa”.  Początkowo klasa matematyczna z językiem angielskim, ale po pytaniu zadanym przez łacinnika i anglistę prof. Wincentego Kowala „Iżykowski, czy ty choć trochę rozumiesz angielski” i odpowiedzi „fifty-fifty” zmiana profilu na ogólny. Jednak w tym okresie bardziej dominowała działalność  społeczna niż sukcesy naukowe. Od 1975 roku członek Związku Harcerstwa Polskiego, zwanego w tym okresie Harcerską Służbą Polsce Socjalistycznej, ale w Opolu pod silnym wpływem tradycji wielkopolskiego i lwowskiego harcerstwa, wpajanej bezpośrednio przez dh. hm. Stefana Grobelnego i hm. Kozłowskiego. Jako licealista, członek Harcerskiego Akademickiego Kręgu Instruktorskiego im. Bohaterów spod Monte Cassino przy Wyższej Szkole Pedagogicznej w Opolu, uzyskał gruntowne wyszkolenie w tradycji harcerskiej i narodowej.  Przez 10 lat członkowstwa w harcerstwie (1975-1986) uzyskany stopień podharcmistrza i stworzona własna 75 Harcerska Drużyna Turystyczna wędrująca po opolszczyźnie i bieszczadzkich szlakach w czasie sześciu corocznych letnich obozów wędrownych w latach 1981-86. Z harcerstwa wyniesiona „na rozkaz” umiejętność gry na gitarze szlifowana przez m.in. Zbyszka Hoffmana i na licznych rajdowych i obozowych spotkaniach. W tym czasie działalność w zespołach muzycznych w I LO w Opolu i w młodzieżowym zespole muzycznym przy Katedrze opolskiej.  Tam też pierwszy debiut wokalny z okazji rozpoczynającego się pontyfikatu JPII. Zainteresowanie turystyką rowerową było powodem największej jak dotychczas życiowej przygody w 16 roku życia, czyli samotnej, dwumiesięcznej podróży na rowerze dookoła Polski. Zaowocowało to później kontaktami z klubem turystyki kolarskiej „Opolanie 69” i jej szefem Grzegorzem Resem, uwieńczone uzyskaniem kwalifikacji Przodownika Turystyki Kolarskiej PTTK i m.in. prowadzeniem pielgrzymki rowerowej do Częstochowy z powodu pierwszej wizyty JPII w PRL w czerwcu 1979 r. W ostatniej klasie liceum poznaje utalentowaną muzycznie, niezwykle celnie strzelająca z broni krótkiej naczelną redaktorkę szkolnego pisma „Ogólniaczek” – Małgorzatę Kubicę, po dwóch latach absolwentkę klasy matematycznej z językiem angielskim, która siedem lat później już jako asystentka Wydziału Filologii Polskiej Uniwersytetu Wrocławskiego zostaje jego żoną.`;

  const loremIpsumShort = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const loremIpsumFull = `${loremIpsumShort} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      {/* Main About Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">O lekarzu</h1>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
          {/* Text Block */}
          <div className="flex-1">
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpanded ? 'max-h-full opacity-100' : 'max-h-full opacity-100'
              }`}
            >
              <p className="text-lg leading-relaxed">
                {isExpanded ? fullText : shortText}
              </p>
            </div>
            <button
              onClick={toggleReadMore}
              className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-md shadow-md hover:bg-teal-600 transition-colors"
            >
              {isExpanded ? 'Zwiń' : 'Czytaj więcej'}
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-end md:w-1/3 flex-shrink-0 ml-6 mt-4 md:mt-0">
            <img
              src="https://www.izykowski.com.pl/wp-content/uploads/2014/03/o_mnie_portret.jpg"
              alt="Lekarz Jan Włodzimierz Iżykowski"
              className="w-2/3 h-auto max-h-80 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Second Block with Lorem Ipsum */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Lorem Ipsum</h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
          {/* Text Block */}
          <div className="flex-1">
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedSecond ? 'max-h-full opacity-100' : 'max-h-full opacity-100'
              }`}
            >
              <p className="text-lg leading-relaxed">
                {isExpandedSecond ? loremIpsumFull : loremIpsumShort}
              </p>
            </div>
            <button
              onClick={toggleReadMoreSecond}
              className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-md shadow-md hover:bg-teal-600 transition-colors"
            >
              {isExpandedSecond ? 'Zwiń' : 'Czytaj więcej'}
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-end md:w-1/3 flex-shrink-0 ml-6 mt-4 md:mt-0">
            <img
              src="https://www.njfamirm.ir/img/powqZZ3M-1200.jpeg"
              alt="Lorem Ipsum Image"
              className="w-2/3 h-auto max-h-80 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
