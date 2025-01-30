import Image from "../assets/BedarForArticles.png";
import HeaderImage from "./Header-Image";

export default function ArticlesHeader() {
  return (
    <>
      {/* Mobile */}
      <div className="w-[100%] h-[357px] flex sm:hidden flex-col items-center pt-8 relative rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <img src={Image} className="w-[210px]" />
        <h2 className="text-[45px]">مقالات بدار</h2>
        <p className="text-[#C58F35] -mr-3">..لنا في تنمية الشباب كلمة</p>
        <span className="absolute h-full w-5 left-0 top-0 bg-[#C58F35] rounded-l-[30px]"></span>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex flex-col items-center">
        <HeaderImage
          src={"assets/Articles.png"}
          Title={"مقالات بدار"}
          subTitle={"رؤى ملهمة"}
        />
      </div>
    </>
  );
}
