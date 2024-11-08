import React from "react";

const Activity = () => {
    const links = [
        {
            name: "Vertigo Clinic",
            url: "http://www.laryngolog.opole.pl/",
            imageSrc: "/images/logo-vertigo.png",
        },
        {
            name: "Medrem Poliklinika",
            url: "http://www.medrem.com.pl/",
            imageSrc: "/images/logo-medrem.png",
        },
        {
            name: "Mediteka",
            url: "http://www.mediteka.opole.pl/",
            imageSrc: "/images/logo-mediteka.png",
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="w-11/12 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Działalności</h1>
                <h1 className="text-3xl text-center mb-8">
                   Firmy z którymi współpracuje
                </h1>
                <div className="space-y-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center md:flex-row md:justify-between bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div
                                className={`w-40 h-auto mb-4 md:mb-0 md:w-52 flex items-center justify-center ${
                                    link.name === "Medrem Poliklinika" ? "" : ""
                                }`}
                            >
                                <img
                                    src={link.imageSrc}
                                    alt={`${link.name} logo`}
                                    className={`${
                                        link.name === "Medrem Poliklinika" ? "filter invert contrast-200" : ""
                                    }`}
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-xl font-semibold text-teal-600 mb-2">
                                    {link.name}
                                </h2>
                                <p className="text-sm text-gray-500">{link.url}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Activity;
