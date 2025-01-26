import { FiMenu } from "react-icons/fi";
import bedar from "../assets/BedarShadow.png";
import { Link } from "react-router-dom";
import { useSideBarStore } from "../store/useSideBarStore";
import { BsPhone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

export default function NavBar() {
  const { toggleVisibility } = useSideBarStore();

  return (
    <>
    {/* Desktop */}
    <div className="sm:flex flex-row-reverse justify-between items-center hidden h-52 ">
      <img src="assets\Bedar_colored.svg" alt="Bedar" className="h-52"/>
      <ul className="flex flex-row-reverse gap-x-8">
        <li>الرئيسية</li>
        <li>عن الجمعية</li>
        <li>الحوكمة</li>
        <li>انضم الينا</li>
        <li>تواصل معنا</li>
        <li>المزيد</li>
      </ul>
      <div className="flex gap-x-8 items-center ml-10">
      <BsPhone size={25} />
      <CiMail size={30} />
      <IoCallOutline size={25} />
      </div>
    </div>

    {/* Mobile */}
    <div className="bg-primary h-[7.188rem] p-4 relative rounded-b-2xl sm:hidden flex flex-row-reverse items-center mb-4">
      <FiMenu
        onClick={toggleVisibility}
        className="text-white hover:text-gray-500"
        size={30}
      />
      <Link
        className="w-[11.25rem] absolute select-none object-cover left-1/2 transform -translate-x-1/2"
        to={"/"}
      >
        <img src={bedar} alt="Bedar.png" />
      </Link>
    </div>
    </>
  );
}
