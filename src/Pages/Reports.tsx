import Report from "../Components/Report";
import bedar from "/assets/Contact_BedarLogo.png";

export default function Reports() {
  return (
    <div dir="rtl" className={"font-bold pb-36"}>
      <div className="w-fit mx-auto">
        <h3 className={"text-3xl mb-2 w-fit text-center -translate-x-5"}>
          تقارير بدار
        </h3>
        <img src="\assets\Line.png" alt="Line" className={"w-44"} />
        </div>


        <img
          src={bedar}
          className="fixed w-60 top-[20%] left-[50%] -translate-x-1/2 "
        />
        <div className="flex flex-col justify-center items-center gap-y-4 pb-5">
          <Report />
          <Report />
        </div>
    </div>
  );
}
