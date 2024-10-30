import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import bedar from "/assets/Contact_BedarLogo.png";

export default function Documents() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-6 text-2xl font-bold text-[#C58F35]">صفحة الوثائق</h2>
      <div className="relative flex flex-col gap-8 mt-[74px] mb-[216px]">
        <Link
          to="/Records"
          className="relative font-bold flex items-center justify-center h-[66px] w-[213px] shadow-[2px_2px_5px_0px_rgba(197,143,53,0.68)] rounded-[10px]"
        >
          المستندات
          <IoMdArrowDropright className="absolute right-3 text-2xl text-[#C58F35]" />
        </Link>
        <Link
          to="/Reports"
          className="relative font-bold flex items-center justify-center h-[66px] w-[213px] shadow-[2px_2px_5px_0px_rgba(197,143,53,0.68)] rounded-[10px]"
        >
          التقارير
          <IoMdArrowDropright className="absolute right-3 text-2xl text-[#C58F35]" />
        </Link>
        <img
          src={bedar}
          className="absolute -z-50 w-[246px] h-[246px] -bottom-6 object-cover"
        />
      </div>
    </div>
  );
}
