import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Popup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 ${isOpen ? 'w-80' : 'w-14'} transition-width duration-500`}>
            <div
                className="bg-teal-600 text-white p-4 cursor-pointer rounded-r-lg shadow-lg flex items-center justify-between"
                onClick={togglePopup}
            >
                <span className="text-lg font-semibold">{isOpen ? 'Witam!' : '>'}</span>
                {isOpen && <FaTimes className="ml-2" />}
            </div>
            {isOpen && (
                <div className="bg-white text-gray-900 p-6 shadow-lg rounded-r-lg max-h-[80vh] overflow-y-auto">
                    <p className="text-sm leading-relaxed">
                        Jest to strona przeznaczona głównie dla pacjentów firm medycznych, z
                        którymi współpracuję jako firma anestezjologiczna. Oferuję kompleksowe
                        usługi w oparciu o własny sprzęt, leki i materiały, pracując w zespole
                        anestezjologicznym z pielęgniarką specjalistką w zakresie
                        anestezjologii i intensywnej terapii, wykształconej na początku Jej
                        kariery zawodowej przeze mnie, do której po wieloletniej współracy mam
                        pełne zaufanie i przekonanie co do umiejętności i kompetencji. Jest to
                        modelowe i pionierskie rozwiązanie, w pełni oddające ideę zawartą w
                        publikowanym od 16 grudnia 2016 roku standardzie z anestezjologii i
                        intensywnej terapii.
                    </p>
                    <p className="text-sm leading-relaxed mt-4">
                        Linki do firm z którymi współpracuję znajdują się w zakładce
                        „Działalność”. Również wszyscy potencjalni pacjenci przez
                        znieczuleniem ambulatoryjnym znajdą na tej stronie ciekawe informacje
                        na temat mojej pracy.
                    </p>
                    <p className="text-sm leading-relaxed mt-4">
                        Celem zamieszczonych artykułów jest „oswojenie” z czymś, co
                        najbardziej przeraża – znieczuleniem do zabiegu. Jako nauka tajemna
                        dla większości ludzi, budzi ona często nieuzasadnione lęki i tworzy
                        mity, tym chętniej opowiadane, im bardziej są przerażające.
                    </p>
                    <p>
                        Obecnie  anestezjologia,  nauka  nowoczesna,   ale  z  tradycjami  od
                        1846 r.,   sprawia,  że w sposób bezpieczny i często przyjemny
                        możliwe jest wykonanie czynności medycznych, które bez znieczulenia w
                        ogóle by się nie odbyły.
                    </p>
                    <p>
                        Również przy zabiegach, przy których do tej pory z braku anestezjologa
                        jedynym znieczuleniem była perswazja personelu, istnieje możliwość
                        postępowania chroniącego przed fizycznym bólem i psychicznym stresem,
                        pamiętanym często do końca życia.
                    </p>
                    <p>
                        Oczywiście niektóre zabiegi można wykonać bez znieczulenia lub w tzw.
                        znieczuleniu miejscowym bez udziału anestezjologa. Ale i w tym
                        przypadku ryzyko możliwych ciężkich powikłań wcale nie jest mniejsze
                        niż u osób poddanych znieczuleniu. Dlatego, o ile to możliwe, wybór
                        postępowania zawsze pozostawiam do decyzji pacjenta. Tym, którzy
                        decydują się spotkać ze mną, dziękuję za zaufanie i cieszę się ich
                        radością po wybudzeniu z udanego zabiegu.
                    </p>
                    <p className="text-sm leading-relaxed mt-4">
                        <strong>Jan Iżykowski</strong>
                    </p>
                    <button
                        className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300 w-full"
                        onClick={togglePopup}
                    >
                        Zamknij
                    </button>
                </div>
            )}
        </div>
    );
};

export default Popup;
