interface ICarouselCardProps {
  Img: string;
  index: number;
}
export default function CarouselCard({ Img, index }: ICarouselCardProps) {
  return (
    <div>
      <img
        src={Img}
        className={"h-64 sm:h-[37.5rem] rounded-tr-[2.5rem] rounded-bl-[2.5rem] transition-all duration-300 object-cover select-none"}
        style={{ transform: `translateY(${`-${index * 100}%`})` }}
        alt="carousel image"
      />
      
    </div>
  );
}
