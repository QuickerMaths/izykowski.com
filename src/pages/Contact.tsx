import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import ikon z biblioteki react-icons
import ContactForm from "../components/ContactForm.tsx"; // Import the new ContactForm component
const Contact = () => {
  return (
    <div className="bg-white py-16 px-6 text-center">
      {/* Nagłówek */}
      <h1 className="text-6xl font-bold mb-4">Kontakt</h1>
      <p className="text-2xl mb-8">Jesteśmy do Twojej dyspozycji!</p>

      {/* Dane kontaktowe */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center text-lg mb-4">
          <span className="text-2xl mr-2">Tel</span> +48 501-344-890
        </div>
        <div className="flex items-center text-lg mb-4">
          <span className="text-2xl mr-2">Email</span> izykowsk@gmail.com
        </div>

        {/* Ikony social media */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://www.facebook.com/jan.izykowski"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              style={{
                fontSize: "1.875rem",
                color: "#38b2ac",
                transition: "all 0.3s",
              }}
            />
          </a>
          <a href="https://x.com/JanIzykowski" target="_blank" rel="noopener noreferrer">
            <FaTwitter
              style={{
                fontSize: "1.875rem",
                color: "#38b2ac",
                transition: "all 0.3s",
              }}
            />
          </a>
        </div>
      </div>

      {/* Adres */}
      {/*<div className="flex flex-col md:flex-row justify-center items-center">*/}
      {/*  /!* Obraz *!/*/}
      {/*  <div className="md:w-1/2 mb-8 md:mb-0">*/}
      {/*    <img*/}
      {/*      src="https://alfa-clinic.pl/wp-content/uploads/2023/12/Alfa_Clinic_budynek-1024x683.webp"*/}
      {/*      alt="Alfa Clinic Building"*/}
      {/*      className="rounded-lg shadow-lg"*/}
      {/*    />*/}
      {/*  </div>*/}

      {/*  /!* Informacje *!/*/}
      {/*  <div className="md:w-1/3 text-center md:text-left ml-8">*/}
      {/*    <h2 className="text-2xl font-bold mb-4">Klinika medyczna</h2>*/}
      {/*    <p className="text-lg mb-2">Berlin Charlottenburgerhaus 107</p>*/}
      {/*    <p className="text-lg mb-4">Godziny otwarcia:</p>*/}
      {/*    <p className="text-lg mb-2">pon-pt: 10:00-20:00</p>*/}
      {/*    <p className="text-lg mb-2">sob: 10:00-18:00</p>*/}

      {/*    /!* Guzik "Mapa dojazdu" *!/*/}
      {/*    <a*/}
      {/*      href="https://maps.app.goo.gl/fP2vUfwgHM9vB1xN8"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*      className="mt-4 inline-block bg-transparent text-teal-600 py-2 px-6 border border-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition-all no-underline"*/}
      {/*    >*/}
      {/*      Mapa dojazdu*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}
        <ContactForm />
    </div>
  );
};

export default Contact;
