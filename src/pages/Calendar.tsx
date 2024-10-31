import React from "react";

const Calendar: React.FC = () => {
    return (
        <div className="h-screen p-5 pb-20 bg-white rounded-lg shadow-md block w-full">
            <h1 className="text-3xl font-bold text-center mb-4">Kalendarz</h1>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FWarsaw&showPrint=0&src=bWF0ZXVzei5zemFsb3dpY3pAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043&color=%230B8043"
                width="100%"
                height="100%"
                className="md:mx-auto md:max-w-[90%] xl:max-w-[75%]"
            ></iframe>
        </div>
    );
};

export default Calendar;
