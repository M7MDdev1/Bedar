import Bedar from "../assets/CarouselCards/Img3.webp"
export default function Report() {
  return (
    <div className="rounded-xl shadow-alt-custom-shadow pb-16">
        <img src={Bedar} alt="Bedar" className="mx-4 mt-4 w-80 rounded-xl"/>
        <h3 className="mr-4 mt-4">لتقرير السنوي للبرامج </h3>
        <div className="flex justify-center items-center gap-x-3 mt-3">
        <div className="w-[0.1875rem] h-[2.25rem] bg-[#C58F35]"/>
        <p>2020 م</p>
        </div>
    </div>
  )
}
