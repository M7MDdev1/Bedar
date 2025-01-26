import Audience from "../Components/Audience";
import BackgroundLogo from "../Components/BackgroundLogo";
import BedarInNumbers from "../Components/BedarInNumbers";
import Carousel from "../Components/Carousel";
import CarouselFooter from "../Components/CarouselFooter";
import Incubatorbedar from "../Components/Incubatorbedar";
import Partners from "../Components/PartnersCarousel";
import WhoIsBedarDesktop from "../Components/WhoIsBedar-Desktop";
import CardList from "../Container/CardList";

export default function Home() {
  return (
    <div>
      <Carousel />
      <CarouselFooter />
      <WhoIsBedarDesktop />
      <CardList />
      <BackgroundLogo />
      <BedarInNumbers />
      <Audience />
      <Incubatorbedar />
      <Partners />
    </div>
  );
}
