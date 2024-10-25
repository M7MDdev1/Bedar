import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Img1 from "../assets/Partners/basamah.webp";
import Img2 from "../assets/Partners/mostasharok.webp";
import Img3 from "../assets/Partners/Rajhi-charity.webp";
import Img4 from "../assets/Partners/Rajhi-humanity.webp";
import Img5 from "../assets/Partners/salem.webp";

const Images = [Img1, Img2, Img3, Img4, Img5];

export default function Partners() {
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
    <div className={"mt-48 mb-24"}>
      <p className={"mx-auto w-fit text-5xl text-[#C58F35] font-bold mb-12"}>
        شركاؤنا
      </p>

      <div className={"flex justify-around items-center"}>
        <FaAngleLeft size={34} onClick={handleBackButton} />
        <div className={"flex w-64 overflow-hidden"}>
          {Images.map((Img, i) => {
            return (
              <div
                key={i}
                className={
                  "w-64 h-80 bg-slate-400 flex flex-grow-0 flex-shrink-0 justify-center items-center rounded-xl transition-all duration-300 object-cover select-none"
                }
                style={{ transform: `translateX(${`-${index * 100}%`})` }}
              >
                <img src={Img} className={"w-4/5"} />
              </div>
            );
          })}
        </div>

        <FaAngleRight size={34} onClick={handleNextButton} />
      </div>
    </div>
  );
}
