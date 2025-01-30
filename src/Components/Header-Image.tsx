interface IHeaderImage {
  src: string;
  Title: string;
  subTitle: string;
  className?: string;
}
export default function HeaderImage({ src, Title, subTitle, className = "" }: IHeaderImage) {
  return (
    <div
      style={{
        background: `url('${src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`w-[83rem] h-[36.6875rem] relative ${className}`}
    >
      <div className="w-[34.75rem] h-[8.8125rem] rounded-[0rem_2.5rem] absolute top-[13.56rem] left-[8.75rem] bg-[#BD8A3D] text-[3.4375rem] flex items-center justify-center text-white font-semibold">
        {Title}
      </div>

      <div className="w-[24.4375rem] h-[6.1875rem] rounded-[2.5rem_0rem] absolute top-[23.69rem] left-[5.31rem] bg-[#BD8A3D] text-[2.5rem] flex items-center justify-center text-white font-semibold">
        {subTitle}
      </div>
    </div>
  );
}
