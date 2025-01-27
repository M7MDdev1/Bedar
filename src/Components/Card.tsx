import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div
      className="w-[78%] min-h-44 bg-white p-6 rounded-xl drop-shadow-xl max-w-sm text-center
    sm:bg-[#E4D0B0] sm:rounded-tl-[2.5rem] sm:rounded-br-[2.5rem] sm:w-96 sm:h-80 
    "
    >
      <div
        className="flex justify-center items-center text-3xl mb-4 text-white font-light
       sm:rounded-tl-lg sm:ml-auto sm:rounded-br-lg sm:bg-[#996F29] sm:w-20 sm:h-20 sm:flex sm:justify-center sm:items-center
       sm:absolute sm:-top-[18%] sm:left-1/2 sm:right-1/2 sm:translate-x-1/2
       "
      >
        <Icon />
      </div>
      <h3 className="text-xl font-bold mb-2 sm:mb-11 sm:mt-5 sm:text-[#996F29] sm:text-[2rem]">
        {title}
      </h3>
      <p className="text-xs text-black sm:text-xl">{description}</p>
    </div>
  );
}
