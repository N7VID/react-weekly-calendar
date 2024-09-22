import ChevronLeftIcon from "../../assets/svg/ChevronLeftIcon";
import ChevronRightIcon from "../../assets/svg/ChevronRightIcon";

interface Iprops {
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
  language: "jalali" | "gregorian";
}

export default function Pagination({
  goToPreviousWeek,
  goToNextWeek,
  language,
}: Iprops) {
  return (
    <div className="border-t-2 border-gray-300 pb-4 pt-3 px-4 text-center flex justify-between items-center">
      <div
        className="flex justify-center items-center gap-2 cursor-pointer"
        onClick={goToPreviousWeek}
      >
        <ChevronLeftIcon />
        {language === "jalali" ? "هفته قبلی" : "Previous Week"}
      </div>
      <div
        className="flex justify-center items-center gap-2 cursor-pointer"
        onClick={goToNextWeek}
      >
        {language === "jalali" ? "هفته بعدی" : "Next Week"}

        <ChevronRightIcon />
      </div>
    </div>
  );
}
