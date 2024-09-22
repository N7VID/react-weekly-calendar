interface Iprops {
  onClick: () => void;
  language: "jalali" | "gregorian";
}

export default function Switch({ onClick, language }: Iprops) {
  return (
    <div className="flex justify-end items-center -mb-14">
      <div className="w-20">
        <div
          className={`relative max-w-[45px] min-h-[25px] mx-auto rounded-3xl flex items-center cursor-pointer transition-colors duration-300
        ${
          language === "jalali"
            ? "bg-blue-500 hover:bg-blue-400"
            : "bg-gray-600 hover:bg-gray-500"
        }`}
          onClick={onClick}
        >
          <div
            className={`bg-white w-5 h-5 absolute top-[2.5px] right-[2.5px] rounded-full transition-transform duration-300
          ${language === "jalali" ? "-translate-x-[21.5px]" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
