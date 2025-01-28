import img1 from "../assets/aboutUs1.png";
import img2 from "../assets/aboutUs2.png";
import { IoPlanetOutline } from "react-icons/io5";
import { MdLightbulbOutline } from "react-icons/md";

export default function WhoIsBedarDT() {
    return (
        <div className="flex flex-col gap-[80px] px-[55px]">
            <div className="flex justify-between gap-[10%]">
                <div className="w-[654px] relative">
                    <img src={img1} className="object-cover"/>
                    <div className="w-[520px] h-[255px] rounded-tl-[40px] rounded-br-[40px] bg-white absolute bottom-[37px] -right-[115px] shadow-2xl shadow-[#00000050] flex flex-col p-4 gap-5 items-end">
                        <IoPlanetOutline className="rounded-tl-[10px] rounded-br-[10px] bg-darkprimary text-white text-[76px] border-[13px] border-darkprimary" />
                        <p className="w-full text-3xl text-darkprimary text-center">
                            شباب اليوم هم قادة الغد، لنكن“
                            ”.الداعم الأول لطموحاتهم و أحلامهم</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-end">
                    <h3 className="text-darkprimary text-[48px] text-right">من هي بدار؟</h3>
                    <p className="w-[538px] text-3xl text-right">جمعية بدار لتنمية الشباب بمنطقة جازان جمعية أهلية تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية .
                    </p>
                </div>
            </div>
            <div className="flex justify-between gap-[10%]">
                <div className="flex flex-col gap-5 items-end">
                    <h3 className="text-darkprimary text-[48px] text-right">ما الذي نسعى إليه؟</h3>
                    <p className="w-[542px] text-[32px] text-right">انطلاقا من حرص المملكة العربية السعودية وإيمانها الراسخ بدور الشباب في تنمية مجتمعاتهم وتحقيق النمو الحضاري والرقي الاجتماعي ولما تحتضنه منطقة جازان من كوادر شبابية مبادرة وفاعلة, انبثقت فكرة جمعية بدار لتنمية الشباب لتكون إحدى منصات المبادرات الشبابية التي تهدف لرعاية وتشجيع المبادرات المجتمعية وغرس مفهوم المواطنة الصالحة والإسهام في تحقيق رؤية المملكة ٢٠٣٠م .
                    </p>
                </div>
                <div className="w-[654px] relative">
                    <img src={img2} className="object-cover"/>
                    <div className="w-[520px] h-[255px] rounded-tl-[40px] rounded-br-[40px] bg-white absolute bottom-[53px] -left-[77px] shadow-2xl shadow-[#00000050] flex flex-col p-4 gap-5 items-end">
                        <MdLightbulbOutline className="rounded-tl-[10px] rounded-br-[10px] bg-darkprimary text-white text-[76px] border-[13px] border-darkprimary" />
                        <p className="w-full text-3xl text-darkprimary text-center">
                            شباب اليوم هم قادة الغد، لنكن“
                            ”.الداعم الأول لطموحاتهم و أحلامهم</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
