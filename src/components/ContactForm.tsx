// ContactForm.tsx
import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-gray-50 shadow-lg rounded-lg p-8 max-w-md mx-auto text-center border border-gray-200">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
                Skontaktuj się ze mną
            </h2>
            <p className="text-gray-600 mb-6">
                Zadaj pytanie dotyczące naszych usług. Jesteśmy do Twojej dyspozycji!
            </p>
            <form className="space-y-6">
                <div>
                    <input
                        type="text"
                        placeholder="Imię"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Adres e-mail"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
                <div>
          <textarea
              placeholder="Twoja wiadomość..."
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows={5}
          ></textarea>
                </div>
                <div className="flex items-center space-x-2 justify-center">
                    <input type="checkbox" className="h-4 w-4 text-teal-600 border-gray-300 rounded" />
                    <label className="text-sm text-gray-600">
                        Zgadzam się na przetwarzanie moich danych osobowych
                    </label>
                </div>
                <button
                    type="button"
                    className="w-full bg-teal-600 text-white py-3 rounded font-semibold hover:bg-teal-700 transition duration-300"
                >
                    Wyślij wiadomość
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
