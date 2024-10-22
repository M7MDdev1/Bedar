import bedar from '../assets/Contact_BedarLogo.png';
import team from '../assets/team_icon.png'
import person from '../assets/person_icon.png'
export default function JoinUs() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-8 text-2xl font-bold">انضم إلينا</h2>
      <div className="relative flex flex-col items-center w-full bg-[#C58F3526] pb-32">
        <a href="/" className="w-48 h-36 flex flex-col items-center justify-center bg-white m-11 pt-4 rounded-2xl border-2 border-dashed border-[#C58F35]">
          <img src={team} className='w-17'/>
          <p className='text-xl'>فريق</p>
        </a>
        <a href="/login" className="w-48 h-36 flex flex-col items-center justify-center bg-white m-11 pt-4 rounded-2xl border-2 border-[#C58F35]">
          <img src={person} className='w-17'/>
          <p className='text-xl'>فرد</p>
        </a>
        <img src={bedar} className='absolute -z-50 w-60 top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2' />
      </div>
    </div>
  );
}
