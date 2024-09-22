interface Iprops {
  onClick: () => void;
  language: "jalali" | "gregorian";
}

export default function Switch({ onClick, language }: Iprops) {
  return (
    <div className="flex justify-end items-center -mb-14">
      <div className="w-16">
        <div
          className="relative bg-black max-w-[45px] min-h-[25px] mx-auto rounded-3xl flex items-center cursor-pointer"
          onClick={onClick}
        >
          <div
            className={`bg-gray-200 w-5 h-5 absolute top-[2.5px] right-[2.5px] rounded-full transition duration-300 ${
              language === "jalali" ? "-translate-x-[21.5px]" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
