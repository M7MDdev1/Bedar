import { useState } from "react";
import Img1 from "../assets/CarouselCards/Img1.jpeg";
import Img2 from "../assets/CarouselCards/Img2.jpg";
import Img3 from "../assets/CarouselCards/Img3.jpg";
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const Images = [Img1, Img2, Img3];

export default function Carousel() {
  const [index, setIndex] = useState<number>(0);

  const handleNextButton = () => {
    setIndex((prevIndex) =>
      prevIndex === Images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBackButton = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? Images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className={"overflow-hidden h-64"}>
        {Images.map((Img, i) => {
          return (
            <div key={i}>
              <img
                src={Img}
                className={"h-64 transition-all duration-300"}
                style={{ transform: `translateY(${`-${index * 100}%`})` }}
                alt="carousel image"
              />
            </div>
          );
        })}
      </div>

      <div className={"absolute top-[20%]"}>
        <FaCircleChevronUp onClick={handleBackButton} className={"text-white shadow-md"}/>
        {Images.map((_, i) => {
          return (
            <GoDotFill
              key={i}
              className={`${i === index ? "text-stone-900" : "text-zinc-300"}`}
              onClick={() => setIndex(i)}
            />
          );
        })}
        <FaCircleChevronDown onClick={handleNextButton} className={"text-white shadow-md"}/>
      </div>
    </div>
  );
}
