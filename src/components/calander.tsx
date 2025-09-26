import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CalendarProps = {
  initialDate?: Date;
  events?: { date: Date; color: string }[];
};

export default function Calendar({
  initialDate = new Date(),
  events = [],
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getMonthData = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);

    const lastDay = new Date(year, month + 1, 0);

    let firstDayOfWeek = firstDay.getDay() - 1;
    if (firstDayOfWeek === -1) firstDayOfWeek = 6;

    const daysFromPrevMonth = firstDayOfWeek;

    const totalDays = 30;

    const days = [];

    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();

    for (
      let i = prevMonthDays - daysFromPrevMonth + 1;
      i <= prevMonthDays;
      i++
    ) {
      days.push({
        date: new Date(year, month - 1, i),
        isCurrentMonth: false,
        day: i,
      });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
        day: i,
      });
    }

    const remainingDays = totalDays - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        day: i,
      });
    }

    return days;
  };

  const days = getMonthData(currentDate);

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl p-5 shadow-sm h-[calc(100vh-594px)] overflow-hidden">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={handlePrevMonth}
            className="p-2 rounded-full hover:bg-gray-200 border border-gray-800"
            aria-label="Previous month"
          >
            <ChevronLeft className="size-3 text-gray-800" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 rounded-full hover:bg-gray-200 border border-gray-800"
            aria-label="Next month"
          >
            <ChevronRight className="size-3 text-gray-800" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 w-full">
        {dayNames.map((day) => (
          <div key={day} className="text-center py-2 text-gray-600 font-medium">
            {day}
          </div>
        ))}

        {days.map((day, index) => {
          const dateEvents = getEventsForDate(day.date);

          return (
            <div className="bg-red">
              <div
                key={index}
                className={`
                h-10 flex flex-col items-center justify-center rounded-xl
                border border-gray-100 bg-white cursor-pointer
                ${day.isCurrentMonth ? "text-gray-700" : "text-gray-400"}
                ${isToday(day.date) ? "border-2 border-blue-500" : ""}
              `}
              >
                <span className="text-lg">
                  {String(day.day).padStart(2, "0")}
                </span>
                {dateEvents.length > 0 && (
                  <div className="flex space-x-1 mt-1">
                    {dateEvents.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`h-1.5 w-1.5 rounded-full bg-${event.color}-500`}
                        style={{ backgroundColor: event.color }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
