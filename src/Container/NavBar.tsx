import { FiMenu } from "react-icons/fi";
import bedar from "../assets/BedarShadow.png";
import { Link } from "react-router-dom";
import { useSideBarStore } from "../store/useSideBarStore";

export default function NavBar() {
  const { toggleVisibility } = useSideBarStore();

  return (
    <div className="bg-primary h-[7.188rem] p-4 relative rounded-b-2xl flex flex-row-reverse items-center mb-4">
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
  );
}
