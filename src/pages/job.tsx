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

      {/* Chirurgia Plastyczna */}
      <div className="mb-6 w-1/2">
        <img
          src="https://www.kliniki.pl/photos/162/chirurgia-plastyczna_161136_600x360fc.jpg"
          alt="Chirurgia Plastyczna"
          className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg"
          onClick={() => toggleImage("chirurgia")}
        />
        {activeImage === "chirurgia" && (
          <p className="text-lg">
            Chirurgia plastyczna zajmuje się rekonstrukcją, korektą lub zmianą
            ciała człowieka w celach medycznych lub estetycznych. To dziedzina,
            która ma na celu poprawę jakości życia pacjentów poprzez operacje
            plastyczne i rekonstrukcyjne.
          </p>
        )}
      </div>

      {/* Endoskopia */}
      <div className="mb-6 w-1/2">
        <img
          src="https://fizjoterapeuty.pl/wp-content/uploads/2020/05/endoskopia.jpg"
          alt="Endoskopia"
          className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg"
          onClick={() => toggleImage("endoskopia")}
        />
        {activeImage === "endoskopia" && (
          <p className="text-lg">
            Endoskopia to procedura diagnostyczna, która pozwala lekarzom na
            bezpośrednie obejrzenie wnętrza ciała pacjenta przy użyciu
            elastycznej rurki z kamerą i źródłem światła na końcu. Endoskopia
            stosowana jest w wielu specjalizacjach, od gastroenterologii po
            ortopedię.
          </p>
        )}
      </div>

      {/* Stomatologia */}
      <div className="mb-6 w-1/2">
        <img
          src="https://medinklinika.com/wp-content/uploads/2022/03/stomatologia-zachowawcza-2-1024x683.jpg"
          alt="Stomatologia"
          className="cursor-pointer w-full h-56 object-cover mb-4 rounded-lg"
          onClick={() => toggleImage("stomatologia")}
        />
        {activeImage === "stomatologia" && (
          <p className="text-lg">
            Stomatologia obejmuje diagnozowanie, leczenie i zapobieganie
            chorobom jamy ustnej, zębów i dziąseł. Specjaliści stomatologii
            oferują szeroki wachlarz usług od profilaktyki, przez leczenie
            próchnicy, aż po zaawansowane zabiegi protetyczne.
          </p>
        )}
      </div>
    </div>
  );
};

export default JobPage;
