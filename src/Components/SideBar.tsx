import bedar from "../assets/Bedar.png"

interface SideBarProps{
    visible:boolean
    setVisibility:React.Dispatch<React.SetStateAction<boolean>>
}
export default function SideBar({visible, setVisibility}:SideBarProps) {
  return (
    <div className={`absolute flex w-full h-[97%]  flex-row-reverse ${!visible && " -z-10 translate-x-full"} duration-100 h-screen bottom-0 right-0`}>
      <div className={"w-full bg-secondary rounded-tl-[5.5rem]"}>
      <div className={"p-10 flex flex-col items-center"}>
      <img src={bedar} alt="Bedar.png" className="w-[7.5rem]"/>

        <ul className={"text-white h-72 flex flex-col justify-between items-center"}>
          <li>الرئيسية</li>
          <li>عن الجمعية</li>
          <li>ساهم معنا</li>
          <li>انضم لنا</li>
          <li>تواصل معنا</li>
        </ul>

      </div>

      </div>
      <button className={`bg-transparent w-full`} onClick={()=> setVisibility(false)} />
    </div>
  )
}
