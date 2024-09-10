import Audience from "../Components/Audience";
import BackgroundLogo from "../Components/BackgroundLogo";
import Carousel from "../Components/Carousel";
import CarouselFooter from "../Components/CarouselFooter";
import Incubatorbedar from "../Components/Incubatorbedar";
import CardList from "../Container/CardList";

export default function Home() {
  return (
    <div>
      <Carousel/>
      <CarouselFooter />
      <CardList />
      <BackgroundLogo />
      <Audience />
      <Incubatorbedar />
    </div>
  );
}
