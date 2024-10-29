import Image from '../assets/BedarForArticles.png'

export default function ArticlesHeader() {
    return (
        <div className='w-[397px] h-[357px] flex flex-col items-center pt-8 relative rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
            <img src={Image} className='w-[210px]'/>
            <h2 className='text-[45px]'>مقالات بدار</h2>
            <p className='text-[#C58F35] -mr-3'>..لنا في تنمية الشباب كلمة</p>
            <span className='absolute h-full w-5 left-0 top-0 bg-[#C58F35] rounded-l-[30px]'></span>
        </div>
    )
}