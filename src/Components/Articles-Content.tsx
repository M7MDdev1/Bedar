import articlesData from '../data/Articles.json';
import { FaUser } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { MdCalendarMonth } from "react-icons/md";

interface Content {
    date: string;
    time: string;
    writer: string;
    content: string;
}

interface ContentDate {
    articles: Content[];
}

export default function ArticleContent ({id} : { id: number }) {
    const { articles } = articlesData as ContentDate;
    const article = articles[id]

    return (
        <div className='text-center relative'>
            <div className=' inline-flex py-3 px-8 gap-2 items-start mb-3 text-[12px]'> 
                <FaUser className='text-primary text-base'/>
                <span>{article.writer}</span>
                <IoIosTimer className='text-primary text-base'/>
                <span>{article.time}</span> 
                <MdCalendarMonth className='text-primary text-base'/>
                <span>{article.date}</span> 
                </div>
            <div className='bg-white p-6 pl-[70px] flex justify-end text-right mb-6 rounded-[20px]'>
                <p className='w-[100%] text-sm'>
                    {article.content}
                </p>
            </div>
        </div>
    )
}