import { IoMan, IoWoman } from "react-icons/io5";

export default function Audience() {
  return (
    <div
      className={
        "bg-[#C58F35]/25 w-full font-bold h-[45.813rem] text-5xl flex flex-col justify-around items-center py-4"
      }
    >
      <p className={"text-[#C58F35] "}>جمهورنا</p>
      <IoMan className={"text-[#F8F8F8]"} size={150} />
      <p>270,120</p>
      <IoWoman className={"text-[#F8F8F8]"} size={150} />
      <p>176,099</p>
    </div>
  );
}
