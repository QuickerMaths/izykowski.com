import { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = `Lek. med. Jan Włodzimierz Iżykowski ur. 16 stycznia 1960 r. w Koźlu (od 1975 r. Kędzierzyn-Koźle) w rodzinie pielęgniarki i podoficera sanitarnego repatriowanego z Wołynia. 
  Od 1962 r. mieszkający i związany z Opolem. 
  Absolwent Przedszkola Wojskowego nr 76, Szkoły Podstawowej nr 19 im. gen. Świerczewskiego „Waltera” i Szkoły Podstawowej nr 3. 
  W tym czasie zamiłowany bibliofil nękający siedem okolicznych bibliotek i posiadacz od 1970 jednego z większych zbiorów literatury fantastyczno-naukowej ocenianego 10 lat później na ok. 700 pozycji. 
  Przymusowo, ale z rozwijającym się zamiłowaniem, uczeń i absolwent Państwowej Szkoły Muzycznej I stp.`;

  const fullText = `${shortText} w Opolu w klasie skrzypiec (prof. Aleksander Kekin), fortepianu (prof. Zofia Kozłowska) i altówki (prof. Ewald Glombik) oraz uzyskujący pierwsze szlify chóralne pod prof. Janem Ludwigiem. Wygoniony z chóru Szkoły Muzycznej z powodu mutacji miał wrócić jako bas, jednak dopiero na studiach rozpoczęta kariera tenora. Najpierw w chórze przy Radiu Wrocław (dyr. Trębicki), później chór Akademii Rolniczej we Wrocławiu (dyr. Elżbieta Mayer), Chór Duszpasterstw Akademickich „Szumiący Jesion” (dyr. prof. Zofia Urbanyi-Krasnodębska) i obecnie Schola Cantorum Opolienses „Legenda” (dyr. Elżbieta Willim). Inne zainteresowania zaowocowały udziałem w regionalnych olimpiadach wiedzy technicznej i geografii...`;

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">O lekarzu</h1>
      <p className="text-lg">
        {isExpanded ? fullText : shortText}
      </p>
      <button
        onClick={toggleReadMore}
        className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-md"
      >
        {isExpanded ? 'Zwiń' : 'Czytaj więcej'}
      </button>
    </div>
  );
};

export default About;
