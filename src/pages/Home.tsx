import React from 'react';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="bg-[#E8E8E8] min-h-screen">
      {/* Sekcja nagłówka */}
      <header className="bg-[#333333] text-white py-16 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Witamy na stronie Doktora [Nazwisko]</h1>
          <p className="text-xl mt-4">Zadbaj o swoje zdrowie z najlepszym specjalistą.</p>
        </div>
      </header>

      {/* Sekcja o lekarzu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#333333]">O lekarzu</h2>
          <p className="text-lg mt-6 text-[#555555] max-w-2xl mx-auto">
            Dr. [Nazwisko] jest doświadczonym specjalistą z [liczba] lat
            doświadczenia w leczeniu [specjalizacja]. Zapewnia indywidualne podejście do każdego pacjenta.
          </p>
          <Link to="/o-mnie">
            <button className="mt-6 bg-teal-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition duration-300">
              Dowiedz się więcej o lekarzu
            </button>
          </Link>
        </div>
      </section>

      {/* Sekcja usług */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#333333]">Usługi</h2>
          <ul className="mt-8 space-y-4 text-[#555555] text-lg">
            <li>Konsultacje</li>
            <li>Badania diagnostyczne</li>
            <li>Profilaktyka</li>
            <li>Specjalistyczne leczenie</li>
          </ul>
        </div>
      </section>

      {/* Sekcja rezerwacji wizyty */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#333333]">Zarezerwuj wizytę</h2>
          <p className="mt-6 text-lg text-[#555555]">Skontaktuj się z nami, aby umówić się na wizytę.</p>
          <Link to="/kalendarz">
            <button className="mt-6 bg-teal-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition duration-300">
              Zarezerwuj wizytę
            </button>
          </Link>
        </div>
      </section>

      {/* Sekcja kontaktowa */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#333333]">Kontakt</h2>
          <p className="mt-6 text-lg text-[#555555]">
            Adres: [Adres kliniki] <br />
            Telefon: [Numer telefonu] <br />
            Email: [Adres email]
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
