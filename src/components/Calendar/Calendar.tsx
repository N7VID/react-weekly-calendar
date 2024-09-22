import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Switch from "../Switch/Switch";

dayjs.extend(jalaliday);

export default function Calendar() {
  const [language, setLanguage] = useState<"jalali" | "gregorian">("jalali");
  const [currentDate, setCurrentDate] = useState(dayjs());

  const getWeekDays = () => {
    const startOfWeek = currentDate.startOf("week");
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
    <div className="flex flex-col justify-center border-2 border-black rounded-lg p-4">
      <div className="border-b-2 border-black pb-4 px-4 flex justify-between items-center">
        <span className="text-lg">
          {language === "jalali"
            ? currentDate.calendar("jalali").locale("fa").year()
            : currentDate.year()}
        </span>
        <h4 className="text-xl">
          {language === "jalali" ? "تقویم جلالی" : "Gregorian Calendar"}
        </h4>
        <span className="text-lg">
          {language === "jalali"
            ? currentDate.calendar("jalali").locale("fa").format("MMMM")
            : currentDate.format("MMMM")}
        </span>
      </div>

      <div className="grid grid-cols-12 gap-y-4 gap-x-6 py-4">
        {days.map((day, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col border-2 border-black rounded-md w-20 h-20 col-span-6 md:col-span-3"
          >
            <div>
              {language === "jalali"
                ? day.calendar("jalali").locale("fa").format("dddd")
                : day.format("dddd")}
            </div>
            <div>
              {language === "jalali"
                ? day.calendar("jalali").locale("fa").format("D")
                : day.format("D")}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
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
