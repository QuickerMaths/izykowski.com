import React, { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedSecond, setIsExpandedSecond] = useState(false);
  const [isExpandedThird, setIsExpandedThird] = useState(false); // New state for the third section

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleReadMoreSecond = () => {
    setIsExpandedSecond(!isExpandedSecond);
  };

  const toggleReadMoreThird = () => {
    setIsExpandedThird(!isExpandedThird); // Toggle function for the third section
  };

  const shortText = `lek. med. Jan Włodzimierz Iżykowski ur.  16 stycznia 1960 r. w Koźlu
   (od 1975 r. Kędzierzyn-Koźle) w rodzinie pielęgniarki i podoficera sanitarnego repatriowanego z Wołynia. Od 1962 r.
    mieszkający i związany z Opolem.`;

  const fullText = `${shortText} W tym czasie zamiłowany bibliofil nękający siedem okolicznych bibliotek i posiadacz od 1970 jednego z większych zbiorów literatury fantastyczno-naukowej ocenianego 10 lat później na ok. 700 pozycji.`;

  const loremIpsumShort = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const loremIpsumFull = `${loremIpsumShort} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      {/* Main About Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          O Mnie
        </h1>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
          {/* Text Block */}
          <div className="flex-1">
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpanded ? "max-h-full opacity-100" : "max-h-full opacity-100"
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
              {isExpanded ? "Zwiń" : "Czytaj więcej"}
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
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Lorem Ipsum
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
          {/* Text Block */}
          <div className="flex-1">
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedSecond
                  ? "max-h-full opacity-100"
                  : "max-h-full opacity-100"
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
              {isExpandedSecond ? "Zwiń" : "Czytaj więcej"}
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

      {/* Third Block with Lorem Ipsum */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Lorem Ipsum
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
          {/* Text Block */}
          <div className="flex-1">
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpandedThird
                  ? "max-h-full opacity-100"
                  : "max-h-full opacity-100"
              }`}
            >
              <p className="text-lg leading-relaxed">
                {isExpandedThird ? loremIpsumFull : loremIpsumShort}
              </p>
            </div>
            <button
              onClick={toggleReadMoreThird}
              className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-md shadow-md hover:bg-teal-600 transition-colors"
            >
              {isExpandedThird ? "Zwiń" : "Czytaj więcej"}
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
