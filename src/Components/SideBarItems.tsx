import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement>{
    link: {
        title: string;
        to?: string;
        childrens?: SidebarItemProps['link'][];
        className?: string;
    };
    openAboutUs ?: boolean;
    setOpenAboutUs : React.Dispatch<React.SetStateAction<boolean>>
}

export default function SideBarItems({link, openAboutUs, setOpenAboutUs } : SidebarItemProps) {
    const [currentPage] = useState(window.location.pathname);
    const [open, setOpen] = useState(false);
    

    if(link.childrens){
        return (
            <div className={`w-full relative text-center p-4 block transition-all duration-500 ease-in-out`}>
                <div className={`text-white text-sm flex justify-center items-center gap-3 ml-6 ${openAboutUs ? "mb-3" : "py-3"}`}>
                    <FaChevronDown className={`${openAboutUs ? "hidden"  : ""} absolute left-8 cursor-pointer transition-transform duration-500 ${open ? 'rotate-180' : ''}`} 
                    onClick={link.title == "عن الجمعية" && !openAboutUs ? () => setOpenAboutUs(!openAboutUs): () => setOpen(!open)}/>
                    <span className="">{link.title}</span>
                    <FaArrowRight className={`${openAboutUs ? `${() => setOpen(true)}` : "hidden"} absolute right-4 text-lg cursor-pointer transition-transform duration-500 `}
                    onClick={() => setOpenAboutUs ? setOpenAboutUs(!openAboutUs) : null}/>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out rounded-xl 
                    ${open || openAboutUs ? 'max-h-[1000px] opacity-100 bg-[#348b74]' : 'max-h-0 opacity-0'}`}>
                    { link.childrens.map((child, index) => <SideBarItems key={index} link={child} setOpenAboutUs={setOpen} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={link.to || "#"} className={`w-full px-4 py-2 block transition-colors duration-150 rounded-l-full text-white no-underline hover:underline 
            ${currentPage === "/" && link?.className ? link.className: " text-center"}`}>
                {link.title}
            </a>
        )
    }
}