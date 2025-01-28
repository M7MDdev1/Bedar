import { HiOutlineEye } from "react-icons/hi";
import { CiMail } from "react-icons/ci";

export default function OurMessageDT() {
    return (
        <div className="flex h-[350px] mt-28 gap-5 justify-between px-[55px]">
            <div className="flex flex-col flex-1 px-[30px] pt-10 bg-linearprimary rounded-tl-[40px] rounded-br-[40px] items-end">
                <div className="flex">
                    <h3 className="text-[48px] text-white font-bold">رؤيتنا</h3>
                    <HiOutlineEye className="bg-darkprimary text-white text-[76px] border-[13px] border-darkprimary rounded-tl-[10px] rounded-br-[10px] ml-4" />
                </div>
                <p className="text-[32px] text-white text-right pl-20 mt-5">نموذج متميز في تأهيل وتمكين الشباب لإحداث أثر مجتمع</p>
            </div>
            <div className="flex flex-col flex-1 px-[30px] pt-10 bg-linearprimary rounded-tr-[40px] rounded-bl-[40px] items-end">
                <div className="flex">
                    <h3 className="text-[48px] text-white font-bold">رسالتنا</h3>
                    <CiMail className="bg-darkprimary text-white text-[76px] border-[13px] border-darkprimary rounded-tr-[10px] rounded-bl-[10px] ml-4" />
                </div>
                <p className="text-[32px] text-white text-right pl-20 mt-5">جمعية بدار لتنمية الشباب بمنطقة جازان جمعية أهلية تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية .</p>
            </div>
        </div>
    );
}