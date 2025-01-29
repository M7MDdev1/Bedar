import img from "../assets/aboutUs1.png";
import img1 from "../assets/Invest/img1.svg";
import img2 from "../assets/Invest/img2.svg";
import img3 from "../assets/Invest/img3.svg";
import img4 from "../assets/Invest/img4.svg";
import img5 from "../assets/Invest/img5.svg";
import { PiPuzzlePiece } from "react-icons/pi";

export default function InvestWithUs() {
    return (
        <div className="hidden sm:block px-[55px]">
            <div className="flex justify-between gap-[10%] mb-[168px]">
                <div className="w-[654px] relative">
                    <img src={img} className="object-cover"/>
                    <div className="w-[520px] h-[255px] rounded-tl-[40px] rounded-br-[40px] bg-white absolute bottom-[37px] -right-[115px] shadow-2xl shadow-[#00000050] flex flex-col p-4 gap-5 items-end">
                        <PiPuzzlePiece className="rounded-tl-[10px] rounded-br-[10px] bg-darkprimary text-white text-[76px] border-[13px] border-darkprimary" />
                        <p className="w-full text-3xl text-darkprimary text-center">“ تبرعك اليوم هو استثمار في عقول الغد، ودعمٌ لجيل يصنع الفرق .”</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-end">
                    <h3 className="text-darkprimary text-[48px] text-right">استثمر مع بدار</h3>
                    <p className="w-[538px] text-3xl text-right">جمعية بدار لتنمية الشباب بمنطقة جازان جمعية أهلية تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية .
                    </p>
                </div>
            </div>
            <div className="flex gap-x-5 gap-y-10 mb-[100px] justify-center flex-wrap">
                <div className="flex flex-col w-[428px] h-[228px] p-[13px] bg-[#E4D0B0] rounded-tr-[40px] rounded-bl-[40px] items-end">
                    <div className="flex">
                        <h3 className="text-[48px] text-darkprimary font-bold">الانماء</h3>
                        <img src={img1} className="bg-white w-12 h-12 border-[3px] border-[#6D5120] rounded-tr-[10px] rounded-bl-[10px] ml-4" />
                    </div>
                    <p className="text-[24px] text-center mt-5">225608010898988 SA7980000225608010898988</p>
                </div>
                <div className="flex flex-col w-[428px] h-[228px] p-[13px] bg-[#E4D0B0] rounded-tl-[40px] rounded-br-[40px] items-end">
                    <div className="flex">
                        <h3 className="text-[48px] text-darkprimary font-bold">الاهلي</h3>
                        <img src={img2} className="bg-[#6D5120] w-12 h-12 border-[9px] border-[#6D5120] rounded-tl-[10px] rounded-br-[10px] ml-4" />
                    </div>
                    <p className="text-[24px] text-center mt-5">225608010898988 SA7980000225608010898988</p>
                </div>
                <div className="flex flex-col w-[428px] h-[228px] p-[13px] bg-[#E4D0B0] rounded-tr-[40px] rounded-bl-[40px] items-end">
                    <div className="flex">
                        <h3 className="text-[48px] text-darkprimary font-bold">الراجحي</h3>
                        <img src={img3} className="bg-[#6D5120] w-12 h-12 border-[10px] border-[#6D5120] rounded-tr-[10px] rounded-bl-[10px] ml-4" />
                    </div>
                    <p className="text-[24px] text-center mt-5">225608010898988 SA7980000225608010898988</p>
                </div>
                <div className="flex flex-col w-[428px] h-[228px] p-[13px] bg-[#E4D0B0] rounded-tr-[40px] rounded-bl-[40px] items-end">
                    <div className="flex">
                        <h3 className="text-[48px] text-darkprimary font-bold">البلاد</h3>
                        <img src={img4} className="bg-white w-12 h-12 rounded-tr-[10px] rounded-bl-[10px] ml-4" />
                    </div>
                    <p className="text-[24px] text-center mt-5">225608010898988 SA7980000225608010898988</p>
                </div>
                <div className="flex flex-col w-[428px] h-[228px] p-[13px] bg-[#E4D0B0] rounded-tl-[40px] rounded-br-[40px] items-end">
                    <div className="flex">
                        <h3 className="text-[48px] text-darkprimary font-bold">الجزيرة</h3>
                        <img src={img5} className="bg-white w-12 h-12 border-[4px] border-[#6D5120] rounded-tl-[10px] rounded-br-[10px] ml-4" />
                    </div>
                    <p className="text-[24px] text-center mt-5">225608010898988 SA7980000225608010898988</p>
                </div>
            </div>
        </div>
    );
}