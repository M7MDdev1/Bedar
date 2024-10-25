import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


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
                <div className={`text-white text-sm flex justify-center items-center gap-3 ml-6`}>
                    <FaChevronDown className={`${openAboutUs ? "hidden"  : ""} absolute left-8 cursor-pointer transition-transform duration-500 ${open ? 'rotate-180' : ''}`} 
                    onClick={link.title == "عن الجمعية"  ? () => setOpenAboutUs(!openAboutUs): () => setOpen(!open)}/>
                    <span className="">{link.title}</span>
                    <FaArrowRight className={`${openAboutUs ? `${() => setOpen(true)}` : "hidden"} absolute right-0 text-lg cursor-pointer transition-transform duration-500 `}
                    onClick={() => setOpenAboutUs ? setOpenAboutUs(!openAboutUs) : null}/>
                </div>
                <div className={`overflow-hidden  transition-all duration-500 ease-in-out rounded-l-3xl
                    ${open ? 'max-h-[1000px]  opacity-100' : 'max-h-0 opacity-0'}
                    ${openAboutUs ? 'max-h-[1000px] opacity-100 bg-[#706e6d] shadow-xl mt-2 -mr-[15%] rounded-l-[60px]' : ""}`}>
                    { link.childrens.map((child, index) => <SideBarItems key={index} link={child} setOpenAboutUs={setOpen} />) }
                </div>
            </div>
        )
    }else{
        return (
            <Link to={link.to || "#"} className={`pl-8 py-2 my-2 block transition-colors duration-150 w-[85%] -mr-[25%] rounded-l-full text-white no-underline hover:underline 
            ${currentPage === link.to ? "bg-[#343333] before:contents-[''] before:h-full before:w-4 before:bg-[#c44040] ": ""}`}>
                {link.title}
            </Link>
        )
    }
}