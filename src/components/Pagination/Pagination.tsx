import ChevronLeftIcon from "../../assets/svg/ChevronLeftIcon";
import ChevronRightIcon from "../../assets/svg/ChevronRightIcon";

export default function Pagination() {
  return (
    <div className="border-t-2 border-black pb-4 pt-3 px-4 text-center flex justify-between items-center">
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <ChevronLeftIcon />
        هفته قبلی
      </div>
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        هفته بعدی
        <ChevronRightIcon />
      </div>
    </div>
  );
}
