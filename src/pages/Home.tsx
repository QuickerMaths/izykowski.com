import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="bg-[#E8E8E8] min-h-screen">
      {/* Sekcja nagłówka z wideo w tle */}
      <header className="relative min-h-[700px]">
        {/* Wideo tła */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://klinikaambroziak.pl/video/video2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Przyciemnienie */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Zawartość nagłówka */}
        <div className="container mx-auto  z-10 h-full flex flex-col justify-center items-center text-center text-white">
          {/* Kontener na tekst i przyciski wyśrodkowane w poziomie i pionie */}
          <div className="flex flex-col items-center justify-center space-y-6 absolute top-1/2 transform -translate-y-1/2">
            <h1 className="text-xl md:text-5xl px-5 font-bold mb-4 md:mb-0 animate-fadeInUp">
              Indywidualna specjalistyczna praktyka lekarska Jan Iżykowski
            </h1>
            {/* Przyciski w jednej linii */}
            <div className="flex space-x-4">
              <Link to="/o-mnie">
                <button className="text-xs md:text-2xl floating-button bg-transparent text-white py-2 px-3 md:py-3 md:px-8 border-2 border-white rounded-full shadow-lg uppercase transition-all duration-300 hover:bg-white hover:text-gray-900">
                  Poznajmy się
                </button>
              </Link>
              <Link to="/kalendarz">
                <button className="text-xs md:text-2xl floating-button bg-transparent text-white py-2 px-3 md:py-3 md:px-8 border-2 border-white rounded-full shadow-lg uppercase transition-all duration-300 hover:bg-white hover:text-gray-900">
                  Umów się na wizytę
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Space below the banner */}
      <div className="mt-12"></div>
      {/* Add margin for space */}

      {/* Sekcja usług */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#333333]">Usługi</h2>

          {/* Zdjęcia */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
            <div className="md:w-1/2">
              <img
                src="https://wppg.pl/filez/01_ginekologia.jpg"
                alt="Medical Image 1"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold mb-4">GINEKOLOGIA</h2>
              <p className="mb-4">ZABIEGI GINEKOLOGICZNE W KLINICE </p>
              <p className="mb-4">
                Ddziedzina medycyny zajmująca się profilaktyką i leczeniem
                chorób żeńskiego układu płciowego. Najczęstsze problemy, jakimi
                zajmują się ginekolodzy, to: zaburzenia miesiączkowania, stany
                zapalne pochwy, antykonce.
              </p>
              <a href="https://www.lipsum.com" target="_blank">
                <button className="bg-teal-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition duration-300">
                  Sprawdź nasze usługi
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lustrzana sekcja */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold mb-4">ENDOSKOPIA</h2>
              <p className="mb-4">ZABIEGI PIELĘGNACYJNE W KLINICE </p>
              <p className="mb-4">
                "Endoskopia to nowoczesna technika diagnostyczna i
                terapeutyczna, która pozwala na szczegółowe oglądanie wnętrza
                ciała pacjenta za pomocą specjalnej kamery umieszczonej na końcu
                giętkiego przewodu. Zabiegi endoskopowe umożliwiają precyzyjne
                diagnozowanie i leczenie wielu schorzeń przewodu pokarmowego,
                układu oddechowego czy układu moczowego bez konieczności
                przeprowadzania otwartych operacji. Dzięki temu pacjenci mogą
                liczyć na krótszy czas rekonwalescencji i minimalizację ryzyka
                powikłań. W naszej klinice oferujemy kompleksową opiekę w
                zakresie diagnostyki i leczenia metodami endoskopowymi."
              </p>
              <p>
                Znieczulenie do endoskopii jest to krótkotrwałe znieczulenie dożylne,
                bez stosowania środków zwiotczających mięśnie, prowadzone na własnym
                oddechu pacjenta z zabezpieczeniem drożności dróg oddechowych i z podażą
                tlenu do oddychania. Wymaga ciągłego monitorowania wysycenia krwi tlenem
                i ciśnienia tętniczego, w związku ze znacznym jego obniżeniem po zastosowanych
                lekach. Inne parametry monitorujemy przy obecności wskazań wynikających z wywiadu
                chorobowego, badania fizykalnego lub stanu pacjenta.

              </p>
              <p>

                Wybudzenie najczęściej następuje w kilka minut po zakończeniu badania i przebiega
                komfortowo dla pacjenta. Najczęściej jest zdziwiony, że badanie już się odbyło, ale czasem
                wspomina piękne sny, jakie miał w trakcie znieczulenia. Pełna pamięć zdarzeń i świadomość wraca
                do pół godziny po znieczuleniu. Mimo to niepolecane jest w tym dniu prowadzenie samochodu,
                obsługa niebezpiecznych maszyn czy podejmowanie decyzji mających konsekwencje prawne. Można
                natomiast po badaniu napić się czystych płynów i w dwie godziny później zjeść pierwszy
                posiłek. Pacjent już po godzinie może w towarzystwie drugiej osoby udać się do domu.
              </p>
              <a href="https://www.lipsum.com" target="_blank">
                <button
                    className="bg-teal-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition duration-300">
                  Sprawdź nasze usługi
                </button>
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                  src="https://fizjoterapeuty.pl/wp-content/uploads/2020/05/endoskopia.jpg"
                  alt="Medical Image 1"
                  className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center">
            <div className="md:w-1/2">
              <img
                  src="https://medinklinika.com/wp-content/uploads/2022/03/stomatologia-zachowawcza-2-1024x683.jpg"
                  alt="Stomatologia"
                  className="w-full rounded-lg shadow-lg mb-6"
              />
            </div>
            <div className="md:w-2/3 text-center">
              <h2 className="text-3xl font-bold mb-4">STOMATOLOGIA </h2>
              <p className="mb-4">ZABIEGI STOMATOLOGICZNE W KLINICE </p>
              <p className="mb-4">
                "Stomatologia to dziedzina medycyny zajmująca się profilaktyką,
                diagnostyką i leczeniem chorób zębów, dziąseł oraz jamy ustnej.
                W naszej klinice oferujemy kompleksowe usługi stomatologiczne,
                które obejmują zarówno standardowe zabiegi, jak leczenie
                próchnicy czy usuwanie kamienia nazębnego, jak i zaawansowane
                procedury protetyczne, ortodontyczne oraz implantologiczne.
                Dbamy o komfort pacjentów, stosując nowoczesne metody leczenia i
                znieczulenia. Nasi specjaliści pomagają w przywróceniu zdrowego
                uśmiechu, poprawiając estetykę oraz funkcjonalność uzębienia."
              </p>
              <a href="https://www.lipsum.com" target="_blank">
                <button className="bg-teal-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition duration-300">
                  Sprawdź nasze usługi
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja kontaktowa */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto text-center">
          <Link to="/kontakt">
            <button className="mt-6 bg-teal-600 text-white py-3 px-24 w-full max-w-[600px] rounded-full shadow-md hover:bg-teal-700 transition duration-300">
              Skontaktuj się ze mną
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
