import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="w-[78%] min-h-44 bg-white p-6 rounded-xl drop-shadow-xl max-w-sm text-center">
      <div className="flex justify-center items-center text-3xl mb-4 text-yellow-600 font-light">
        <Icon />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-xs text-black ">{description}</p>
    </div>
  );
}
