import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
const CaptionLanguage = (item) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(item.list.caption_languages);
  return (
    <div className="ml-10 w-[300px]">
      <div
        className="flex items-center border-2 p-3  cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="font-semibold mr-8">Available Caption Languages </h1>
        <IoIosArrowDown />
      </div>
      {isOpen && (
        <div className="border-2  justify-center items-center">
          {item?.list?.caption_languages?.map((lang) => (
            <p className="p-1 ml-2" key={lang}>
              {lang}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaptionLanguage;
