import { useEffect, useState } from "react";
import Img1 from "../assets/CarouselCards/Img1.jpeg";
import Img2 from "../assets/CarouselCards/Img2.jpg";
import Img3 from "../assets/CarouselCards/Img3.jpg";
import CarouselCard from "./Carousel-Card";
import CarouselControls from "./Carousel-Controls";

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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextButton();
    }, 1600);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [index]);


  return (
    <div className={"relative"}>
      <CarouselControls
        setIndex={setIndex}
        handleBackButton={handleBackButton}
        handleNextButton={handleNextButton}
        Image={Images}
        index={index}
      />
      <div className={"overflow-hidden h-64"}>
        {Images.map((Img, i) => {
          return (
            <div key={i}>
              <CarouselCard Img={Img} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
