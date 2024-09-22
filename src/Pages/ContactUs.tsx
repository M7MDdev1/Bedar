import bedar from '../assets/Contact_BedarLogo.png';
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { HiEnvelope } from "react-icons/hi2";


export default function ContactUs() {
  const Fields = [
    {
      name: "الاسم",
      type: "text"
    },
    {
      name: "البريد الإلكتروني",
      type: "email"
    },
    {
      name: "عنوان الرسالة",
      type: "text"
    },
  ]

  const Info = [
    {
      icon: <IoLocationSharp/>,
      title: "جازان، حي الشاطئ",
      src: ""
    },
    {
      icon: <MdLocalPhone/>,
      title: "+96650481022 , 0173213139",
      src: ""
    },
    {
      icon: <HiEnvelope/>,
      title: "info@bcharity.org",
      src: ""
    },
  ]
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-6 text-2xl font-bold">تواصل معنا</h2>
      <form className="w-full bg-[#C58F3526] flex flex-col text-right p-4 pb-12 relative">
        {Fields.map((field) => (
          <>
            <label className="m-3">{field.name}</label>
            <input type={field.type} className="h-12 rounded-2xl border border-[#c58f35ad]"/>
          </>
        ))}
        <label className="m-3">محتوى الرسالة</label>
        <textarea className="h-[192px] rounded-2xl border border-[#c58f35ad]"/>
        <img src={bedar} className='absolute -z-50 w-60 top-[54%] left-[50%] -translate-x-1/2 -translate-y-1/2' />
      </form>

      {/* Footer of Contact */}
      <div className="w-full flex flex-col items-end text-right p-4 pb-12 font-bold gap-5">
        <p className='w-52'>كما نسعد بزيارتكم وتواصلكم على بياناتنا أدناه</p>
        {Info.map((In) => (
          <div className='flex flex-row-reverse text-sm items-center gap-2'>
            <div className='text-[#C58F35] rounded-full border border-[#c58f35ad] p-1'>{In.icon}</div>
            <a href={In.src}>{In.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
