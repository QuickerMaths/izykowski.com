import React, { useState } from "react";

interface Event {
  date: Date;
  time: string;
  description: string;
  phoneNumber: string;
  email: string;
}

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<number>(
      new Date().getMonth(),
  );
  const [currentYear, setCurrentYear] = useState<number>(
      new Date().getFullYear(),
  );
  const [events] = useState<Event[]>([]); // Events are no longer modifiable
  const daysOfWeek = ["N", "Pn", "Wt", "Śr", "Czw", "Pt", "Sb"];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDayClick = (day: number) => {
    const selected = new Date(currentYear, currentMonth, day);
    setSelectedDate(selected);
  };

  return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Kalendarz</h1>

        <div className="flex justify-between items-center mb-4">
          <button
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg shadow-md transition-all"
              onClick={handlePrevMonth}
          >
            Poprzedni
          </button>
          <span className="text-xl font-semibold">
          {`${new Date(currentYear, currentMonth).toLocaleString("pl-PL", {
            month: "long",
          })} ${currentYear}`}
        </span>
          <button
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg shadow-md transition-all"
              onClick={handleNextMonth}
          >
            Następny
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4 text-center font-semibold mb-4">
          {daysOfWeek.map((day) => (
              <div key={day} className="text-gray-600 uppercase text-sm">
                {day}
              </div>
          ))}

          {Array(firstDayOfMonth)
              .fill(null)
              .map((_, index) => (
                  <div key={index}></div>
              ))}

          {Array.from({ length: daysInMonth }, (_, day) => (
              <div
                  key={day + 1}
                  className={`p-4 cursor-pointer border rounded-lg shadow-sm ${
                      selectedDate.getDate() === day + 1 &&
                      selectedDate.getMonth() === currentMonth &&
                      selectedDate.getFullYear() === currentYear
                          ? "bg-teal-500 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                  } transition-all`}
                  onClick={() => handleDayClick(day + 1)}
              >
                {day + 1}
                {events.some(
                    (event) =>
                        event.date.toDateString() ===
                        new Date(currentYear, currentMonth, day + 1).toDateString(),
                ) && (
                    <span className="text-xs text-green-500 block">Wydarzenie</span>
                )}
              </div>
          ))}
        </div>

        {selectedDate && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">
                Wydarzenia na dzień {selectedDate.toLocaleDateString()}
              </h2>

              {events
                  .filter(
                      (event) =>
                          event.date.toDateString() === selectedDate.toDateString(),
                  )
                  .map((event, index) => (
                      <div
                          key={index}
                          className="mb-4 flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
                      >
                        <div>
                          <p className="font-medium">
                            {event.time} - {event.description}
                          </p>
                          <p>📞 {event.phoneNumber}</p>
                          <p>✉️ {event.email}</p>
                        </div>
                      </div>
                  ))}
            </div>
        )}
      </div>
  );
};

export default Calendar;
