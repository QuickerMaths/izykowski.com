import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [showService, setShowService] = useState(false);
  const [showEndoscopy, setShowEndoscopy] = useState(false);
  const [showDentistry, setShowDentistry] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      const serviceSection = document.getElementById("service-section");
      const endoscopySection = document.getElementById("endoscopy-section");
      const dentistrySection = document.getElementById("dentistry-section");

      if (serviceSection && scrollPosition > serviceSection.offsetTop + 100) {
        setShowService(true);
      }
      if (endoscopySection && scrollPosition > endoscopySection.offsetTop + 100) {
        setShowEndoscopy(true);
      }
      if (dentistrySection && scrollPosition > dentistrySection.offsetTop + 100) {
        setShowDentistry(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="bg-[#E8E8E8] min-h-screen">
        {/* Header Section */}
        <header className="relative min-h-[700px]">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="https://klinikaambroziak.pl/video/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto z-10 h-full flex flex-col justify-center items-center text-center text-white">
            <div className="flex flex-col items-center justify-center space-y-6 absolute top-1/2 transform -translate-y-1/2">
              <h1 className="text-xl md:text-5xl px-5 font-bold mb-4 md:mb-0">
                Indywidualna Specjalistyczna Praktyka Lekarska <br /> LEK. MED. Jan Iżykowski
              </h1>
              <div className="flex space-x-4">
                <Link to="/o-mnie">
                  <button className="text-xs md:text-2xl bg-transparent text-white py-2 px-3 md:py-3 md:px-8 border-2 border-white rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-gray-900">
                    Poznajmy się
                  </button>
                </Link>
                <Link to="/kontakt">
                  <button className="text-xs md:text-2xl bg-transparent text-white py-2 px-3 md:py-3 md:px-8 border-2 border-white rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-gray-900">
                    Skontaktuj się ze mną
                  </button>
                </Link>
                <Link to="/aktualności">
                  <button className="text-xs md:text-2xl bg-transparent text-white py-2 px-3 md:py-3 md:px-8 border-2 border-white rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-gray-900">
                    Co nowego?
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Space below the banner */}
        <div className="mt-12"></div>

        {/* Usługi Section */}
        <section id="service-section" className="py-16 bg-[#F5F5F5]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#333333]">Usługi</h2>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
              <div
                  className={`md:w-1/2 transform transition-transform duration-700 ease-in-out ${
                      showService ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                  }`}
              >
                <img
                    src="https://wppg.pl/filez/01_ginekologia.jpg"
                    alt="Medical Image 1"
                    className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div
                  className={`md:w-1/2 text-left transform transition-transform duration-700 ease-in-out ${
                      showService ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                  }`}
              >
                <h2 className="text-3xl font-bold mb-4">GINEKOLOGIA</h2>
                <p className="mb-4">ZNIECZULENIA GINEKOLOGICZNE W KLINICE</p>
                <p className="mb-4">
                  Dziedzina medycyny zajmująca się profilaktyką i leczeniem chorób
                  żeńskiego układu płciowego. Najczęstsze problemy, jakimi zajmują
                  się ginekolodzy, to: zaburzenia miesiączkowania, stany zapalne
                  pochwy, antykoncepcja.
                </p>
                <a href="https://www.lipsum.com" target="_blank">
                  <button
                      className="bg-teal-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition duration-300">
                    Sprawdź nasze usługi
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Endoscopy Section */}
        <section id="endoscopy-section" className="py-16 bg-[#F5F5F5]">
          <div className="container mx-auto text-center">
            <div
                className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
              <div
                  className={`md:w-1/2 text-left transform transition-transform duration-700 ease-in-out ${
                      showEndoscopy ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                  }`}
              >
                <h2 className="text-3xl font-bold mb-4">ENDOSKOPIA</h2>
                <p className="mb-4">ZNIECZULENIA PIELĘGNACYJNE W KLINICE</p>
                <p className="mb-6 leading-relaxed">
                  Endoskopia to nowoczesna technika diagnostyczna i terapeutyczna, która
                  pozwala na szczegółowe oglądanie wnętrza ciała pacjenta za pomocą specjalnej
                  kamery umieszczonej na końcu giętkiego przewodu. Zabiegi endoskopowe
                  umożliwiają precyzyjne diagnozowanie i leczenie wielu schorzeń przewodu
                  pokarmowego, układu oddechowego czy układu moczowego bez konieczności
                  przeprowadzania otwartych operacji. Dzięki temu pacjenci mogą liczyć na
                  krótszy czas rekonwalescencji i minimalizację ryzyka powikłań. W naszej
                  klinice oferujemy kompleksową opiekę w zakresie diagnostyki i leczenia
                  metodami endoskopowymi.
                </p>
                <p className="mb-6 leading-relaxed">
                  Znieczulenie do endoskopii jest to krótkotrwałe znieczulenie dożylne, bez
                  stosowania środków zwiotczających mięśnie, prowadzone na własnym oddechu
                  pacjenta z zabezpieczeniem drożności dróg oddechowych i z podażą tlenu do
                  oddychania.
                </p>
                <a href="https://www.lipsum.com" target="_blank">
                  <button
                      className="bg-teal-600 text-white py-3 px-8 mt-4 rounded-full shadow-md hover:bg-teal-700 transition duration-300">
                    Sprawdź nasze usługi
                  </button>
                </a>
              </div>
              <div
                  className={`md:w-1/2 transform transition-transform duration-700 ease-in-out ${
                      showEndoscopy ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                  }`}
              >
                <img
                    src="https://fizjoterapeuty.pl/wp-content/uploads/2020/05/endoskopia.jpg"
                    alt="Endoskopia"
                    className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stomatologia Section */}
        <section id="dentistry-section" className="py-16 bg-[#F5F5F5]">
          <div className="container mx-auto text-center">
            <div
                className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
              <div
                  className={`md:w-1/2 transform transition-transform duration-700 ease-in-out ${
                      showDentistry ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                  }`}
              >
                <img
                    src="https://medinklinika.com/wp-content/uploads/2022/03/stomatologia-zachowawcza-2-1024x683.jpg"
                    alt="Stomatologia"
                    className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div
                  className={`md:w-1/2 text-left transform transition-transform duration-700 ease-in-out ${
                      showDentistry ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                  }`}
              >
                <h2 className="text-3xl font-bold mb-4">STOMATOLOGIA</h2>
                <p className="mb-4">ZNIECZULENIA STOMATOLOGICZNE W KLINICE</p>
                <p className="mb-4">
                  Stomatologia to dziedzina medycyny zajmująca się profilaktyką, diagnostyką
                  i leczeniem chorób zębów, dziąseł oraz jamy ustnej. W naszej klinice
                  oferujemy kompleksowe usługi stomatologiczne, które obejmują zarówno
                  standardowe zabiegi, jak leczenie próchnicy czy usuwanie kamienia
                  nazębnego, jak i zaawansowane procedury protetyczne, ortodontyczne oraz
                  implantologiczne. Dbamy o komfort pacjentów, stosując nowoczesne metody
                  leczenia i znieczulenia. Nasi specjaliści pomagają w przywróceniu zdrowego
                  uśmiechu, poprawiając estetykę oraz funkcjonalność uzębienia.
                </p>
                <p>
                  Znieczulenie do zabiegów stomatologicznych jest najczęściej znieczuleniem
                  ogólnym. Dokładnie przeprowadzony wywiad, analiza ankiety oraz ewentualne
                  badanie kliniczne decydują o możliwości wykonania znieczulenia ogólnego w
                  trybie ambulatoryjnym.
                </p>
                <a href="https://www.lipsum.com" target="_blank">
                  <button
                      className="bg-teal-600 text-white py-3 px-8 mt-4 rounded-full shadow-md hover:bg-teal-700 transition duration-300">
                    Sprawdź nasze usługi
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container mx-auto text-center">
            <Link to="/kontakt">
              <button
                  className="mt-6 bg-teal-600 text-white py-3 px-24 w-full max-w-[600px] rounded-full shadow-md hover:bg-teal-700 transition duration-300">
                Skontaktuj się ze mną
              </button>
            </Link>
          </div>
        </section>
        <div></div>
      </div>

  );
};

export default Home;
