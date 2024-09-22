import { useState } from "react";
import Pagination from "../Pagination/Pagination";

export default function Calendar() {
  const jalaliDays: string[] = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  const gregorianDays: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [language, setLanguage] = useState<"jalali" | "gregorian">("jalali");
  const days = language === "jalali" ? jalaliDays : gregorianDays;

  return (
    <div className="flex flex-col justify-center border-2 border-black rounded-lg p-4">
      <div className="border-b-2 border-black pb-4 px-4 flex justify-between items-center">
        <span className="text-lg">
          {language === "jalali" ? "1403" : "2024"}
        </span>
        <h4 className="text-xl">
          {" "}
          {language === "jalali" ? "تقویم جلالی" : "Gregorian Calendar"}
        </h4>
        <span className="text-lg">
          {language === "jalali" ? "شهریور" : "September"}
        </span>
        <button
          onClick={() =>
            setLanguage(language === "jalali" ? "gregorian" : "jalali")
          }
          className="ml-4 bg-blue-500 text-white px-2 text-sm py-1 rounded"
        >
          {language === "jalali" ? "Switch to Gregorian" : "تغییر به جلالی"}
        </button>
      </div>

      <div className="grid grid-cols-12 gap-y-4 gap-x-6 py-4">
        {days.map((day, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col border-2 border-black rounded-md w-20 h-20 col-span-6 md:col-span-3"
          >
            <div>{day}</div>
            <div>تاریخ</div>{" "}
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}
