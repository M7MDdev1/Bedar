import { FiMenu } from "react-icons/fi";
import bedar from "../assets/BedarShadow.png";
interface NavBarProps {
  SideBarVisibility: boolean;
  setSideBarVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NavBar({
  SideBarVisibility,
  setSideBarVisibility,
}: NavBarProps) {
  return (
    <div className="bg-primary h-[7.188rem] p-4 relative rounded-b-2xl flex flex-row-reverse items-center">
      <FiMenu
        onClick={() => setSideBarVisibility(!SideBarVisibility)}
        className={`text-white hover:text-gray-500`}
        size={30}
      />
      <img
        src={bedar}
        alt="Bedar.png"
        className="w-[11.25rem] absolute select-none object-cover left-1/2 transform -translate-x-1/2"
      />
    </div>
  );
}
