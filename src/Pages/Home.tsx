import Audience from "../Components/Audience";
import Carousel from "../Components/Carousel";
import CarouselFooter from "../Components/CarouselFooter";
import CardList from "../Container/CardList";

export default function Home() {
  return (
    <div>
      <Carousel/>
      <CarouselFooter />
      <CardList />
      <Audience />
    </div>
  );
}
