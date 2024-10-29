interface ICarouselCardProps {
  Img: string;
  index: number;
}
export default function CarouselCard({ Img, index }: ICarouselCardProps) {
  return (
    <div>
      <img
        src={Img}
        className={"h-64 transition-all duration-300 object-cover select-none"}
        style={{ transform: `translateY(${`-${index * 100}%`})` }}
        alt="carousel image"
      />
    </div>
  );
}
