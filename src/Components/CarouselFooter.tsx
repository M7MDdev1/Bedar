import { Link } from "react-router-dom";
import CarouselFooter1 from "../assets/CarouselFooterImage.png";

export default function CarouselFooter() {
  return (
    <div
      style={{ backgroundImage: `url(${CarouselFooter1})` }}
      className="bg-no-repeat bg-cover h-56 font-bahij grid grid-cols-3 gap-4 p-6 text-right -translate-y-8"
    >
      <h1 className="text-2xl font-bold col-span-3 ">من هي بدار ؟</h1>
      <Link to={"/AboutUs"} className="col-span-1 bg-black w-fit h-fit px-4 py-3 text-white rounded-xl text-sm">
        ... إقرأ المزيد
      </Link>
      <p className="font-bold col-span-2 ">
        جمعية بدار لتنمية الشباب بمنطقة جازان
      </p>
      <p className="col-span-2 col-start-2 -translate-y-4">
        جمعية أهلية تحت إشراف الموارد البشرية والتنمية الاجتماعية
      </p>
    </div>
  );
}
