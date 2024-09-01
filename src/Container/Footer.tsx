import bedar from "../assets/Bedar.png";
import SocailMediaButton from "../Components/SocailMediaButton";

export default function Footer() {
  return (
    <div className=" bg-gradient-to-t from-gray-900 to-neutral-500 h-[26.625rem]">
        <img src={bedar} alt="Bedar.png" className={" w-[12.625rem] mx-auto"} />
        <div>
          <SocailMediaButton />
        </div>
    </div>
  )
}
