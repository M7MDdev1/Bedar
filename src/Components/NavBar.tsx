import { FiMenu } from "react-icons/fi";
import bedar from "../assets/Bedar.png"
interface NavBarProps {
  SideBarVisibility:boolean
  setSideBarVisibility:React.Dispatch<React.SetStateAction<boolean>>
}
export default function NavBar({SideBarVisibility,setSideBarVisibility}:NavBarProps) {
  return (
    <div className="bg-primary relative overflow-hidden h-28 p-2 flex justify-evenly items-center flex-row-reverse rounded-b-2xl shadow-xl ">
      <FiMenu onClick={()=> setSideBarVisibility(!SideBarVisibility)} className={`text-white hover:text-gray-500 transition-all`} size={30} />
      <div className={"w-[7.5rem] select-none"}>
      <img src={bedar} alt="Bedar.png" />
      </div>
      <div></div>
    </div>
  );
}