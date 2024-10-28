import Goal from "./Goal";
import Spliter from "./Spliter";
import Boost from "/assets/Goals/Boost.png"
import enhance from "/assets/Goals/enhance.png"

export default function Goals() {
  return (
    <div>
<Spliter title="أهدافنا"/>

        <div className="flex flex-col justify-center items-center">
            <Goal variation={enhance} title={"تحسين"} description={"جاهزية الشباب لسوق العمل"}/>
            <img src="\assets\Goals\LineUp.png" alt="" className="my-2"/>
            <Goal variation={Boost} title={"تعزيز"} description={"الهوية والقيم لدى الشباب "}/>
            <img src="\assets\Goals\LineUp.png" alt="" className="my-2"/>
            <Goal variation={enhance} title={"تنمية"} description={"المهارات الحياتية لدى الشباب"}/>
        </div>
    </div>
  )
}
