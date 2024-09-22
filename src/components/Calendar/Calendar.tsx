import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Switch from "../Switch/Switch";

dayjs.extend(jalaliday);

export default function Calendar() {
  const [language, setLanguage] = useState<"jalali" | "gregorian">("jalali");
  const [currentDate, setCurrentDate] = useState(dayjs());
  const today = dayjs(); // روز کنونی

  const getWeekDays = () => {
    const startOfWeek =
      language === "jalali"
        ? currentDate.startOf("week").subtract(1, "day") // برای جلالی
        : currentDate.startOf("week"); // برای میلادی
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(startOfWeek.add(i, "day"));
    }
    return days;
  };

  const days = getWeekDays();

  const goToNextWeek = () => {
    setCurrentDate(currentDate.add(1, "week"));
  };

  const goToPreviousWeek = () => {
    setCurrentDate(currentDate.subtract(1, "week"));
  };

  return (
    <div className="flex flex-col justify-center shadow-sm shadow-[#333] rounded-lg p-4 bg-white">
      <div className="border-b-2 border-gray-300 pb-4 px-4 flex justify-between items-center gap-8">
        <span className="text-lg text-gray-700">
          {language === "jalali"
            ? currentDate.calendar("jalali").locale("fa").year()
            : currentDate.year()}
        </span>
        <h4 className="text-2xl font-semibold text-gray-800">
          {language === "jalali" ? "تقویم جلالی" : "Gregorian Calendar"}
        </h4>
        <span className="text-lg text-gray-700">
          {language === "jalali"
            ? currentDate.calendar("jalali").locale("fa").format("MMMM")
            : currentDate.format("MMMM")}
        </span>
      </div>

      <div className="grid grid-cols-12 gap-y-2 gap-x-4 py-4">
        {days.map((day, index) => {
          const isToday =
            language === "jalali"
              ? day.calendar("jalali").isSame(today, "day")
              : day.isSame(today, "day");

          return (
            <div
              key={index}
              className={`flex justify-center items-center flex-col border-2 rounded-md px-3 py-3 col-span-6 md:col-span-3 cursor-pointer
              ${isToday ? "border-blue-500 bg-blue-100" : "border-gray-300"}
              hover:bg-blue-50`}
            >
              <div
                className={
                  isToday ? "text-blue-600 font-bold" : "text-gray-700"
                }
              >
                {language === "jalali"
                  ? day.calendar("jalali").locale("fa").format("dddd")
                  : day.format("dddd")}
              </div>
              <div
                className={
                  isToday
                    ? "text-blue-600 font-bold text-xl"
                    : "text-gray-800 text-xl"
                }
              >
                {language === "jalali"
                  ? day.calendar("jalali").locale("fa").format("D")
                  : day.format("D")}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-4">
        <Switch
          onClick={() =>
            setLanguage(language === "jalali" ? "gregorian" : "jalali")
          }
          language={language}
        />
      </div>

      <Pagination
        goToPreviousWeek={goToPreviousWeek}
        goToNextWeek={goToNextWeek}
      />
    </div>
  );
}
