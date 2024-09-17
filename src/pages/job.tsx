import { useState } from "react";

const JobPage = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const toggleImage = (image: string) => {
    setActiveImage(activeImage === image ? null : image);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Nasze Specjalizacje
      </h2>

      <div className="flex flex-wrap -mx-4">
        {/* Chirurgia Plastyczna */}
        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-4 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Chirurgia Plastyczna
          </h3>
          <img
            src="https://www.kliniki.pl/photos/162/chirurgia-plastyczna_161136_600x360fc.jpg"
            alt="Chirurgia Plastyczna"
            className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg shadow-lg"
            onClick={() => toggleImage("chirurgia")}
          />
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeImage === "chirurgia"
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              Chirurgia plastyczna zajmuje się rekonstrukcją, korektą lub zmianą
              ciała człowieka w celach medycznych lub estetycznych. To
              dziedzina, która ma na celu poprawę jakości życia pacjentów
              poprzez operacje plastyczne i rekonstrukcyjne.
            </p>
          </div>
        </div>

        {/* Endoskopia */}
        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-4 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Endoskopia</h3>
          <img
            src="https://fizjoterapeuty.pl/wp-content/uploads/2020/05/endoskopia.jpg"
            alt="Endoskopia"
            className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg shadow-lg"
            onClick={() => toggleImage("endoskopia")}
          />
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeImage === "endoskopia"
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              Endoskopia to procedura diagnostyczna, która pozwala lekarzom na
              bezpośrednie obejrzenie wnętrza ciała pacjenta przy użyciu
              elastycznej rurki z kamerą i źródłem światła na końcu. Endoskopia
              stosowana jest w wielu specjalizacjach, od gastroenterologii po
              ortopedię.
            </p>
          </div>
        </div>

        {/* Stomatologia */}
        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-4 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Stomatologia
          </h3>
          <img
            src="https://medinklinika.com/wp-content/uploads/2022/03/stomatologia-zachowawcza-2-1024x683.jpg"
            alt="Stomatologia"
            className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg shadow-lg"
            onClick={() => toggleImage("stomatologia")}
          />
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeImage === "stomatologia"
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              Stomatologia obejmuje diagnozowanie, leczenie i zapobieganie
              chorobom jamy ustnej, zębów i dziąseł. Specjaliści stomatologii
              oferują szeroki wachlarz usług od profilaktyki, przez leczenie
              próchnicy, aż po zaawansowane zabiegi protetyczne.
            </p>
          </div>
        </div>

        {/* Znieczulenie u dzieci */}
        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-4 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Znieczulenie u dzieci
          </h3>
          <img
            src="https://polki.pl/foto/16_9_LARGE/jakie-znieczulenie-stosuje-sie-u-dzieci-1623848.jpg"
            alt="Znieczulenie u dzieci"
            className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg shadow-lg"
            onClick={() => toggleImage("znieczulenie-dzieci")}
          />
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeImage === "znieczulenie-dzieci"
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              Znieczulenie u dzieci stosuje się w celu zminimalizowania bólu i
              stresu związanego z zabiegami medycznymi. Rodzaj znieczulenia
              zależy od zabiegu i wieku pacjenta.
            </p>
          </div>
        </div>

        {/* Znieczulenie u dorosłych */}
        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-4 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Znieczulenie u dorosłych
          </h3>
          <img
            src="https://dpmed.pl/wp-content/uploads/2020/07/AdobeStock_132867660-1.jpeg"
            alt="Znieczulenie u dorosłych"
            className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg shadow-lg"
            onClick={() => toggleImage("znieczulenie-dorosli")}
          />
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeImage === "znieczulenie-dorosli"
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              Znieczulenie u dorosłych stosuje się podczas zabiegów
              chirurgicznych w celu eliminacji bólu. Rodzaj znieczulenia
              dobierany jest na podstawie rodzaju operacji i stanu zdrowia
              pacjenta.
            </p>
          </div>
        </div>

        {/* Ortopedia */}
        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-4 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Ortopedia</h3>
          <img
            src="https://mexico.unir.net/wp-content/uploads/sites/6/2014/10/experto-ortopedia-farmaceuticos.jpg"
            alt="Ortopedia"
            className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg shadow-lg"
            onClick={() => toggleImage("ortopedia")}
          />
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeImage === "ortopedia"
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              Ortopedia zajmuje się diagnozowaniem i leczeniem chorób układu
              ruchu, w tym kości, stawów, mięśni i więzadeł. To dziedzina
              wymagająca precyzyjnych zabiegów chirurgicznych.
            </p>
          </div>
        </div>

        {/* Nowe obrazy */}
        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-4 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            zabieg ambulatoryjny
          </h3>
          <img
            src="https://clinica.pl/wp-content/uploads/2023/11/wstrzykniecie-osocza-bogatoplytkowego-w-staw-lokciowy-pod-kontrola-usg.jpg"
            alt="Wstrzyknięcie osocza bogatopłytkowego"
            className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg shadow-lg"
            onClick={() => toggleImage("zabieg-ambulatoryjny")}
          />
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeImage === "zabieg-ambulatoryjny"
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              Zabieg ambulatoryjny polegający na wstrzyknięciu osocza
              bogatopłytkowego w staw łokciowy, wykonywany pod kontrolą USG.
            </p>
          </div>
        </div>

        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-4 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Znieczulenie w trakcie ciąży
          </h3>
          <img
            src="https://www.allecoudent.pl/images//jak-radzic-sobie-z-problemami-dentystycznymi-w-czasie-ciazy.jpeg"
            alt="Problemy dentystyczne w ciąży"
            className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg shadow-lg"
            onClick={() => toggleImage("znieczulenie-ciaza")}
          />
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeImage === "znieczulenie-ciaza"
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              W trakcie ciąży szczególną uwagę poświęca się znieczuleniom, aby
              minimalizować ryzyko dla matki i dziecka.
            </p>
          </div>
        </div>

        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-4 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Powikłania po zabiegu
          </h3>
          <img
            src="https://klinikaustron.pl/wp-content/uploads/2022/03/Powiklania-po-zabiegu-liposukcji-1.jpg"
            alt="Powikłania po zabiegu liposukcji"
            className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg shadow-lg"
            onClick={() => toggleImage("powiklania-liposukcja")}
          />
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeImage === "powiklania-liposukcja"
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              "Każdy zabieg medyczny niesie ze sobą ryzyko powikłań, które mogą
              wystąpić zarówno krótko po operacji, jak i w dłuższym okresie.
              Powikłania mogą obejmować infekcje, reakcje alergiczne, zaburzenia
              gojenia ran, a także bardziej złożone problemy, takie jak
              zakrzepica czy uszkodzenie narządów wewnętrznych. Wczesna
              diagnostyka i odpowiednia opieka medyczna po zabiegu znacząco
              minimalizują ryzyko tych powikłań."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
