import Img from '../assets/CarouselCards/Img3.webp'
import { useState } from "react";
import ArticleContent from './Articles-Content';

interface ArticlesCardsProps {
    id: number;
    title: string;
    buttonText?: string;
}

export default function ArticlesCards ({id, title, buttonText = "انقر لقراءة المقالة" }: ArticlesCardsProps) {
    const [show, setShow] = useState(true)
    console.log()
    return (
        <div className="flex flex-col items-center bg-[#f6eee1] rounded-[30px] px-[7px] pt-[9px] w-full ">
            <div className="relative h-48 w-full">
                <img
                src={Img}
                alt={title}
                className="w-full h-full object-cover  rounded-3xl"
                />
                <span className='w-20 h-7 text-center py-[5px] bg-primary text-white rounded-[30px] absolute top-[9px] right-[17px] text-[12px]'>مقالات</span>
            </div>
                <h3 className="text-2xl text-center px-3 mt-6 mb-12">
                {title}
                </h3>
                {show ? (
                        <span className='w-60 mb-2 border border-[rgba(197,143,53,0.50)]'></span>
                ):(
                    <ArticleContent id={id-1}/>
                )}
                <button onClick={() => setShow(!show)} className="bg-black text-white mb-9 w-[185px] h-11 rounded-[30px]">
                    {buttonText}
                </button>
        </div>
    );
};