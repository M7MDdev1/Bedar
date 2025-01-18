import { FaUser } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { MdCalendarMonth } from "react-icons/md";

interface Article {
  auther: string;
  time: string;
  content: string;
  date:string;
}

export default function ArticleContent({
  auther,
  time,
  content,
  date
}: Article) {
  return (
    <div className="text-center relative">
      <div className=" inline-flex py-3 px-8 gap-2 items-start mb-3 text-[12px]">
        <FaUser className="text-primary text-base" />
        <span>{auther}</span>
        <IoIosTimer className="text-primary text-base" />
        <span>{time}</span>
        <MdCalendarMonth className="text-primary text-base" />
        <span>{date}</span>
      </div>
      <div className="bg-white p-6 pl-[70px] flex justify-end text-right mb-6 rounded-[20px]">
        <p className="w-[100%] text-sm">{content}</p>
      </div>
    </div>
  );
}
