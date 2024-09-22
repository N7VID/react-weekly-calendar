import ChevronLeftIcon from "../../assets/svg/ChevronLeftIcon";
import ChevronRightIcon from "../../assets/svg/ChevronRightIcon";

interface Iprops {
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
}

export default function Pagination({ goToPreviousWeek, goToNextWeek }: Iprops) {
  return (
    <div className="border-t-2 border-black pb-4 pt-3 px-4 text-center flex justify-between items-center">
      <div
        className="flex justify-center items-center gap-2 cursor-pointer"
        onClick={goToPreviousWeek}
      >
        <ChevronLeftIcon />
        هفته قبلی
      </div>
      <div
        className="flex justify-center items-center gap-2 cursor-pointer"
        onClick={goToNextWeek}
      >
        هفته بعدی
        <ChevronRightIcon />
      </div>
    </div>
  );
}
