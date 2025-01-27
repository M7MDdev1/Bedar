import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

interface ICarouselControls {
  handleNextButton: () => void;
  handleBackButton: () => void;
  Image: string[];
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}
export default function CarouselControls({
  handleBackButton,
  handleNextButton,
  Image,
  setIndex,
  index,
}: ICarouselControls) {
  return (
    <div className="absolute z-50 top-[20%] left-[2%] sm:top-auto sm:bottom-0 sm:left-0 sm:right-0 flex flex-col items-center">
      <FaCircleChevronUp
        onClick={handleBackButton}
        className={"text-white shadow-md text-2xl sm:hidden"}
      />
      <div className="my-1 flex">
        {Image.map((_, i) => {
          return (
            <GoDotFill
              key={i}
              className={`${i === index ? "text-stone-900" : "text-zinc-300"}`}
              onClick={() => setIndex(i)}
            />
          );
        })}
      </div>
      <FaCircleChevronDown
        onClick={handleNextButton}
        className={"text-white shadow-md text-2xl sm:hidden"}
      />
    </div>
  );
}
