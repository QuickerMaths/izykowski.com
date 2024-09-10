import React from 'react';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="bg-[#E8E8E8] min-h-screen">
      {/* Sekcja nagłówka */}
      <header className="bg-[#333333] text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Witamy na stronie Doktora [Nazwisko]</h1>
          <p className="text-lg mt-2">Zadbaj o swoje zdrowie z najlepszym specjalistą.</p>
        </div>
      </header>

      {/* Sekcja o lekarzu */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#333333]">O lekarzu</h2>
          <p className="text-lg mt-4 text-[#333333]">
            Dr. [Nazwisko] jest doświadczonym specjalistą z [liczba] lat
            doświadczenia w leczeniu [specjalizacja]. Zapewnia indywidualne podejście do każdego pacjenta.
          </p>
          <Link to="/o-mnie">
          <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700">
            Dowiedz się więcej o lekarzu
          </button>
        </Link>

        </div>
      </section>

      {/* Sekcja usług */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#333333]">Usługi</h2>
          <ul className="mt-6 space-y-4 text-[#333333]">
            <li>Konsultacje</li>
            <li>Badania diagnostyczne</li>
            <li>Profilaktyka</li>
            <li>Specjalistyczne leczenie</li>
          </ul>
        </div>
      </section>

      {/* Sekcja rezerwacji wizyty */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#333333]">Zarezerwuj wizytę</h2>
          <p className="mt-4 text-[#333333]">Skontaktuj się z nami, aby umówić się na wizytę.</p>
          <Link to="/kalendarz">
            <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700">
              zarezerwój wizytę
            </button>
          </Link>
        </div>
      </section>

      {/* Sekcja kontaktowa */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#333333]">Kontakt</h2>
          <p className="mt-4 text-[#333333]">
            Adres: [Adres kliniki] <br />
            Telefon: [Numer telefonu] <br />
            Email: [Adres email]
          </p>
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-[#333333] text-[#B0B0B0] py-6 text-center">
        <div className="container mx-auto">
          <p>© 2024 Doktor [Nazwisko]. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
