import { RiSearchLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import bedar from "/assets/Contact_BedarLogo.png";
import { Link } from "react-router-dom";



export default function Records() {
    return (
        <div className="flex flex-col items-center px-6">
            <h3 className="my-6 text-2xl font-bold text-[#C58F35]">صفحة المستندات</h3>
            <div className="relative flex h-12 w-[100%] border-2 mt-12 border-primary items-center justify-end rounded-[10px]">
                <input type="text"  placeholder="ابحث عن المستندات بشكل اسرع " className="w-full h-full text-right text-sm outline-none placeholder:text-[#1e1e1e78] placeholder:font-bold"/>
                <button className="m-3 text-lg"> <RiSearchLine/></button>
            </div>
            <div className="w-full grid gap-6 grid-cols-2 grid-rows-2 mt-[50px] mb-[125px]">
                <Link to='/' className="w-full h-20 flex flex-col items-center pt-3 pb-[6px] gap-1 shadow-[2px_2px_5px_0px_rgba(197,143,53,0.68)] rounded-[10px]">
                    <IoDocumentTextOutline className="text-2xl text-primary"/>
                    <h4 className="text-[12px] font-bold w-24 text-center">سياسة خصوصية البيانات</h4>
                </Link>
                <Link to='/' className="w-full h-20 flex flex-col items-center pt-3 pb-[6px] gap-1 shadow-[2px_2px_5px_0px_rgba(197,143,53,0.68)] rounded-[10px]">
                    <IoDocumentTextOutline className="text-2xl text-primary"/>
                    <h4 className="text-[12px] font-bold w-24 text-center">سياسة خصوصية البيانات</h4>
                </Link>
                <Link to='/' className="w-full h-20 flex flex-col items-center pt-3 pb-[6px] gap-1 shadow-[2px_2px_5px_0px_rgba(197,143,53,0.68)] rounded-[10px]">
                    <IoDocumentTextOutline className="text-2xl text-primary"/>
                    <h4 className="text-[12px] font-bold w-24 text-center">سياسة خصوصية البيانات</h4>
                </Link>
                <Link to='/' className="w-full h-20 flex flex-col items-center pt-3 pb-[6px] gap-1 shadow-[2px_2px_5px_0px_rgba(197,143,53,0.68)] rounded-[10px]">
                    <IoDocumentTextOutline className="text-2xl text-primary"/>
                    <h4 className="text-[12px] font-bold w-24 text-center">سياسة خصوصية البيانات</h4>
                </Link>
            </div>
            <img
                src={bedar}
                className="fixed w-60 top-[20%] left-[50%] -translate-x-1/2 pointer-events-none"
            />
        </div>
    )
}