import { useState } from "react";
import CgFileDocument from "../assets/CgFileDocument.svg";
import { RiSearchLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import bedar from "/assets/Contact_BedarLogo.png";
import { Link } from "react-router-dom";



export default function Records() {
    const [search, setSearch] = useState("");
    const articles = [
        { id: 1, title: "محضر مجلس الادارة الرابع ٢٠٢٣", link: "/"},
        { id: 2, title: "محضر مجلس الادارة الرابع ٢٠٢٣", link: "/"},
        { id: 3, title: "محضر مجلس الادارة الرابع ٢٠٢٣", link: "/"},
        { id: 2, title: "محضر مجلس الادارة الرابع ٢٠٢٣", link: "/"},
        { id: 3, title: "محضر مجلس الادارة الرابع ٢٠٢٣", link: "/"},
        { id: 3, title: "محضر مجلس الادارة الرابع ٢٠٢٣", link: "/"},
    ];

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
        <div className="sm:hidden flex flex-col items-center px-6">
            <h3 className="my-6 text-2xl font-bold text-[#C58F35]">صفحة المستندات</h3>
            <div className="relative flex h-12 w-[100%] border-2 mt-12 pl-2 border-primary items-center justify-end rounded-[10px]">
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
        
        {/* For Desktop */}
        <div className="hidden sm:flex flex-col items-center mb-[77px]">
            <input type="text" placeholder="ابحث للوصول للوثائق بشكل اسرع" className="w-[705px] px-4 py-3 rounded-lg text-right outline-none placeholder-primary border border-primary mb-[124px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>

            <div className="flex justify-center gap-x-5 gap-y-[84px] flex-wrap">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <a key={article.id} href={article.link} className="w-[429px] h-[429px] flex flex-col items-center bg-[#E4D0B0] relative rounded-tl-[40px] rounded-br-[40px] shadow-lg hover:scale-[103%] transition-transform duration-300">
                            <img src={CgFileDocument} className="absolute w-[200px] h-[200px] text-primary top-[73px]"/>
                            <h2 className="absolute bottom-0 h-32 bg-white w-full text-center content-center text-5">{article.title}</h2>
                        </a>
                    ))
                ) : (
                    <p>لا توجد نتائج مطابقة.</p>
                )}
            </div>
        </div>
        </>
    )
}