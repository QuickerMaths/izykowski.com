import React, { useState } from "react";

const Anesthesia: React.FC = () => {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const toggleArticle = (index: number) => {
    setExpandedArticle(expandedArticle === index ? null : index);
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Główna sekcja */}
      <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
        Znieczulenia
      </h2>

      {/* Kafelki */}
      <div className="flex justify-center items-center gap-12 mb-12">
        {/* Kafelka - Znieczulenia u dorosłych */}
        <div className="w-1/2 max-w-sm shadow-lg rounded-lg bg-white p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Znieczulenie u dorosłych
          </h3>
          <img
            src="https://dpmed.pl/wp-content/uploads/2020/07/AdobeStock_132867660-1.jpeg"
            alt="Znieczulenie u dorosłych"
            className="w-full h-56 object-cover mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Znieczulenie stosowane podczas zabiegów chirurgicznych u dorosłych,
            dobierane w zależności od rodzaju operacji i stanu zdrowia pacjenta.
          </p>
        </div>

        {/* Kafelka - Znieczulenia u dzieci */}
        <div className="w-1/2 max-w-sm shadow-lg rounded-lg bg-white p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Znieczulenie u dzieci
          </h3>
          <img
            src="https://polki.pl/foto/16_9_LARGE/jakie-znieczulenie-stosuje-sie-u-dzieci-1623848.jpg"
            alt="Znieczulenie u dzieci"
            className="w-full h-56 object-cover mb-4 rounded-lg shadow-md"
          />
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Znieczulenie u dzieci stosuje się, aby zminimalizować ból i stres
            związany z zabiegami medycznymi, zapewniając maksymalne
            bezpieczeństwo.
          </p>
        </div>
      </div>

      {/* Sekcja z artykułami */}
      <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Artykuły
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Artykuł 1 - Znieczulenie ogólne */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Znieczulenie ogólne
          </h4>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedArticle === 1
                ? "max-h-full opacity-100"
                : "max-h-20 opacity-50"
            }`}
          >
            <p className="text-lg font-semibold mb-2">
              Znieczulenie ogólne, zwane anestezją, znosi świadomość i
              odczuwanie bólu w całym organizmie, a dzięki zniesieniu reakcji
              odruchowych, daje komfort pracy operatorowi.
            </p>
            <p className="text-lg leading-relaxed">
              Pacjenta można znieczulić podaniem leku do żyły lub gazu
              usypiającego do oddychania. Stosowane leki działają bardzo krótko,
              dlatego pacjent budzi się po operacji bardzo szybko. Intubacja
              często stosowana jest, aby zapewnić bezpieczeństwo i ochronę płuc
              przed zachłyśnięciem.
            </p>
            <p className="text-lg leading-relaxed">
              W wielu przypadkach znieczulenie ogólne jest łączone ze
              znieczuleniem miejscowym, co zapewnia bardzo dobre działanie
              przeciwbólowe podczas zabiegu i zmniejsza ilość podawanych leków.
            </p>
          </div>
          <button
            onClick={() => toggleArticle(1)}
            className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-md shadow-md hover:bg-teal-600 transition-colors"
          >
            {expandedArticle === 1 ? "Zwiń" : "Czytaj więcej"}
          </button>
        </div>

        {/* Artykuł 2 - Znieczulenie miejscowe */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Znieczulenie miejscowe
          </h4>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedArticle === 2
                ? "max-h-full opacity-100"
                : "max-h-20 opacity-50"
            }`}
          >
            <p className="text-lg leading-relaxed">
              Znieczulenie miejscowe polega na znieczuleniu określonego obszaru
              ciała pacjenta, co pozwala na wykonanie zabiegu bez odczuwania
              bólu. Najczęściej stosowane jest w zabiegach stomatologicznych lub
              chirurgii miejscowej.
            </p>
            <p className="text-lg leading-relaxed">
              Działanie znieczulenia miejscowego ogranicza się do znieczulonego
              obszaru, a pacjent pozostaje świadomy. Jest to powszechna metoda
              stosowana w przypadku mniejszych zabiegów.
            </p>
          </div>
          <button
            onClick={() => toggleArticle(2)}
            className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-md shadow-md hover:bg-teal-600 transition-colors"
          >
            {expandedArticle === 2 ? "Zwiń" : "Czytaj więcej"}
          </button>
        </div>

        {/* Artykuł 3 - Przeciwwskazania */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Przeciwwskazania do znieczulenia
          </h4>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedArticle === 3
                ? "max-h-full opacity-100"
                : "max-h-20 opacity-50"
            }`}
          >
            <p className="text-lg leading-relaxed">
              Przeciwwskazania bezwzględne obejmują choroby układu krążenia w
              fazie niewyrównania, niewydolność nerek, ostrą lub przewlekłą
              niewydolność układu oddechowego, infekcje dróg oddechowych oraz
              nieuregulowaną cukrzycę.
            </p>
            <p className="text-lg leading-relaxed">
              W przypadku pacjentów obciążonych dodatkowymi schorzeniami,
              konieczne mogą być dodatkowe badania diagnostyczne i konsultacje
              specjalistyczne przed przystąpieniem do zabiegu.
            </p>
          </div>
          <button
            onClick={() => toggleArticle(3)}
            className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-md shadow-md hover:bg-teal-600 transition-colors"
          >
            {expandedArticle === 3 ? "Zwiń" : "Czytaj więcej"}
          </button>
        </div>

        {/* Artykuł 4 - Znieczulenie u dzieci */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Znieczulenie u dzieci
          </h4>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedArticle === 4
                ? "max-h-full opacity-100"
                : "max-h-20 opacity-50"
            }`}
          >
            <p className="text-lg leading-relaxed">
              Znieczulenie ogólne u dzieci to trudna decyzja dla rodziców,
              jednak najczęściej jest niezbędne w celu ochrony psychiki dziecka
              przed skutkami stresu i bólu. Znieczulenie miejscowe lub ogólne
              stosowane u dzieci ma na celu zapewnienie maksymalnego komfortu i
              bezpieczeństwa.
            </p>
            <p className="text-lg leading-relaxed">
              Ważna jest współpraca rodziców z zespołem anestezjologicznym, aby
              stworzyć dziecku poczucie bezpieczeństwa zarówno przed, jak i po
              zabiegu. Warto odpowiednio przygotować dziecko do zabiegu,
              wyjaśniając mu cel wizyty w klinice.
            </p>
          </div>
          <button
            onClick={() => toggleArticle(4)}
            className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-md shadow-md hover:bg-teal-600 transition-colors"
          >
            {expandedArticle === 4 ? "Zwiń" : "Czytaj więcej"}
          </button>
        </div>

        {/* Nowy Artykuł 5 - Znieczulenie u dorosłych */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Znieczulenie u dorosłych
          </h4>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedArticle === 5
                ? "max-h-full opacity-100"
                : "max-h-20 opacity-50"
            }`}
          >
            <p className="text-lg leading-relaxed">
              Znieczulenie u dorosłych obejmuje zarówno znieczulenie ogólne, jak
              i miejscowe. Wybór metody zależy od charakteru zabiegu oraz stanu
              zdrowia pacjenta. Każde znieczulenie wymaga konsultacji z
              anestezjologiem przed operacją.
            </p>
            <p className="text-lg leading-relaxed">
              Przed znieczuleniem u dorosłych przeprowadzana jest konsultacja,
              która ocenia ryzyko i dobiera najlepszą metodę dla pacjenta.
              Proces obejmuje zarówno przygotowanie psychiczne pacjenta, jak i
              odpowiednią diagnostykę przedoperacyjną.
            </p>
          </div>
          <button
            onClick={() => toggleArticle(5)}
            className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-md shadow-md hover:bg-teal-600 transition-colors"
          >
            {expandedArticle === 5 ? "Zwiń" : "Czytaj więcej"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anesthesia;
