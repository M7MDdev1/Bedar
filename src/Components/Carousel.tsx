import { useState } from "react";
import Img1 from "../assets/CarouselCards/Img1.jpeg";
import Img2 from "../assets/CarouselCards/Img2.jpg";
import Img3 from "../assets/CarouselCards/Img3.jpg";
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";

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
      <FaCircleChevronUp onClick={handleBackButton} />

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

      <FaCircleChevronDown onClick={handleNextButton} />

    </div>
  );
}
