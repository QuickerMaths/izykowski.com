import ContactForm from "@/components/ContactForm";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import ikon z biblioteki react-icons

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
                        href="https://www.facebook.com/"
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
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram
                            style={{
                                fontSize: "1.875rem",
                                color: "#38b2ac",
                                transition: "all 0.3s",
                            }}
                        />
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
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
            <ContactForm />
        </div>
    );
};

export default Contact;
