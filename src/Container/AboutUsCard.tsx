import bedar from "/assets/Contact_BedarLogo.png";
interface IAboutUsCard {
  paragraph: string;
  children?: any;
  className?: string;
  bedarLogo?: boolean;
  pclassName?: string;
}
export default function AboutUsCard({
  paragraph,
  children,
  className,
  bedarLogo,
  pclassName,
}: IAboutUsCard) {
  return (
    <div
      className={`bg-white mx-6 mt-2 text-black text-xs h-48 text-end rounded-3xl shadow-custom-shadow ${className}`}
    >
      {children}
      <p className={`pt-9 font-bold px-4 ${pclassName}`}>
        {paragraph}
        {bedarLogo && (
          <img
            src={bedar}
            className="absolute  w-60 top-[6%] left-[50%] -translate-x-1/2 "
          />
        )}
      </p>
    </div>
  );
}
