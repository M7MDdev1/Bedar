import { FaRegLightbulb } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function WhoIsBedarDesktop() {
  return (
    <div className=" hidden sm:flex flex-row-reverse text-right justify-center">
      <div className="w-[33.38325rem]">
        <h1 className="text-5xl leading-[9rem] text-[#996F29]">من هي بدار؟</h1>
        <p className="text-[2rem] ">
          جمعية بدار لتنمية الشباب بمنطقة جازان جمعية أهلية تحت إشراف وزارة
          الموارد البشرية و التنمية الاجتماعية
        </p>
        <Link className="text-[#996F29] text-[2rem]" to={"/AboutUs"}>
          للمزيد ...
        </Link>
      </div>

      <div className="relative">
        <img src="assets\WhoIsBedar.png" alt="WhoIsBedar" />
        <div className="bg-[#F8F2E9] p-5 absolute bottom-28 -right-28 rounded-tl-[2.5rem] rounded-br-[2.5rem] w-[32.5rem] h-[15.9375rem]">
            <div className="rounded-tl-lg ml-auto rounded-br-lg bg-[#996F29] w-20 h-20 flex justify-center items-center">
            <FaRegLightbulb size={50} color="white"/>
            </div>
          <p dir="rtl" className="text-[#6D5120] text-[2rem] text-center">
            “دورنا أن نمنحكم الدعم، <br />
            ودوركم أن تحققوا المستحيل.”
          </p>
        </div>
      </div>
    </div>
  );
}
