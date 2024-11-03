import React from "react";

const Calendar: React.FC = () => {
    return (
        <div className="h-screen p-5 pb-20 bg-white rounded-lg shadow-md block w-full">
            <h1 className="text-3xl font-bold text-center mb-4">Kalendarz</h1>
            <iframe
                src="https://calendar.google.com/calendar/embed?src=bartlomiej.sokalski.job%40gmail.com&ctz=Europe%2FBerlin"
                width="100%"
                height="100%"
                className="md:mx-auto md:max-w-[90%] xl:max-w-[75%]"
            ></iframe>
        </div>
    );
};

export default Calendar;
